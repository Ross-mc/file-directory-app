import { useContext } from "react";
import fileContext from "../store/fileContext";
import { FileType } from "../types/file";

const useFileSearch = (path: string) => {
  const fileCtx = useContext(fileContext);
  let currentArr: Array<FileType> = fileCtx.fileData;
  let {currentItem, currentPath, pathArr} = setUpVariables(path, currentArr);
  if (pathArr[pathArr.length -1] === ""){
    pathArr.pop();
  }
  let searching = true;
  while(searching){
    if(!currentItem){
      return null
    }
    if (currentItem.name.toLowerCase() === currentPath?.toLowerCase()){
      if (currentItem.type === "folder"){
        if (pathArr.length === 0){
          return currentItem;
        }
        currentArr = currentItem.files!;
        currentPath = pathArr.shift();
        if (!currentPath){
          return null
        }
        currentItem = currentArr.find(item => item.name.toLowerCase() === currentPath?.toLowerCase());
      } else {
        return currentItem;
      }
    }
  }
  return null
}

const setUpVariables = (path: string, arr: Array<FileType>) => {
  const pathArr = path.replace(/%20/g, "").split("/");
  if (pathArr[pathArr.length -1] === ""){
    pathArr.pop();
  }
  let currentPath = pathArr.shift();
  let currentItem = arr.find(item => item.name.toLowerCase() === currentPath?.toLowerCase());
  return {
    pathArr,
    currentPath,
    currentItem
  }
}

export default useFileSearch