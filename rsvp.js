const step1 = document.getElementById("rsvp-step-1");
const step2 = document.getElementById("rsvp-step-2");
const success = document.getElementById("rsvp-success");

const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const confirmButton = document.getElementById("confirm-button");

nextButton.addEventListener("click", function () {
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    if (!email.value.trim()) {
        email.focus();
        return;
    }

    if (!name.value.trim()) {
        name.focus();
        return;
    }

    step1.classList.remove("active");
    step2.classList.add("active");
});

previousButton.addEventListener("click", function () {
    step2.classList.remove("active");
    step1.classList.add("active");
});

confirmButton.addEventListener("click", function () {
    const presence = document.querySelector('input[name="presence"]:checked');
    if (!presence) {
        alert("Merci d'indiquer si vous serez présent(e).");
        return;
    }
    step2.classList.remove("active");
    success.classList.add("active");
});

