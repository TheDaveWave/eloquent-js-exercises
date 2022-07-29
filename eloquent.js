// Chapter 2 - Program Structure

// Exercise - Looping a Triangle
/* Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
####### 
*/
/*
let triangleString;
for (let num = 0; num < 7; num += 1) { 
    if (num === 0) {
        triangleString = "#";
        console.log(triangleString);
    } else {
        triangleString += "#";
        console.log(triangleString);
    }
}
*/
// Exercise 2 - FizzBuzz
/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible
by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */
/* 
for (let i = 1; i <= 100; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
 */
// Exercise 3 - Chessboard
/* Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the grid 
there is either a space or a "#" character. The characters should form a chessboard. */
/* Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and 
change the program so that it works for any size, outputting a grid of the given width and height. */



let chessBoard;
let size = 8;

function createLines (val) {
    let line1;
    let line2;
    let boardRows;
    for (let i = 1; i <= val; i++) {
        if (i % 2 === 0) {
            line1 += "#";
        } else if (i === 1) {
            line1 = " ";
        } else {
            line1 += " ";
        }

        if (i % 2 === 0) {
            line2 += " ";
        } else if (i === 1) {
            line2 = "#";
        } else {
            line2 += "#";
        }
    }
    // console.log(line1);
    // console.log(line2);

    for (let j = 1; j <= val / 2; j++) {
        if (j === 1) {
            boardRows = line1 + `\n${line2}`;
        } else {
            boardRows += `\n${line1}\n${line2}`;
        }
    }

    console.log(boardRows);
}

createLines(size);
createLines(10);
createLines(11);
/* for (let height = 1; height <= size; height++) {
    let boardHeight;
    let boardWidth;
    let boardWidth2;
    for (let width = 1; width <= size; width++) {
        
        if (width % 2 === 0) {
            boardWidth += "#";
        } else if (width === 1) {
            boardWidth = " ";
        } else {
            boardWidth += " ";
        }
        console.log(boardWidth);
        
        if (width % 2 === 0) {
            boardWidth2 += " ";
        } else if (width === 1) {
            boardWidth2 = "#";
        } else {
            boardWidth2 += "#";
        }
        console.log(boardWidth2);
        
    }

    console.log(boardWidth);
    console.log(boardWidth2);
    chessBoard = boardWidth + `\n${boardWidth2}`;
} */


/* let chessBoard;

for (height = 1; height <= 8; height++) {
    
    let grid1 = " # # # #";
    let grid2 = "# # # # ";

    if (height % 2 === 0) {
        chessBoard += `\n${grid2}`;
    } else if (height === 1) {
        chessBoard = grid1;
    } else {
        chessBoard += `\n${grid1}`;
    }
} */

/* console.log(chessBoard);

//test to see how many lines are generated.
let lines = chessBoard.split("\n");
console.log(lines); */