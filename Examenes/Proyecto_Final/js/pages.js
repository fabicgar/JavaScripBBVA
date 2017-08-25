class Page {
    constructor(titulo, url, autenticadoDeUser, navigatorController, userApiClient) {
        this._titulo = titulo;
        this._url = url;
        this._autenticadoDeUser = autenticadoDeUser;
        this._navigatorController = navigatorController;
    }
}

class PageInnerPage extends Page {
    constructor(titulo, url, autenticadoDeUser, navigatorController) {
        super(titulo, url, autenticadoDeUser, navigatorController);
    }
    header() {
        let headerHtml = `<div class="navbar-wrapper">
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
                            <a id="page1" href="#">Gestión de Bebidas</a></li>
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
        this._container.innerHTML = headerHtml;

    }

    footer() {

    }

}