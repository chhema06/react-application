// switch case secondexample
 function getDayName(daynumber){
    let dayname;
switch(daynumber){
    case 1:
        dayname = "monday"
        break;
    case 2:
        dayname = "tuesday"
        break;
    case 3:
        dayname = "wednesday"
        break;
    case 4:
        dayname = "thursday"
        break;
    case 5:
        dayname = "friday"
        break;
    case 6:
        dayname = "saturday"
        break;
    case 7:
        dayname = "sunday" 
        break;
    default:
        dayname = "invalid day number.please enter a number between 1 and 7"                         
}
console.log(dayname(1))
}