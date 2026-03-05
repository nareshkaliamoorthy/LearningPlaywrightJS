var user = 0;
const roles = ["admin", "editor", "viewer","tester","manager"];

for (let i =1; i<=8;i++){
    if (roles[user]===undefined){
            user = 0;
    }
    if (i%3!==0){
        console.log(`USR-000${i} | TestUser_${i} | testuser${i}@testingacademy.com | ${roles[user]} | ACTIVE`)
    }
    else if (i%3===0){
        console.log(`USR-000${i} | TestUser_${i} | testuser${i}@testingacademy.com | ${roles[user]} | INACTIVE`)
    }
    user++;
}