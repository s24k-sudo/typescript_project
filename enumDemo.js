"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userRole;
(function (userRole) {
    userRole["Admin"] = "Admin";
    userRole["User"] = "User";
    userRole["Guest"] = "Guest";
})(userRole || (userRole = {}));
function checkRole(role) {
    if (role == userRole.Admin) {
        console.log("You have full access");
    }
    else if (role == userRole.User) {
        console.log("You have limited access");
    }
    else if (role == userRole.Guest) {
        console.log("You dont have acces to this resource");
    }
    return "Role checked";
}
var rl = require("readline");
var readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter your role ", function (answer) {
    checkRole(answer);
    readline.close();
});
