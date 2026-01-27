function optional (name : string, age?: number){
    console.log( name, age);
}
optional ("Soham",25);
optional("Soham")
export{};

function defaultParam( name:string, age:number = 18){
    console.log(name ,age);
}
defaultParam("Soham",25);
defaultParam("Soham");
export{};