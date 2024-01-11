/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  if (grid[0][0] || grid[n - 1][n - 1]) return -1;
  if (n === 1) return 1;

  const direction = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  let queue = [[0, 0, 1]],
    dotSet = new Set([0, 0]);
  while (queue.length) {
    const cur = queue.shift();
    for (let i = 0; i < direction.length; i++) {
      const row = cur[0] + direction[i][0];
      const column = cur[1] + direction[i][1];
      // 边界
      if (row < 0 || row >= n) continue;
      if (column < 0 || column >= n) continue;
      // 去重和去1
      if (dotSet.has(`${row}-${column}`) || grid[row][column]) continue;
      // 到达右下角
      if (row === n - 1 && column === n - 1) return cur[2] + 1;

      // 入队，并记录
      queue.push([row, column, cur[2] + 1]);
      dotSet.add(`${row}-${column}`);
    }
  }
  return -1;
};
