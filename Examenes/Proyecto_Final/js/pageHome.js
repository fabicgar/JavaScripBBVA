class PageHome extends PageInnerPage {
    constructor(titulo, url, autenticadoDeUser, navigatorController) {
        super(titulo, url, autenticadoDeUser, navigatorController);
    }

    pintar() {
        this._container = document.createElement("div");
        this._container.className = "container";

        let homeHtml = `<div class="navbar-wrapper">
    <div class="container-fluid">
        <nav class="navbar navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Restaurant</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <a id="page-home" href="#" class="">Home</a></li>
                        <li class="">
                            <a id="page1" href="#">Gestión de Comidas</a></li>
                        </li>
                        <li class="">
                            <a id="page2" href="#">Gestión de Bebidas</a></li>
                        <li class="">
                            <a id="page3" href="#">Perfil de usuario</a></li>
                    </ul>
                    <ul class="nav navbar-nav pull-right">
                        <li class=" dropdown">
                            <a href="#" class="dropdown-toggle active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Signed in as  <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">My Profile</a></li>
                            </ul>
                        </li>
                        <li class=""><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>`;

        this._container = document.createElement("div");
        this._container.className = "container";
        this._container.innerHTML = homeHtml;

        this._divPage = document.createElement("div");
        this._divPage.className = "page-home";
        this._divPage.appendChild(this._container);

        document.body.appendChild(this._divPage);

        let botonHome = this._container.querySelector("#page-home");
        botonHome.addEventListener("click", () => { this._navigatorController.navigateToUrl("#page-home");
        });

        let botonGestionComidas = this._container.querySelector("#page1");
        botonGestionComidas.addEventListener("click", (e) => {
            e.preventDefault();
            this._navigatorController.navigateToUrl("#page1");
        });

        let botonGestionBebidas = this._container.querySelector("#page2");
        botonGestionBebidas.addEventListener("click", (e) => {
            e.preventDefault();
            this._navigatorController.navigateToUrl("#page2");
        });

        let botonPerfil = this._container.querySelector("#page3");
        botonPerfil.addEventListener("click", (e) => {
            e.preventDefault();
            this._navigatorController.navigateToUrl("#page3");
        });
    }
}