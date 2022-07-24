alert('Iniciando o Teste de Inversão de valores')
var a = 10
var b = 20
var c = null

document.write('A: ' + a + '<br />')
document.write('B: ' + b + '<br />')
document.write('C: ' + c + '<br />')

document.write('<hr />')
// Logica do teste

c = a // C: 10
a = b // A: 20
b = c // B: 10
c = null

// Resultado do teste
document.write('A: ' + a + '<br />')
document.write('B: ' + b + '<br />')
document.write('C: ' + c + '<br />')
