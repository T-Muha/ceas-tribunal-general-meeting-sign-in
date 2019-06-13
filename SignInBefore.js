WaitCheck = function () {
    setTimeout(function() {
        CheckCard(document.getElementById("number-field").value);
    }, 1000);
}

CheckCard = function (cardInput) {
    if ((cardInput.length != 33) || (cardInput.charAt(32) != "?")) {
        alert('not correct');
        document.getElementById("number-field").value = '';
        document.getElementById("number-field").focus();
        return;
    }
    else {
        //Name is found
        if (0) {
            return
        }
        //Name is not found
        else {
            document.getElementById("form-container").style.visibility = 'visible';
        }
        alert('Correct!!');
    }
};

ManualInfo = function () {
    document.getElementById("form-container").style.visibility = 'visible';
};