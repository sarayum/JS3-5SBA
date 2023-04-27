// class Person {
//     constructor(firstname, lastname, age) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }
//     buttonClicked(event){
//              event.preventDefault();
//             document.getElementById("output").innerHTML = `Hello, ${this.firstname} ${this.lastname}! You are ${this.age} years old.`;
//          //else {
//         //     // document.getElementById("output").innerHTML = `Form not submitted!`;
//         //     return;
//         // }
//     }


// }

// const fname = document.getElementById("fname");

// const lname = document.getElementById("lname");

// const age = document.getElementById("age");

// const btnClicked = document.getElementById("submit");

// btnClicked.addEventListener('click',() => {
// let newPerson = new Person(fname.value, lname.value, age.value);
// console.log(fname.value);
// console.log(lname.value);
// console.log(age.value);
// newPerson.buttonClicked(); 
// });
// // btnClicked.addEventListener('click', newPerson.buttonClicked());



         //else {
        //     // document.getElementById("output").innerHTML = `Form not submitted!`;
        //     return;
        // }

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const age = document.getElementById("age");
const btnClicked = document.getElementById("submit");
const output =  document.getElementById("output");

class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    displayOutput(){
        let age1 = Number(age.value);
        console.log(typeof age1);
       if((typeof fname.value === "string") && (typeof lname.value === "string") && (Number.isInteger(age1)) === true){
            //console.log(typeof age.value);
         output.innerText = `Hello, ${this.firstname} ${this.lastname}! You are ${this.age} years old.`;
        } else {
            output.innerText = "Enter valid input";
        }
 }
}
btnClicked.addEventListener('click',(event) => {
    let newPerson = new Person(fname.value, lname.value, age.value);
        event.preventDefault();
console.log(fname.value);
console.log(lname.value);
console.log(age.value);
newPerson.displayOutput();
});
