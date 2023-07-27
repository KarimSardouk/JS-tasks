let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  let message = "";

  if (number % 3 === 0) {
    message = "Divi 3";
  } 
  if (number % 5 === 0) {
    if (message !== "") {
      message += " & ";
    }
    message += "Divi 5";
  }

  // If the number is not divisible by either 3 or 5, the message remains empty.

  if (message !== "") {
    console.log(number + " - " + message);
  } else {
    console.log(number);
  }
}
