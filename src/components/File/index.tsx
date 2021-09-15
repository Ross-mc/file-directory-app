import { useHistory, useLocation } from 'react-router';
import { FileType } from '../../types/file';

interface FileProps extends FileType {}
const File: React.FC<FileProps> = ({ type, name, added, path }) => {
  const router = useHistory();
  const { pathname } = useLocation();

  const onClickHandler = () => {
    if (path) {
      router.push(`documents/${path}`);
    } else {
      router.push(`${pathname}/${name}`);
    }
  };

  return <div onClick={onClickHandler}>{name}</div>;
};

export default File;
