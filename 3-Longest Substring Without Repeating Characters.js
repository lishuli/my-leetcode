/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0,
    hashSet = new Set(),
    right = -1;
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      hashSet.delete(s[i - 1]);
    }
    while (right + 1 < s.length && !hashSet.has(s[right + 1])) {
      hashSet.add(s[right + 1]);
      right++;
    }
    ans = Math.max(ans, right - i + 1);
    // 右指针到达终点，提前结束
    if (right === s.length - 1) return ans;
  }
  return ans;
};
