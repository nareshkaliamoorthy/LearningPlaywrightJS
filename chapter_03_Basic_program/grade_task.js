/**
Write a program that calculates and displays the letter grade 
for a given numerical score (e.g., A, B, C, D, or F) 
based on the following grading scale:

A: 90-100

B: 80-89

C: 70-79

D: 60-69

F: 0-59 **/

function find_grade_score(grade){

    if (grade === "A"){
        console.log("Score for Grade"+grade+": 90-100")
    }
    else if (grade === "B"){
        console.log("Score for Grade"+grade+": 80-89")
    }
    else if (grade === "C"){
        console.log("Score for Grade"+grade+": 70-79")
    }
    else if (grade === "D"){
        console.log("Score for Grade"+grade+": 60-69")
    }
    else if (grade === "F"){
        console.log("Score for Grade"+grade+": 0-59")
    }
}


function find_numerical_score(number){

    if (number >=0 & number <60){
        console.log("Grade for score "+number+": F")
    }
    else if (number >=60 & number <70){
        console.log("SGrade for score "+number+": D")
    }
    else if (number >=70 & number <80){
        console.log("Grade for score "+number+": C")
    }
    else if (number >=80 & number <90){
        console.log("Grade for score "+number+": B")
    }
    else if (number >=90 & number <=100){
        console.log("Grade for score "+number+": A")
    }
    else{
        console.log("Score must be greater than 0 and less than 100")
    }
}


find_grade_score("F")
find_numerical_score (700)