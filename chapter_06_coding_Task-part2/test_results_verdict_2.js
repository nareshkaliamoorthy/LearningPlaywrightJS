const testResults = ["pass", "pass", "pass", "pass", "skip", "pass", "pass", "pass"];
let total_count = testResults.length;
let pass_count = 0;
let fail_count = 0; 
let skip_count = 0;
let pass_rate = 0;
let verdict = null;

for (i=0; i<total_count; i++){
    if (testResults[i] ==="pass"){
        pass_count++;
    }
    else if (testResults[i] === "fail"){
        fail_count++;
    }
    else if (testResults[i] === "skip"){
        skip_count++;
    }
}

pass_rate = (pass_count / total_count * 100);

if (pass_count == total_count){
    verdict = "all passed → ready for release";
}
else if (fail_count <= 2) {
    verdict = "review";

}
else if (fail_count > 2) {
    verdict = "block release";
}

console.log ("Total Tests: ",total_count, " | Passed: ",
    pass_count, " | Failed: ",fail_count, " | Skipped: ", skip_count, 
    " | Pass_Rate: ",pass_rate, " | OVERALL TEST STATUS: ",verdict );
