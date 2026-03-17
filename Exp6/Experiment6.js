
let heading = document.getElementById("jsid");
let input = document.getElementById("hello");
let para = document.getElementById("para");
let changeHeadingbtn = document.getElementById("changeheading");
let changebgbtn = document.getElementById("changeBackground");
let increasefontbtn = document.getElementById("increasefont");
let hidebtn = document.getElementById("hide");
let resetbtn = document.getElementById("reset");
changeHeadingbtn.onclick = function () {
    if (input.value !== "") {
        heading.innerText = input.value;
    } else {
        alert("Please enter some text!");
    }
};
changebgbtn.onclick = function () {
    document.body.style.backgroundColor = "lightblue";
};
increasefontbtn.onclick = function () {
    para.style.fontSize = "20px";
};
hidebtn.onclick = function () {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
};
resetbtn.onclick = function () {
    heading.innerText = "Welcome to the JavaScript";
    document.body.style.backgroundColor = "white";
    para.style.fontSize = "16px";
    para.style.display = "block";
    input.value = "";
};