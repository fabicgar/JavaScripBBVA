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
                    <a class="navbar-brand" href="#">De domo Azrael</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <a id="page-home" href="#" class="">Home</a></li>
                        <li class="">
                            <a id="pageGestionBebida" href="#">Gestión de Bebidas</a></li>
                        </li>
                        <li class="">
                            <a id="pageGestionComida" href="#">Gestión de Comidas</a></li>
                        <li class="">
                            <a id="perfilUser" href="#">Perfil de usuario</a></li>
                    </ul>
                    <ul class="nav navbar-nav pull-right">
                        <li class=""><a id="salir" href="#">Salir</a></li>
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
        botonHome.addEventListener("click", () => {
            this._navigatorController.navigateToUrl("#page-home");
        });

        let botonGestionBebidas = this._container.querySelector("#pageGestionBebida");
        botonGestionBebidas.addEventListener("click", (e) => {
            e.preventDefault();
            this._navigatorController.navigateToUrl("#pageGestionBebida");
        });

        let botonGestionComidas = this._container.querySelector("#pageGestionComida");
        botonGestionComidas.addEventListener("click", (e) => {
            e.preventDefault();
            this._navigatorController.navigateToUrl("#pageGestionComida");
        });

        let botonPerfil = this._container.querySelector("#perfilUser");
        botonPerfil.addEventListener("click", (e) => {
            e.preventDefault();
            this._navigatorController.navigateToUrl("#perfilUser");
        });

        let botonSalir = this._container.querySelector("#salir");
        botonSalir.addEventListener("click", (e) => {
            e.preventDefault();
            this._navigatorController.navigateToUrl("#login");
        });
    }
}