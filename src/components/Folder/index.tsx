import { FileType } from '../../types/file';

interface FileProps {
  name: string;
  files?: FileType[];
}

const Folder: React.FC<FileProps> = ({ files, name }) => {
  console.log(files);
  return <div data-testid="root-folder">Folder Goes Here</div>;
};

export default Folder;
