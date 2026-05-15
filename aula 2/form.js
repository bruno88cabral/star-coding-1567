const form = document.querySelector("form");
let erroNome = document.querySelector("#erro-nome");
let erroIdade = document.querySelector("#erro-idade");
let erroEmail = document.querySelector("#erro-email");

document.querySelector("#nome").addEventListener("keyup", (event) => {
  const value = event.target.value;
  if (value) {
    erroNome.textContent = "";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let formularioValido = true;

  // Limpando estado de erro
  erroNome.textContent = "";
  erroIdade.textContent = "";
  erroEmail.textContent = "";

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
  }
  if (idade && idade < 18) {
    erroIdade.textContent = "Deve ser maior que 18";
    formularioValido = false;
  }

  //Validação do campo email
  const email = document.querySelector("#email").value;
  if (!email) {
    erroEmail.textContent = "Campo obrigatório";
    formularioValido = false;
  }

  //Resultado da validação
  console.log("o formalário está valido?", formularioValido);
});
