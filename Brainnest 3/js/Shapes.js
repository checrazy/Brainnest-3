 // diagonal of a square
 const num = 9
 const diagonal = Math.SQRT2 * num
 console.log('Diagonal of a square is: ' + diagonal.toFixed(4))


 //Area of a triangle
 let side1 = 5; 
 let side2 = 6; 
 let side3 = 7; 
 let s = (side1 + side2 + side3)/2;
 let area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
 console.log( "The area of a triangle is "+ area);
 //document.write("the area of a triangle is "+ area);


 //circumference and surface area of a circle
function radius(){
 
let a = parseInt(document.getElementById("area").value);
let b = 3.14*a*a;
let c = 2*3.14*a;
alert('Your surface area is ' +b)
alert('Your Circumference is '+ c)
}