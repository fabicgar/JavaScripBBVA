class MainController {
    constructor() {
        this._container = null;
        this._divAlmacen = null;
        this._apiClient = new ApiClient();
        this._pokemonApi = new PokemonApi(this._apiClient);
        this._pokedex = new Pokedex(this);

        this._paginaActual = 1;
    }

    paginaSiguiente() {
        debugger;
        this._paginaActual = this._paginaActual + 1;
        this.motrardetallePokemons();
        this._paginaActual.innerHTML = "Página Actual:" + pagina;
    }

    paginaAnterior() {

        this._paginaActual = this._paginaActual - 1;

        if (this._paginaActual < 1) {
            this._paginaActual = 1;
        }

        this.motrardetallePokemons();
    }


    init() {
        this.pintarEstructura();
        this.verDetallePokemon();
    }

    pintarEstructura() {
        this._container = document.createElement("div");
        this._container.className = "container";
        this._divAlmacen = document.createElement("div");
        this._divAlmacen.className = "almacen-pokemons";
        this._container.appendChild(this._divAlmacen);
        document.body.appendChild(this._container);
    }

    verDetallePokemon() {
        this._pokedex.init(this._divAlmacen, this._pokemonApiClient, this._paginaActual);
    }
}

class Pokemon {
    constructor(name, url, peso, altura, urlImagen) {
        this._name = name;
        this._url = url;
        this._peso = peso;
        this._altura = altura;
        this._urlImagen = urlImagen;
    }
}

class Pokedex {
    constructor(mainController) {
        this._contenedorHtml = null;
        this._pokemons = [];
        this._pokemonApi = null;
        this._mainController = mainController;
    }

    init(contenedorHtml, pokemonApi, pagina) {
        this._contenedorHtml = contenedorHtml;
        this._pokemonApi = pokemonApi;
        this.pintarEstructura();
        this.getAllPokemonsAndPaint(pagina);

    }

    getAllPokemonsAndPaint(pagina) {
        this._pokemonApi.getPokemonsAtPage(pagina).then((data) => {
            this.getPokemonsAtPage(data);

        });
    }

    getPokemonsAtPage(data) {
        console.log(data);
        let tbody = this._contenedorHtml.querySelector("tbody");
        tbody.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            let pokemon = data[i];
            let row = this.getRowForPokemon(pokemon);
            tbody.appendChild(row);
        }
    }


    getRowForPokemon(pokemon) {
        let tr = document.createElement("tr");
        let td2 = document.createElement("td");
        td2.innerHTML = pokemon._name;
        tr.appendChild(td2);
        let td5 = document.createElement("td");
        let buttonDetalles = document.createElement("button");
        buttonDetalles.innerHTML = "Detalles";
        buttonDetalles.className = "btn btn-success";
        buttonDetalles.addEventListener("click", () => this.getDetallePokemonAndPaint(pokemon._url));
        td2.appendChild(buttonDetalles);
        tr.appendChild(td2);


        return tr;
    }


    pintarEstructura() {
        this._contenedorHtml.className = "container";

        let estructura = `
            <h1 class="main-title"> La Pokedex XANXA! </h1>
            
            <div class="siguiente">
             <h3 class="form-title"> Listado de Pokemons </h3>
                <ul class="pager">
                    <li><a id="anterior" href="#">Previous</a></li>
                    <span class = "pagina" id="pagina">Página Actual: 1</span>
                    <li><a id="siguiente" href="#">Next</a></li>
            </div>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th class="text-center">Nombre</th>
                        <th class="text-center">Detalles</th>                       
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            `;


        this._contenedorHtml.innerHTML = estructura;
        //this._paginaActual = this._contenedorHtml.querySelector("#pagina");
        let botonSiguiente = this._contenedorHtml.querySelector("#siguiente");
        botonSiguiente.addEventListener("click", () => this._mainController.paginaSiguiente());


        let botonAnterior = this._contenedorHtml.querySelector("#anterior");
        botonAnterior.addEventListener("click", () => this._mainController.paginaAnterior());
    }

    getDetalleDePokemon(urlDetalle) {
        this._pokemonApiClient.getPokemonByUrl(urlDetalle).then((data) => {
            this.pintarDetalle(data);
        });
    }

    pintarDetalle(pokemon) {
        let imagen = pokemon._urlImagen;
        let nombre = pokemon._name;
        let peso = pokemon._peso;
        let altura = pokemon._altura;
        let html = `<p><img src="${imagen}"></p>
                    <p><strong>Nombre:</strong> ${nombre} </p>
                    <p><strong>Peso:</strong> ${peso}</p>
                    <p><strong>Altura:</strong> ${altura}</p>
                    `;

        console.log(html);
        Modal.openModal(pokemon._name, html);
        return html;
    }
}

class Modal {
    constructor() {}

    static closeModal() {
        var modal = document.body.querySelector("#contenedorModal");
        if (modal) {
            modal.parentElement.removeChild(modal);
        }
    }

    static openModal(titulo, mensaje) {
        let contenedorModal = document.createElement("div");
        contenedorModal.id = "contenedorModal";
        contenedorModal.innerHTML = `
        <div class="modal fade in" id="myModal" role="dialog" style="display: block; padding-left: 0px;">
        <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" id="close-modal-button">×</button>
        <h4 class="modal-title">${titulo}</h4>
        </div>
        <div class="modal-body">
        ${mensaje}
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-default" id="close-modal-button2">Close</button>
        </div>
        </div>
        </div>
        </div>
        <div class="modal-backdrop fade in"></div>
        `;

        let botonCerrar = contenedorModal.querySelector("#close-modal-button");
        botonCerrar.addEventListener("click", () => this.closeModal());

        let botonCerrar2 = contenedorModal.querySelector("#close-modal-button2");
        botonCerrar2.addEventListener("click", () => this.closeModal());

        document.body.appendChild(contenedorModal);
    };


}

window.onload = () => {
    let mc = new MainController();
    mc.init();
}