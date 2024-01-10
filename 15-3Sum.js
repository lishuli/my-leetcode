/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let n = nums.length;
  // 排序
  nums.sort((a, b) => a - b);
  let res = [];
  for (let first = 0; first < n; first++) {
    // 重复值跳过
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    let third = n - 1;
    let target = -nums[first];
    for (let second = first + 1; second < n; second++) {
      // 重复值跳过
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      // second在third左侧
      while (second < third && nums[second] + nums[third] > target) {
        third--;
      }
      // second和third重合，退出本次循环
      if (second === third) {
        break;
      }
      if (nums[second] + nums[third] === target) {
        res.push([nums[first], nums[second], nums[third]]);
      }
    }
  }
  return res;
};
