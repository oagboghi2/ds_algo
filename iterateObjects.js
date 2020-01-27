var object1 = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5
};

function Test(obj){
    for(let key in obj){
        console.log(obj[key])
    }
    
}

Test(object1);