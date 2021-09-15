import { useLocation, useHistory } from 'react-router-dom';
import useFileSearch from '../hooks/useFileSearch';
import { useContext } from 'react';
import Folder from '../components/Folder';
import File from '../components/File';
import fileContext from '../store/fileContext';
import ErrorMessage from '../components/UI/Error';

const Documents: React.FC = () => {
  const { pathname } = useLocation();
  const fileCtx = useContext(fileContext);
  const files = fileCtx.fileData;
  const item = useFileSearch(pathname.replace('/documents/', ''));

  if (
    pathname.toLowerCase() === '/documents/' ||
    pathname.toLowerCase() === '/documents'
  ) {
    return (
      <>
        <Folder name={''} files={files} />
      </>
    );
  }

  if (!item) {
    return <ErrorMessage message={'Error. Directory Not Found!'} />;
  }

  return (
    <>
      {item?.type === 'folder' ? (
        <Folder name={item.name} files={item.files} />
      ) : (
        <File name={item.name} added={item.added} type={item.type} />
      )}
    </>
  );
};

export default Documents;
