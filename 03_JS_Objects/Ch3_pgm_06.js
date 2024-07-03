// Using a variable as a property value
var book;
var bookName;

bookName = "The Adventures of Tom Sawyer";

book = {
    title: bookName
};

/* Further Adventures */

// 1) Run the program

// 2) At the console prompt, type 'book' and press enter
//    This will display the book object with its current title property

// 3) Change the value of the bookName variable and repeat steps 1 and 2

// Initial output
console.log("Initial book object:");
console.log(book);

// Change the value of bookName
bookName = "The Great Gatsby";

// Updated book object with new title
book.title = bookName;

// Updated output
console.log("\nUpdated book object:");
console.log(book);
