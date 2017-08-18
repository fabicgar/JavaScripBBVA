// Funciones auxiliares
function generarNumeroAleatorioEntre(minimo, maximo) {
    var anchoFranjaNumerica = (maximo - minimo) + 1;
    var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);

    return numero;
}


function cobro(persona) {
    console.log(persona);
}

/*function ejecutariCcloAnimal() {
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
*/
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

function Recinto(nombre, aforoMaximoPersonas, aforoMaximoAnimales, detalle) {
    this._nombre = nombre;
    this._animales = [];
    this._personas = [];
    this._aforoMaximoPersonas = aforoMaximoPersonas;
    this._aforoMaximoAnimales = aforoMaximoAnimales;
    this._detalle = detalle;
}
Recinto.prototype.añadirAnimal = function(animal){
    this._animales.push(animal);
};


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


function Animal(nombre, especie, salud, hambre, pais, enfermeria, recinto){
    this._nombre = nombre;
    this._especie = especie;
    this._salud = salud;
    this._hambre = hambre;
    this._pais = pais;
    this._enfermeria = enfermeria;
    this._recinto = recinto;
};

Animal.prototype.ganarPerderSaludAleatorioYMandarEnfermeria = function(){
    var aumentoDeSalud = generarNumeroAleatorioEntre(-10, 10);
    this._salud = this._salud + aumentoDeSalud;

    if(this._salud>100){
        this._salud = 100;
    }

    if(this._salud<0){
        this._salud = 0;
    }

    if(this._salud<50){
        var caso = {
            animal: this,
            recinto: recinto
        }
        this._enfermeria.push(caso);
        var indiceEnRecinto = this._recinto.animales.indexOf(this);
        this._recinto.animales.splice(indiceEnRecinto, 1);
    }
};

Animal.prototype.aumentarHambre = function(){
    this._hambre = this._hambre + 10;
};

Animal.prototype.ejecutarCiclo = function(){
    this.aumentarHambre();
    this.ganarPerderSaludAleatorioYMandarEnfermeria();
};


// ahora
var perro = new Animal("Perro Bobby", "Pastor Alemán", 100, 0, "Alemania");
var gato = new Animal("Gato Bobby", "Gato Alemán", 90, 0, "Alemania");

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
recintoTigres.añadirAnimal(tigreBlanco);
recintoTigres.añadirAnimal(tigreNormal);
recintoAves.animales.push(avestruz, flamenco);

// Añado los recintos a las áreas
areaMamiferos.recintos.push(recintoTigres);
areaAves.recintos.push(recintoAves);

//Añado las áreas al zoo
zoo.areas.push(areaMamiferos, areaAves);


console.log(zoo);

//intervalo de ciclo general
setInterval(ejecutarCiclozoo, 1000);