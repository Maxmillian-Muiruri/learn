const fspromises = require("fs").promises;
const { Console } = require("console");
const { appendFile } = require("fs/promises");
// using path instead of using the file name
const path = require("path");
const fileOps = async () => {
  try {
    const data = await fspromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8" );
    console.log(data);
    // using un link to delete a file named starter.txt
    await fspromises.unlink(path.join(__dirname, "files", "starter.txt"));
// writing a file using writrfile
   await fspromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data)
//    using append to create a new file
    await fspromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), '\n\nNice to meet you.');
    // using renamefile to rename the file created in appendfile
    await fspromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "promiseComplete.txt"));

    const newData = await fspromises.readFile(
        path.join(__dirname, "files", "promiseComplete.txt"),
        "utf-8" );
        console.log(newData);
  } catch (err) {
    console.error(err);
  }
}

fileOps();
//read the contents of a file
// fs.readFile(path.join(__dirname, "files", "starter.txt"), "utf8",
//   (error, data) => {
//     if (error) console.log(error);
//     console.log(data);
//   }
// );
// console.log("Hello.....");

// // creating a new file using fs.writeFile
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you",
//   (error) => {
//     if (error) console.log(error);
//     console.log("write complete");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "|\n\nYes it is",
//       (error) => {
//         if (error) console.log(error);
//         console.log("append complete");
//         // renaming a file rename
//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (error) => {
//             if (error) console.log(error);
//             console.log("Rename complete");
//           }
//         );
//       }
//     );
//   });
// //  using appendFile to modify and creating new file
// //    fs.appendFile(path.join(__dirname, 'files', 'rest.txt'), 'testing  text', (error) => {
// //     if (error) console.log(error);
// //     console.log('append complete');

//exit on uncaught exceptiononn
// process.on("uncaughtException", (err) => {
//   console.error("There was an uncaaught error: ${err}");
//   process.exit(1);
// });
