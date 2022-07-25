/*
document.write('Operador igual == <br />')
if (2 == 2) {
    document.write('Entrou dentro do bloco if (Verdadeiro)')    
} else {
    document.write('Entrou dentro do bloco else (falso)')    
}

document.write('<br /><br />')
document.write('Operador idêntico === <br />')
if (2 === '2') {
    document.write('Entrou dentro do bloco if (Verdadeiro)')    
} else {
    document.write('Entrou dentro do bloco else (falso)')    
}

document.write('<br /><br />')
document.write('Operador diferente != <br />')
if (2 != 2) {
    document.write('Entrou dentro do bloco if (Verdadeiro)')    
} else {
    document.write('Entrou dentro do bloco else (falso)')    
}

document.write('<br /><br />')
document.write('Operador Não Idêntico !== <br />')
if (2 !== '2') {
    document.write('Entrou dentro do bloco if (Verdadeiro)')    
} else {
    document.write('Entrou dentro do bloco else (falso)')    
}

document.write('<br /><br />')
document.write('Operador Menor que < <br />')
if (2 < 5) {
    document.write('Entrou dentro do bloco if (Verdadeiro)')    
} else {
    document.write('Entrou dentro do bloco else (falso)')    
}

document.write('<br /><br />')
document.write('Operador Maior que > <br />')
if (2 > 5) {
    document.write('Entrou dentro do bloco if (Verdadeiro)')    
} else {
    document.write('Entrou dentro do bloco else (falso)')    
}

document.write('<br /><br />')
document.write('Operador menor ou igual a <= <br />')
if (7 <= 33) {
    document.write('Entrou dentro do bloco if (Verdadeiro)')    
} else {
    document.write('Entrou dentro do bloco else (falso)')    
}

document.write('<br /><br />')
document.write('Operador Maior ou igual a >= <br />')
if (7 >= -33) {
    document.write('Entrou dentro do bloco if (Verdadeiro)')    
} else {
    document.write('Entrou dentro do bloco else (falso)')    
}

*/

document.write('<h3> E (&&) </h3>');
// true + true + false = false
if (2 == 2 && 3 >= 1 && 'a' == 'b') {
    document.write('Verdadeiro')    
} else {
    document.write('falso')    
}

document.write('<br /><br />')
document.write('<h3> OU (||) </h3>');
// true + true + false = true
if (2 == 2 || 3 >= 1 || 'a' == 'b') {
    document.write('Verdadeiro')    
} else {
    document.write('falso')    
}

document.write('<br /><br />')
document.write('<h3> Negação (!) </h3>');
// true = false
if (!(4 >= 2)) {
    document.write('Verdadeiro')    
} else {
    document.write('falso')    
}