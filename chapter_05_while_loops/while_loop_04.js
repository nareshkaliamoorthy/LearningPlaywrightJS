//Calculate sum of first 10 natural numbers

let i=-5;
total =0;
while (i<=10){
    if ((typeof(i)==="number") && (i>0)){
        total = total + i;
    }
    i++;
}

console.log(total)