Array.matrix = function(numrows, numcols, initial) {
 var arr = [];
 for (var i = 0; i < numrows; ++i) {
 var columns = [];
 for (var j = 0; j < numcols; ++j) {
 columns[j] = initial;
 }
 arr[i] = columns;
 }
 return arr;
}

console.log(Array.matrix(5,5,0));
//print(nums[1][1]); // displays 0
console.log(Array.matrix(3,3,""));
names[1][2] = "Joe";
//print(names[1][2]); // display "Joe"
