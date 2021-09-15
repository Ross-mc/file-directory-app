import { useContext } from "react";
import fileContext from "../store/fileContext";
import { FileType } from "../types/file";

const useFileSearch = (path: string) => {
  const fileCtx = useContext(fileContext);
  const pathArr = path.replace(/%20/g, "").split("/");
  if (pathArr[pathArr.length -1] === ""){
    pathArr.pop();
  }
  let currentPath = pathArr.shift();
  let currentArr: Array<FileType> = fileCtx.fileData;
  let searching = true;
  let currentItem = currentArr.find(item => item.name.toLowerCase() === currentPath?.toLowerCase());
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
}

export default useFileSearch