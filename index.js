const readline = require("readline");
const fs= require("fs");
const { error } = require("console");
const http= require("http")

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

const app= http.createServer((req,res)=>{
console.log("New Server Request");
})

app.listen(3000,()=>{
    console.log("Server is Running on the 3000");
})