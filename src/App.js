import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
import "./App.css";
import explorer from "./data/folderData"

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { deleteNode,insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
    console.log(finalTree)

  };
  const handleDeletetNode = (folderId, item, isFolder) => {
    const finalTree = deleteNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
    console.log(finalTree)
  };

  return (
    <div className="App">
      <Folder   handleInsertNode={handleInsertNode} handleDeletetNode={handleDeletetNode} explorer={explorerData} />
    </div>
  );
}

// fix connect script in latest video
