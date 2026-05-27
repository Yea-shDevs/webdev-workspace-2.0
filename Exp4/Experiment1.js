function calculateResult() {

    let subjects = document.getElementById("subjects").value;
    let total = 0;

    for (let i = 1; i <= subjects; i++) {
        let marks =parseFloat(prompt("Enter marks for subject " + i + ":"));
        total = total + marks;
    }

    let percentage = total / subjects;
    let grade;

    if (percentage >= 90) {
        grade = "A+";   
    } 
    else if (percentage >= 75) {
        grade = "A";
    } 
    else if (percentage >= 60) {
        grade = "B";
    } 
    else if (percentage >= 50) {
        grade = "C";
    } 
    else {
        grade = "Fail";
    }
    
    document.getElementById("result").innerHTML =
        "Total Marks: " + total +
        "<br>Percentage: " + percentage.toFixed(2) + "%" +
        "<br>Grade: " + grade;
}