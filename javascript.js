function encrypt() {
    var frase = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = frase.replace(/e/img,"enter");
    var txtCifrado = txtCifrado.replace(/o/img,"ober");
    var txtCifrado = txtCifrado.replace(/i/img,"imes");
    var txtCifrado = txtCifrado.replace(/a/img,"ai");
    var txtCifrado = txtCifrado.replace(/u/img,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML=txtCifrado;
    document.getElementById("btn-copiar").style.display="show";
    document.getElementById("btn-copiar").style.display="inherit";

}

function decrypt() {
    var frase = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = frase.replace(/enter/img,"e");
    var txtCifrado = txtCifrado.replace(/ober/img,"o");
    var txtCifrado = txtCifrado.replace(/imes/img,"i");
    var txtCifrado = txtCifrado.replace(/ai/img,"a");
    var txtCifrado = txtCifrado.replace(/ufat/img,"u");

    document.getElementById("imgDer").style.display="none";
    document.getElementById("texto").style.display="none";
    document.getElementById("texto2").innerHTML=txtCifrado;
    document.getElementById("btn-copiar").style.display="show";
    document.getElementById("btn-copiar").style.display="inherit";

}

function copy() {
    var resultado = document.querySelector("#texto2");
    resultado.select();
    document.execCommand("copy")
    alert("Texto copiado al portapapeles!");
}