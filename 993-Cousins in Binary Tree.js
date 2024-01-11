/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 深搜----------------------------------------------------
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let fatherX = null,
    fatherY = null,
    depthL = -1,
    depthR = -1;
  [depthL, fatherX] = search(root, x, fatherX);
  [depthR, fatherY] = search(root, y, fatherY);
  return depthL === depthR && fatherX !== fatherY;
};
// DFS
/**
 * @params {TreeNode} root
 * @params {number} x
 * @params {TreeNode} father
 * @return {array[number, TreeNode]} [depth, father]
 */
function search(root, x, father) {
  if (!root) return [-1, father];
  if (root.val === x) return [0, father];
  let depth;

  // left search
  father = root;
  [depth, father] = search(root.left, x, father);
  if (depth >= 0) return [depth + 1, father];

  // right search
  father = root;
  [depth, father] = search(root.right, x, father);
  if (depth >= 0) return [depth + 1, father];
  return [-1, father];
}

// 广搜
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let fatherX = null,
    fatherY = null,
    depthL = -1,
    depthR = -1;

  let arr = [
    {
      node: root,
      depth: 0,
      father: null,
    },
  ];
  while (arr.length) {
    let cur = arr.shift();
    if (cur.node.val === x) {
      fatherX = cur.father;
      depthL = cur.depth;
    }
    if (cur.node.val === y) {
      fatherY = cur.father;
      depthR = cur.depth;
    }
    // x,y都找到，跳出循环
    if (depthL > -1 && depthR > -1) break;

    if (cur.node.left)
      arr.push({
        node: cur.node.left,
        depth: cur.depth + 1,
        father: cur.node,
      });
    if (cur.node.right)
      arr.push({
        node: cur.node.right,
        depth: cur.depth + 1,
        father: cur.node,
      });
  }
  return depthL === depthR && fatherX !== fatherY;
};
