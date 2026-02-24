/**Write a program that classifies a triangle based on its side lengths.
 * Given three input values representing the lengths of the sides, 
 * determine if the triangle is equilateral (all sides are equal), 
 * isosceles (exactly two sides are equal), 
 * or scalene (no sides are equal).
 * Use an if-else statement to classify the triangle.**/

function triangle_classifier(x, y, z){
   
    if ((x === y) && (y === z)) {
        console.log("Traingle is Equilateral")
    }
    else if (((x === y) && (y !== z)) || ((x === z) && (z !== y)) || ((y === z) && (z !== x))) {
        console.log("Traingle is isosceles")
    }
    else if (((x !== y) && (y !== z)) || ((x !== z) && (z !== y)) || ((y !== z) && (z !== x))) {
        console.log("Traingle is scalene")
    }

}

triangle_classifier(40,30,10)