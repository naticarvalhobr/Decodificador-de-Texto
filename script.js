const textArea = document.querySelector(".apresentacao_texto_area");
const resultado = document.querySelector(".apresentacao_texto_resultado");

function btnEncriptar() { // não recebe parâmetro, pois é só um procedimento
    const textoEncriptado = encriptar(textArea.value);
    resultado.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    if (/[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÇáéíóúàèìòùâêîôûãõäëïöüç]/.test(stringEncriptada)) { 
        alert('O texto não pode conter letras maiúsculas ou acentuadas.'); 
        limparTexto(); 
        return; 
    }
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    document.querySelector(".apresentacao_texto_resultado").style.backgroundImage = "none";
    return stringEncriptada;
}

function btnDesencriptar() { // não recebe parâmetro, pois é só um procedimento
    const textoDesencriptado = desencriptar(textArea.value);
    resultado.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    document.querySelector(".apresentacao_texto_resultado").style.backgroundImage = "none";
    return stringDesencriptada;
}