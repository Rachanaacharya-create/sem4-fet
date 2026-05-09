alert("Click the second line to edit it!");

// Get elements
const courseLine = document.getElementById("Student");
const overlay = document.getElementById("overlay");
const cardBox = document.getElementById("cardBox");

// Add click event
courseLine.addEventListener("click", function () {

    // Show overlay (z-index effect)
    overlay.style.display = "block";

    let newText = prompt("Enter new text for the second line:");

    if (newText !== null && newText.trim() !== "") {
        courseLine.textContent = newText;

        let fontSize = prompt("Enter font size (e.g. 20, 30, 40):");
        fontSize = Number(fontSize);

        if (!isNaN(fontSize) && fontSize > 0) {
            courseLine.style.fontSize = fontSize + "px";
        } else {
            alert("Invalid font size. Using default 45px.");
            courseLine.style.fontSize = "45px";
        }

        courseLine.style.fontWeight = "bold";

        // Bring card forward using z-index
        cardBox.style.zIndex = "10";
    } else {
        alert("No changes made.");
    }

    // Hide overlay after interaction
    setTimeout(() => {
        overlay.style.display = "none";
        cardBox.style.zIndex = "1";
    }, 1000);
});
