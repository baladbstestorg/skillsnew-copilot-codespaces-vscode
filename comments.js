// Create web server
// 1. Create a new folder, and add a file called comments.js
// 2. In comments.js, create a new web server
// 3. The server should listen on port 4001
// 4. When you visit http://localhost:4001 in the browser, the server should respond with a JSON object, that looks like this: {comments: []}
// 5. You can use the code from the previous exercise as a starting point
// 6. Don't forget to use the right content type for the response!

// Path: index.js
// Create a web server
// 1. Create a new folder, and add a file called index.js
// 2. In index.js, create a new web server
// 3. The server should listen on port 4000
// 4. When you visit http://localhost:4000 in the browser, the server should respond with a JSON object, that looks like this: {message: "Hello, world!"}
// 5. You can use the code from the previous exercise as a starting point
// 6. Don't forget to use the right content type for the response!

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello, world!' }));
});

server.listen(4000, () => {
  console.log('Server listening on port 4000');
});
