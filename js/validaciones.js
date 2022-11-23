export function valida(input) { //recibe el input
    const tipoDeInput = input.dataset.tipo; //nos va obtener el " data"
   

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.classList.remove("input");
        input.classList.remove("formcontato__input--error");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
        document.getElementById('enviar-mensaje').disabled = false;
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.classList.add("input");
        input.classList.add("formcontato__input--error");
        input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
        mostrarMensajeDeError(tipoDeInput, input);
    }


}

//textarea
export function validatextArea(textarea) { //recibe el input
    const tipoDetext = textarea.dataset.tipo; //nos va obtener el " data"

    if (validadores[tipoDetext]) {
        validadores[tipoDetext](textarea);
    }

    if (textarea.validity.valid) {
        textarea.parentElement.classList.remove("input-container--invalid");
        textarea.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        textarea.parentElement.classList.add("input-container--invalid");
        textarea.parentElement.querySelector(".input-message-error").innerHTML =
            mostrarMensajeDeError(tipoDetext, textarea);
        mostrarMensajeDeError(tipoDetext, textarea);
    }


}

const tipoDeErrores = [
    "valueMissing", //Devuelve true si el elemento tiene un atributo required pero no tiene valor, o false de lo contrario
    "typeMismatch", //Devuelve true si el valor no está en la sintaxis requerida
    "patternMismatch", //Devuelve true si el valor no coincide con el pattern especificado, y false si coincide
    "customError"
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío.",
        typeMismatch: "El correo no es válido.",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío.",
        typeMismatch: "El campo asunto no puede estar vacío.",
        patternMismatch: "Este campo debe tener maximo 50 caracteres."
    },
    detalleAsunto: {
        valueMissing: "El campo mensaje no puede estar vacío",
        patternMismatch: "Este campo debe tener entre 10 y 200 caracteres."
    }

};

const validadores = {
    nombre: (input) => (input),
};



function mostrarMensajeDeError(tipoDeInput, input,) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

