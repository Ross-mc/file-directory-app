import { FileType, FlattenedFileType } from "./file";

export interface FileContextType {
  fileData: Array<FileType>,
  flattenedFileData: Array<FlattenedFileType>,
}