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