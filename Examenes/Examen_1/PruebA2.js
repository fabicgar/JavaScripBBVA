// Clase Global Ultilidades
class Utilidades {
    static generarNumeroAleatorioEntre(minimo, maximo) {
        let anchoFranjaNumerica = (maximo - minimo) + 1;
        let numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);

        return numero;
    }

    static generarSeccionAleatoria() {
        let tipoSecciones = ["Amor", "Aventuras", "Naturaleza", "Historia", "Viajes"];
        let indice = this.generarNumeroAleatorioEntre(0, tipoSecciones.length - 1);

        return tipoSecciones[indice];
    }

    static generarNombreAleatorio() {
        let nombresSocios = ["Carlos", "Daniel", "Fabian", "Juan Carlos", "Bryan", "Saul", "Christian", "Marcel", "Ronal", "David", "Fran"];
        let indice = this.generarNumeroAleatorioEntre(0, nombresSocios.length - 1);

        return nombresSocios[indice];
    }
};

//Clase inicial
class Biblioteca {
    constructor(nombre) {
        this._nombre = nombre;
        this._secciones = [];
        this._socios = [];

        this.generarSecciones();
        this.añadeSociosAleatoriamente(100);
        this.añadeLibrosAleatoriamente(1000);

    }
    // Cambio de setInterval a =>
    inciarCiclo() {
        this._interval = setInterval(() => this.ejecutarCiclo(), 1000);
    }

    agregarSeccionaBiblioteca(seccion) {
        this._secciones.push(seccion);
    }

    generarSecciones() {
        // crear secciones
        let tipoSeccion = new Seccion("Amor");
        let tipoSeccion2 = new Seccion("Aventuras");
        let tipoSeccion3 = new Seccion("Naturaleza");
        let tipoSeccion4 = new Seccion("Historia");
        let tipoSeccion5 = new Seccion("Viajes");

        // adiciono a la biblioteca
        this.agregarSeccionaBiblioteca(tipoSeccion);
        this.agregarSeccionaBiblioteca(tipoSeccion2);
        this.agregarSeccionaBiblioteca(tipoSeccion3);
        this.agregarSeccionaBiblioteca(tipoSeccion4);
        this.agregarSeccionaBiblioteca(tipoSeccion5);
    }

    añadeSociosAleatoriamente(numeroSocios) {
        for (let i = 0; i < numeroSocios; i++) {
            let socio = new Socio(i);
            this._socios.push(socio);
        }
    }

    // hay que buscar a que seccion va
    buscarSeccion(nombreSeccion) {

        let seccionDeVuelta = null;

        for (let i = 0; i < this._secciones.length; i++) {
            let seccion = this._secciones[i];
            console.log(seccion._nombre);
            console.log(nombreSeccion);
            if (seccion._nombre == nombreSeccion) {
                console.log("seccion devuelta: " + seccion);
                seccionDeVuelta = seccion;
            }
        }
        return seccionDeVuelta;
    }

    //Añadir libro a la seccion indicada
    // insertarlo ahi
    // seccionQueSea._libros.push(libro);
    añadeLibrosAleatoriamente(numeroDeLibros) {
        let contador = 0;

        while (contador < numeroDeLibros) {
            let libroAleatorio = new Libro("Libro" + contador)
            let seccion = this.buscarSeccion(libroAleatorio._tematica);
            seccion._libros.push(libroAleatorio);
            contador++;
        }
    }

    dameLibroAleatorio() {
        let numeroSeccion = Utilidades.generarNumeroAleatorioEntre(0, this._secciones.length - 1);
        let seccion = this._secciones[numeroSeccion];
        let numeroLibro = Utilidades.generarNumeroAleatorioEntre(0, seccion._libros.length - 1);
        let libro = seccion._libros[numeroLibro];
        seccion._libros.splice(numeroLibro, 1);

        return libro;
    }

    devolverLibro(libro) {
        let seccion = this.buscarSeccion(libro._tematica);
        seccion._libros.push(libro);
    }


    // ejecutar el ciclo de todos los socios
    ejecutarCiclo() {
        for (let i = 0; i < this._socios.length; i++) {
            let socio = this._socios[i];
            socio.ejecutarCiclo(this);
        }

        console.log("soy ejecutarCiclo de biblioteca");

        this.imprimirResumen();
    }

    imprimirResumen() {
        console.log("Numero de libros en la biblioteca: ");
        let librosEnBiblioteca = 0;
        let librosSocios = 0;
        for (let i = 0; i < this._secciones.length; i++) {
            let seccion = this._secciones[i];
            console.log("Sección: " + seccion._nombre + " " + seccion._libros.length);
            librosEnBiblioteca = librosEnBiblioteca + seccion._libros.length;
        }
        console.log("Total de Libros en la Biblioteca: " + librosEnBiblioteca);

        for (let i = 0; i < this._socios.length; i++) {
            let socio = this._socios[i];
            librosSocios += socio._libros.length;
        }
        let librosPrestados = librosSocios;
        console.log("Total de Libros prestados a Socios: " + librosPrestados);

    }
}

//COLOCARSE EN LA SECCION CORRESPONDIENTE

class Libro {
    constructor(nombre, tematica) {
        this._nombre = Utilidades.generarNumeroAleatorioEntre(1, 1000);
        this._numeroDePaginas = Utilidades.generarNumeroAleatorioEntre(200, 500);
        this._autor = Utilidades.generarNombreAleatorio();
        this._tematica = Utilidades.generarSeccionAleatoria();
    }
}

class Seccion {
    constructor(nombreSeccion) {
        this._nombre = nombreSeccion;
        this._libros = [];
    }
}

//socio
class Socio {
    constructor(numeroDeSocio) {
        this._nombre = Utilidades.generarNombreAleatorio();
        this._numeroDeSocio = numeroDeSocio;
        this._libros = [];
    }

    //devuelve un libro aleatorio DE LA BIBLIOTECA

    // Ejecutar ciclo de socio / devolver todos sus libros a la biblioteca
    // coger libros aleatorios (1-3)

    ejecutarCiclo(miBiblioteca) {

        for (let i = this._libros.length - 1; i >= 0; i--) {
            let libroSocio = this._libros[i];
            miBiblioteca.devolverLibro(libroSocio);
            this._libros.splice(i, 1);
        }

        let numeroDeLibrosACoger = Utilidades.generarNumeroAleatorioEntre(1, 3);
        for (let i = 0; i < numeroDeLibrosACoger; i++) {
            let libro = miBiblioteca.dameLibroAleatorio();
            this._libros.push(libro);
        }
    }

}

//Crear Biblioteca
var miBiblioteca = new Biblioteca("Biblioteca FCGR");

console.log(miBiblioteca);
miBiblioteca.inciarCiclo();



console.log("Ciclo ejecutadoooo!!");