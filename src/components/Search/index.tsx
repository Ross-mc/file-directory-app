import { FormEvent, useContext, useRef, useState } from 'react';
import fileContext from '../../store/fileContext';
import { FlattenedFileType } from '../../types/file';
import fileSearchByName from '../../utils/fileSearchByName';
import Folder from '../Folder';
import ErrorMessage from '../UI/Error';

const SearchBar: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [files, setFiles] = useState<Array<FlattenedFileType>>([]);
  const searchInput = useRef<HTMLInputElement>(null);
  const fileCtx = useContext(fileContext);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const userSearchTerm = searchInput.current?.value;
    if (userSearchTerm) {
      const foundFiles = fileSearchByName(
        userSearchTerm,
        fileCtx.flattenedFileData
      );
      setFiles(foundFiles);
      setErrorMessage(foundFiles.length > 0 ? '' : 'No files found');
    } else {
      setErrorMessage('Please Enter A Search Term');
    }
  };

  return (
    <form
      className="search-bar"
      onSubmit={submitHandler}
      data-testid="search-form"
    >
      <label htmlFor="search-input">Search for Documents</label>
      <input type="text" id="search-input" ref={searchInput} />
      <button type="submit">Search</button>
      {errorMessage.length > 0 && <ErrorMessage message={errorMessage} />}
      {files.length > 0 && <Folder files={files} name={'Search Results'} />}
    </form>
  );
};

export default SearchBar;
