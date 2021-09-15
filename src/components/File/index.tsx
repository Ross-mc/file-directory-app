import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory, useLocation } from 'react-router';
import { FileType } from '../../types/file';
import icons from '../../utils/icons';
import classes from './file.module.scss';

interface FileProps extends FileType {}
const File: React.FC<FileProps> = ({ type, name, added, path }) => {
  const router = useHistory();
  const { pathname } = useLocation();

  const onClickHandler = () => {
    if (type !== 'folder') {
      alert('In a real world application, this action would download the file');
      return;
    }
    if (path) {
      router.push(`documents/${path}`);
    } else {
      router.push(`${pathname}/${name}`);
    }
  };

  return (
    <div onClick={onClickHandler} className={classes.file}>
      {/*
    // @ts-ignore */}
      <FontAwesomeIcon icon={icons[type]} style={{ fontSize: '4rem' }} />
      <h4>{type === 'folder' ? name : `${name}.${type}`}</h4>
      {type === 'folder' ? <h4>Directory</h4> : <h4>Date Modified: {added}</h4>}
      {type !== 'folder' && <button className="btn-primary">Download</button>}
    </div>
  );
};

export default File;
