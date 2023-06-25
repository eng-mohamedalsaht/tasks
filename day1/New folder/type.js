var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = [];
arr.push("hamaa");
arr.push("ali");
var arr1 = [];
arr1.push("ali");
arr1.push(5);
// arr1.push(true);
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Blue"] = 1] = "Blue";
    color[color["Green"] = 2] = "Green";
})(color || (color = {}));
var x = 5;
x = true;
// x="hamada";
function sum(num1, num2) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var res = 0;
    for (var index = 0; index < rest.length && !isNaN(rest[index]); index++) {
        res = rest[index];
    }
    return num1 + num2 + res;
}
console.log(sum(1, 2, 3));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.viewEmployeeAddress = function (employee) {
        return employee.address;
    };
    return Manager;
}(Employee));
// Create an instance of Employee using the provided object
var employeeData = {
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
var employee = new Employee(employeeData);
// Create an instance of Manager
var manager = new Manager(employeeData);
// View the employee's address using the Manager class
var address = manager.viewEmployeeAddress(employee);
console.log(address);
var xyz = new Employee();
xyz.id = 5;
console.log(xyz);
