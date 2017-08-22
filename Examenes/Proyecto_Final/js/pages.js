class Page {
    constructor(titulo, url, autenticadoDeUser) {
        this._titulo = titulo;
        this._url = url;
        this._autenticadoDeUser = autenticadoDeUser;
        

    }

    init() {

       
    }
}

class PageLogin extends Page {
    constructor(titulo, url, autenticadoDeUser, navigatorController) {
        super(titulo, url, autenticadoDeUser);
        this._navigatorController = navigatorController;
    }

    pintar() {
        this._container = document.createElement("div");
        this._container.className = "container";

        let login = `<div class="card card-container">
            <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
            <img id="profile-img" class="profile-img-card" src="http://2.bp.blogspot.com/-V6MFIxdYuKs/Vapn4t3jICI/AAAAAAABFxA/kFCpd-F_Bec/s400/facebook_middle_finger.jpg" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin">
                <span id="reauth-User" class="reauth-User"></span>
                <input type="User" id="inputUser" class="form-control" placeholder="User" required autofocus>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <div id="remember" class="checkbox">
                    <label> 
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block btn-signin" id ="Entrar" type="button">Sign in</button>
            </form><!-- /form -->
            <a href="#" class="CrearCuenta">
                Crear Cuenta
            </a>
        </div><!-- /card-container -->`;
        this._container.innerHTML = login;
        this._divPage = document.createElement("div");
        this._divPage.className = "page-login";

        this._container.appendChild(this._divPage);
        document.body.appendChild(this._container);

        let botonEntrar = document.querySelector("#Entrar");
        botonEntrar.addEventListener("click", () => this.access()); 



    }

    access (){
        this._navigatorController.navigateToUrl("#home");
    }
}

class PageCrearCuenta extends Page {
    constructor(titulo, url, autenticadoDeUser) {
        super(titulo, url, autenticadoDeUser);
    }
}

class PageInnerPage extends Page {
    constructor(titulo, url, autenticadoDeUser) {
        super(titulo, url, autenticadoDeUser);
    }
}



class Home extends PageInnerPage {
    constructor(titulo, url, autenticadoDeUser) {
        super(titulo, url, autenticadoDeUser);    
    }

    pintraContenido(){

    }
}


class Page1 extends PageInnerPage {
    constructor(titulo, url, autenticadoDeUser) {
        super(titulo, url, autenticadoDeUser);
    }
}


class Page2 extends PageInnerPage {
    constructor(titulo, url, autenticadoDeUser) {
        super(titulo, url, autenticadoDeUser);
    }
}


class Page3 extends PageInnerPage {
    constructor(titulo, url, autenticadoDeUser) {
        super(titulo, url, autenticadoDeUser);
    }
}
