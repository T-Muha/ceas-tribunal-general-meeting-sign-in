WaitCheck = function () {
    setTimeout(function() {
        CheckCard(document.getElementById("number-field").value);
    }, 1000);
}

CheckCard = function (cardInput) {
    if ((cardInput.length != 33) || (cardInput.charAt(32) != "?")) {
        showModal("swipe-message");
        document.getElementById("number-field").value = '';
        document.getElementById("number-field").focus();
        return;
    }
    //Search for name here <----------------------------------------------------------------------------
    else {
        //Name is found
        if (0) {
            //Update attendance here <------------------------------------------------------------------
            RefreshPage();
            return
        }
        //Name is not found
        else {
            showModal("not-found-message");
            setTimeout(ManualInfo, 5000);
        }
    }
};


ManualInfo = function () {
    document.getElementById("number-field").removeAttribute("onblur");

    //Animation for the form
    document.getElementById("form-container").style.maxWidth = 0;

    setTimeout(function () {
        document.getElementById("alternate-info").className += 'hidden';
        document.getElementById("instruction").className += 'hidden';
        document.getElementById("first-name").className -= 'hidden';
        document.getElementById("last-name").className -= 'hidden';
        document.getElementById("m-number").className -= 'hidden';
        document.getElementById("email").className -= 'hidden';
        document.getElementById("submit-button").className -= 'hidden';
        document.getElementById("first-name").style.visibility = 'hidden';
        document.getElementById("last-name").style.visibility = 'hidden';
        document.getElementById("m-number").style.visibility = 'hidden';
        document.getElementById("email").style.visibility = 'hidden';
        document.getElementById("submit-button").style.visibility = 'hidden';
    }, 600)

    setTimeout(function () {
        document.getElementById("form-container").style.maxWidth = '1000px';
    }, 600);

    setTimeout(function () {
        document.getElementById("first-name").style.visibility = 'visible';
        document.getElementById("last-name").style.visibility = 'visible';
        document.getElementById("m-number").style.visibility = 'visible';
        document.getElementById("email").style.visibility = 'visible';
        document.getElementById("submit-button").style.visibility = 'visible';
    }, 600);    
};

function RefreshPage() {
    showModal("success-message");
    setTimeout(function () {
        window.location.reload();
    }, 5000);
}

SubmitInfo = function() {
    //Data submission goes here
    RefreshPage();
}

showModal = function (modalId) {
    document.getElementById(modalId).style.display = 'block';
    setTimeout(function () {
        document.getElementById(modalId).style.display = 'none';
    }, 5000);    
}