
var choice = prompt("Enter 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division, 5 for modulus, 6 for square numbers,  7 for cube numbers, 8 for square root, 9 for cube root ");
inputtaking();
if(choice == "1"){
    addition(firstNum,secondNum);
}
else if(choice == '2'){
    subtraction(firstNum,secondNum);
}
else if(choice == '3'){
    multiplication(firstNum,secondNum);
}
else if(choice == '4'){
    division(firstNum,secondNum);
}
else if(choice == '5'){
    modulus(firstNum,secondNum);
}
else if(choice == '6'){
    squarenumbers(firstNum);
}
else if(choice == '7'){
    cubenumbers(firstNum);
}
else if(choice == '8'){
    squareroot(firstNum);
}
else if(choice == '9'){
    cuberoot(firstNum);
}
function addition(num1,num2){
    var sum = num1+num2;
    console.log("The summation of "+ num1+ " and "+ num2+ " is " + sum+ ".");
}
function subtraction(num1,num2){
    var difference = num1-num2;
    console.log("The difference of "+ num1+ " and "+ num2+ " is " + difference+ ".");
}
function multiplication(num1,num2){
    var product = num1*num2;
    console.log("The product of"+ num1 +"and" + num2 +" is" + product +".");
}
function division(num1,num2){
    var quotient=num1/num2;
    console.log("The quotient of" + num1 +"and" + num2 +"is" + quotient +".");
}
function modulus(num1,num2){
    var remainder=num1%num2;
    console.log("The remainder of " + num1 +"and" + num2 +"is" + remainder +".");
}
function squarenumbers(num1){
    var square=num1*num1;
    console.log("The square of the number" + num1  +"is" + square +".");
}
function cubenumbers(num1){
    var cube=num1*num1*num1;
    console.log("The cube of the number"+ num1+"is" + cube +".");
}
function squareroot(num1){
    var squareroot=Math.sqrt(num1);
    console.log("The square of the number" + num1  +"is" + squareroot +".");
}
function cuberoot(num1){
    var cuberoot=Math.cbrt(num1);
    console.log("The cube of the number"+ num1+"is" + cuberoot +".");
}
function inputtaking(){
    if(choice==1 || choice==2 || choice==3 || choice==4 || choice==5 ){
    
        var firstNum  = parseInt(prompt("Enter first number"));
        var secondNum  = parseInt(prompt("Enter second number"));   
    }
    else{
           var firstNum  = parseInt(prompt("Enter first number"));
    }

    
  
  
}