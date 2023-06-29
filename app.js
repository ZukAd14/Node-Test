const os = require('os');
console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('User: ', os.userInfo());


const fs = require('fs');

const genders = [
    'M',
    'F',
];
const maleNames = [
    'John',
    'Jack',
    'Arnold',
    'Mike',
    'Steve',
    'Maurice',
];
const femaleNames = [
    'Jane',
    'Jessica',
    'Victoria',
    'Amanda',
    'Martha',
    'Olivia',
];
const lastNames = [
    'Doe',
    'Maverick',
    'Weasley',
    'Sins',
    'Winchester',
    'Benington',
];

const randChoice = (arr) => {
    const length = arr.length
    const indexNumber = Math.floor(Math.random() * length);

    return arr[indexNumber]
}
const people = [];

for(let i=0; i<20; i++){
    const object = {};
    const gender = randChoice(genders);
    object.gender = gender;
    if(gender === 'M'){
        const firstName = randChoice(maleNames);
        object.firstname = firstName;
    } else {
        const firstName = randChoice(femaleNames);
        object.firstname = firstName;
    }

    const lastName = randChoice(lastNames);
    object.lastName = lastName;
    const age = Math.floor(Math.random() * (78 - 18) + 18);
    object.age = age;
    people.push(object);
    
}
console.log('people: ', people);
const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
    if (err) throw err;
    console.log('Succes!');
});