// Environment: STAGING 
// Base URL: https://staging-api.testingacademy.com 
// API Key: stg_key_xxxx-xxxx 
// Timeout: 8000ms 
// Description: Staging - Pre-production mirror

let env = "dev"
const base_url = `https://${env}-api.testingacademy.com`
let timeout;
let API_KEY;
let description;

switch(env){
    case ("dev"):
        console.log(`Environment: ${env.toUpperCase()} Base URL: ${base_url} API Key: dev_key_xxxx-xxxx Timeout: 5000ms Description:`);
        break;

    case ("qa"):
        console.log(`Environment: ${env.toUpperCase()} Base URL: ${base_url} API Key: qa_key_xxxx-xxxx Timeout: 6000ms Description:`);
        break;

    case ("staging"):
        console.log(`Environment: ${env.toUpperCase()} Base URL: ${base_url} API Key: stg_key_xxxx-xxxx Timeout: 7000ms Description:`);
        break;
    case ("prod"):
        console.log(`Environment: ${env.toUpperCase()} Base URL: ${base_url} API Key: prod_key_xxxx-xxxx Timeout: 8000ms Description:`);
        break;
    default:
        console.log(`Environment: ${env.toUpperCase()} Base URL: ${base_url} API Key: def_key_xxxx-xxxx Timeout: 3000ms Description:`);
        break;
}