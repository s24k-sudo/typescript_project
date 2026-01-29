console.log("These are the examples of the type gurds in TS");
var my_number;
my_number = 10;
console.log("The type of my number is :" + typeof my_number);
console.log("typeof ends ");
var obj1 = { id: 1, name: 'Soham' };
var obj2 = { name: "Soham", rollno: 101 };
console.log("whether the name present in the object one :" + ('name' in obj1));
console.log("Whether age property present in the obj2 :" + ('age' in obj2));
var Parent = /** @class */ (function () {
    function Parent(pid) {
        this.pid = pid;
    }
    return Parent;
}());
var child = /** @class */ (function () {
    function child(pid, cid, cname) {
        this.cid = cid;
        this.cname = cname;
    }
    return child;
}());
var c = new child(1, 101, "Soham");
console.log("Is c instance of the class child: " + (c instanceof child));
console.log("Is c instance of parent class :" + (c instanceof Parent));
