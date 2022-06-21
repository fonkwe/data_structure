// Implementations 

let nums = [1,2,3,7,8,9];
let newElements = [4,5,6];
nums.splice(3,0,newElements);
console.log(nums); // 1,2,3,4,5,6,7,8,9