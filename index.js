/* This is in-order traversal for a binary tree */

function TreeNode(value,left,right) {
  this.value = 
    value===undefined ? 0 : value;
  this.left = 
    left===undefined ? null : left;
  this.right = 
    right===undefined ? null : right;
}

// make so that it fits on phone 
// portrait mode


troot = new TreeNode(1,null,new TreeNode(2,new TreeNode(3,null,null),null));

const inorderTraversal = function(troot) {
  const out = [];

  function traverse(troot) {
    if(troot===null) return;
    traverse(troot.left);
    out.push(troot.value);
    traverse(troot.right);
  }

  traverse(troot);

  return out;
}

console.log(
  inorderTraversal(troot));
