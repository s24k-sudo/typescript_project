enum userRole{
    Admin ="Admin",
    User ="User",
    Guest ="Guest"
}

function checkRole(role:userRole):string{
    if (role==userRole.Admin){
        console.log("You have full access");
    }
    else if (role==userRole.User){
        console.log("You have limited access");
        
    }else if (role==userRole.Guest){
     console.log("You dont have acces to this resource");
    }
    
     return "Role checked";
}

 import  * as rl from "readline";

 const readline =rl.createInterface({
    input: process.stdin,
    output: process.stdout
 })

 readline.question("Enter your role ",
    (answer)=>{checkRole(answer as userRole); 
        readline.close();}
 )