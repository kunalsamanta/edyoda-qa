
//Question 1

var array1 = [1,0,2,3,4];

 var array2 = [3,5,6,7,8,13];

 function sumArray(a,b){
var c=[];
for (var i=0; i<Math.max(a.length,b.length); i++){
    c.push(( a[i] || 0 ) +(b[i] || 0));
}
return c;
 
}
  console.log(sumArray(array1,array2));

  //Question 2
var arr=[1,2,3,4.5,3,1,6,2,1];
var dupArr =[];
for (var i = 0; i<arr.length; i++ ){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]===arr[j]){
        dupArr.push(arr[i]);
        }
    }
}
console.log(dupArr);

//Question 3
function union(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    const uniqueElements = new Set(combinedArray);
    const unionArray = Array.from(uniqueElements);
    return unionArray;
}
const array3 = [1, 2, 3];
const array4 = [100, 2, 1, 10];
const result = union(array3, array4);
console.log(result);


//question 4
function remove_array_element(arr, element) {
    return arr.filter(item => item !== element);
  }
  const originalArray = [2, 5, 9, 6];
const elementToRemove = 5;

const newArray = remove_array_element(originalArray, elementToRemove);
console.log(newArray);

//Question 5
const orginal = [1, 2, 3, 4, 5];
const empty = originalArray.splice(0);
console.log("Original Array:", orginal);
console.log("Emptied Array:", empty);


//question 6
function printEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        console.log(arr[i]);
      }
    }
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Even numbers:");
  printEvenNumbers(numbers);
  


  //Question 7

  function deleteAllOccurrences(arr, elementToDelete) {
    return arr.filter(item => item !== elementToDelete);
  }
  
  const newAr = [1, 2, 3, 2, 4, 5, 2, 6];
  const elementToDelete = 2;
  
  const newArray1 = deleteAllOccurrences(newAr, elementToDelete);
  console.log(newArray1);
  


  // Question 9

  const rows = 8;

for (let i = 1; i <= rows; i++) {
  let row = '';

  for (let j = 1; j <= i; j++) {
    row += j + ' ';
  }

  console.log(row);
}

//question 10

function countDigits(number) {
  
  const numStr = Math.abs(number).toString();
  return numStr.length;
}


const number = 12345;
const digitCount = countDigits(number);
console.log(`Number of digits in ${number} is: ${digitCount}`);



// Question 11

function sumOfDigits(num) {
  const numStr = Math.abs(num).toString();

  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {

    sum += parseInt(numStr[i]);
  }

  return sum;
}
const num = 12345;
const digitSum = sumOfDigits(number);
console.log(`Sum of digits in ${num} is: ${digitSum}`);

//question 12


function findLargestNumber(arr) {
  if (arr.length === 0) {
    return undefined; 
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}


const num2 = [12, 45, 6, 78, 23, 56, 89];
const largestNumber = findLargestNumber(num2);
console.log(`The largest number is: ${largestNumber}`);

//Question 13


function printFibonacciSeries(n) {
  let fibArray = [];

  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    fibArray.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  return fibArray;
}

const N = 10; 
const fibonacciSeries = printFibonacciSeries(N);
console.log(`Fibonacci Series for N = ${N}:`, fibonacciSeries.join(', '));



//Question 14

const row2 = 5;

for (let i = row2; i >= 1; i--) {
  let row = '';

  for (let j = 1; j <= i; j++) {
    row += j;
  }

  console.log(row);
}


//Question 15

const row3 = 4;

for (let i = 1; i <= row3; i++) {
  let row = '';

 
  for (let j = 1; j <= i; j++) {
    row += j;
  }

  // Print numbers in decreasing order
  for (let j = i - 1; j >= 1; j--) {
    row += j;
  }

  console.log(row);
}
