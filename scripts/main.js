////Waits for entire input during swipe
WaitForSwipe = function () {
    setTimeout(function() {
        CheckCard(document.getElementById("number-field").value);
    }, 1000);
}

////Validates input and asks/responds to existstance of id
function CheckCard(cardInput) {
    CheckOpen().then(function (result) {
        if (!(result)) {
            alert("Sign-In is not yet open.");
            return;
        }
        else {
            isOpen = CheckOpen().then(function (result) {
                return result;
            });
            if (!(isOpen)) {
                alert("Sign-In is not yet open.");
                return;
            }

            if ((cardInput.length != 33) || (cardInput.charAt(32) != "?")) {
                ShowModal("swipe-message");
                document.getElementById("number-field").value = '';
                document.getElementById("number-field").focus();
            }
            else {
                cardInput = cardInput.substr(3, 16);
                GetMemberData(cardInput, 'unknown').then(function (result) {
                    if (result.exists) {
                        MarkAttendance(result.Email);
                        FinishSignIn();
                    }
                    else {
                        document.getElementById("hidden-id-container").textContent = cardInput;
                        ShowModal("not-found-message");
                        setTimeout(ManualInfo, 5000);
                    }
                });
            }
        }
    });
};

////Makes sure the current date is in the attendance table, then adds the user in that column
function MarkAttendance(email) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //Note: Jan is 0
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    SendAttendance(email, today);
}

////Animates and makes the form available
ManualInfo = function () {
    CheckOpen().then(function (result) {
        if (!(result)) {
            alert("Sign-In is not yet open.");
            return;
        }
        else {
            document.getElementById("number-field").removeAttribute("onblur");
            document.getElementById("number-field").blur();
            document.getElementById("form-container").style.maxWidth = 0;

            setTimeout(function () {
                document.getElementById("alternate-info").className += 'hidden';
                document.getElementById("instruction").className += 'hidden';
            }, 600);

            setTimeout(function () {
                document.getElementById("form-container").style.maxWidth = '1000px';
            }, 600);

            setTimeout(function () {
                document.getElementById("first-name").className -= 'hidden';
                document.getElementById("last-name").className -= 'hidden';
                document.getElementById("email").className -= 'hidden';
                document.getElementById("submit-button").className -= 'hidden';
            }, 600);
        }
    });
}

////Handles submission for the form and takes attendance
SubmitInfo = function() {
    let member = {
        first: document.querySelector("#first-name").value,
        last: document.querySelector("#last-name").value,
        email: document.querySelector("#email").value.toLowerCase(),
        id: document.getElementById("hidden-id-container").textContent
    };

    //Query to see if member exists. If not, add to member table. In both cases, add to attendance table
    GetMemberData(document.getElementById("hidden-id-container").textContent, member.email).then(function (result) {
        if (!result.exists) {
            SendMemberData(member);
        }
        MarkAttendance(member.email);
    });

    FinishSignIn();
}

////Briefly reveals the specified modal (pop-up)
ShowModal = function (modalId) {
    document.getElementById(modalId).style.display = 'block';
    setTimeout(function () {
        document.getElementById(modalId).style.display = 'none';
    }, 5000);    
}

////Displays success and refreshes page once user has signed in
FinishSignIn = function () {
    document.getElementById("form-container").style.maxWidth = 0;

    setTimeout(function () {
        if (document.getElementById("alternate-info").classList.contains('hidden')) {
            document.getElementById("first-name").className += ' hidden';
            document.getElementById("last-name").className += ' hidden';
            document.getElementById("email").className += ' hidden';
            document.getElementById("submit-button").className += ' hidden';
        }
        else {
            document.getElementById("alternate-info").className += 'hidden';
            document.getElementById("instruction").className += 'hidden';
        }
    }, 600)

    setTimeout(function () {
        document.getElementById("form-container").style.maxWidth = '1000px';
        document.getElementById("form-container").style.height = '50px';
    }, 600);

    setTimeout(function () {
        document.getElementById("signed-in").className -= 'hidden';
        document.getElementById("signed-in").style.margin = '-75px 0 0 0';
    }, 600);

    setTimeout(function () {
        window.location.reload();
    }, 3500); //end of program, refreshes page
}

////////////////////////  API Calls  ////////////////////////

////Adds the user to the member table
const SendMemberData = function (member) {
    let submissionData = {
        firstName: member.first,
        lastName: member.last,
        email: member.email,
        id: member.id
    }

    let submissionFormData = new FormData();

    for (let i in submissionData) {
        submissionFormData.append(i, submissionData[i]);
    }

    fetch("/api/send_member.php", {
        method: "POST",
        body: submissionFormData,
    })
        .then(response => {
            if (response.ok) {
                console.log("Success: Added Member");
            } else {
                console.log("Fail: Couldn't Add Member");
            }
        });
}

////Requests sql server for user's existance in the member table
const GetMemberData = function (id, email) {

    return new Promise(function(resolve, reject) {
        let submissionData = {
            ID: id,
            email: email
        }
        let submissionFormData = new FormData();
        for (let i in submissionData) {
            submissionFormData.append(i, submissionData[i]);
        }

        fetch("/api/get_member.php", {
            method: "POST",
            body: submissionFormData
        })
            .then(response => response.json())
            .then((result) => {
                resolve(result);
            });
    });
}

////Work In Progress
const SendAttendance = function (email, date) {
    let submissionData = {
        email: email,
        date: date
    }

    let submissionFormData = new FormData();

    for (let i in submissionData) {
        submissionFormData.append(i, submissionData[i]);
    }

    fetch("/api/send_attendance.php", {
        method: "POST",
        body: submissionFormData,
    })
        .then(response => {
            if (response.ok) {
                console.log("attendance added successfully");
                console.log(response.text());
            } else {
                console.log("issue adding attendance");
                console.log(response.text());
            }
        });
}

//Creates a new column for the current date if not in the attendance table
//const ValidateDate = function (currentDate) {

//    return new Promise(function (resolve, reject) {

//        let submissionData = {
//            date: currentDate
//        }

//        let submissionFormData = new FormData();

//        for (let i in submissionData) {
//            submissionFormData.append(i, submissionData[i]);
//        }

//        fetch("/api/send_date.php", {
//            method: "POST",
//            body: submissionFormData,
//        })
//            .then(response => {
//                if (response.ok) {
//                    console.log("date validated successfully");
//                    console.log(response.text());
//                    resolve(response.ok);
//                } else {
//                    console.log("issue validating date");
//                    console.log(response.text());
//                    resolve(response.ok);
//                }
//            });
//    });
//}

//Checks that sign in is currently open
const CheckOpen = function () {
    return new Promise(function (resolve, reject) {
        fetch("api/get_open.php", {
            method: "POST"
        })
            .then(response => response.json())
            .then((result) => {
                resolve(result);
            });
    });
}