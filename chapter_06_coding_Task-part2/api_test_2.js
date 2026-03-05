let i =1;
do {
    let random_value = Math.random();
    if (random_value > 0.6){
        console.log (random_value);
        console.log(`Attempt ${i}: ✅ SUCCESS (Response 200 OK) API call 
            PASSED after ${i} attempt(s).`);
        break;
        }
    else {
        console.log (`Attempt ${i}: ❌ FAILED (Timeout/Error)`);
    }
    i++;

} while (i<=5)