WaitCheck = function () {
    setTimeout(function() {
        CheckCard(document.getElementById("numberField").value);
    }, 1000);
}

CheckCard = function (cardInput) {
    if ((cardInput.length != 33) || (cardInput.charAt(32) != "?")) {
        alert("not correct");
        document.getElementById("numberField").value = "";
        document.getElementById("numberField").focus();
        return;
    }
    else {
        //Name is found
        if (0) {
            return
        }
        //Name is not found
        else {
            document.getElementById("formContainer").style.visibility = "visible";
        }
        alert("Correct!!");
    }
};

ManualInfo = function () {
    document.getElementById("formContainer").style.visibility = "visible";
};