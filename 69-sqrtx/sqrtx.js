/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
     let start = 1,
    end = x;
  let ans = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid <= x) {
      ans = mid;
      start = mid + 1;
    } else end = mid - 1;
  }
  return ans;
};