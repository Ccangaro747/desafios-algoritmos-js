function sumaTodosImpares(array) {
  // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
  //
  // y debe devolver la suma total entre todos los numeros impares.
  // ej:
  // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15

  // Tu código aca:
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      suma += array[i];
    }
  }
  return suma;
}

console.log(sumaTodosImpares([1, 5, 19, 24, 44])); //25

//-----------------------------------------------------------------------------------------------------------------------
function stringMasLarga(str) {
  // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
  // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
  // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
  // Tip: podes usar el metodo de String 'split'

  // Tu código aca:
  const palabras = str.split(" ");
  let palabraMasLarga = "";

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > palabraMasLarga.length) {
      palabraMasLarga = palabras[i];
    }
  }

  return palabraMasLarga;
}
console.log(stringMasLarga("Me gusta viajar")); //viajar
console.log(stringMasLarga("Estoy aprendiendo javascript")); //javascript

//-----------------------------------------------------------------------------------------------------------------------
//function estaOffline(usuarios, nombre) {
// La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
// cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
// La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
// ej:
// var usuarios = [
//     {
//       nombre: 'toni',
//       online: true
//     },
//     {
//       nombre: 'emi',
//       online: true
//     },
//     {
//       nombre: 'agus',
//       online: false
//     }
// ];
// estaOffline(usuarios, 'agus') retorna true
// estaOffline(usuarios, 'emi') retorna false

// Tu código aca:

function estaOffline(usuarios, nombre) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nombre === nombre) {
      return !usuarios[i].online;
    }
  }
  return false;
}
var usuarios = [
  {
    nombre: "cami",
    online: true,
  },
  {
    nombre: "eli",
    online: true,
  },
  {
    nombre: "rufi",
    online: false,
  },
];

console.log(estaOffline(usuarios, "cami"));
console.log(estaOffline(usuarios, "rufi"));

//-----------------------------------------------------------------------------------------------------------------------

function actividadesEnComun(persona1, persona2) {
  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
  // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //     persona2 = ['comer', 'dormir', 'futbol']
  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
  // Tip: podes usar ciclos for anidados.
  // Tu código aca:
  const actividadesComunes = [];

  for (let i = 0; i < persona1.length; i++) {
    for (let j = 0; j < persona2.length; j++) {
      if (persona1[i] === persona2[j]) {
        actividadesComunes.push(persona1[i]);
        break;
      }
    }
  }

  return actividadesComunes;
}
var persona1 = ["leer", "comer", "pasear", "dormir", "jugar"];
var persona2 = ["comer", "dormir", "futbol"];
console.log(actividadesEnComun(persona1, persona2));

//-----------------------------------------------------------------------------------------------------------------------

function buscaDestruye(arreglo, num) {
  // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
  // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
  // La función debe retornar el array sin los números sacados.
  // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
  // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
  // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
  //
  // Tu código aca:
  const resultado = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] !== num) {
      resultado.push(arreglo[i]);
    }
  }

  return resultado;
}

console.log(buscaDestruye([1, 2, 3, 4], 2)); //[1, 3, 4]
console.log(buscaDestruye([1, 2, 3, 4, 1], 1)); //[2, 3, 4]

//-----------------------------------------------------------------------------------------------------------------------
// El array recibido por parametro es un array multidimencional con array's que
//contienen elementos de tipo number
// Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
// Sumando los elementos de cada array que contenga dos elementos,
// y devolviendo la suma del mismo
// OJO: Si el elemento dentro del array que ingresa por prop,
//ya es de tipo number, deben devolverlo como tal dentro del array que retornan.

function sumaDeArrays(array) {
  const resultado = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      if (array[i].length === 2) {
        const suma = array[i][0] + array[i][1];
        resultado.push(suma);
      }
    } else if (typeof array[i] === "number") {
      resultado.push(array[i]);
    }
  }

  return resultado;
}
let a = [[5, 5], 4, [10, 15], [25, 10]];
console.log(sumaDeArrays(a));
[10, 25, 35, 10]; //[10, 25, 35, 10]

//-----------------------------------------------------------------------------------------------------------------------

function mismoValorMismosElementos(numero, divisor) {
  // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
  // Todos los elementos deben tener el mismo valor
  // OJO: Si el resultado de la division no es un entero, deben devolver false
}
//NO SE HACE
//-----------------------------------------------------------------------------------------------------------------------

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
  }

  return newArray;
}
function multiplicarPorDos(num) {
  return num * 2;
}

let array = [1, 2, 3, 4, 5];
let resultado = map(array, multiplicarPorDos);
console.log(resultado); //[2, 4, 6, 8, 10]

//-----------------------------------------------------------------------------------------------------------------------

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string" && array[i][0].toLowerCase() === "a") {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

let array = ["auto", "moto", "camioneta", "avion", "tren"];
let resultado = filter(array);
console.log(resultado); //['auto', 'avion']

