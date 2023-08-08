const fs = require("fs");
const { appendFile } = require("fs/promises");
// using path instead of using the file name
const path = require("path");
//read the contents of a file
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (error, data) => {
    if (error) console.log(error);
    console.log(data);
  }
);
console.log("Hello.....");

// creating a new file using fs.writeFile
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Nice to meet you",
  (error) => {
    if (error) console.log(error);
    console.log("write complete");

    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "|\n\nYes it is",
      (error) => {
        if (error) console.log(error);
        console.log("append complete");
        // renaming a file rename
        fs.rename(
          path.join(__dirname, "files", "reply.txt"),
          path.join(__dirname, "files", "newReply.txt"),
          (error) => {
            if (error) console.log(error);
            console.log("Rename complete");
          }
        );
      }
    );
  });
//  using appendFile to modify and creating new file
//    fs.appendFile(path.join(__dirname, 'files', 'rest.txt'), 'testing  text', (error) => {
//     if (error) console.log(error);
//     console.log('append complete');

//exit on uncaught exceptiononn
process.on("uncaughtException", (err) => {
  console.error("There was an uncaaught error: ${err}");
  process.exit(1);
});
