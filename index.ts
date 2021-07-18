
// Any, number, string, boolean, object, Array, Tuple, Enum, undefined, null, void,
//  never, unknown

let myName: string = "tanjin";
myName = "fff";

let age;        // same line a value na dile variable any set hoi
age = 12;
age = "year";

let ages: number;
ages = 7;

let isHungry: boolean = false;

//.....Union ....//
let studentId: number | string;
studentId = "171-15-9185";
studentId = 2;

type stringNumber = string | number;        //custom type 
let employeeId: stringNumber;
employeeId = "9185";
employeeId = 90;

/////////object////////////
type personType = { name: string, age: number, hobby?: boolean };

interface Person {
    name: string;
    age: number;
    hobby?: boolean;
    //interface chaile obj r vitore r o object dite pari 
}

let person: Person = {
    name: "Tanjin",
    age: 12,
    hobby: false,
}

const person1: personType = { 
    name: "Maria",
    age: 11,
}


///Array////
const numbers: (number | string)[] = [33, 23, "tanjin"];

const persons: Person[] = [
    {
        name: "Tanjin",
        age: 12,
        hobby: false,
    },
    {
        name: "Tanjin",
        age: 12,
        hobby: true,
    },
    {
        name: "Tanjin",
        age: 12,
    }
]


//function//
const greatting = (name: string): void =>{
    console.log(`Hello ${name}`)
}

greatting("tanjin")

const add = (a: number, b:number):number => {
    return a+b;
}

const introduce = (person: Person): void => {
    console.log(`Hello my name ${person.name}, and I am ${person.age} years old`)
}

introduce({
    name: "Tanjin",
    age: 12,
})


const introduce1 = ({name, age}: Person): void => {         //Person interface descricture
    console.log(`Hello my name ${name}, and I am ${age} years old`)
}

introduce1({
    name: "Tanjin",
    age: 12,
})


const getArray = (arr: string[]): string[] => {
    return arr
}

getArray(['a'])

//generic/dynamic array////////////////////////////////
const dynamic = <T>(arr: T[]): T[] => {{
    return arr
}}

dynamic<String>(['tanjin', 'ahamed'])
dynamic<number>([9185, 90])


//Literal Types//
type direcation = "left" | "right" | "up" | "down";     //value fixed kore dya

let gameDirecation: direcation = "down"


//enum////////////////////////////////

enum week { 
    Saturday, 
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thrusday,
    Friday
}
enum week1 { 
    Saturday = "Saturday", 
    Sunday = "Sunday", 
    Monday = "Monday",                                                            
}

console.log(week.Monday)    //postion return kore