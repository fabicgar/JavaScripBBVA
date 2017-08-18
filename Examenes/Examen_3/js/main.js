class MainControler {
    constructor() {
        this._container = null;
        this._divAdministrator = null;
        this._apiClient = new ApiClient();
        this._clientUser = new ClientUser(this._apiClient);
        this._administrator = new Administrator();
    }

    init() {
        this.pintarEstructura();
        this._gestionUsuarios.init(this._divAdministrator, this._clientUser);
    }

    pintarEstructura() {
        this._container = document.createElement("div");
        this._container.className = "container";

        this._divAdministrator = document.createElement("div");
        this._divAdministrator.className = "gestion-usuarios";

        this._container.appendChild(this._divAdministrator);
        document.body.appendChild(this._container);
    }
}

class Usuario {
    constructor(propiedades) {
        this._id = id;
        this._nombre = nombre;
        this._username = username;
        this._email = email;
        this._direccion = direccion;
        this._telefono = telefono;
        this._website = website;
        this._compania = compania;

    }

    class direccion{
     constructor(street, suite, city, Gwenborough, zipcode, geo){
       
     } 
    }
}

class GestionUsuarios {
    constructor() {
        this._contenedorHtml = null;
        this._usuario = [];
        this._clientUser = null;


    }

    init(contenedorHtml, clientUser) {
        this._contenedorHtml = contenedorHtml;
        this._clientUser = clientUser;
        this.pintarEstructura();
        this.getUsuariosAndPaint();
    }

    getUsuariosAndPaint() {
        this._clientUser.getUsuarios().then((data) => {
            this.pintarUsuario(data);

        });

        console.log("paint");

    }

    pintarUsuario(data) {
        let tbody = this._contenedorHtml.querySelector("tbody");
        tbody.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            let usuario = data[i];
            let row = this.getRowForUser(usuario);
            tbody.appendChild(row);
        }
    }

    getRowForUser(usuario) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = usuario._id;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.innerHTML = usuario._nombre;
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.innerHTML = usuario._username;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.innerHTML = usuario._email;
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.innerHTML = usuario._direccion;
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        td6.innerHTML = usuario._telefono;
        tr.appendChild(td6);

        let td7 = document.createElement("td");
        td7.innerHTML = usuario._website;
        tr.appendChild(td7);

        let td8 = document.createElement("td");
        td8.innerHTML = usuario._compania;
        tr.appendChild(td8);

        return tr;
    }

    pintarEstructura() {
        let estructura = `  
    <h1 class="main-title">USUARIOS-POST</h1>
        <div class="well">
           <h2 class="form-title">Datos User</h2>
           <form class="form-inline"> 
        <div class="button-container">
           <button class="btn btn-primary refrescarButton">Refrescar</button>
        </div>
        <table class="table table-striped table-bordered">
           <thead>
              <tr>
                 <th>ID</th>
                 <th>Nombre</th>
                 <th>Username</th>
                 <th>Email</th>
                 <th>Dirección</th>
                 <th>Teléfono</th>
                 <th>website</th>
                 <th>Compañia</th>
              </tr>
           </thead>
           <tbody>
           </tbody>
        </table>`;

        this._contenedorHtml.innerHTML = estructura;
    }
}

window.onload = () => {
    let mc = new MainControler();
    mc.init();
}