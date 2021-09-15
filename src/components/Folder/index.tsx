import { Link } from 'react-router-dom';
import { FileType } from '../../types/file';
import File from '../File';

interface FileProps {
  name: string;
  files?: FileType[];
}

const Folder: React.FC<FileProps> = ({ files, name }) => {
  console.log(files);
  return (
    <div data-testid="root-folder">
      <h3>{name}</h3>
      {files &&
        files.map((currentFile) => (
          <File
            name={currentFile.name}
            type={currentFile.type}
            added={currentFile.added}
            path={currentFile.path}
          />
        ))}
      {files?.length === 0 && (
        <p>
          Empty directory. Return to your{' '}
          <Link to="/documents">root folder</Link>
        </p>
      )}
    </div>
  );
};

export default Folder;
