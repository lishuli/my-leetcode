/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let len = s.length;
  if (len % 2 === 1) return false;
  let arr = [];
  let pMap = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  for (let i = 0; i < len; i++) {
    if (pMap.has(s[i])) {
      arr.push(s[i]);
    } else {
      let left = arr.pop();
      if (s[i] !== pMap.get(left)) {
        return false;
      }
    }
  }
  return arr.length === 0;
};
