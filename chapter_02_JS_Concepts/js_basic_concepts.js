
function checkvar(){
    var a = 10;
    console.log("var:",a)
    if (a==10){
        var a = 20;
    }
    console.log("var:",a)
}

function checklet(){
    let a = 10;
    console.log("let:",a)
    if (a==10){
        let a = 20;
    }
    console.log("let:",a)
}

checkvar()
checklet()