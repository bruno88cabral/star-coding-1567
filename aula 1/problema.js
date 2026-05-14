let contador = 10;
const numero = document.getElementById("numero");

function incrementar() {
  contador++;
  numero.textContent = contador;
}

function decrementar() {
  contador--;
  numero.textContent = contador;
}

document
  .getElementById("btn-incrementar")
  .addEventListener("click", incrementar);
document
  .getElementById("btn-decrementar")
  .addEventListener("click", decrementar);
