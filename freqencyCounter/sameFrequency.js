function sameFrequency(a,b){
    // good luck. Add any arguments you deem necessary.
    var strA = a.toString().split('');
    var strB = b.toString().split('');
    console.log(strA, strB)
    if(strA.length == 1 || strB.length == 1){
        return 1
    }
    var objA = {};
    var objB = {};
    
    for(let val of strA){
        objA[val] = (objA[val] || 0) + 1;
    }

    for(let val of strB){
        objB[val] = (objB[val] || 0) + 1;
    }

    for(let key in objA){
        if(objA[key] !== objB[key]) return false;
      }
     
      return true;
    
    // if(Object.keys(objA).length === Object.keys(objB).length){
    //     console.log(" It equaled")
    //     return true;
    // }else {
    //     return false
    // }
  }

  sameFrequency(10,31)