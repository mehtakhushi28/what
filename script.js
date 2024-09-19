// Get elements
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const questionScreen = document.getElementById("question-screen");
const nextScreen = document.getElementById("next-screen");
const careless = document.getElementById("careless"); // Updated to match the id in index.html

// Function to move the first option randomly on the screen
function moveOption1() {
    // Random position calculation
    const randomX = Math.random() * window.innerWidth * 0.8; // 0.8 to keep it inside the window
    const randomY = Math.random() * window.innerHeight * 0.8;

    // Move the option to new position
    option1.style.position = "absolute";
    option1.style.left = randomX + "px";
    option1.style.top = randomY + "px";
}

// Event listener for Option 1 to move it
option1.addEventListener("click", moveOption1);

// Event listener for Option 2 to go to the next screen
option2.addEventListener("click", function() {
    questionScreen.style.display = "none"; // Hide the current screen
    nextScreen.style.display = "block"; // Show the next screen

    // Play the background music
    careless.play().catch(error => {
        console.error("Error playing audio:", error);
    });

    // Trigger confetti with custom settings
    confetti({
        particleCount: 700,   // 300 particles for decent coverage
        spread: 135,          // Spread of 120-150 for wide screen coverage
        origin: { y: 0.6 },   // Confetti starts from a bit lower than the top
        colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFC0CB', '#FFA500', '#FFD700', '#C0C0C0'], // Red, Green, and Blue confetti colors
    });
});
