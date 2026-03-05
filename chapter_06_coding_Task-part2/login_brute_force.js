const username = "admin@testingacademy.com";
const pwd = "Test@1234";
var attempt = 0;
let attempts = ["wrong", "wrong", "wrong", "correct"];

do {
    if (attempts[attempt]==="wrong" && attempt<=2){
        console.log(`❌ FAILED - Strike ${attempt+1}/3`);
    }
    else if (attempts[attempt]==="correct" && attempt<=2){
        console.log(`PASSED - Strike ${attempt+1}/3`);
        break;
    }
    else if (attempt>2){
        console.log(`🚨 ACCOUNT LOCKED Attempt ${attempt+1}: 🔒 ACCOUNT LOCKED - Rejected`)
    }
    attempt++;
    } while (attempt<attempts.length);
