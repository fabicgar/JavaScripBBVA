// Funciones auxiliares
function generarNumeroAleatorioEntre(minimo, maximo) {
    var anchoFranjaNumerica = (maximo - minimo) + 1;
    var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);

    return numero;
}


function cobro(persona) {
    console.log(persona);
}

function ejecutarCicloAnimal() {
    for (var indiceArea = 0; indiceArea < zoo.areas.length; indiceArea++) {
        var area = zoo.areas[indiceArea];
        for (var indiceRecintos = 0; indiceRecintos < area.recintos.length; indiceRecintos++) {
            var recinto = area.recintos[indiceRecintos];
            for (var indiceAnimal = recinto.animales.length - 1; indiceAnimal >= 0; indiceAnimal--) {
                var animal = recinto.animales[indiceAnimal];
                if (animal.salud > 100) {
                    animal.salud == 100;
                }
                if (animal.salud < 50) {
                	//mando enfermeria
                	mandarEnfermeria(animal);
                }
            }
        }
    }
}

function ejecutarCiclozoo() {
    insertarPersonasAleatoriamente(10);

    //para todos los animales...
    ejecutarCicloAnimal();
    console.log("cicloejecutado");
    console.log(zoo);
}

function generarNombreAleatorio() {
    var nombresNegados = ["Carlos", "Daniel", "Fabian", "Juan Carlos", "Bryan", "Saul", "Christian", "Marcel", "Ronal", "David", "Fran"];
    var indice = generarNumeroAleatorioEntre(0, nombresNegados.length - 1);

    return nombresNegados[indice];
}

function dameRecintoAleatorio() {
    var recinto = null;
    var recintosEnMiZoo = [];

    for (var indiceArea = 0; indiceArea < zoo.areas.length; indiceArea++) {
        var area = zoo.areas[indiceArea];
        for (var indiceRecintos = 0; indiceRecintos < area.recintos.length; indiceRecintos++) {
            var recinto = area.recintos[indiceRecintos];
            if (recinto.personas.length < recinto.aforoMaximoPersonas) {
                recintosEnMiZoo.push(recinto);
            }
        }
    }

    if (recintosEnMiZoo.length == 0) {
        recinto = null;
    } else {
        var indiceAleatorio = generarNumeroAleatorioEntre(0, recintosEnMiZoo.length - 1);
        recinto = recintosEnMiZoo[indiceAleatorio];
    }

    console.log(recinto);

    return recinto;
}


//Aforo de los recintos
function addrecintoToAre(recinto, area) {
    area.recintos.push(recinto);
    area.aforoMaximoPersonas = area.aforoMaximoPersonas + recinto.aforoMaximoPersonas;
}

//areas de zoo
function addareaTozoo(area) {
    zoo.areas.push(area);
    zoo.aforo = zoo.aforo + area.aforoMaximo;
}

//si tengo ya el área dentro del zoo
//zoo.aforo = zoo.aforo + recinto.aforo




// Añade personas de forma aleatoria
function insertarPersonasAleatoriamente(numeroPersonas) {
    for (var i = 0; i < numeroPersonas; i++) {
        var persona = crearPersonaAleatoria();
        var recintoAleatorio = dameRecintoAleatorio();

        if (recintoAleatorio == null) {
            console.error("El zoo esta lleno");
        } else {
            recintoAleatorio.personas.push(persona);
        }


    }
}

var zoo = {
    nombre: "El último zoológico",
    ubicacion: [],
    areas: [],
    aforo: 12000,
    enfermeria: []
}

var ubicacion = {
    direccion: "Calle de los animalitos 123",
    ciudad: "Ciudad de México",
    pais: "México",
    telefono: 999888777
}

// Seteamos la ubicacion
zoo.ubicacion = ubicacion;




function crearArea(nombre) {
    var area = {
        nombre: nombre,
        aforoMaximo: 0,
        recintos: [],
    };

    return area;
}

function crearRecinto(nombre, aforoMaximoPersonas, aforoMaximoAnimales, detalle) {
    return {
        nombre: nombre,
        animales: [],
        personas: [],
        aforoMaximoPersonas: aforoMaximoPersonas,
        aforoMaximoAnimales: aforoMaximoAnimales,
        detalle: detalle
    };
}

function mandarEnfermeria(animal,recinto) {
zoo.enfermeria.push(registroAnimalEnfermeria(animal,recinto));
var posicion = recinto.animales.indexOf(animal);
recinto.animales.splice(posicion,1);
}

function registroAnimalEnfermeria(animal, recintos){
 var registrodelAnimal;
     registrodelAnimal= {
     	animal=animal,
     	recinto=recinto

     };
 return registrodelAnimal;
}


function crearAnimal(nombre, especie, salud, hambre, pais) {
    return {
        nombre: nombre,
        especie: especie,
        salud: salud,
        hambre: hambre,
        pais: pais
    };
}

function crearPersonaAleatoria() {
    return {
        nombre: generarNombreAleatorio(),
        edad: generarNumeroAleatorioEntre(1, 90),
        dinero: generarNumeroAleatorioEntre(0, 1000),
        estudiante: generarNumeroAleatorioEntre(0, 1)
    }
}

// Creo animales
var tigreBlanco = crearAnimal("Tigre Blanco", "Felino", 100, 80, "Egipto");
var tigreNormal = crearAnimal("Tigre", "Felino", 90, 60, "Africa");
var avestruz = crearAnimal("Avestruz", "Avis Chilensis", 100, 100, "Chile");
var flamenco = crearAnimal("Flamenco", "Phoenicopteridae", 5, 100, "Colombia");

// Creo recintos 
var recintoTigres = crearRecinto("Jaula de tigres", 50, 30, "Jaula super reforzada con titanium");
var recintoAves = crearRecinto("Jaula para aves no voladoras", 100, 80, "Algunas aves se pelean mucho");

// Creo areas
var areaMamiferos = crearArea("Mamíferos");
var areaAves = crearArea("Aves");

// Crear niños 
var niños

// Añado los animales a los recintos
recintoTigres.animales.push(tigreBlanco, tigreNormal);
recintoAves.animales.push(avestruz, flamenco);

// Añado los recintos a las áreas
areaMamiferos.recintos.push(recintoTigres);
areaAves.recintos.push(recintoAves);

//Añado las áreas al zoo
zoo.areas.push(x);


console.log(zoo);

//intervalo de ciclo general
setInterval(ejecutarCiclozoo, 1000);