const form = document.querySelector("form");
let erroNome = document.querySelector("#erro-nome");
let erroIdade = document.querySelector("#erro-idade");
let erroEmail = document.querySelector("#erro-email");

let inputNome = document.querySelector("#nome");
let inputIdade = document.querySelector("#idade");
let inputEmail = document.querySelector("#email");
let formularioValido = true;

window.addEventListener("DOMContentLoaded", () => {
  const formData = JSON.parse(localStorage.getItem("formData"));

  inputNome.value = formData.nome;
  inputIdade.value = formData.idade;
  inputEmail.value = formData.email;
});

const validarCampo = (mensagem, campo, elementoError) => {
  elementoError.textContent = mensagem;

  document.getElementById(campo).classList.add("field-error");

  formularioValido = false;
};

const limparValidacao = (campo, elementoError, value) => {
  if (value) {
    elementoError.textContent = "";
    document.getElementById(campo).classList.remove("field-error");
  }
};

const validaCampos = () => {
  //Validação do campo Nome
  if (!inputNome.value) {
    validarCampo("Campo obrigatório", "nome", erroNome);
  }

  //Validação do campo idade
  if (!inputIdade.value) {
    validarCampo("Campo obrigatório", "idade", erroIdade);
  }
  if (inputIdade.value && inputIdade.value < 18) {
    validarCampo("Deve ser maior que 18", "idade", erroIdade);
  }

  //Validação do campo email
  if (!inputEmail.value) {
    validarCampo("Campo obrigatório", "email", erroEmail);
  }
};

const limparParaEstadoInicial = () => {
  erroNome.textContent = "";
  erroIdade.textContent = "";
  erroEmail.textContent = "";
  document.querySelector("p").style.display = "none";
  formularioValido = true;
};

// Evento que fica escutando o keyup do campo nome
document.querySelector("#nome").addEventListener("keyup", (event) => {
  limparValidacao("nome", erroNome, event.target.value);
});

// Evento que fica escutando o keyup do campo idade
document.querySelector("#idade").addEventListener("keyup", (event) => {
  limparValidacao("idade", erroIdade, event.target.value);
});

// Evento que fica escutando o keyup do campo email
document.querySelector("#email").addEventListener("keyup", (event) => {
  limparValidacao("email", erroEmail, event.target.value);
});

// Evento que fica escutando a submissão do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault();

  limparParaEstadoInicial();

  validaCampos();

  //Formulário válido
  if (formularioValido) {
    document.querySelector("p").style.display = "block";

    const formData = {
      nome: inputNome.value,
      idade: inputIdade.value,
      email: inputEmail.value,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
  }
});
