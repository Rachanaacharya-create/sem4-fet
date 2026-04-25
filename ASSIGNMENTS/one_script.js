
    alert("Do you want to change the second line of the website?");

    const courseLine = document.getElementById("Student");
    courseLine.addEventListner("Click",function(){

        let newText = prompt("Enter new text for the second line:");

        if (newText !== null && newText.trim() !== "") {
          courseLine.textContent=newText;
        } else {
            alert("No changes made.");
        }
    
}};
