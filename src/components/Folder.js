import { useState } from "react";

function Folder({ handleInsertNode = () => {}, explorer, handleDeletetNode=()=>{},setExplorerData }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);

      setShowInput({ ...showInput, visible: false });
    }
  };
  
  const onDelete = (e) => {

    if (e.target.value) {
        handleDeletetNode(explorer.id, e.target.value, showInput.isFolder);
  
        setShowInput({ ...showInput, visible: false });
      }
    // setExplorerData(item =>{
    //     return item.filter((it,i,explorer)=> it.id !== explorer.id)
    // })
    
   
    console.log(e)
  };

  if (explorer.isFolder) {
    return (
      <div className="folderContainer" >
        <div onClick={() => setExpand(!expand)} className="folder">
          <span>📁 {explorer.name}</span>

          <div className="btn">
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            <button onClick={(e) => onDelete(e, true,)}>Delete +</button>

          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
           <span>{showInput.isFolder? "📁" : "📄"}</span> 
           <input
              type="text"
              className="inputContainer__input"
              autoFocus
              onKeyDown={onAddFolder}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
              </div>
          )}

          {explorer.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                key={exp.id}
                explorer={exp}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
}

export default Folder;