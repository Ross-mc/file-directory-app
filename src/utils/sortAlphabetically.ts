import { FileType } from "../types/file"
import { OrderType } from "../types/order"

const sortAlphabetically = (arr: Array<FileType>, order: OrderType) => {
  return arr.sort((fileA, fileB) => {
    return order === "asc" ? fileA.name.localeCompare(fileB.name) : fileB.name.localeCompare(fileA.name) 
  })
}

export default sortAlphabetically