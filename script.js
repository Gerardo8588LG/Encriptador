let botonEncriptar = document.querySelector(".botonEncriptar");
let botonDesencriptar = document.querySelector(".botonDesencriptar");
let Figura = document.querySelector(".contenedorFigura");
let contenedor = document.querySelector(".contenedorParrafo");
let resultado = document.querySelector(".texto-resultado");
let contenedorResultado = document.querySelector(".contenedorResultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    let cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    ocultarAdelante();
    let cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    let cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante() {
    Figura.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    contenedorResultado.classList.remove("ocultar")
}



function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i + 1;
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i + 4;
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i + 3;
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i + 3;
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i + 3;
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".botonCopiar");
btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
   
});
