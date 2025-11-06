// entries method : 
// Object.entries() is build in method that returns an array of key value pairs from an object.


let person = {
    fname : "afnaan",
    age : 20,
    isAlive : true
}

console.log(Object.entries(person));

let details = {
    name : "afnaan",
    roll : 978564,
    school : "AZPS"
}

let output = Object.entries(details);

console.log(output);