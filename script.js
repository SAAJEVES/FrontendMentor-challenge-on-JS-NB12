// Get form
let theForm = document.querySelector(".form");

// Get submit button
let submitBtn = document.querySelector("button");

// Get email
let inputEmail = document.querySelector("#email");

// Get alert words
let alertNotify = document.querySelector(".alert");


// the check function

submitBtn.onclick = function (e) {
    e.preventDefault();

    let emailValue = inputEmail.value;
    let theTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (theTest.test(emailValue) === false) {
        alertNotify.style.display = "block";
        inputEmail.style.backgroundImage = "url(icon-error.svg)";
        inputEmail.style.border = "2px solid var(--SR)";
    } else {
        submitBtn.onclick = null;
    }
}


submitBtn.onblur = function () {
    alertNotify.style.display = "none";
    inputEmail.style.backgroundImage = "url()";
    inputEmail.style.border = "1px solid var(--DR)";
    inputEmail.value = "";
}