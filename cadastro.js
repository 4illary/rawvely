const form = document.getElementById("cadastroForm");

const senha = document.getElementById("senha");

const confirmarSenha = document.getElementById("confirmarSenha");

const erroNome = document.getElementById("erroNome");

const erroEmail = document.getElementById("erroEmail");

const erroSenha = document.getElementById("erroSenha");

const erroConfirmarSenha = document.getElementById("erroConfirmarSenha");

const mensagemCadastro = document.getElementById("mensagemCadastro");

const botoesSenha = document.querySelectorAll(".toggle-password");


botoesSenha.forEach((botao) => {

    botao.addEventListener("click", () => {

        const campo = document.getElementById(
            botao.dataset.target
        );

        if (campo.type === "password") {

            campo.type = "text";
            botao.textContent = "Ocultar";

        } else {

            campo.type = "password";
            botao.textContent = "Mostrar";

        }

    });

});


form.addEventListener("submit", (event) => {

    event.preventDefault();

    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroSenha.textContent = "";
    erroConfirmarSenha.textContent = "";
    mensagemCadastro.textContent = "";

    let valido = true;


    const nome = document
        .getElementById("nome")
        .value
        .trim();

    if (nome === "") {

        erroNome.textContent =
            "Digite seu nome.";

        valido = false;

    }


    const email = document
        .getElementById("email")
        .value
        .trim();

    const formatoEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        erroEmail.textContent =
            "Digite seu e-mail.";

        valido = false;

    } else if (!formatoEmail.test(email)) {

        erroEmail.textContent =
            "Digite um e-mail válido.";

        valido = false;

    }


    if (senha.value === "") {

        erroSenha.textContent =
            "Digite uma senha.";

        valido = false;

    } else if (senha.value.length < 6) {

        erroSenha.textContent =
            "A senha deve ter pelo menos 6 caracteres.";

        valido = false;

    }


    if (confirmarSenha.value === "") {

        erroConfirmarSenha.textContent =
            "Confirme sua senha.";

        valido = false;

    } else if (senha.value !== confirmarSenha.value) {

        erroConfirmarSenha.textContent =
            "As senhas não são iguais.";

        valido = false;

    }


    if (valido) {

        mensagemCadastro.textContent =
            "Cadastro preenchido corretamente.";

    }

});