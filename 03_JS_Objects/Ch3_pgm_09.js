// Concatenating string properties

var book1;
var book2;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien"
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman"
};

console.log(book1.title + " by " + book1.author);
console.log(book2.title + " by " + book2.author);


// Further Adventures

// 1) Add a third book
var book3 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee"
};

// 2) Log its details to the console
console.log("\nBook 3:");
console.log(book3.title + " by " + book3.author);

// 3) Add a third property to each book
book1.year = 1937;
book2.year = 1995;
book3.year = 1960;

// 4) Update the messages logged to include the new property
console.log("\nUpdated details with year:");
console.log(book1.title + " by " + book1.author + " (" + book1.year + ")");
console.log(book2.title + " by " + book2.author + " (" + book2.year + ")");
console.log(book3.title + " by " + book3.author + " (" + book3.year + ")");
