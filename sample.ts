let msg:string="Hello typescript";
console.log(msg);
let age:number=25;
let Pname:string="Soham";
console.log("My name is "+Pname+" and my age is "+age);
let country="India";
let population=140;
let isCapital=false;
console.log(`Country: ${country}, Population: ${population} crores, Is Capital: ${isCapital}`);

let marks:number[]=[90,20,30,40];
let sname:string[]=["Soham","Rohan","Kartik","Neha"];
console.log("Marks: ",marks ,"SNames: ",sname);

let Employee:[number,string]=[101,"Soham"];
console.log("Employee ID: ",Employee[0]," Employee Name: ",Employee[1]);

let data:any=10;
data="Soham";
data=true;
console.log("Data: ",data);

let response:any;
response=200;
response="OK";
response=true;
console.log("Response: ",response);