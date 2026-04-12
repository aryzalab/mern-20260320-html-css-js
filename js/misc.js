// String methods
const text = "Hello world ";

/**
 * trim() = remove spaces esp. from user input
 * toLowerCase() = converts all text to small letters
 * toUpperCase() = converts all text to capital letters
 * includes() = find a word in the text
 * split() = parse text
 * slice() = subtext
 */

console.log(text);
console.log(text.trim());
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.includes("world"));
console.log(text.includes("asdf"));
console.log(text.trim().split(" "));
console.log("hello-my-name is sam".split("-"));
console.log(text.slice(2, 7));

// JS Hoisting
console.log(name);

var name = "ram";
