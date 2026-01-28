let age :number=23;

if(age>18){
   console.log("You are eligible for voting")
} //if conditional statement ends here


let marks :number  =50;

if (marks >=60){
    console.log("You earned First class Distinction ");
}else{
  console.log("You need to work hard");
} //if else statement ends here

let score :number =70;
if (score >=90){
    console.log("Grade A+");
}
else if(score >=80){
    console.log("Grade A");
}
else if (score>=70){
    console.log("Grade B");
}
else if(score <50){
    console.log("Fail");
} //else if lader ends here


let day :number =3;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Invalid day");
      
}//switch case ends here


