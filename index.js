// Any, number, string, boolean, object, Array, Tuple, Enum, undefined, null, void,
//  never, unknown
var myName = "tanjin";
myName = "fff";
var age; // same line a value na dile variable any set hoi
age = 12;
age = "year";
var ages;
ages = 7;
var isHungry = false;
//.....Union ....//
var studentId;
studentId = "171-15-9185";
studentId = 2;
var employeeId;
employeeId = "9185";
employeeId = 90;
var person = {
    name: "Tanjin",
    age: 12,
    hobby: false
};
var person1 = {
    name: "Maria",
    age: 11
};
///Array////
var numbers = [33, 23, "tanjin"];
var persons = [
    {
        name: "Tanjin",
        age: 12,
        hobby: false
    },
    {
        name: "Tanjin",
        age: 12,
        hobby: true
    },
    {
        name: "Tanjin",
        age: 12
    }
];
//function//
var greatting = function (name) {
    console.log("Hello " + name);
};
greatting("tanjin");
var add = function (a, b) {
    return a + b;
};
var introduce = function (person) {
    console.log("Hello my name " + person.name + ", and I am " + person.age + " years old");
};
introduce({
    name: "Tanjin",
    age: 12
});
