console.log ('Hello');

function add (a, b){
    return a+b;
    
}
let result;
for (x=0; x<=1000; x++){
    result = add(x, x+1)
}

console.log("After looping 1000 times:"+ result)



