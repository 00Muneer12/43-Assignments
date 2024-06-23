"use strict";
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
the array of magicians’ names. Because the original array will be unchanged, return the new array and store
it in a separate array. Call show_magicians() with each array to show that you have one array of the original
 names and one array with the Great added to each magician’s name.*/
function makeGreat(magicians) {
    const greatMagicians = magicians.map(name => "Great " + name);
    return greatMagicians;
}
function showMagicians(magicians) {
    magicians.forEach(name => {
        console.log(name);
    });
}
// Original array of magician names
const magicians = ["Riaz", "Saood", "Kainat"];
// Make a copy of the original array
const originalMagicians = [...magicians];
// Call makeGreat() with a copy of the array of magician names
const greatMagicians = makeGreat([...magicians]);
// Show the original array
console.log("Original Magicians:");
showMagicians(originalMagicians);
// Show the array with "Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
