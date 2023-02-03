// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      this.root = null
    }
  
    insert(val, currentNode=this.root) {
      if (!this.root){
        this.root = new TreeNode(val)
      } else if (val < currentNode.val){
        if (!currentNode.left){
          currentNode.left = new TreeNode(val)
        } else {
          this.insert(val, currentNode.left)
        }
      } else {
        if(!currentNode.right){
         currentNode.right = new TreeNode(val)
        } else {
          this.insert(val, currentNode.right)
        }
      }
    }
  
    search(val, currentNode = this.root) {
      if (!currentNode) {
        return false;
      } else if (currentNode.val === val) {
        return true;
      // } else if (this.search(currentNode.left, val)){
      //  return true;
      // } else
      // return this.search(currentNode.right, val)
      }else if (val < currentNode.val){
        return this.search(val, currentNode.left)
      } else {
        return this.search(val, currentNode.right)
      }
    }
  
  
  
    preOrderTraversal(currentNode = this.root) {
      if(!currentNode) return 
      console.log(currentNode.val)
      this.preOrderTraversal(currentNode.left)
      this.preOrderTraversal(currentNode.right)
    }
  
  
    inOrderTraversal(currentNode = this.root) {
     if(!currentNode) return
     this.inOrderTraversal(currentNode.left)
     console.log(currentNode.val)
     this.inOrderTraversal(currentNode.right)
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      if(!currentNode) return
  this.postOrderTraversal(currentNode.left)
  this.postOrderTraversal(currentNode.right)
  console.log(currentNode.val)
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
     const newQueue = []
     newQueue.push(this.root)
  
     while(newQueue.length > 0){
      let curr = newQueue.shift()
      console.log(curr.val)
      if(curr.left){
        newQueue.push(curr.left)
      }
      if(curr.right){
        newQueue.push(curr.right)
      }
     }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
         // initialize a stack with the root node
     const newStack = [this.root]
      // while the stack is not empty
      while(newStack.length){
        let thisNode = newStack.pop()
        console.log(thisNode.val)
        if(thisNode.left){
          newStack.push(thisNode.left)
        }
        if(thisNode.right){
          newStack.push(thisNode.right)
        }
      }
        // print and remove first node in stack
  
        // if the node has a left node
          // push the left node on the back of the stack
        // if the node has a right node
          // push the right node on the back of the stack
  }
  }
  
  module.exports = { BinarySearchTree, TreeNode };
  