const studentText = document.getElementById("Student");

studentText.addEventListener("click", function () {
    let color = prompt("Enter a color (red, green, blue):");

    if (color === "red") {
        studentText.style.color = "red";
    } 
    else if (color === "green") {
        studentText.style.color = "green";
    } 
    else if (color === "blue") {
        studentText.style.color = "blue";
    } 
    else {
        alert("Please enter only red, green, or blue.");
    }
});
