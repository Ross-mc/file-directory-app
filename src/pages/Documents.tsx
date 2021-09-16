import { useLocation, Link } from 'react-router-dom';
import useFileSearch from '../hooks/useFileSearch';
import { useContext, useEffect, useState } from 'react';
import Folder from '../components/Folder';
import File from '../components/File';
import fileContext from '../store/fileContext';
import ErrorComponent from '../components/UI/Error';
import { FileType } from '../types/file';
import sortAlphabetically from '../utils/sortAlphabetically';
import { OrderType } from '../types/order';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../utils/icons';

const Documents: React.FC = () => {
  const [foundItem, setFoundItem] = useState<FileType | null>(null);
  const [order, setOrder] = useState<OrderType>('asc');
  const { pathname } = useLocation();
  const fileCtx = useContext(fileContext);
  const files = fileCtx.fileData;
  const item = useFileSearch(pathname.replace('/documents/', ''));

  useEffect(() => {
    if (item) {
      setFoundItem(item);
    } else if (
      pathname.toLowerCase() === '/documents/' ||
      pathname.toLowerCase() === '/documents'
    ) {
      setFoundItem({
        name: 'Documents',
        files: files,
        type: 'folder'
      });
    }
  }, [item]);

  const sortClickHandler = () => {
    if (foundItem) {
      const sorted = sortAlphabetically(foundItem?.files!, order);
      setFoundItem({ ...foundItem, files: sorted });
      setOrder(order === 'asc' ? 'desc' : 'asc');
    }
  };

  if (!foundItem) {
    return (
      <>
        <ErrorComponent message={'Error. Directory Not Found!'} />
      </>
    );
  }

  return (
    <>
      <button onClick={sortClickHandler} className="btn-primary">
        Sort <FontAwesomeIcon icon={icons[order]} />
      </button>
      {foundItem?.type === 'folder' ? (
        <Folder name={foundItem.name} files={foundItem.files} />
      ) : (
        <File
          name={foundItem.name}
          added={foundItem.added}
          type={foundItem.type}
        />
      )}
      <Link to="/documents" className="btn-primary">
        Return
      </Link>
      <Link to="/search" className="btn-primary">
        Search for documents
      </Link>
    </>
  );
};

export default Documents;
