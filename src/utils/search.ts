import { useContext } from "react";
import fileContext from "../store/fileContext";
import { FileType } from "../types/file";

const useFileSearch = (path: string) => {
  const fileCtx = useContext(fileContext);
  const pathArr = path.split("/");
  if (pathArr[pathArr.length -1] === "/"){
    pathArr.pop();
  }
  let currentPath = pathArr.shift();
  let currentArr: Array<FileType> = fileCtx.fileData;
  let searching = true;
  while(searching){
    let currentItem = currentArr.find(item => item.name.toLowerCase() === currentPath?.toLowerCase());
    if(!currentItem){
      throw new Error('Invalid directory path');
    }
    if (currentItem.name.toLowerCase() === currentPath?.toLowerCase()){
      if (currentItem.type === "folder"){
        if (pathArr.length === 0){
          return currentItem;
        }
        currentArr = currentItem.files!;
        currentPath = pathArr.shift();
      } else {
        return currentItem;
      }
    }
  }
}

export default useFileSearch