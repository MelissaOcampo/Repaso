// TRABAJANDO CON LA CONSOLA DEL NAVEGADOR
// 1. Declara una variable llamada nombre en tu consola y asignale tu nombre

let nombre = ["Melissa"]
console.log(nombre);

// 2. Declara una variable llamada apellido y asignale como valor tu apellido.

let apellido = ["Ocampo"]
console.log(apellido);

// Ejercicio 1: Ensalada de frutas
// 1.Declara un array llamado ensaladaDeFrutas con al menos 5 frutas.

let ensaladaDeFrutas = ["Manzana", "Banana", "Frutilla", "Mango", "Pera"];
console.log(ensaladaDeFrutas);

// 2. Usa un bucle For y muestra cada ítem de ensaladaDeFrutas en la consola, con el
// siguiente mensaje: “Las frutas que hay en la ensalada son:”

for (let i = 0; i < ensaladaDeFrutas.length; i++) {
    console.log("Las frutas que hay en la ensalada son: " + ensaladaDeFrutas[i]);
}

// Ejercicio 2: Promedio de edad
// 1. Crea un array de edades con al menos 6 edades distintas

let edades = [21, 32, 52, 27, 18, 10];
let total = 0;

// 2. Recorre el array con un for y obtén el promedio de las edades del array.
for (let i = 0; i < edades.length; i++) {
    total += edades[i]
}
let promedio = total / edades.length;
console.log("El promedio es " + promedio);

// Ejercicio 3: Mis amigos.
// Haga un programa que filtre el arreglo con un for y devuelva uno nuevo con el nombre de
// sus amigos. Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro que es amigo
// tuyo! De lo contrario, no lo son.
// const amigo = [“Ryan”, “Kieran”, “Mark”, “Miguel”]
// El resultado esperado es [“Ryan”, “Mark”]
// Nota: este ejercicio se ha hecho en pruebas técnicas para puestos de programadores

let amigos = ["Ryan", "Kieran", "Mark", "Miguel"];
let mejoresAmigos = [];
for (let i = 0; i < amigos.length; i++) {
    if (amigos[i].length < 5); {
        mejoresAmigos.push(amigos[i]);
    }

}

// Ejercicio 4: Métodos de arrays.
// Practiquemos los métodos de arrays. Dado el siguiente array:
// const listaDeSuper = ["jabon","pasta","azucar","arroz","tomates"];
// Instrucciones:
// 1. Agregue al final del array un nuevo producto "shampoo"
// 2. Elimine el primer producto del array
// 3. Consulta el largo del array y muestralo por la consola.
// 4. Consulta si existe el elemento "shampoo" a través del método indexOf()

let producto = ["jabon", "pasta", "azucar", "arroz", "tomates"];
producto.push('shampoo');
console.log(producto)
producto.shift()
console.log(producto)
console.log(producto.length);
console.log(producto.indexOf("shampoo"));

// Ejercicio 5: Mi primera función
// Declara una función llamada saludo() que muestre una alerta de Bienvenida al visitante al
// invocar por la consola del navegador

function saludo() {
    alert("Bienvenido")
}
console.log(saludo)

// Ejercicio 6: Calculando el mayor
// 1. Declara una función que se llama calculoMayor() y pásale como parámetros
// (num1,num2).
// 2. Dentro de la función muestra una alerta que diga quién de los números ingresados
// es mayor. En caso de ser iguales, tendrá que indicarlo a través de una alerta
// también.
// 3. Invoca la función y llena los argumentos con los números que desees.

function calculoMayor(num1, num2) {
    if (num1 > num2) {
        alert(num1 + "mayor que" + num2)
    } else if (num2 > num1) {
        alert(num2 + "mayor que" + num1)
    } else if (num1 == num2)
        alert("los numeros son iguales")
}
console.log(calculoMayor(2, 8))
// `${num1} mayor que ${num2}` Otra forma de resolverlo.

// Ejercicio 7: Mis amigos.
// 1. Declara una función que se llame filtrarAmigos() y pásale como parámetro (arr).
// 2. La función deberá filtrar el arreglo y devolver uno nuevo con el nombre de sus
// amigos. Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro que es
// amigo! De lo contrario, no lo son.
// const amigo1 = [“Ryan”, “Kieran”, “Mark”, “Miguel”]
// const amigo2 = [“Ringo”,”Jhon”,”Paul”,”George”,”Ada”,”Marie”]
// El resultado esperado para amigo1 es [“Ryan”, “Mark”]
// El resultado esperado para amigo2 es [”Jhon”,”Paul”]

