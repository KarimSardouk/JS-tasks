// Get references to the modal and close button
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close');

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listener for the "Open Modal" button
const openModalButton = document.getElementById('openModalBtn');
openModalButton.addEventListener('click', openModal);

// Event listener for the close button (X mark)
closeButton.addEventListener('click', closeModal);

// Event listener for the grey area (overlay)
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
