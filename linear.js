let numbers = [1,2,3,4,5,6,7,8,9];

function linearSearch (arr,target) {
  for(let i in arr){
    if (numbers[i] === target){
      return i
    }  
     }
  
return -1;
}
const result = linearSearch(numbers,6);
console.log(result);
