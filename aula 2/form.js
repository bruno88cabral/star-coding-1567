const form = document.querySelector("form");
let erroNome = document.querySelector("#erro-nome");
let erroIdade = document.querySelector("#erro-idade");
let erroEmail = document.querySelector("#erro-email");
let formularioValido = true;

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

  // Limpando estado de erro
  erroNome.textContent = "";
  erroIdade.textContent = "";
  erroEmail.textContent = "";
  document.querySelector("p").style.display = "none";

  //Validação do campo Nome
  const nome = document.querySelector("#nome").value;
  if (!nome) {
    validarCampo("Campo obrigatório", "nome", erroNome);
  }

  //Validação do campo idade
  const idade = document.querySelector("#idade").value;
  if (!idade) {
    validarCampo("Campo obrigatório", "idade", erroIdade);
  }
  if (idade && idade < 18) {
    validarCampo("Deve ser maior que 18", "idade", erroIdade);
  }

  //Validação do campo email
  const email = document.querySelector("#email").value;
  if (!email) {
    validarCampo("Campo obrigatório", "email", erroEmail);
  }

  //Resultado da validação
  console.log("o formalário está valido?", formularioValido);

  if (formularioValido) {
    document.querySelector("p").style.display = "block";
  }
});
