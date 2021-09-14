import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fileContext from '../store/fileContext';
import { FileType } from '../types/file';
import useFileSearch from '../utils/search';

const Documents: React.FC = () => {
  const { pathname } = useLocation();
  const [currentItem, setCurrentItem] = useState<
    FileType | FileType[] | undefined
  >(undefined);

  if (
    pathname.toLowerCase() === '/documents/' ||
    pathname.toLowerCase() === '/documents'
  ) {
    console.log('placeholder');
  }
  try {
    const item = useFileSearch(pathname.replace('/documents/', ''));
    setCurrentItem(item);
  } catch (error) {
    console.log(error);
  }

  return <h1>Documents</h1>;
};

export default Documents;
