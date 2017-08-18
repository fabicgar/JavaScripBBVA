class MainControler {
    constructor() {
        this._container = null;
        this._divAlmacenSuperHeroes = null;
        this._apiClient = new ApiClient();
        this._superHeroesApiClient = new SuperHeroesApiClient(this._apiClient);
        this._almacenSuperHeroes = new AlmacenSuperHeroes();
    }

    init() {
        this.pintarEstructura();
        this._almacenSuperHeroes.init(this._divAlmacenSuperHeroes, this._superHeroesApiClient);
    }

    pintarEstructura() {
        this._container = document.createElement("div");
        this._container.className = "container";

        this._divAlmacenSuperHeroes = document.createElement("div");
        this._divAlmacenSuperHeroes.className = "alamacen-superHeroes";

        this._container.appendChild(this._divAlmacenSuperHeroes);
        document.body.appendChild(this._container);
    }
}

class SuperHeroe {
    constructor(identificador, apodo, arma, trabajo, deuda) {
        this._identificador = identificador;
        this._apodo = apodo;
        this._arma = arma;
        this._trabajo = trabajo;
        this._deuda = deuda;
    }
}


class AlmacenSuperHeroes {
    constructor() {
        this._contenedorHtml = null;
        this._superHeroes = [];
        this._superHeroesApiClient = null;
    }

    init(contenedorHtml, superHeroesApiClient) {
        this._contenedorHtml = contenedorHtml;
        this._superHeroesApiClient = superHeroesApiClient;
        this.pintarEstructura();
        this.getAllSuperHeroesAndPaint();
    }

    getAllSuperHeroesAndPaint() {
        this._superHeroesApiClient.getAllSuperHeroes().then((data) => {
            this.paintAllSuperHeroes(data);
        });
    }

    paintAllSuperHeroes(data) {
        let tbody = this._contenedorHtml.querySelector("tbody");
        tbody.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            let superHeroe = data[i];
            let row = this.getRowForSuperHeroe(superHeroe);
            tbody.appendChild(row);
        }
    }

    getRowForSuperHeroe(superHeroe) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = superHeroe._identificador;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.innerHTML = superHeroe._apodo;
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.innerHTML = superHeroe._arma;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.innerHTML = superHeroe._trabajo;
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.innerHTML = superHeroe._deuda;
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        //BOTONES
        let button1 = document.createElement("button");
        button1.innerHTML = "Editar";
        button1.className = "btn btn-warning";
        button1.addEventListener("click", () => this.editarSuperHeroe(superHeroe));
        let button2 = document.createElement("button");
        button2.innerHTML = "Borrar";
        button2.className = "btn btn-danger";
        button2.addEventListener("click", () => this.borrarSuperHeroe(superHeroe));
        td6.appendChild(button1);
        td6.appendChild(button2);
        //FIN BOTONES
        tr.appendChild(td6);

        return tr;
    }

    editarSuperHeroe(superHeroe) {
        console.log("EDITAR SUPERHEROEE");
        console.log(superHeroe);

        this._superHeroesEditando = superHeroe;
        
        this.rellenarFormulario(superHeroe);
    }

    rellenarFormulario(superHeroe){

        this._contenedorHtml.querySelector("#nombre").value = superHeroe._apodo;
        this._contenedorHtml.querySelector("#arma").value = superHeroe._arma;
        this._contenedorHtml.querySelector("#profesion").value = superHeroe._trabajo;
        //let deuda = this._contenedorHtml.querySelector("#deuda").checked;

    }

    mostrarBotonEditar(){

    }

    saveEditor(){
        console.log("mi nombre es saveEditor");
        this.upDateSuperHeroe();
    }


    upDateSuperHeroe(){
        this._superHeroesEditando._apodo = this._contenedorHtml.querySelector("#nombre").value;
        this._superHeroesEditando._arma = this._contenedorHtml.querySelector("#arma").value;
        this._superHeroesEditando._trabajo = this._contenedorHtml.querySelector("#profesion").value;
        console.log(this._superHeroesEditando);
    }

    borrarSuperHeroe(superHeroe) {
        console.log("BORRAR SUPERHEROEE");
        console.log(superHeroe);
    }

    crearSuperHeroe() {
        let apodo = this._contenedorHtml.querySelector("#nombre").value;
        let arma =  this._contenedorHtml.querySelector("#arma").value;
        let trabajo = this._contenedorHtml.querySelector("#profesion").value;
        let deuda = this._contenedorHtml.querySelector("#deuda").checked;

        let superHeroe = new SuperHeroe(null, apodo, arma, trabajo, deuda);

        this._superHeroesApiClient.createSuperHero(superHeroe).then((data)=>{
            console.log("Ha terminado el metodo createSuperHero");
            console.log(data);
            this.getAllSuperHeroesAndPaint();
        });
    }

    pintarEstructura() {
        let estructura = `  
		<h1 class="main-title">HEROES</h1>
        <div class="well">
           <h2 class="form-title">Formulario</h2>
           <form class="form-inline">
              <div class="form-group">
                 <label for="nombre">Nombre</label>
                 <input type="text" class="form-control" id="nombre" placeholder="Han Solo">
              </div>
              <div class="form-group">
                 <label for="arma">Arma</label>
                 <input type="text" class="form-control" id="arma" placeholder="Pistola">
              </div>
              <div class="form-group">
                 <label for="profesion">Profesión</label>
                 <input type="text" class="form-control" id="profesion" placeholder="Asesino">
              </div>
              <div class="form-group">
                 <label class="checkbox-inline">
                 <input type="checkbox" id="deuda" value="">
                 Deuda
                 </label>
              </div>
              <button type="button" id="reset" class="btn btn-default">Reset</button>
              <button type="button" id="crear" class="btn btn-success">Crear</button>
              <button type="button" id="guardarEdicion" class="btn btn-primary">GuardarEdicion</button>
           </form>
        </div>
        <div class="button-container">
           <button class="btn btn-primary refrescarButton">Refrescar</button>
        </div>
        <table class="table table-striped table-bordered">
           <thead>
              <tr>
                 <th>ID</th>
                 <th>Nombre</th>
                 <th>Arma</th>
                 <th>Profesión</th>
                 <th>Deuda</th>
                 <th>Acciones</th>
              </tr>
           </thead>
           <tbody>
           </tbody>
        </table>`;

        this._contenedorHtml.innerHTML = estructura;

        let botonRefrescar = this._contenedorHtml.querySelector(".refrescarButton");
        botonRefrescar.addEventListener("click", () => this.getAllSuperHeroesAndPaint());

        let botonCrear = this._contenedorHtml.querySelector("#crear");
        botonCrear.addEventListener("click", () => this.crearSuperHeroe());

        let botonGuardarEdicion = this._contenedorHtml.querySelector("#guardarEdicion");
        botonGuardarEdicion.addEventListener("click", () => this.saveEditor());


    }

}

window.onload = () => {
    let mc = new MainControler();
    mc.init();
}