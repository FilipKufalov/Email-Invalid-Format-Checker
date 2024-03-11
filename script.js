function resizeMe() {

    // Email Input
    const emailsInput = document.getElementById("forcheckEmails");

    // Split Lines
    const linesArray = emailsInput.value.split("\n");

    // checked = valid, checked2 = invalid
    const checked = document.getElementById("checkedEmails");
    const checked2 = document.getElementById("checkedEmails2");
    
    const validEmails = document.getElementById("validEmails");
    const invalidEmails = document.getElementById("invalidEmails");
    let validEmailsNumber = 0;
    let invalidEmailsNumber = 0;

    checked.textContent = "";
    checked2.textContent = "";

    linesArray.forEach(element => {
        const email = element.trim();
        if (isValidEmail(email)) {
            checked.textContent += email + "\n";
            validEmailsNumber++;
        } else {
            checked2.textContent += email + "\n";
            invalidEmailsNumber++;
        }
    });

    validEmails.textContent = validEmailsNumber;
    invalidEmails.textContent = invalidEmailsNumber;
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
