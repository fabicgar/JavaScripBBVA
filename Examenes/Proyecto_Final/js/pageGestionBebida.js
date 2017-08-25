class PageGestionBebida extends PageInnerPage {
    constructor(titulo, url, autenticadoDeUser, navigatorController, bebidaApiClient) {
        super(titulo, url, autenticadoDeUser, navigatorController);

        this._bebidaApiClient = bebidaApiClient;
    }

    pintar() {

        this._container = document.createElement("div");
        this._container.className = "container";

        this._divPage = document.createElement("div");
        this._divPage.className = "gestion-bebida";

        this._container.appendChild(this._divPage);
        document.body.appendChild(this._container);
    }

    getAllBebidasAndPaint() {
        this._bebidaApiClient.getAllBebida().then((data) => {
            this.paintAllBebidas(data);
        });

    }
    paintAllBebidas(data) {
        let tbody = this._container.querySelector("tbody");
        tbody.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            let bebida = data[i];
            let row = this.getRowForBebida(bebida);
            tbody.appendChild(row);
        }
    }

    getRowForBebida(bebida) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = bebida._grados;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.innerHTML = bebida._esAlcoholica;
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.innerHTML = bebida._precio;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.innerHTML = bebida._calorias;
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.innerHTML = bebida._existencias;
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        td6.innerHTML = bebida._nombre;
        tr.appendChild(td6);

        let td7 = document.createElement("td");
        //BOTONES
        let button1 = document.createElement("button");
        button1.innerHTML = "Editar";
        button1.className = "btn btn-link";
        button1.addEventListener("click", () => this.editarBebida(bebida));
        let button2 = document.createElement("button");
        button2.innerHTML = "Borrar";
        button2.className = "btn btn-link";
        button2.addEventListener("click", () => this.borrarComida(bebida));
        td6.appendChild(button1);
        td6.appendChild(button2);
        //FIN BOTONES
        tr.appendChild(td6);

        return tr;
    }

    pintar() {
        let listBebidaHtml = `  
        <div class="well">
           <h2 class="form-title">Bebidas</h2>
        </div>
              <button type="button" id="save" class="btn btn-success">Guardar</button>
              <button type="button" id="cancelar" class="btn btn-success">Cancelar</button>
           </form>
        </div>
        <div class="button-container">
           <button class="btn btn-primary refrescarButton">Refrescar</button>
        </div>
        <table class="mitabla table-striped table-bordered">
           <thead>
              <tr>
                 <th class="text-center">Grados</th>
                 <th class="text-center">Contiene Alcohol</th>
                 <th class="text-center">Precio</th>
                 <th class="text-center">Calorias</th>
                 <th class="text-center">Existencias</th>
                 <th class="text-center">Nombre</th>
                 <th class="text-center">Acciones</th>
              </tr>
           </thead>
           <tbody>
           </tbody>
        </table>`;

        this._container = document.createElement("div");
        this._container.className = "container";
        this._container.innerHTML = listBebidaHtml;

        this._divPage = document.createElement("div");
        this._divPage.className = "gestion-bebida";
        this._divPage.appendChild(this._container);

        document.body.appendChild(this._divPage);


        let botonRefrescar = this._container.querySelector(".refrescarButton");
        botonRefrescar.addEventListener("click", () => this.getAllBebidasAndPaint());

        let botonCrear = this._container.querySelector("#save");
        botonCrear.addEventListener("click", () => this.createComidaNew());

        let botonGuardarEdicion = this._container.querySelector("#cancelar");
        botonGuardarEdicion.addEventListener("click", () => this.saveEditor());

    }


    createBebidaNew() {

        let tipo = this._container.querySelector("#tipo").value;
        let precio = this._container.querySelector("#precio").value;
        let calorias = this._container.querySelector("#calorias").value;
        let existencias = this._container.querySelector("#existencias").value;
        let nombre = this._container.querySelector("#nombre").value;

        let bebida = new Bebida(null, tipo, precio, calorias, existencias, nombre);
        this._bebidaApiClient.createBebida(bebida);
    }

    editarBebida(bebida) {
        console.log("EDITAR COMIDA");
        console.log(bebida);
        this._bebidaEditando = bebida;
        this.rellenarFormulario(bebida);
    }

    rellenarFormulario(bebida) {
        this._container.querySelector("#tipo").value = bebida._tipo;
        this._container.querySelector("#precio").value = bebida._precio;
        this._container.querySelector("#calorias").value = bebida._calorias;
        this._container.querySelector("#existencias").value = bebida._existencias;
        this._container.querySelector("#nombre").value = bebida._nombre;
    }

    saveEditor() {
        let tipo = this._container.querySelector("#tipo").value;
        let precio = this._container.querySelector("#precio").value;
        let calorias = this._container.querySelector("#calorias").value;
        let existencias = this._container.querySelector("#existencias").value;
        let nombre = this._container.querySelector("#nombre").value;

        let bebidaTemp = new Comida(this._bebidaApiClient._bebida._id, tipo, precio, calorias, existencias, nombre);

        this._bebidaApiClient.editarBebida(bebidaTemp).then((data) => {
            console.log("Realizamos edicion de bebida");
            console.log(data);
            this._navigatorController.navigateToUrl("#PageGestionComida");
        });
    }
}