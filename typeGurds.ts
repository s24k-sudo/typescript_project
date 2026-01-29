console.log("These are the examples of the type gurds in TS");

let my_number: number;
my_number=10;

console.log("The type of my number is :"+ typeof my_number );


console .log("typeof ends ");

let obj1: { id: number; name: string } = { id: 1, name: 'Soham' };
let obj2: {name: string; rollno: number}= {name: "Soham", rollno:101};

console .log ("whether the name present in the object one :" +('name'in obj1));
console.log ("Whether age property present in the obj2 :"+ ('age'in obj2));

class Parent {
    pid: number ;
    constructor(pid: number){
        this .pid=pid ;

    }
}

class child extends Parent {
    cid: number;
    cname:string
    constructor(pid: number , cid: number, cname: string){
        super(pid);
        this.cid=cid;
        this.cname= cname ;
    }
}

let c=new child (1,101,"Soham");
 console .log("Is c instance of the class child: "+(c instanceof child));
 console.log("Is c instance of parent class :"+(c instanceof Parent ));

