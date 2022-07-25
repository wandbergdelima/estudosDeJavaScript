let a = prompt('Digite o 1º valor:')
let b = prompt('Digite o 2º valor:')

a = parseInt(a) // extrai o valor inteiro da variavel
b = parseFloat(b) // preserva o valor fracionado

console.log(a);
console.log(b);

document.write(a.toString() + b.toString()) // concatenação de valores number para string