//Problem: Searching for a Value
//One of the most commonly used accessor functions is indexOf(), which looks to see if
//the argument passed to the function is found in the array. If the argument is contained
//in the array, the function returns the index position of the argument. If the argument is
//not found in the array, the function returns -1. Here is an example:

//Implementations:
let names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
let person = prompt("Please enter your name:");
let position = names.indexOf(person);
if (position >= 0) {
 console.log("Found " + person + " at position " + position);
}
else {
 console.log(person + " not found in array.");
}