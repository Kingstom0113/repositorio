"use strict";
    
    document.querySelector('#calcular2').addEventListener('click', () =>{
        const n1 = parseInt(document.querySelector('#n11').value);
        const n2 = parseInt(document.querySelector('#n22').value);
        const op2 = document.querySelector('#op').value;
        let r;
        if(op2 == '+'){
            r = n1 + n2;
        }else if( op2 == '-'){
            r = n1 - n2;
        }else if(op2 == '*'){
            r = n1 * n2;
        }else if(op2 == '/'){
            r = n1 / n2;
        }
        document.querySelector('#r2').innerHTML = r;
    });

/*let a, b;
let operacion;

a = parseFloat(prompt("Ingrese el primer numero")); 
b = parseFloat(prompt("Ingrese el segundo numero")); 

operacion = prompt("¿Qué operación quieres realizar? (suma, resta, multiplicacion, division)");

if (operacion === "suma") {
    alert(suma(a, b));
} else if (operacion === "resta") {
    alert(resta(a, b));
} else if (operacion === "multiplicacion") {
    alert(multiplicacion(a, b));
} else if (operacion === "division") {
    if (b === 0) {
        alert("No se puede dividir por cero.");
    } else {
        alert(division(a, b));
    }
} else {
    alert("no se puede dividir entre 0");
}

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}*/
