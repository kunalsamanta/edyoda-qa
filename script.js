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
  