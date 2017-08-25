class PageGestionComida extends PageInnerPage {
    constructor(titulo, url, autenticadoDeUser, navigatorController, comidaApiClient) {
        super(titulo, url, autenticadoDeUser, navigatorController);
        this._comidaApiClient = comidaApiClient;
    }

    getAllComidasAndPaint() {
        this._comidaApiClient.getAllComida().then((data) => {
            this.paintAllComidas(data);
        });

    }
    paintAllComidas(data) {
        let tbody = this._container.querySelector("tbody");
        tbody.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            let comida = data[i];
            let row = this.getRowForComida(comida);
            tbody.appendChild(row);
        }
    }

    getRowForComida(comida) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = comida._tipo;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.innerHTML = comida._precio;
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.innerHTML = comida._calorias;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.innerHTML = comida._existencias;
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.innerHTML = comida._nombre;
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        //BOTONES
        let button1 = document.createElement("button");
        button1.innerHTML = "Editar";
        button1.className = "btn btn-warning";
        button1.addEventListener("click", () => this.editarComida(comida));
        let button2 = document.createElement("button");
        button2.innerHTML = "Borrar";
        button2.className = "btn btn-danger";
        button2.addEventListener("click", () => this.borrarComida(comida));
        td6.appendChild(button1);
        td6.appendChild(button2);
        //FIN BOTONES
        tr.appendChild(td6);

        return tr;
    }

    pintar() {
        let listComidaHtml = `  
        <div class="well">
           <h2 class="form-title">Comida</h2>
           <form class="form-inline">
              <div class="form-group">
                 <label for="tipo">Tipo</label>
                 <select id="tipos">
                    <option value="Entrante">Entrante</option>
                    <option value="Principal">Principal</option>
                    <option value="Postre">Postre</option>
                </select>
              </div>
               <div class="form-group">
                 <label for="precio">Precio</label>
                 <input type="text" class="form-control" id="precio" placeholder="Precio $$">
              </div>
              <div class="form-group">
                 <label for="calorias">Calorias</label>
                 <input type="text" class="form-control" id="calorias" placeholder="Calorias ##">
              </div>
              <div class="form-group">
                 <label for="existencias">Existencias</label>
                 <input type="text" class="form-control" id="existencias" placeholder="Existencias ##">
              </div>
              <div class="form-group">
                 <label class="center" for="nombre">Nombre</label>
                 <input type="text" class="form-control" id="nombre" placeholder="Sancocho!!">
              </div>
              <button type="button" id="reset" class="btn btn-default">Reset</button>
              <button type="button" id="crear" class="btn btn-success">Crear</button>
              <button type="button" id="guardarEdicion" class="btn btn-success">GuardarEdicion</button>
           </form>
        </div>
        <div class="button-container">
           <button class="btn btn-primary refrescarButton">Refrescar</button>
        </div>
        <table class="table table-striped table-bordered">
           <thead>
              <tr>
                 <th class="text-center">Tipo</th>
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
        this._container.innerHTML = listComidaHtml;

        this._divPage = document.createElement("div");
        this._divPage.className = "gestion-comida";
        this._divPage.appendChild(this._container);

        document.body.appendChild(this._divPage);


        let botonRefrescar = this._container.querySelector(".refrescarButton");
        botonRefrescar.addEventListener("click", () => this.getAllComidasAndPaint());

        let botonCrear = this._container.querySelector("#crear");
        botonCrear.addEventListener("click", () => this.createComidaNew());

        let botonGuardarEdicion = this._container.querySelector("#guardarEdicion");
        botonGuardarEdicion.addEventListener("click", () => this.saveEditor());

        this.getAllComidasAndPaint();


    }

    createComidaNew() {

        let tipo = this._container.querySelector("#tipo").value;
        let precio = this._container.querySelector("#precio").value;
        let calorias = this._container.querySelector("#calorias").value;
        let existencias = this._container.querySelector("#existencias").value;
        let nombre = this._container.querySelector("#nombre").value;

        let comida = new Comida(null, tipo, precio, calorias, existencias, nombre);
        this._comidaApiClient.createComida(comida);
    }

    editarComida(comida) {
        console.log("EDITAR COMIDA");
        console.log(comida);
        this._comidaEditando = comida;
        this.rellenarFormulario(comida);
    }

    rellenarFormulario(comida) {
        this._container.querySelector("#tipos").value = comida._tipo;
        // let options = this._container.querySelector("#tipos").options;
        // for (let i = 0; i < options.length; i++) {
        //     let option = option[i];
        //     if (option.value == comida._tipo){
        //       options.selectedIndex = i;
        //     }
        // }
        this._container.querySelector("#precio").value = comida._precio;
        this._container.querySelector("#calorias").value = comida._calorias;
        this._container.querySelector("#existencias").value = comida._existencias;
        this._container.querySelector("#nombre").value = comida._nombre;
    }

    saveEditor() {
        let tipo = this._container.querySelector("#tipo").value;
        let precio = this._container.querySelector("#precio").value;
        let calorias = this._container.querySelector("#calorias").value;
        let existencias = this._container.querySelector("#existencias").value;
        let nombre = this._container.querySelector("#nombre").value;

        let comidaTemp = new Comida(this._comidaApiClient._comida._id, tipo, precio, calorias, existencias, nombre);

        this._comidaApiClient.editarComida(comidaTemp).then((data) => {
            console.log("Realizamos edicion de comida");
            console.log(data);
            this._navigatorController.navigateToUrl("#PageGestionComida");
        });
    }

    borrarComida() {
        let tipo = this._container.querySelector("#tipo").value;
        let precio = this._container.querySelector("#precio").value;
        let calorias = this._container.querySelector("#calorias").value;
        let existencias = this._container.querySelector("#existencias").value;
        let nombre = this._container.querySelector("#nombre").value;

        let comidaTemp = new Comida(this._comidaApiClient._comida._id, tipo, precio, calorias, existencias, nombre);

        this._comidaApiClient.deleteComida(comidaTemp).then((data) => {
            console.log("Realizamos Borrado");
            console.log(data);
            this._navigatorController.navigateToUrl("#PageGestionComida");
        });

    }
}