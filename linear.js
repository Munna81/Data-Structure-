let numbers = [1,2,3,4,5,6,7,8,9];

function linearSearch (arr,target) {
  for(let i = 0; i<arr.length; i++ ){
    if (numbers[i] === target){
      return i
    } else {
      return none;
    }
  }
}
const result = linearSearch(numbers,6);
console.log(result);
