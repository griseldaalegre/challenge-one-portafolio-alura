import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
//agreg

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

//textarea
const textareas = document.querySelectorAll("textarea");

textareas.forEach((textarea) => {
  textarea.addEventListener("blur", (textarea) => {
    valida(textarea.target);
    
  });
});

const btnEnviar = document.getElementById("enviar-mensaje");
 
btnEnviar.addEventListener('click', () => {
  alert("Mensaje enviado")
})


