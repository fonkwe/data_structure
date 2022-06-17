//Problem: Aggregate Array Operations
//There are several aggregate operations you can perform on arrays. 
//First, you can assign
//one array to another array:


//Implemenetation:
let nums = [];
for (let i = 0; i < 100; ++i) {
 nums[i] = i+1;
}
var samenums = nums;
nums[0] = 400;
console.log(samenums[0]); // d