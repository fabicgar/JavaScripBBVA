// Numeros Aleatorios
class Utilidades {
    static generarNumeroAleatorioEntre(minimo, maximo) {
        var anchoFranjaNumerica = (maximo - minimo) + 1;
        var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);

        return numero;
    }

    static generarNombreAleatorio() {
        var nombresSocios = ["Carlos", "Daniel", "Fabian", "Juan Carlos", "Bryan", "Saul", "Christian", "Marcel", "Ronal", "David", "Fran"];
        var indice = this.generarNumeroAleatorioEntre(0, nombresSocios.length - 1);

        return nombresSocios[indice];
    }
    fecha() {

    }
};

class Persona {
    constructor(nombre) {
        this._ID = Utilidades.generarNumeroAleatorioEntre();
        this._nombre = Utilidades.generarNombreAleatorio();
        this._edad = [];
        this._sexo = sexo;
        this._dni = Utilidades.generarNumeroAleatorioEntre;
        this._fechaNacimiento = fecha;
    }
}



class Empleado extends Persona {
    constructor(ID) {
        super()
        this._externo = true;
        this._turno = turno;
    }
}

class Medico extends Persona {
    constructor(ID) {
        super();
        this._especialidad = especialidad;
    }
}

class Paciente extends Persona {
    constructor(ID) {
        super();
        this._peso = Utilidades.generarNumeroAleatorioEntre(10, 100);
        this._altura = Utilidades.generarNumeroAleatorioEntre(10, 200);
        this.idMedico = id;
        this._salud = Utilidades.generarNumeroAleatorioEntre(0, 50);
    }

    //El medico diagnostica al paciente
    diagnostica(paciente) {}


    //Medico cura al paciente 
    curar(paciente) {

    }
}

class FabricaPersonas() {
    constructor(ID) {
        this._ultimoId = 0;


        this.crearMedico(numeroDeMedico);
        this.crearPaciente(numeroDePaciente);
    }

    crearMedico(numeroDeMedico) {
        this._ultimoId++;
        let medico = new Medico(this._ultimoId);
        console.log("se creo el medico");
        return medico;
    }

    crearPaciente() {
        this._ultimoId++;
        let paciente = new Paciente(this._ultimoId);
        console.log("se creo el paciente");
        return paciente;
    }

    //    this._crearMedico = ;
    //  this._crearPaciente = ;
}


class Hospital {
    constructor(areas, agenda) {
        this._nombre = nombre;
        this._areas = [];
        this._libros = [];
        this._pacientes = paciente;

        this.recibirPacientes(paciente);

    }
    // recibe al hospital
    recibirPacientes(pacientes) {
        this._pacientes.push(paciente);
    }

    getCapacidad() {

    }

    getNumeroPaciente() {

    }

    darDealta(paciente) {

    }

    trasladarPaciente(paciente) {}

}
class Area {
    constructor(especialidad) {
        this._especialidad = especialidad;
        this._medicos = [];
        this._pacientes = [];
    }
}

class ArchivoHistoriales() {
    constructor(historiales) {
        this._historial = [];
    }


    crearHistorial(paciente) {}
    getHistorial() {}
}

class HistorialClinico {
    constructor() {
        this._paciente = paciente;
        this._registro = [];
    }


    crearRegistro(medico, anotacion) {}

}

class Registro() {
    constructor(medico) {
        this._fecha = fecha;
        this._anotacion = anotacion;
        this._medico = medico;
    }
}

//  Interval del hospital
/*recibir pacientes (cada segundo uno aleatorio):
    salud entre (0-50)
    pasarles al área de urgencias
    asignar un médico*/
/*
var Hospital = null;
var IdInterval;
var contador = 0;
windows.onload =function(){
    hospital = new Hospital();
    console.log(hospital._area);
    hospital.iniciarHospital();
    IdInterval = windows.setInterval(function(){
        if(contador <= 10) {
        }

    })
}
*/

var intervalID = windows.setInterval(function() {

    var hospital = new Hospital();


    miHospital.ejecutarCiclo();
}, 1000);