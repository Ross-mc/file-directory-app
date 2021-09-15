export interface FileType {
  type: string,
  name: string,
  added?: string
  files?: FileType[]
}

export interface FlattenedFileType {
  type: string,
  name: string,
  added?: string
  files?: FileType[]
  path: string
}