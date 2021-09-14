import { FileType } from '../../types/file';

interface FileProps extends FileType {}
const File: React.FC<FileProps> = ({ type, name, added }) => {
  return <div>File Goes Here</div>;
};

export default File;
