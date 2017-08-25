class PerfilUser extends PageInnerPage {
    constructor(titulo, url, autenticadoDeUser, navigatorController, userController, userApiClient) {
        super(titulo, url, autenticadoDeUser, navigatorController);
        this._userController = userController;
        this._userApiClient = userApiClient;
    }

    pintar() {

        this._container = document.createElement("div");
        this._container.className = "container";

        let perfilUserHtml = `<div class="container">
            <button class="btn btn-default" id="regresar-home">Volver al Home</button>
            <div class="row main">
                <div class="panel-heading">
                   <div class="panel-title text-center">
                        <h1 class="title">Restaurant</h1>
                        <hr />
                    </div>
                </div> 
                <div class="main-login main-center">
                    <form class="form-horizontal" method="post" action="#">
                        <div class="form-group">
                            <label for="name" class="cols-sm-2 control-label">Nombre</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                    <input disabled="disabled" type="text" class="form-control" id="nombre" name="name" id="name"  placeholder="Nombre"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="surname" class="cols-sm-2 control-label">Apellido</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                    <input disabled="disabled" type="text" class="form-control" name="surname" id="apellidos"  placeholder="Apellido"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name" class="cols-sm-2 control-label">Email</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                    <input disabled="disabled" type="text" class="form-control" id="email" name="email" id="name"  placeholder="Email"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="username" class="cols-sm-2 control-label">Username</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                    <input disabled="disabled" type="text" class="form-control" id="username" name="username" id="username"  placeholder="Username"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="cols-sm-2 control-label">Password</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                    <input disabled="disabled" type="password" class="form-control" id="password" name="password" id="password"  placeholder="Password"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group ">
                            <button id="edit" type="button" class="btn btn-lg btn-primary btn-block btn-signin">Editar</button>
                             <button id="delet" type="button" class="btn btn-lg btn-primary btn-block btn-signin">Eliminar</button>
                              <button id="save" type="button" class="btn btn-lg btn-primary btn-block btn-signin">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>`;

        this._container = document.createElement("div");
        this._container.className = "container";
        this._container.innerHTML = perfilUserHtml;

        this._divPage = document.createElement("div");
        this._divPage.className = "perfil-User";
        this._divPage.appendChild(this._container);

        // relleno el form
        this._container.querySelector("#nombre").value = this._userController._user._nombre;
        this._container.querySelector("#apellidos").value = this._userController._user._apellidos;
        this._container.querySelector("#email").value = this._userController._user._email;
        this._container.querySelector("#username").value = this._userController._user._username;
        this._container.querySelector("#password").value = this._userController._user._password;

        let botonEditar = this._container.querySelector("#edit");
        botonEditar.addEventListener("click", () => this.habilitarEdit());

        let botonEliminar = this._container.querySelector("#delet");
        botonEliminar.addEventListener("click", () => this.deletUser());

        let botonGuardar = this._container.querySelector("#save");
        botonGuardar.addEventListener("click", () => this.saveEdit());

        let botonVolverHome = this._container.querySelector("#regresar-home");
        botonVolverHome.addEventListener("click", () => {

            this._navigatorController.navigateToUrl("#pagehome");
        });

        document.body.appendChild(this._divPage);
    }

    habilitarEdit() {
        console.log("se habilito el edit")

        let nombre = this._container.querySelector("#nombre");
        nombre.disabled = null;
        let campoEdit = this._container.querySelector("#apellidos");
        campoEdit.disabled = null;
        let campoEmail = this._container.querySelector("#email");
        campoEmail.disabled = null;
        let campoUsername = this._container.querySelector("#username");
        campoUsername.disabled = null;
    }

    deletUser() {
        alert("Esta seguro de Eliminar su Usuario");

        let nombre = this._container.querySelector("#nombre").value;
        let apellidos = this._container.querySelector("#apellidos").value;
        let email = this._container.querySelector("#email").value;
        let username = this._container.querySelector("#username").value;
        let password = this._container.querySelector("#password").value;

        let userTemp = new User(this._userController._user._id, nombre, apellidos, email, username, password);

        this._userController.deleteUserApi(userTemp).then((data) => {
            console.log(data);
            this._navigatorController.navigateToUrl("#login");
        });


    }

    saveEdit() {

        let nombre = this._container.querySelector("#nombre").value;
        let apellidos = this._container.querySelector("#apellidos").value;
        let email = this._container.querySelector("#email").value;
        let username = this._container.querySelector("#username").value;
        let password = this._container.querySelector("#password").value;

        let userTemp = new User(this._userController._user._id, nombre, apellidos, email, username, password);

        this._userApiClient.editarUser(userTemp).then((data) => {
            console.log("Realizamos edicion de usuario");
            console.log(data);
            this._navigatorController.navigateToUrl("#perfilUser");
        });
    }
}