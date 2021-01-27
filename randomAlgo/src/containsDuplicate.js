var containsDuplicate = function (nums) {
    let memo = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (memo.includes(nums[i])) return true
        else memo.push(nums[i])
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 2, 5]))