//-----------------------------------------------------------------------------------------------------------------------

function sumarElTipo(arreglo) {
  // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
  // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
  // de veces que se repita cada tipo.
  // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
  // Ej:
  // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
  // Tip: podes usar el ciclo for o el metodo de Array 'reduce'
  // Tu código aca:
  const resultado = arreglo.reduce((obj, tipo) => {
    obj[tipo] = (obj[tipo] || 0) + 1;
    return obj;
  }, {});

  return resultado;
}
console.log(sumarElTipo(["auto", "moto", "auto"]));

//-----------------------------------------------------------------------------------------------------------------------
// Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
// Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
// Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
// Devuelve el objeto
// Tu código:
function crearGato(nombre, edad) {
  const gato = {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return "Meow!";
    },
  };

  return gato;
}
const miGato = crearGato("Crusha", 3);
console.log(miGato.nombre);
console.log(miGato.edad);
console.log(miGato.meow());

//-----------------------------------------------------------------------------------------------------------------------

// Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
// Devuelve el objeto
// NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
// Tu código:
//objeto [property]= null;

function agregarPropiedad(objeto, property) {
  objeto[property] = null;
  return objeto;
}
const miObjeto = {
  nombre: "Camilo",
};

agregarPropiedad(miObjeto, "nuevaPropiedad");
console.log(miObjeto); //{ nombre: "Camilo", nuevaPropiedad: null }

//-----------------------------------------------------------------------------------------------------------------------

// "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
// Invoca ese método
// Nada necesita ser devuelto ("returned")
// Tu código:

function invocarMetodo(objeto, metodo) {
  objeto[metodo]();
}
const miObjeto = {
  saludar: function () {
    console.log("hola como estas?");
  },
};

invocarMetodo(miObjeto, "saludar"); //Imprime "hola como estas"

//-----------------------------------------------------------------------------------------------------------------------

// "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
// Multiplica el numeroMisterioso por 5 y devuelve el producto
// Tu código:

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  return objetoMisterioso.numeroMisterioso * 5;
}
const miObjeto = {
  numeroMisterioso: 2,
};

console.log(multiplicarNumeroDesconocidoPorCinco(miObjeto)); //10

//-----------------------------------------------------------------------------------------------------------------------
// Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
// tip: tenes que usar bracket notation = Notacion de corchetes.
// Devuelve el objeto
// Tu código:

function eliminarPropiedad(objeto, unaPropiedad) {
  delete objeto[unaPropiedad];
  return objeto;
}
const miObjeto = {
  nombre: "Camilo",
  edad: 25,
};

eliminarPropiedad(miObjeto, "edad");
console.log(miObjeto);

//-----------------------------------------------------------------------------------------------------------------------
// Crea un nuevo objeto con las propiedades coincidiendo con los
// argumentos que se pasan a la función
// Devuelve el objeto
// Tu código:

function nuevoUsuario(nombre, email, password) {
  const usuario = {
    nombre: nombre,
    email: email,
    password: password,
  };

  return usuario;
}
const nuevoUsuario1 = nuevoUsuario("Juan", "juan@gmail.com", "123456");
console.log(nuevoUsuario1); // Imprime: { nombre: "Juan", email: "juan@gmail.com", password: "123456" }

const nuevoUsuario2 = nuevoUsuario("María", "maria@gmail.com", "abcdef");
console.log(nuevoUsuario2); // Imprime: { nombre: "María", email: "maria@gmail.com", password: "abcdef" }

//-----------------------------------------------------------------------------------------------------------------------
// Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
// De lo contratio, devuelve "false"
// Tu código:

function tieneEmail(usuario) {
  return (
    usuario.hasOwnProperty("email") &&
    usuario.email !== undefined &&
    usuario.email !== null
  );
}
const usuario1 = {
  nombre: "Juan",
  email: "juan@gmail.com",
  password: "123456",
};

console.log(tieneEmail(usuario1)); // true

const usuario2 = {
  nombre: "María",
  password: "abcdef",
};

console.log(tieneEmail(usuario2)); // false

//-----------------------------------------------------------------------------------------------------------------------
// Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key)
//cuyo nombre es igual al valor del argumento "propiedad"
// "propiedad" es un string
// De lo contrario, devuelve "false"
// Tu código:

function tienePropiedad(objeto, propiedad) {
  return objeto.hasOwnProperty(propiedad);
}
const miObjeto = {
  nombre: "Camilo",
  edad: 25,
};

console.log(tienePropiedad(miObjeto, "nombre")); // Imrpime true
console.log(tienePropiedad(miObjeto, "edad")); // Imprime true
console.log(tienePropiedad(miObjeto, "direccion")); //Imprime false

//-----------------------------------------------------------------------------------------------------------------------
// Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
// Devuelve "true" si coinciden
// De lo contrario, devuelve "false"
// // Tu código:

