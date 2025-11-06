// 4. Object.freeze()
// freezes an object so that :
// you cannot add, remove, or change properties.
// its makes the object completely immutable.

let person = {
    fname : "afnaan",
    age : 20,
    city : "hyderabad"
}

Object.freeze(person); // does not allow to make crud operations

person.phone = 9573932;
person.fname = "md";
delete person.person 
console.log(person);


//5.Object.isfrozen() : checks if the object is freeze or not

console.log(Object.isFrozen(person))
