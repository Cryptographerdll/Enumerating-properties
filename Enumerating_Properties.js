/* Get Properties Descriptors

1- How to iterate through an array
2- How to iterate through an object
3- Get property descriptions from (on, object)
4- Check if the property is enumerable
5- Check if an array of object has property
6- Create student constructor an set properties
7- Iterate and checj if a prototype is enumerable

*/

const grades = [12, 58, 7, 20];

const student = {
    fullName: 'John doe',
    age: 23
};

console.log(Object.getOwnPropertyDescriptor(student, "age"));

for (const val of grades) {
    console.log(val);
}

for (const key in student) {
    console.log(key);
}

// if a property is not enumerable, it will not executed in for in loop

function Student(fullName, age) {

    this.fullName = fullName;
    this.age = age;

    this.getInfo = function() {
        return this.fullName;
    };
}

const $student = new Student("John cobol", 30);
console.log($student);

console.log(Object.getOwnPropertyDescriptor($student, "age"));

console.log($student.propertyIsEnumerable("age")); // true

for (const key in $student) {
    console.log(key);
}