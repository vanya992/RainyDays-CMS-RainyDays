const mail = document.querySelector(".email");

const messageContainer = document.querySelector(".message")

const successMessage = document.querySelector(".success")

const emailConfirm = document.querySelector(".email_form")


function validateSubscription() {

    let isInputValid = true;

    if (validateEmail(mail.value) === true) {
        mail.style.border = "2px solid green";
        successMessage.innerHTML = "You are now subscribed to our newsletter.";
        messageContainer.innerHTML = "";
    } else {
        mail.style.border = "2px solid red";
        successMessage.innerHTML = "";
        messageContainer.innerHTML = "Please enter a valid e-mail.";
        isInputValid = false;
    }
    if (isInputValid === true) {
    console.dir("success")
    } else {
        console.log("failure")
}
}


function validateEmail(mail) {
    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailMatches = regEx.test(mail);
    return emailMatches;
};






