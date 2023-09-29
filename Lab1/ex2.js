// Part A of Task 2 on problem sheet

// creating function for task a 
const parta = () => {
    // return string
    return "Data Representation & Querying"
}
//print function return
console.log(parta());

// B of Task 2 on problem sheet
//takes argument and returns it
const partb = (argument) => {
    return argument
}
//print function and return
console.log(partb(2));

// C of Task 2 on problem sheet
//takes two inputs
const partc = (num1, num2) => {
    // adds two arguments and returns that number
    return num1 + num2
}
// print function return
console.log(partc(2, 3));

// D of Task 2 on problem sheet
// ages array
const ages = [25, 31, 42, 77];

// create function and map - multiply any numbers in array by 2
const partd = ages.map((age) => {
    // return num * 10;
    if (age < 70) {
        return age * 2
    } else {
        return age
    }
})
//print the return of the function
console.log(partd)
