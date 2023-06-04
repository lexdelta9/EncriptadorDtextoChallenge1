/* Variables.*/
const textarea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

// Funciones


// Ocultar Botón Copiar
function ocultarbtncopiar(){
    document.getElementById("copiar").style.display = "none";
 }
 
 // Mostrar Botón Copiar
 function mostrarbtncopiar(){
     document.querySelector('.copiar').style.display = "block";
 }

//Oculta el texto de la sección desencriptar.
function ocultar(){
    document.getElementById("h3").style.color = "white"
    document.getElementById("p").style.color = "white"
}

// Muestra el texto y la imagen de la sección desencriptar.
function mostrar(){
    document.getElementById("h3").style.color = "#0A3871"
    document.getElementById("p").style.color = "#0A3871"
    document.querySelector('.mensaje').style.background = "url('imagenes/Muñeco.png')"
    document.querySelector('.mensaje').style.backgroundRepeat = "no-repeat";
    document.querySelector('.mensaje').style.backgroundPosition = "center"
}

// Encripta el texto de la sección encriptar y lo pega en el mensaje, oculta la imagen y el texto de desencriptar.
function btnEncriptar (){
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
    ocultar();
    mostrarbtncopiar();
}

// Encripta.
function encriptar (stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    return stringEncriptado;
}

// Desencripta el texto de la sección encriptar y lo pega en el mensaje, oculta la imagen y el texto de desencriptar.
function btnDesencriptar (){
    const textoEncriptado = desencriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
    ocultar();
    mostrarbtncopiar();
}

// Desencripta.
function desencriptar (stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }

    }
    return stringDesencriptado;
}

// Copia el texto del del mensaje y lo pega en la sección encriptar, muestra la imagen y el texto.
function copiarTexto(){
    navigator.clipboard.writeText(mensaje.value);
    textarea.value = mensaje.value;
    mensaje.value = "";
    mostrar();
    ocultarbtncopiar();
}
