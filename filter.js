//Step 1: Create a cutom filter function
function customFilter(array, callback) {
    //Step 2: Iniitalize an empty array
    const filteredArray = [];
    //Step 3: Iterate over each element of the array
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const index = i;
        const arr = array;
        //Step 4: Call/Apply the callback function for each element
        const result = callback(element, index, arr);
        //Step 5: Check if the result is true
        if (result) {
            filteredArray.push(element);
        }
    }
    //Step 6: Return the filtered array
    return filteredArray;
}
 
//Filter out Odd Numbers
const numbers = [1, 2, 3, 4, 5];

//Option 1
function isOdd(number){
    return number % 2 !== 0;
}

const oddNumbers = customFilter(numbers, isOdd);
console.log(oddNumbers); 

//Option 2
const oddNumber = customFilter(numbers, number=>number%2!==0);
console.log(oddNumber);// Output: [1, 3, 5]


//Reduce array to its sum
const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sumOfNumbers); // Output: 15

// Map each number to its square
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// const names =[
//     {name: "Chelsea", Age: 12},
//     {name: "Erick", Age: 18},
//     {}
    
// ]
const names=[
    [{nam:"Chelsea", Age:12}], [{nam:"Erick", Age:21}]
]


// console.log(names.flat().filter(name => name.nam==="Chelsea"));

//flat multidimensional-single dimensional
console.log(customFilter(names.flat(),name => name.nam==="Chelsea"));

//
const multiDimArray = [[1, 2], [3, 4], [5, 6]];

const filteredArray = customFilter(multiDimArray, subArray => subArray[1] === 4);
console.log(filteredArray)
//_not intrested in the the value of element itself but index
console.log(customFilter(multiDimArray, (_, index) => index === 1));



// const name=customFilter(names, function(name, index){
//     return name;
// });
// console.log(name);
