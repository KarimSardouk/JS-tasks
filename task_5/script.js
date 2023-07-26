const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    let message = "";

    if (number % 2 === 0) {
        message = "this number is even";
    } else {
        message = "this number is odd";
    }

    console.log(number + " - " + message);
}
