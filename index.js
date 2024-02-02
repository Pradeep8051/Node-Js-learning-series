const readline = require("readline");
const fs = require("fs");
const { error } = require("console");
const http = require("http");
const port = 3000;
/* Synchronously Read File  */

// const inputFile =fs.readFileSync('./Files/input.txt','utf-8')
// console.log((inputFile));

// const InputText=`Data read from the input.txt ${inputFile}.\n Date Created ${new Date()}`
// fs.writeFileSync('./Files/output.txt',InputText)

/* Asynchronously Read Files */

// fs.readFile("./Files/input.txt",'utf-8',(error,data)=>{
//     console.log(data);
// })
// console.log("reading File");

/*  read line */
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Please Enter Your name ", (name) => {
//   console.log(`Your Name is: ${name}`);
//   rl.close();
// });

// rl.on("close",()=>{
//     console.log("Interface Is CLosed");
//     process.exit(0)
// })

/* Lecture -8  Creating a Simple web server */
const html = fs.readFileSync("./Template/index.html", "utf-8");
const app = http.createServer((req, res) => {
  // res.end(html);
  // console.log("New Server Request");

  let path = req.url;

  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    res.end(html.replace("{{%Contents%}}", "You Are in Home Page"));
  } else if (path.toLocaleLowerCase() === "/about") {
    res.end(html.replace("{{%Contents%}}", "You Are in About Page"));
  } else if (path.toLocaleLowerCase() === "/contact") {
    res.end(html.replace("{{%Contents%}}", "You Are in Contact Page"));
  } else {
    res.end(html.replace('{{%Contents%}}',"ERROR 404 Request the currect url path"));
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
