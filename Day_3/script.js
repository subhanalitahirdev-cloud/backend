"use strict";
/*
In order to use the function exported from the other file it is the syntax:
const variableName = rrequite("path of the file");
*/
const { add, remove } = require("./math.js");
console.log("The sum of 3 and 4 are", add(3, 4));
console.log("This is the subtraction of 4 and 3 is", remove(4, 3));