function verificarPassword(usuario, password) {
  return usuario.password === password;
}
const usuario1 = {
  nombre: "Juan",
  email: "juan@gmail.com",
  password: "123456",
};

console.log(verificarPassword(usuario1, "123456")); // Imprime true
console.log(verificarPassword(usuario1, "abcdef")); // Imprime false

//-----------------------------------------------------------------------------------------------------------------------
// Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
// Devuelve el objeto
// Tu código:

function actualizarPassword(usuario, nuevaPassword) {
  usuario.password = nuevaPassword;
  return usuario;
}
const miUsuario = {
  nombre: "Gonzalo",
  email: "gonzalo@gmail.com",
  password: "password123",
};

console.log(actualizarPassword(miUsuario, "gonzalo123")); //Imprime { nombre: "Gonzalo", email: "gonzalo@gmail.com", password: "gonzalo123" }

//-----------------------------------------------------------------------------------------------------------------------
// "usuario" tiene una propiedad llamada "amigos" que es un array
// Agrega "nuevoAmigo" al final de ese array
// Devuelve el objeto "usuario"
// // Tu código:

function agregarAmigo(usuario, nuevoAmigo) {
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}
const miUsuario = {
  nombre: "Pepe",
  amigos: ["Dardo", "Maria Helena"],
};

console.log(agregarAmigo(miUsuario, "Fatiga"));

//-----------------------------------------------------------------------------------------------------------------------
// "usuarios" es un array de objetos "usuario"
// Cada objeto "usuario" tiene la propiedad "esPremium"
// Define cada propiedad "esPremium" de cada objeto como "true"
// Devuelve el  array de usuarios
// Tu código:

function pasarUsuarioAPremium(usuarios) {
  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
  return usuarios;
}

const misUsuarios = [
  { nombre: "Usuario1", esPremium: false },
  { nombre: "Usuario2", esPremium: false },
  { nombre: "Usuario3", esPremium: false },
];

console.log(pasarUsuarioAPremium(misUsuarios));

//-----------------------------------------------------------------------------------------------------------------------
// "usuario" tiene una propiedad llamada "posts" que es un array
// "posts" es un array de objetos "post"
// Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
// Suma todos los likes de todos los objetos "post"
// Devuelve la suma
// Tu código:

function sumarLikesDeUsuario(usuario) {
  let sumaLikes = 0;
  for (let i = 0; i < usuario.posts.length; i++) {
    sumaLikes += usuario.posts[i].likes;
  }
  return sumaLikes;
}
const miUsuario = {
  nombre: "Camilo",
  posts: [{ likes: 150 }, { likes: 80 }, { likes: 35 }],
};

console.log(sumarLikesDeUsuario(miUsuario)); // Imprime 265

//-----------------------------------------------------------------------------------------------------------------------
// Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
// Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
// El método resta el descuento del precio y devuelve el precio con descuento
// Devuelve el objeto "producto" al final de la función
// Ejemplo:
// producto.precio -> 20
// producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
// producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
// Tu código:

function agregarMetodoCalculoDescuento(producto) {
  producto.calcularPrecioDescuento = function () {
    return producto.precio - producto.precio * producto.porcentajeDeDescuento;
  };
  return producto;
}
const miProducto = {
  precio: 20,
  porcentajeDeDescuento: 0.2,
};

console.log(
  agregarMetodoCalculoDescuento(miProducto).calcularPrecioDescuento()
); //Imprime 16

// //-----------------------------------------------------------------------------------------------------------------------
// //-------------------------------------------Interacción con elDOM--------------------------------------------------------
// // En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// // Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// // agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// // Tu código acá:

const spanElement = document.querySelector("#createdBy");
spanElement.innerHTML += " Camilo";

//-----------------------------------------------------------------------------------------------------------------------

// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell

//todo es un objeto de la clase TODO. //index numerico
// Tu código acá:

function buildToDo(todo, index) {
  const toDoShell = document.createElement("div");
  toDoShell.className = "toDoShell";

  const toDoText = document.createElement("span");
  toDoText.innerHTML = todo.description;
  toDoText.id = index;

  if (todo.complete) {
    toDoText.classList.add("completeText");
  }

  toDoShell.appendChild(toDoText);

  return toDoShell;
}

//-----------------------------------------------------------------------------------------------------------------------

// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, escribe una línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {
  const toDoContainer = document.getElementById("toDoContainer");
  toDoContainer.innerHTML = "";

  const toDoItems = [
    { description: "tarea 1", complete: true },
    { description: "tarea 2", complete: false },
    { description: "tarea 3", complete: true },
  ];

  toDoItems.forEach((todo, index) => {
    const toDoElement = buildToDo(todo, index);
    toDoContainer.appendChild(toDoElement);
  });
}

displayToDos();

//-----------------------------------------------------------------------------------------------------------------------
