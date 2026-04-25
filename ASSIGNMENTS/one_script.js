alert("Do you want to change the second line of the website?");

const courseLine = document.getElementById("Student");

courseLine.addEventListener("click", function () {
    let newText = prompt("Enter new text for the second line:");

    if (newText !== null && newText.trim() !== "") {
        courseLine.textContent = newText;

        // 👇 Change font size a little bigger
        courseLine.style.fontSize = "45px";   // original was ~default, now slightly bigger
        courseLine.style.fontWeight = "bold";  // optional improvement

    } else {
        alert("No changes made.");
    }
});
