# Node-Js-learning-series

This is a Node JS Complete series I am learn from the YouTube procademy Channel

Start Date this Series
1:-------  25/01/2024 

Progress Report
Complete the 10 videos till now

























learning thing from this series 

1:-- What is Synchronous in JavaScript?

As its base JavaScript language is synchronous. Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution

eg:-
console.log('First');
console.log('Second');
console.log('Third');

2:---  What is Asynchronous in JavaScript?

As we saw in the synchronous code example, all instructions in the program execute one after another, and every instruction waits for its previous instruction to get executed. Due to this nature of synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the user interface. Asynchronous code execution allows to execution next instructions immediately and doesn't block the flow because of previous instructions.

eg:---
console.log('First');

// Set timeout for 2 seconds
setTimeout(() => console.log('Second'), 2000);

console.log('Third');


3:---  What is the Difference Between Synchronous vs Asynchronous JavaScript?

Synchronous JavaScript

1:-Instruction in synchronous code executes in a given sequence.
2:-	Each operation waits for the previous operation to complete its execution.
3:- Most of the time JavaScript is used as Synchronous code.

Asynchronous JavaScript

1:- Instructions in asynchronous code can execute in parallel.
2:- Next operation can occur while the previous operation is still getting processed.
3:- Asynchronous JavaScript is preferred in situations in which execution gets blocked indefinitely.

4:---  An OverView of the how web Works?

The browser goes to the DNS server, and finds the real address of the server that the website lives on (you find the address of the shop).
The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client (you go to the shop and order your goods).

5:---- How Request & Response works

#6 What is Routing?

 Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). In simple terms, Routing allows targeting different routes or different URLs on our page.