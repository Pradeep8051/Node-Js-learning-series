# Node-Js-learning-series

This is a Node JS Complete series I am learn from the YouTube procademy Channel

Start Date this Series
1:-------  25/01/2024 

Progress Report
Complete the till Now 7 videos
























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

4:---  