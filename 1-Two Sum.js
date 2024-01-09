/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// hash table降低复杂度
var twoSum = function (nums, target) {
  let hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    let targetNum = target - nums[i];
    if (hashTable.has(targetNum)) {
      return [hashTable.get(targetNum), i];
    } else {
      hashTable.set(nums[i], i);
    }
  }
};
