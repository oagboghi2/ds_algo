// function naiveStringSearch(S, SS){
//     console.log(S, SS)
//     var count = 0;
//     // Loop over the longer string
//     for(var i = 0; i < S.length; i++){
//         // Loop over the shorter string
//         for(var j = 0; j < SS.length; j++){
//             // if the characters don't match, break out of the shorter loop
//             console.log('shorter loop',S[i], SS[j])
//             if(S[i] !== SS[j]){
//                 console.log('break')
//                 break;
//             }
//             // if you complete the inner loop, and find a match, 
//             var temp = S.slice(i, i + 3 )
//             if(temp === SS){
//                 // increment the count of matches
//                 count++
//             }
//         }
//          // Return the count
//         console.log('count', count)
//     } 
//     return count;
// };

//naiveStringSearch('wowomgzomg', 'omg')
naiveStringSearch('lolarielolloled', 'lol')

// *** Colt's answer ***

function naiveStringSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j  = 0; j < short.length; j++){
            console.log(long[i], short[j])
            // when we break the inner j loop 
            // resets to zero but the i loop continues on
            if(short[j] !== long[i+j]){
                console.log('BREAK');
                break;
            }
            if( j === short.length - 1){
                count ++
            }
        }
    }
    console.log('count', count);
    return count;
}

naiveStringSearch('lorielol loled', 'l');