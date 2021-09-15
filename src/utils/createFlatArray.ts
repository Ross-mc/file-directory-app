import { FileType, FlattenedFileType } from "../types/file";

const createFlatArray = (fileArr: Array<FileType>) => {
  const copyOfFileArr: Array<FlattenedFileType> = fileArr.map(file => ({...file, path: file.name}))
  for (const directory of copyOfFileArr){
    if (directory.files){
      copyOfFileArr.push(...directory.files.map(file => ({...file, path: `${directory.path}/${file.name}`})))
    }
  }
  return copyOfFileArr
}

export default createFlatArray