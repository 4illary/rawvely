const password = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.textContent = "Ocultar";

    } else {

        password.type = "password";

        togglePassword.textContent = "Mostrar";
    }

});