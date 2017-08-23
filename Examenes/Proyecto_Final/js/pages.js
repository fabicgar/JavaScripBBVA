class Page {
    constructor(titulo, url, autenticadoDeUser, navigatorController) {
        this._titulo = titulo;
        this._url = url;
        this._autenticadoDeUser = autenticadoDeUser;
        this._navigatorController = navigatorController;
        this._apiClient = new ApiClient();
        this._userApiClient = new UserAPIClient(this._apiClient);
    }
}

class PageInnerPage extends Page {
    constructor(titulo, url, autenticadoDeUser, navigatorController) {
        super(titulo, url, autenticadoDeUser, navigatorController);
    }

    pintarCabecera() {

        let header = `<div class="navbar-wrapper">
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
                        <li class="active"><a href="#" class="">Home</a></li>
                            <li class=""><a href="#">Gestión de Comidas</a></li>
                        </li>
                        <li class=""><a href="#">Gestión de Bebidas</a></li>
                        
                        <li class=""><a href="#">Perfil de usuario</a></li>
                    </ul>
                    <ul class="nav navbar-nav pull-right">
                       <li class=" dropdown"><a href="#" class="dropdown-toggle active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Staff <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">View Staff</a></li>
                                <li><a href="#">Add New</a></li>
                                <li><a href="#">Bulk Upload</a></li>
                            </ul>
                        </li>
                        <li class=""><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>`;
        document.body.innerHTML = header;
        let enlacesHTML = "";
    }
    pintarFooter() {

    }
}

class Page1 extends PageInnerPage {
    constructor(titulo, url, autenticadoDeUser, navigatorController) {
        super(titulo, url, autenticadoDeUser, navigatorController);
    }
    
}


class Page2 extends PageInnerPage {
    constructor(titulo, url, autenticadoDeUser, navigatorController) {
        super(titulo, url, autenticadoDeUser, navigatorController);
    }
}


class Page3 extends PageInnerPage {
    constructor(titulo, url, autenticadoDeUser, navigatorController) {
        super(titulo, url, autenticadoDeUser, navigatorController);
    }
}