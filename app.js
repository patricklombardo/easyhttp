const http = new easyHTTP();

// // Get Posts
// http.get("http://jsonplaceholder.typicode.com/posts", function (err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// // Get Single Post
// http.get("http://jsonplaceholder.typicode.com/posts/1", function (err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// Post a Post
const data = {
  title: "Custom Post",
  body: "This is a custom post.",
};

http.post("http://jsonplaceholder.typicode.com/posts", data, function (
  err,
  res
) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
