const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

class Form {
    static validate() {
        if (firstname.value.trim() === '') {
            this.error(firstname, "First Name cannot be empty");
        }

        if (lastname.value.trim() === '') {
            this.error(lastname, "Last Name cannot be empty");
        }

        if (email.value.trim() === '') {
            this.error(email, "Email Address cannot be empty");
        }

        if (password.value.trim() === '') {
            this.error(password, "Password cannot be empty");
        }
    }

    static error(field, message) {
        field.placeholder = '';
        const curInput = field.parentElement.parentElement;
        curInput.querySelectorAll(".form__input--error").forEach(node => node.style.visibility = "visible");
        curInput.querySelector(".error-message").innerText = message;
    }
}

document.querySelector(".form").addEventListener("submit", e => {
    e.preventDefault();
    Form.validate();
})