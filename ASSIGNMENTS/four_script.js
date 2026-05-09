function changeParagraphColor() {
    let choice = prompt(
        "Which paragraph do you want to change?\n\n" +
        "1 → ABOUT ME\n" +
        "2 → MY GOALS"
    );

    // Convert input safely
    choice = choice ? choice.trim() : "";

    let color = prompt("Enter a color name (e.g., red, blue, green, orange):");

    if (!color) {
        alert("No color entered!");
        return;
    }

    color = color.trim();

    switch (choice) {
        case "1":
            document.getElementById("aboutPara").style.color = color;
            alert("ABOUT ME paragraph color changed to " + color);
            break;

        case "2":
            document.getElementById("goalPara").style.color = color;
            alert("MY GOALS paragraph color changed to " + color);
            break;

        default:
            alert("Invalid choice! Please enter 1 or 2.");
    }
}
