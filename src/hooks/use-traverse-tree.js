const useTraverseTree = () => {
    // Add a file or folder in tree
    // Can be optimised using Dynamic Programming
    const insertNode = function (tree, folderId, item, isFolder) {
      if (tree.id === folderId && tree.isFolder) {
        tree.items.unshift({
          id:new Date().getTime(),
          name: item,
          isFolder: isFolder,
          items: []
        });
  
        return tree;
      }
  
      let latestNode = [];
      latestNode = tree.items.map((ob) => {
        return insertNode(ob, folderId, item, isFolder);
      });
  
      return { ...tree, items: latestNode };
    };


    function updateNode(tree, id, item) {
        if (tree.id === id) {
          tree.name = item;
          return tree;
        }
    
        const updatedNode = tree.items.map((obj) => updateNode(obj, id, item));
        return { ...tree, items: updatedNode };
      }
    
      function deleteNode(tree, folderID) {
        if (tree.id === folderID) {
          return null;
        }
    
        let filteredTree = [];
        filteredTree = tree.items
          .filter((item) => item.id !== folderID)
          .map((item) => deleteNode(item, folderID));
    
        return { ...tree, items: filteredTree };
      }
     // Do it Yourself
  
    // const renameNode = () => {}; // Do it Yourself
  
    return { insertNode, updateNode, deleteNode };
  };
  
  export default useTraverseTree;