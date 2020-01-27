function linearSearch(arr, N){
    if(arr.length === 0){
        console.log(-1);
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === N){
            console.log(i)
            return i
        }else if(arr[i] !== N){
            console.log(arr[i])
        }
    }
    console.log('Not found', -1)
}
//linearSearch([10,15,20,25,30], 15)
linearSearch([1,2,3,4,5], 6)

// function linearSearch(arr, num){
//     var count = 0;
//   // add whatever parameters you deem necessary - good luck!
//   for(var i = 0; i < arr.length; i++){
//       if(arr[i] === num){
//           return count;
//       } else if (count === arr.length-1) {
//           count = -1
//       } else {
//           count++
//       }
//   }
//   return count;
// }