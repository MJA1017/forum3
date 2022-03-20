//function to get the intersection of three arrays.

function common(...arr){
    return arr.reduce((first,second) => {
     return first.filter(el => second.includes(el));
    })
  }

console.log(common([1,4,6,5,3], [4,3,6,9], [9,7,4,6,2]))