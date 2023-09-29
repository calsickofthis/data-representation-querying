// Starting Task 2 
// Part A of Task 2 on problem sheet
const DataRep = () => {
    return "Data Representation & Querying"
}
console.log(DataRep());

// B of Task 2 on problem sheet
const partb = (argument) => {
    return argument
}
console.log(partb(2));

// C of Task 2 on problem sheet
const partc = (num1, num2) => {
    return num1 + num2
}
console.log(partc(2, 3));

// D of Task 2 on problem sheet
const ages = [25, 31, 42, 77];

const partd = ages.map((num) => {
    // return num * 10;
    if (num < 70) {
        return num * 2
    } else {
        return num
    }
})
console.log(partd)

// Finished Task 2 
