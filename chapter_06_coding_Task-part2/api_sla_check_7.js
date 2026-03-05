let response_times = [120, 230, 450, 1, 510, ,1020, 180, 620];
let SLA_LIMIT = 500;
let min_response_time = response_times[0];
let max_response_time = response_times[0];
let SLA_breach_count = 0;
let SLA_breach_rate = null;
let i = 0;

while (i < response_times.length){

    
    if (response_times[i] <= min_response_time){
        min_response_time = response_times[i];
    }
    
    if (response_times[i] > SLA_LIMIT){
        SLA_breach_count++;
    }
    if (response_times[i] > max_response_time){
        max_response_time = response_times[i]
    }
        
    i++;
}

let sla_rate = ((SLA_breach_count/response_times.length)*100).toFixed(2);

console.log(`Total Response Count: ${response_times.length} | Min Response Time: ${min_response_time} | Max Response Time: ${max_response_time} | SLA Breach Count: ${SLA_breach_count} (${sla_rate}%)`);



