import { FormEvent, useContext, useRef, useState } from 'react';
import fileContext from '../../store/fileContext';
import { FileType } from '../../types/file';
import fileSearchByName from '../../utils/fileSearchByName';
import Folder from '../Folder';
import ErrorMessage from '../UI/Error/ErrorMessage';
import classes from './search.module.scss';

const SearchBar: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [files, setFiles] = useState<Array<FileType>>([]);
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
    <>
      <form
        className={classes.searchForm}
        onSubmit={submitHandler}
        data-testid="search-form"
      >
        <label htmlFor="search-input">Search for Documents</label>
        <input type="text" id="search-input" ref={searchInput} />
        <button type="submit" className="btn-secondary">
          Search
        </button>
        {errorMessage.length > 0 && <ErrorMessage message={errorMessage} />}
      </form>
      {files.length > 0 && <Folder files={files} name={'Search Results'} />}
    </>
  );
};

export default SearchBar;
