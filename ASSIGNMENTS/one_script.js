alert("Do you want to change the second line of the website?");

const courseLine = document.getElementById("Student");

courseLine.addEventListener("click", function () {
    let newText = prompt("Enter new text for the second line:");

    if (newText !== null && newText.trim() !== "") {
        courseLine.textContent = newText;

        // Ask user for font size
        let fontSize = prompt("Enter font size (in px, e.g. 30, 40, 50):");

        if (fontSize !== null && fontSize.trim() !== "" && !isNaN(fontSize)) {
            courseLine.style.fontSize = fontSize + "px";
        } else {
            alert("Invalid font size. Using default size.");
            courseLine.style.fontSize = "45px";
        }

        courseLine.style.fontWeight = "bold";

    } else {
        alert("No changes made.");
    }
});
