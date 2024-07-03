// A blog post

var post = {
	id : 1,
	title : "My Crazy Space Adventure",
	author : "Philae",
	created : "2015-06-21",
	body : "You will not believe where I just woke up!! Only on a comet..."
};


// Display some properties of the post
console.log("Post Title: " + post.title);
console.log("Author: " + post.author);
console.log("Created Date: " + post.created);
console.log("Body:\n" + post.body);

// Add a second post
var post2 = {
    id: 2,
    title: "Exploring Martian Landscape",
    author: "Pathfinder",
    created: "2016-03-10",
    body: "Rover images reveal stunning landscapes and rock formations on Mars."
};

console.log("\nSecond Post Title: " + post2.title);
console.log("Author: " + post2.author);
console.log("Created Date: " + post2.created);
console.log("Body:\n" + post2.body);
