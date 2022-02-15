const fruits = ["banana", "orange", "apple", "mango"];
const x = fruits.pop();
console.log(x);

fruits.push("kiwi");
console.log(fruits);

/**
 * removes the first element and shifts all other elements to lower index
 */
const y = fruits.shift();
console.log(y);
console.log(fruits);

/**
 * add a new element to an array(at the beginning) and unshifts older elements
 */

const z = fruits.unshift("lemon");
console.log(z);
console.log(fruits);

/*
* using length property to append a new element to an array
*/
fruits[fruits.length] = "grapes";
console.log(fruits);

const del = delete fruits[0];
console.log(del);
console.log(fruits);

/*
* Merging two arrays
*/
const arr = ["bike", "car", "truck", "cycle"];
const brr = ["ktm", "lamborghini", "ferrari", "hero"];

const autoMobiles = arr.concat(brr);
console.log(autoMobiles);

/*
* Merging three arrays
*/
const arr1 = ["bike", "car", "truck", "cycle"];
const brr2 = ["ktm", "lamborghini", "ferrari", "hero"];
const crr = ["bullet", "gun", "gun-powder", "rdx"];

const mergedArr = arr1.concat(brr2, crr);
console.log(mergedArr);

/*
* The splice() method adds new items to an array.
  The slice() method slices out a piece of an array.
*/

/** splice() method
 * The first parameter (2) defines the position where new elements should be added (spliced in).
   The second parameter (0) defines how many elements should be removed.
   The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*/

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits1);

//Using splice() to Remove Elements

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(0, 1);
console.log(fruits2);

/**
 * The slice() method slices out a piece of an array into a new array.
 * The slice() method creates a new array.
 * The slice() method does not remove any elements from the source array.
*/

 const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 const citrus = fruits3.slice(1);
 console.log(citrus);
 console.log(fruits3);

 /**
  * The slice() method can take two arguments like slice(1, 3).
  * The method then selects elements from the start argument, and up to (but not including) the end argument.
*/
const fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits4.slice(1, 3);
console.log(citrus1);

/**
 * The sort() method sorts an array alphabetically:
 */
 const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
 fruits5.sort();
 console.log(fruits5);

/**
  * The reverse() method reverses the elements in an array.
  * You can use it to sort an array in descending order:
  * By default, the sort() function sorts values as strings.
  * By default, the sort() function sorts values as strings.
  * You can fix this by providing a compare function:
*/
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.reverse();
console.log(fruits6);

/** For Numbers sorting ---The Compare Function--- it'll also give high and lowest value*/
const points = [40, 100, 1, -5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);

/** Sorting an Array in Random Order */
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a, b){return 0.5 - Math.random()});
console.log(points1);


/** To find the max and min value from an array*/
function max(arr) {
    return Math.max.apply(null, arr);
}
console.log(max(points1));

function min(arr) {
    return Math.min.apply(null, arr);
}
console.log(min(points1));

/** Sorting Object Arrays */
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
cars.sort(function(a, b){return a.year - b.year});
console.log(cars);

/** JavaScript Array every()
 * This example check if all array values are larger than 18:
*/

const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18)

/**
 * JavaScript Array some()
 * This example check if some array values are larger than 18:
 */
const number = [45, 4, 9, 16, 25];
const someOver18 = number.some(myFunction);
 
function myFunction(value, index, array) {
   return value > 18;
}

/** JavaScript Array indexOf()
 * The indexOf() method searches an array for an element value and returns its position.
*/

const fruits7 = ["Apple", "Orange", "Apple", "Mango"];
const position = fruits7.indexOf("Apple") + 1;
console.log(position);

/**
 * JavaScript Array lastIndexOf()
 * Array.lastIndexOf() is the same as Array.indexOf(), 
 * but returns the position of the last occurrence of the specified element.
 */
const fruits8 = ["Apple", "Orange", "Apple", "Mango"];
const position1 = fruits8.lastIndexOf("Apple") + 1;

console.log(position1);

/**
 * JavaScript Array find()
 * The find() method returns the value of the first array element 
 * that passes a test function.
 */
const numbers = [4, 9, 16, 25, 29];
const first = numbers.find(myFunction);
 
function myFunction(value, index, array) {
   return value > 18;
}

