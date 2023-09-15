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
  