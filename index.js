const username = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("myform");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    const messages = [];
    if (username.value === "" || username.value == null) {
        messages.push("username is required");
    }

    if (password.value.length <= 6) {
        messages.push("password must be longer than 6 characters");
    }
    if (password.value.length >= 10) {
        messages.push("password must be shorter than 10 characters");
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.textContent = messages.join(", ");
        errorElement.hidden = false;
        return;
    }

    errorElement.textContent = "";
    errorElement.hidden = true;
});