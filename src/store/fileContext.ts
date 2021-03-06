import {createContext} from "react";
import { FileContextType } from "../types/fileContextType";

const fileContext = createContext<FileContextType>({
  fileData: [],
  flattenedFileData: []
})

export default fileContext;