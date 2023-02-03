const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  if (rootNode.left){
    return findMinBST(rootNode.left)
  } else {
    return (rootNode.val)
  }
}

function findMaxBST (rootNode) {
  if (rootNode.right){
    return findMaxBST(rootNode.right)
  } else {
    return (rootNode.val)
  }
}

function findMinBT (rootNode) {
  let min = Infinity;
  const stack = [];
  stack.push(rootNode)

  while (stack.length > 0){
    let node = stack.pop();
    if (node.val < min){
      min = node.val
    }
    if(node.left){
      stack.push(node.left)
    }
    if(node.right){
      stack.push(node.right)
    }
  }
return min
}

function findMaxBT (rootNode) {
 let min = rootNode.val
 if(rootNode.left){
  min = Math.max(min, findMaxBT(rootNode.left))
 }
 if (rootNode.right){
  min = Math.max(min, findMaxBT(rootNode.right))
 }
 return min
}

function getHeight (rootNode ) {
let height = -1
if (rootNode){
  let rootQueue = [rootNode];
  while(rootQueue.length){
 let row = rootQueue.splice(0, rootQueue.length)
 height++
 row.forEach(ele => {
  if(ele.left){
    rootQueue.push(ele.left)
  }
  if(ele.right){
    rootQueue.push(ele.right)
  }
 })
  }
 
}
 return height
}

function balancedTree (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}