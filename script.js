function resizeMe() {
    var emails = document.getElementById("forcheckEmails");
    var linesArray = emails.value.split("\n");
    var checked = document.getElementById("checkedEmails");
    var validEmailsNumber = 0;
    var validEmails = document.getElementById("validEmails");
    checked.innerHTML = "";
    
    linesArray.forEach(element => {
        var email = element.trim();
        if (isValidEmail(email)) {
            checked.innerHTML += email + "\n";
            validEmailsNumber++;
        }
    });

    validEmails.innerHTML = validEmailsNumber;
}

function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
