// join returns an array as a string. Any separator can be specified. The default is comma (,)

const elements = ["Fire", "Air", "Water"];
let defaultJoined = elements.join();
let joined = elements.join(" and ");
console.log(defaultJoined);
console.log(joined);

// split splits a string into an array of substrings. If (" ") is used as separator, the string is split between words.
const title = "This is the title of an article";
console.log(title.split(" "));
const finalUrl = title.split(" ").join("-").toLocaleLowerCase();
console.log(finalUrl);
