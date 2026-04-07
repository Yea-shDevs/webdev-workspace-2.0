function calculatesimple() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let time = document.getElementById("time").value;
    let simpleinterest = (principal * rate * time) / 100;
    document.getElementById("result").innerHTML ="Simple Interest =" + simpleinterest;
}