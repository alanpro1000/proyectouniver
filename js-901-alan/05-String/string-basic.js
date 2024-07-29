let stri_1 = "Hola soy un texto con comillas dobles";
let stri_2 = 'Hola soy un texto con comillas simples';
let stri_3 = 'comillas "dentro" de comillas';

console.log(stri_1);
console.log(stri_2);
console.log(stri_3);

//comillas invertidas ´´

let stri_4 = `comillas invertidas Backtips`;//me sirven para ingresar variables dentro de otra variable
console.log(stri_4);

let nombre = "Alan";
let saludo =  `Hola, ${nombre} bienvenido`;
console.log(saludo);

//HTML
let plantilla_html = `
<html>
    <h1>Pagina web de ${nombre} <h1>
<html>
`