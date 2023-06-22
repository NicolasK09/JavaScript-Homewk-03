//Homework 1
function sumOfPositiveNumbers(n) {
 let sum = 0;

 for (let i = 0; i < n.length; i++) {
 if (n[i] > 0) { 

 sum += n[i]; } }

 return sum;}

const numbers = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];

const result = sumOfPositiveNumbers(numbers);

console.log(result);

//Homework 2

function calculateSum(numbers1) {
    let sum = 0;
    for (let i = 0; i < numbers1.length; i++) {
        sum += numbers1[i];
    }
    return sum;
}

const numbers1= [10, 50, 6, 7, 8, 11, 6, 3, 9];
const result1 = calculateSum(numbers1);
console.log(result1);

//Homework 3

const user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
};

function getFullName(user) {
    if (user.isloggedin) {
        return  'Giorgi Saakadze';
    } else{
        return false;
    }
}

const fullName = getFullName(user);
console.log(fullName);


//Homework 4

function findMaxNumber(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}


const numbers2 = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];
const maxNumber = findMaxNumber(numbers2);
console.log(maxNumber);

//Homework 5

const checkNumber = (number) => {
    if (number % 2 === 0) {
        return 'This number is even.';
    } else{
    return 'This number is odd.';

    }
};

console.log(checkNumber(6));
console.log(checkNumber(7));

//Homework 6

let array = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i = array.length -1; i >= 0; i--) {
    reversedArray.push(array[i]);
}

console.log(reversedArray);


//Homework 7

const calculateUserStatus = (age) => {
    return age > 18 ? 'სრულლოვანი': 'არასრულწლოვანი';
};

console.log(calculateUserStatus(20));
console.log(calculateUserStatus(16));