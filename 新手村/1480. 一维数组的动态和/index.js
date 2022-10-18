/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  nums.reduce((pre, cur, index) => {
    nums[index] = pre + cur
    return nums[index]
  })
  return nums
};
