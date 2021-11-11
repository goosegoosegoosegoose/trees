/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    const toVisitQueue = [this.root];
    let pathCount = 1;
    if (!this.root) return 0;
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      if (!current.left) return pathCount;
      toVisitQueue.push(current.left);
      pathCount += 1;
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const toVisitQueue = [this.root];
    let pathCount = 1;
    if (!this.root) return 0;
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      if (!current.left) continue;
      toVisitQueue.push(current.left);
      if (!current.right) continue;
      toVisitQueue.push(current.right);
      if (!current.right && !current.left) return pathCount;
      pathCount += 1
    }
    return pathCount;
  }
  // I have no idea how I made this work I blacked out.

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    const toVisitQueue = [this.root];
    let sum = 0;
    if (!this.root) return 0;
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      sum += current.val;
      if (current.right) toVisitQueue.push(current.right);
      if (current.left) toVisitQueue.push(current.left);
    }
    return sum;
  }
  // for here I feel like two of the tests are wrong

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    const toVisitQueue = [this.root];
    let lowestValue = null;
    if (!this.root) return null;
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      if (current.val > lowerBound && (current.val < lowestValue || lowestValue === null)) lowestValue = current.val;
      if (current.right) toVisitQueue.push(current.right);
      if (current.left) toVisitQueue.push(current.left);
    }
    return lowestValue;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);
largeTree = new BinaryTree(root);

let wack = largeTree.nextLarger(1);
console.log("answer is", wack)

module.exports = { BinaryTree, BinaryTreeNode };
