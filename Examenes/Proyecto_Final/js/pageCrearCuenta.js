class PageCrearCuenta extends Page {
    constructor(titulo, url, autenticadoDeUser, navigatorController) {
        super(titulo, url, autenticadoDeUser, navigatorController);
    }

    pintar() {
        let crearCuentaHtml = `  
        <div class="container">
            <button class="btn btn-default" id="regresar-login">Volver a Login</button>
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
                                    <input type="text" class="form-control" id="nombre" name="name" id="name"  placeholder="Nombre"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="surname" class="cols-sm-2 control-label">Apellido</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" surname="surname" id="apellidos"  placeholder="Apellido"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name" class="cols-sm-2 control-label">Email</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" id="email" email="email" id="name"  placeholder="Email"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="username" class="cols-sm-2 control-label">Username</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" id="username" name="name" id="username"  placeholder="Username"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="cols-sm-2 control-label">Password</label>
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                    <input type="password" class="form-control" id="password" name="password" id="password"  placeholder="Password"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group ">
                            <button id="registrar" type="button" class="btn btn-primary btn-lg btn-block login-button">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>`;


        this._container = document.createElement("div");
        this._container.className = "container";
        this._container.innerHTML = crearCuentaHtml;

        this._divPage = document.createElement("div");
        this._divPage.className = "crear-cuenta";
        this._divPage.appendChild(this._container);

        document.body.appendChild(this._divPage);

        let botonRegistrar = this._container.querySelector("#registrar");
        botonRegistrar.addEventListener("click", () => this.register());

        let botonVolverLogin = this._container.querySelector("#regresar-login");
        botonVolverLogin.addEventListener("click", () => this.volverLogin());
    }

    register() {
        let nombre = this._container.querySelector("#nombre").value;
        let apellidos = this._container.querySelector("#apellidos").value;
        let email = this._container.querySelector("#email").value;
        let username = this._container.querySelector("#username").value;
        let password = this._container.querySelector("#password").value;

        let user = new User(null, email, apellidos, nombre, username, password);

        this._userApiClient.createUser(user).then((data) => {
            console.log("Realizamos registro de usuario");
            console.log(data);

            this._navigatorController.navigateToUrl("#login");

        });
    }

    volverLogin() {
        console.log("Volver al login");
        this._navigatorController.navigateToUrl("#login");
    }
}