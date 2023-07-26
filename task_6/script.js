let selectedNumber = null;

function showNumber(number) {
    selectedNumber = number;
}

function submitSelection() {
    if (selectedNumber !== null) {
        alert("You selected number " + selectedNumber);
    } else {
        alert("Please select a number before clicking Submit.");
    }
}
