import { FileType } from '../types/file';

const fileSearchByName = (name: string, flatArray: FileType[]) =>
  flatArray.filter((file) =>
    file.name.toLowerCase().includes(name.toLowerCase())
  );

export default fileSearchByName;
