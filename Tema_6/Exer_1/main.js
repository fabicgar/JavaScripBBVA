class MainController {
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
        // <div class="container">
        //     <div class="almacen-superheroes">
        //     </div>
        // </div>
        this._container = document.createElement("div");
        this._container.className = "container";

        this._divAlmacenSuperHeroes = document.createElement("div");
        this._divAlmacenSuperHeroes.className = "almacen-superheroes";

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
        this._superheroes = [];
        this._superHeroesApiClient = null;
    }

    init(contenedorHtml, superHeroesApiClient) {
        this._contenedorHtml = contenedorHtml;
        this._superHeroesApiClient = superHeroesApiClient;
        this.pintarEstructura();
        this.getAllSuperHeroesAndPaint();
    }

    // Antiguamente conocido como getAllSuperHeroes
    getAllSuperHeroesAndPaint(){
        this._superHeroesApiClient.getAllSuperHeroes().then((data) => {
            this.paintAllSuperHeroes(data);
        });
    }

    paintAllSuperHeroes(data){
        let tbody = this._contenedorHtml.querySelector("tbody");
        tbody.innerHTML = "";

        for(let i=0; i<data.length; i++){
            let superHeroe = data[i];
            let row = this.getRowForSuperHeroe(superHeroe);
            tbody.appendChild(row);
        }
    }

    // Debemos devolver una fila como esta
    // <tr>
    //     <td>1</td>
    //     <td>Fabián</td>
    //     <td>Chistes</td>
    //     <td>Cómico</td>
    //     <td>true</td>
    //     <td>
    //         <button class="btn btn-warning">Editar</button>
    //         <button class="btn btn-danger">Borrar</button>
    //     </td>
    // </tr>

    getRowForSuperHeroe(superHeroe){
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
        // BOTONES
        let button1 = document.createElement("button");
        button1.innerHTML = "Editar";
        button1.className = "btn btn-warning";
        td6.appendChild(button1);

        let button2 = document.createElement("button");
        button2.innerHTML = "Borrar";
        button2.className = "btn btn-danger";
        td6.appendChild(button2);
        // FIN BOTONES
        tr.appendChild(td6);

        return tr;
    }

    pintarEstructura() {
        let estructura = `
            <h1 class="main-title">CRUD de Superhéroes</h1>
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
                </form>
            </div>

            <div class="button-container">
                <button class="btn btn-primary">Refrescar</button>
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
    }
}

window.onload = () => {
    let mc = new MainController();
    mc.init();
}