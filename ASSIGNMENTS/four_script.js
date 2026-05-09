const courseLine = document.getElementById("Student");

// Only 3 colors
const colors = ["red", "blue", "green"];

let index = 0;
let intervalId = null;

courseLine.addEventListener("click", function () {

    // If already running, stop it
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        courseLine.style.color = "rgb(105, 191, 220)"; // reset original color
        return;
    }

    // Start color changing pattern
    intervalId = setInterval(() => {
        courseLine.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 700);

});
