class PageLogin extends Page {
    constructor(titulo, url, autenticadoDeUser, navigatorController, userController, userApiClient) {
        super(titulo, url, autenticadoDeUser, navigatorController);
        this._userController = userController;
        this._userApiClient = userApiClient;
    }

    pintar() {
        this._container = document.createElement("div");
        this._container.className = "container";

        let loginHtml = `<div class="card card-container">
            <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
            <img id="profile-img" class="profile-img-card" src="http://2.bp.blogspot.com/-V6MFIxdYuKs/Vapn4t3jICI/AAAAAAABFxA/kFCpd-F_Bec/s400/facebook_middle_finger.jpg" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin">
                <span id="reauth-User" class="reauth-User"></span>
                <input type="User" id="username" class="form-control" placeholder="User" required autofocus>
                <input type="password" id="password" class="form-control" placeholder="Password" required>
                <div id="remember" class="checkbox">
                    <label> 
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block btn-signin" id ="Entrar" type="button">Sign in</button>
            </form><!-- /form -->
                <button class="btn btn-link" id ="crearCuenta" type="button">Crear Cuenta</button>
            </a>
        </div><!-- /card-container -->`;

        this._container = document.createElement("div");
        this._container.className = "container";
        this._container.innerHTML = loginHtml;

        this._divPage = document.createElement("div");
        this._divPage.className = "page-login";
        this._divPage.appendChild(this._container);

        document.body.appendChild(this._divPage);

        let botonEntrar = this._container.querySelector("#Entrar");
        botonEntrar.addEventListener("click", () => this.access());

        let botonCrearCuenta = this._container.querySelector("#crearCuenta");
        botonCrearCuenta.addEventListener("click", () => this.irCrearCuenta());
    }

    access() {
        let username = this._container.querySelector("#username").value;
        let password = this._container.querySelector("#password").value;

        //let user = new User(null, username, password);
        this._userController._user._username = username;
        this._userController._user._password = password;


        let userTemp = new User(null, null, null, null, username, password);
        //nombre, apellidos, email, username, password

        this._userController.login(userTemp);
        this._navigatorController.navigateToUrl("#pagehome");

    }

    irCrearCuenta() {
        this._navigatorController.navigateToUrl("#crear-cuenta");
    }

    validarDatosDeLogin() {

    }
}