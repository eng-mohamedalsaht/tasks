let arr: string[] = [];
arr.push("hamaa");
arr.push("ali");
// arr.push(5);

type t = string | number;

let arr1: t[] = [];
arr1.push("ali");
arr1.push(5);
// arr1.push(true);


enum color {
    Red = 0, Blue = 1, Green = 2
}

let x: number | boolean = 5;
x = true;
// x="hamada";


function sum(num1: number, num2: number, ...rest: number[]) {
    let res = 0;
    for (let index = 0; index < rest.length && !isNaN(rest[index]); index++) {
        res = rest[index];

    }
    return num1 + num2 + res;
}
console.log(sum(1, 2, 3))



// ------------------------------
interface IEmployee {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
}

interface Address {
    street: string;
    city: string;
    
    geo: {
        lat: string;
        lng: string;
    };
}

class Employee implements IEmployee {
   //  id: number;
    username: string;
    address: Address;
    name: string;
    email: string;

    constructor( id,name,usernem,email,address) {
     //   this.id = id;

     this.name = name;
        this.username = usernem;
        this.email = email;
        this.address = address;
    
    
    }
    id: number;

    get getid(){
        return this.id;
    }
}

class Manager extends Employee {
    viewmanger (employee: Employee): Address {
        return this.address;
    }
}

const employeeData: IEmployee = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496",
        },
    },
};
