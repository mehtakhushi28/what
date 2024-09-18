const button = document.querySelector('.moving-button');

function moveButton() {
    button.classList.toggle('moving');
}

button.addEventListener('click', moveButton);
