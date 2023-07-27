function addition(numOne, numTwo) {
    let add = numOne + numTwo;
    console.log(add);
}

addition(1, 2);

function subtractTwoNumbers(numOne, numTwo) {
    let subtract = numOne - numTwo;
    console.log(subtract);
}

subtractTwoNumbers(2, 1);

function multiplyTwoNumbers(numOne, numTwo) {
    let multiply = numOne * numTwo;
    console.log(multiply);
}

multiplyTwoNumbers(2, 2);

function divideTwoNumbers(numOne, numTwo) {
    let divide = numOne / numTwo;
    console.log(divide);
}

divideTwoNumbers(15, 3);

function myCalculator(operation, num1, num2) {
    if (operation === "+") {
        addition(num1, num2);
    }
    else if (operation === "-") {
        subtractTwoNumbers(num1, num2);
    }
    else if (operation === "/") {
        divideTwoNumbers(num1, num2);
    }
    else if (operation === "*") {
        multiplyTwoNumbers(num1, num2);
    }
}

myCalculator("/", 16, 10);
