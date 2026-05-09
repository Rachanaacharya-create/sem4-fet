alert("Do you want to change the second line of the website?");

const courseLine = document.getElementById("Student");

courseLine.addEventListener("click", function () {

    let newText = prompt("Enter new text for the second line:");

    if (newText !== null && newText.trim() !== "") {

        // Change text
        courseLine.textContent = newText;

        // Font size input
        let fontSize = prompt("Enter font size (e.g. 20, 30, 40):");
        fontSize = Number(fontSize);

        if (!isNaN(fontSize) && fontSize > 0) {
            courseLine.style.fontSize = fontSize + "px";
        } else {
            alert("Invalid font size. Using default 45px.");
            courseLine.style.fontSize = "45px";
        }

        // Styling
        courseLine.style.fontWeight = "bold";

        // ✅ Z-INDEX in JavaScript (important: needs position)
        courseLine.style.position = "relative";
        courseLine.style.zIndex = "999";

    } else {
        alert("No changes made.");
    }
});
