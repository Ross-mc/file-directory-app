import { FlattenedFileType } from '../types/file';

const fileSearchByName = (name: string, flatArray: FlattenedFileType[]) =>
  flatArray.filter((file) =>
    file.name.toLowerCase().includes(name.toLowerCase())
  );

export default fileSearchByName;
