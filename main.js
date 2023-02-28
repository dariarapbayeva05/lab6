// 1
function print(){
    for(let i=0; i<3; i++){
      console.log("Hello world!")
    }
  }
  print()
  
  
  //10
function isEqual(number1, number2) {
    if (number1 === number2) {
      console.log("The numbers are equal.");
    } else {
      console.log("The numbers are not equal.");
    }
  }
  isEqual(2,5)
  isEqual(6,6)
  
 //15
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Invalid day number";
    }
  }
  console.log(getDayOfWeek(3))
  
  
  
  