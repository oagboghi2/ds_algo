function binarySearch(arr, N){
    //Left is the start of the array;
    // right is the end of the array
    var left = arr[0]
    var right = arr[arr.length - 1];
    // point er is the middle point of the array. 
    // We are going to be updating it repeatedly
    var pointer = arr[Math.floor(arr.length/2)];

    for(var i = 0; i < arr.length; i++){
        console.log("Updated set", left,pointer,right)
        if(N < pointer){
            right = arr[arr.indexOf(pointer)];
            pointer = arr[arr.indexOf(pointer)-1];
        }
        else if(N > pointer){
            left = arr[arr.indexOf(pointer)];
            pointer = arr[arr.indexOf(pointer)+1]; 
        } else if(N === pointer){
            console.log("returned pointer", arr.indexOf(pointer))
            return arr.indexOf(pointer);
        }else{
            console.log("-1", -1)
            return -1
        }
    }

}

// function binarySearch(arr, elem){
//     var left = 0;
//     var right = arr.length - 1;
//     var pointer = Math.floor((left + right) / 2);
//     console.log(left, pointer, right)

//     while(arr[pointer] !== elem && left <= right){
//         if(elem < arr[pointer]){
//             right = pointer - 1
//             pointer = Math.floor((left + right) / 2);
//         } else {
//             left = pointer + 1;
//             pointer = Math.floor((left + right) / 2);
//         }
//         if(arr[pointer] == elem){
//             console.log(pointer)
//             return pointer
//         }
//         console.log('-1')
//         return -1
//     }
// }

binarySearch([2,5,6,9,13,15,28,30],30)
//binarySearch([2,4,6,8,10,12,14,16,18,20],6)
//binarySearch([1,2,3,4,5,6], 4)