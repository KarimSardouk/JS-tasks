function chooseNumber(number) {
    localStorage.setItem("chosenNumber", number); // Store the chosen number in local storage
}

function submitSelection() {
    const chosenNumber = localStorage.getItem("chosenNumber");
    if (chosenNumber) {
        alert("You chose number: " + chosenNumber);
    } else {
        alert("Please choose a number before submitting.");
    }
}