const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"]
const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"]

function filtrarAmigos(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length === 4); {
            console.log(arr[i]);
        }
    }
}
// filtrarAmigos(amigo1);
// filtrarAmigos(amigo2);

// Ejercicio 8: Tirar dados.
// 1. Crea un función tirarDado() que cuando sea ejecutada en la consola tire un
// resultado aleatorio del siguiente array: const dado = [1,2,3,4,5,6];
// 2. Deberás codear dentro del bloque de la función, el lanzamiento aleatorio a través de
// un math.ramdom (pregúntale a san Google como funciona este señor).

function tirarDado() {
    const dado = [1, 2, 3, 4, 5, 6];
    let random = dado[Math.floor(Math.random() * dado.length)]
    console.log(random)
}
tirarDado();

// Ejercicio 9: Creando y consultando un objeto
// Crea un objeto con el nombre toDoList debería tener las siguientes propiedades y valores:
// ● tipo de tarea: un string que diga "Compras" (ojo con los espacios en el nombre de la
// propiedad, tienes que poner entre comillas si tiene espacios)
// ● dia: un string que indique el día a realizar la tarea.
// ● productos: un array con los nombres de los productos.
// ● cantidad de productos: un número que indica la cantidad de productos de las
// compras. (Recuerda los espacios en el nombre de la propiedad)
// ● estado: "pendiente"
// ● notificacion: un método(una función) que haga una alerta con el siguiente mensaje
// "Esta tarea tiene una prioridad urgente!".
// Ahora desde la consola extrae estos valores de las siguientes formas:
// 1. El día de la compra usando dot notation.
// 2. El tipo de tarea usando bracket notation.
// 3. Extrae la cantidad de productos usando bracket notation.
// 4. Ejecuta el método (función) de la propiedad notificación (tienes que extraerlo del objeto y
// recuerda que es una función).

const toDoList = {
    "tipo de tarea": "compras",
    "dia": "23/01/2023",
    "productos": ["jabon", "cif", "fabuloso"],
    "cantidad de productos": 3,
    notification: function() {
        alert("Esta tarea tiene una prioridad urgente")
    }
};
console.log(toDoList.dia);
console.log(toDoList["tipo de tarea"]);
console.log(toDoList["cantidad de productos"]);
toDoList.notification();

// Ejercicio 10: Consultando valores.
// Muchas veces vamos a tener estructuras más complejas de objetos y nosotros vamos a
// tener que acordarnos de todos los conceptos que hemos visto hasta ahora. Copia y pega
// esto en tu archivo JS
const superHeroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [{
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
        }
    ]
}
// Consultemos por consola los siguientes valores:
// 1. Consulta el valor ("Super Hero Squad") de la propiedad squadName.
// 2. Consulta el valor que dice "Madame Uppercut" (ayuda:
// objeto-propiedad-arreglo-propiedad).
// 3. Consulta el valor que dice "Superhuman reflexes".
// 4. Consulta el valor "39" de la propiedad age de Madame Uppercut

console.log(superHeroes.squadName);
console.log(superHeroes.members[1].name);
console.log(superHeroes.members[1].powers[2]);
console.log(superHeroes.members[1].ege);

// Ejercicios de métodos avanzados de arrays
// EJERCICIO 1: Mis amigos.
// Probablemente te acuerdes de este ejercicio que ya lo hemos trabajado antes, pues ahora
// filtraremos los amigos con el método filter(). Recuerda que el programa debe filtrar el arreglo
// y devolver uno nuevo con el nombre de sus amigos. Si un nombre tiene exactamente 4
// letras, ¡puedes estar seguro que es amigo tuyo! De lo contrario, no lo son.
// const amigo = [“Ryan”, “Kieran”, “Mark”, “Miguel”]
// El resultado esperado es [“Ryan”, “Mark”]

const amigo = ["Ryan", "Kieran", "Mark", "Miguel"]
const result = amigo.filter(item => item.length < 5);
console.log(result);

// EJERCICIO 2: Corrigeme la frase.
// Tenemos un arreglo llamado frases con varias sentencias al azar. Usá la función map() para
// que cada frase empiece y termine con signos de exclamación.
// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
// El resultado esperado es:
// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem
// amet.!' 
const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
console.log(frases);