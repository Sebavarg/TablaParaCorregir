let nota = prompt("Hola Mágali, ingrese cual es la nota maxima, el total de puntos");
let index = 1;
let notaMin = (nota * (index - 0.5)) / 10;
let notaMax = (nota * (index + 0.5)) / 10;

for (let i = 1; i < 11; i++) {
    notaMin = (nota * (i - 0.5)) / 10;
    if (i == 1) {
        notaMin = 0;
    }
    notaMax = ((nota * (i + 0.5)) / 10) - 0.1;
    if (i == 10) {
        notaMax = nota;
    }
    alert("nota es " + i + " desde " + notaMin + " hasta " + notaMax);
}