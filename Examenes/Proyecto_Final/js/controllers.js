    class NavigatorController {
    constructor(userController) {
        this.divPage = null;
        this._userController = userController;
        this._pages = [];
    }

    init() {
    }

    addPagina(page) {
        this._pages.push(page);
    }

    navigateToUrl(url) {
        console.log("navegamos a: " + url);

        for (let i = 0; i < this._pages.length; i++) {
            let pagina = this._pages[i];
            if (pagina._url == url) {

                if (pagina._autenticadoDeUser == false) {
                    // limpio el body
                    document.body.innerHTML = "";
                    pagina.pintar();
                    window.history.pushState(null, pagina._titulo, pagina._url);
                } else {
                    // Miro si tiene login, en tal caso pinto la paginas
                    if (this._userController.usuarioEstaLogado()) {
                        // limpio el body
                        document.body.innerHTML = "";
                        pagina.pintar();
                        window.history.pushState(null, pagina._titulo, pagina._url);
                    } else {
                        console.error("se ha intentado navegar sin autenticación");
                        alert("se ha intentado navegar sin autenticación");
                        this.navigateToUrl("#login");
                    }
                }
            }
        }
    }
}
