function pulaLinha() {
    document.write('<br>');
    document.write('<br>');
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(altura, peso) {

    return peso / (altura * altura);

}

var nome = prompt("Informe o seu nome");
var alturaInformada = prompt("Informe sua altura: ");
var pesoInformado = prompt("Informe seu Peso: ");
var imc = calculaImc(alturaInformada, pesoInformado);

document.write("O IMC calculado é: " + imc);