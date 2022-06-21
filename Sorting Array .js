//Descriptions: The sort() function uses the compare() function to sort the array elements numerically
//rather than lexicographically.

//Implementations
function compare(num1, num2) {
    return num1 - num2;
}
   let nums = [3,1,2,100,4,200];
   nums.sort(compare);
   console.log(nums); // 1,2,3,4,100,200