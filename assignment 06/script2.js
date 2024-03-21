function findLarger() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (num1 > num2) {
        document.getElementById("result").textContent = "Larger number: " + num1;
    } else if (num2 > num1) {
        document.getElementById("result").textContent = "Larger number: " + num2;
    } else {
        document.getElementById("result").textContent = "Numbers are equal";
    }
}
