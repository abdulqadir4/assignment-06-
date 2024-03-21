function checkCharType() {
    var char = document.getElementById("charInput").value;

    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        if (char >= 'a' && char <= 'z') {
            document.getElementById("result").textContent = "Lowercase letter";
        } else {
            document.getElementById("result").textContent = "Uppercase letter";
        }
    } else if (!isNaN(char)) {
        document.getElementById("result").textContent = "Number";
    } else {
        document.getElementById("result").textContent = "Not a number or letter";
    }
}
