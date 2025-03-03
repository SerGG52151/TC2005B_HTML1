// Para ejecutar este script, se debe ejecutar el siguiente comando en la terminal: node script.js
// JS se parece a C++ en cuanto a la sintaxis

// Las variables en JS se declaran con la palabra reservada let
let nombre = "Sergio";
// Las constantes en JS se declaran con la palabra reservada const
const edad = 28;
console.log("Hello, World!");
console.log("Hola, " + nombre + "!");
console.log("Tu edad es: " + edad + "\n");
// Las variables y constantes en JS pueden ser de tipo string, number, boolean, object, array, function, null, undefined

// Los arreglos en JS se declaran con corchetes
let arrayV = [1, 2, 3, 4, 5];
const arrayC = ["a", "b", "c", "d", "e"];

for(let i = 0; i < arrayV.length; i++){
    console.log(arrayV[i] + " " + arrayC[i]);
    // console.log("");
}
console.log();

// Los objetos en JS se declaran con llaves
// Sin clase
let persona = {
    nombre: "Sergio",
    edad: 28,
    ciudad: "CDMX",

    print(){
        console.log(this.nombre + " " + this.edad + " " + this.ciudad);
    }
};
// Con clase
class Persona {
    constructor(nombre, edad, ciudad){
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    print(){
        console.log(this.nombre + " " + this.edad + " " + this.ciudad);
    }
}
persona.print();
let alumno = new Persona("Daniel", 18, "Monterrey");
// Varias formas de acceder a los atributos de un objeto
alumno.print();
alumno["edad"]++;
alumno.print();
alumno.nombre = "David";
alumno.print();
console.log();

// Funciones en JS
function suma(a, b){
    return a + b;
}
console.log(suma(5, 3));

// Funcions anónimas / Funcion flecha
let resta = (a, b) => a - b;
console.log(resta(5, 3));

const funcion = (input) => {
    console.log(input + "\n");
}
funcion("Hola");

// Estatutos condicionales
if(5 > 3){
    console.log("5 es mayor que 3");
} else if (5 < 3){
    console.log("5 no es mayor que 3");
} else {
    console.log("5 es igual a 3");
} 

switch(5){
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    case 4:
        console.log("4");
        break;
    case 5:
        console.log("5");
        break;
    default:
        console.log("Default");
        break;
}

