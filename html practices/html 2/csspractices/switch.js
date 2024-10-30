// switch case
let name = prompt("Please enter your name");
let marks = prompt("enter your marks");

switch(true){
    case marks>90 && marks<=100:
        result = "Great you are the topper"
        break;
    case marks>65 && marks<=90:
        result = "congrates you got a first class"
        break;
    case marks>40 && marks<=65:
        result = " you got a second class"
        break;
    case marks>30 && marks<40:
        result = "you got a third class"
         break;
    case marks<30:
        result = "sry u r failed,better luck next time"
        break;

}
document.write("hello"+name+result)