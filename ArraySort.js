//Problem: Creating Arrays from Strings

//Implementations:
let sentence = "the quick brown fox jumped over the lazy dog";
let words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
 console.log("word " + i + ": " + words[i]);
}