// Show alert when page loads
window.onload = function () {
    alert("Do you want to change the second line of the website?");

    let userChoice = confirm("Click OK to change it or Cancel to keep it.");

    if (userChoice) {
        let newText = prompt("Enter new text for the second line:");

        if (newText !== null && newText.trim() !== "") {
            document.getElementById("Student").innerText = newText;
        } else {
            alert("No changes made.");
        }
    }
};
