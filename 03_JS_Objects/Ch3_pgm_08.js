// Using dot notation to access property values

var book;

book = {
    title     : "The Hobbit",
    author    : "J. R. R. Tolkien",
    published : 1937
};

console.log(book.title);   // Accessing and logging the title property
console.log(book.author);  // Accessing and logging the author property

// Further Adventures

// 1) Log the published property to the console
console.log(book.published);

// 2) Add a second book
var book2 = {
    title     : "1984",
    author    : "George Orwell",
    published : 1949
};

// 3) Log its details to the console
console.log("\nBook 2:");
console.log("Title: " + book2.title);
console.log("Author: " + book2.author);
console.log("Published: " + book2.published);
