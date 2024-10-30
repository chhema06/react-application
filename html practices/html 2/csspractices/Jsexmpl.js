// String: Represents textual data
const studentName = "Alice";

// Number: Represents numeric data
const studentAge = 20;

// Boolean: Represents a true/false value
const isEnrolled = true;

// Null: Represents an intentional absence of any value
let studentGrade = null; // Initially, the grade is unknown

// Undefined: A variable that has been declared but not assigned a value
let favoriteSubject; // No value assigned yet

// Symbol: A unique and immutable value (introduced in ES6)
const studentID = Symbol("studentID"); // Unique identifier

// BigInt: Represents integers larger than 2^53 - 1
const largeNumber = BigInt(123456789012345678901234567890);

// Array: A collection of ordered values
let subjects = ["Math", "Science", "History"];
console.log(subjects)

// Object: A collection of key-value pairs
const studentProfile = {
    name: studentName,
    age: studentAge,
    enrolled: isEnrolled,
    grade: studentGrade,
    favoriteSubject: favoriteSubject,
    [studentID]: "A12345", // Using a symbol as a property key
    subjects: subjects, // Array of subjects
    largeNumber: largeNumber // BigInt value
};

// Function: A block of code that performs a task
function displayProfile(profile) {
    console.log(`Name: ${profile.name}`);
    console.log(`Age: ${profile.age}`);
    console.log(`Enrolled: ${profile.enrolled}`);
    console.log(`Grade: ${profile.grade !== null ? profile.grade : "Not assigned"}`);
    console.log(`Favorite Subject: ${profile.favoriteSubject !== undefined ? profile.favoriteSubject : "Not specified"}`);
    console.log(`Subjects: ${profile.subjects.join(", ")}`);
    console.log(`Student ID: ${profile[studentID]}`);
    console.log(`Large Number: ${profile.largeNumber}`);
}

// Displaying the student profile
displayProfile(studentProfile);
