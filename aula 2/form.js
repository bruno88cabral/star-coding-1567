const form = document.querySelector("form");
let erroNome = document.querySelector("#erro-nome");
let erroIdade = document.querySelector("#erro-idade");
let erroEmail = document.querySelector("#erro-email");

// Evento que fica escutando o keyup do campo nome
document.querySelector("#nome").addEventListener("keyup", (event) => {
  const value = event.target.value;
  if (value) {
    erroNome.textContent = "";
    document.getElementById("nome").style.borderColor = "#ccc";
    document.getElementById("nome").style.borderWidth = "1px";
  }
});

// Evento que fica escutando o keyup do campo idade
document.querySelector("#idade").addEventListener("keyup", (event) => {
  const value = event.target.value;
  if (value) {
    erroIdade.textContent = "";
    document.getElementById("idade").style.borderColor = "#ccc";
    document.getElementById("idade").style.borderWidth = "1px";
  }
});

// Evento que fica escutando o keyup do campo email
document.querySelector("#email").addEventListener("keyup", (event) => {
  const value = event.target.value;
  if (value) {
    erroEmail.textContent = "";
    document.getElementById("email").style.borderColor = "#ccc";
    document.getElementById("email").style.borderWidth = "1px";
  }
});

// Evento que fica escutando a submissão do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let formularioValido = true;

  // Limpando estado de erro
  erroNome.textContent = "";
  erroIdade.textContent = "";
  erroEmail.textContent = "";
  document.querySelector("p").style.display = "none";

  //Validação do campo Nome
  const nome = document.querySelector("#nome").value;
  if (!nome) {
    erroNome.textContent = "Campo obrigatório";
    formularioValido = false;
    document.getElementById("nome").style.borderColor = "red";
    document.getElementById("nome").style.borderWidth = "2px";
  }

  //Validação do campo idade
  const idade = document.querySelector("#idade").value;
  if (!idade) {
    erroIdade.textContent = "Campo obrigatório";
    formularioValido = false;
    document.getElementById("idade").style.borderColor = "red";
    document.getElementById("idade").style.borderWidth = "2px";
  }
  if (idade && idade < 18) {
    erroIdade.textContent = "Deve ser maior que 18";
    formularioValido = false;
    document.getElementById("idade").style.borderColor = "red";
    document.getElementById("idade").style.borderWidth = "2px";
  }

  //Validação do campo email
  const email = document.querySelector("#email").value;
  if (!email) {
    erroEmail.textContent = "Campo obrigatório";
    formularioValido = false;
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("email").style.borderWidth = "2px";
  }

  //Resultado da validação
  console.log("o formalário está valido?", formularioValido);

  if (formularioValido) {
    document.querySelector("p").style.display = "block";
  }
});
