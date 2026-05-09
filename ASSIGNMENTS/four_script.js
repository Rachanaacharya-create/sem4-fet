const studentText = document.getElementById("Student");

studentText.addEventListener("click", function () {
    let color = prompt("Type a color: red, green, or blue");

    if (color === null) return;

    color = color.toLowerCase().trim();

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
        alert("Please enter only: red, green, or blue");
    }
});
