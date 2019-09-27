#!/usr/bin/env ts-node
console.log("process.argv");
console.log(process.argv);
let a: number = parseInt(process.argv[2]);
let b: number = parseInt(process.argv[3]);
console.log(a + b);
