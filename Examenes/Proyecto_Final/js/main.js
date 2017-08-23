/*

Main / APP
Page--metodo de pintado
- Titulo
-URL
-Autenticado
Herencia 
login
CrearCuenta
------------------
InnerPage
Con Cabecera
Home
Page1
Page2
Page3
--------------------------
Navigation Controller

User Controller

APIClient

*/

class MainController {
    constructor() {
        this._container = null;
        this._divNavController = null;
        this._divPage = null;
        this._apiClient = new ApiClient();
        this._userController = new UserController();
        this._navigatorController = new NavigatorController(this._userController);
        this._userAPIClient = new UserAPIClient(this._apiClient);
        this._homeUrl = null;
        //this._pageGeneral = new PageGeneral();
    }



    init() {
        this._pageLogin = new PageLogin("Iniciar sesión", "#login", false, this._navigatorController);
        this._pageCrearCuenta = new PageCrearCuenta("Crear Cuenta", "#crear-cuenta", false, this._navigatorController);
        this._home = new PageHome("PageHome", "#pagehome", true, this._navigatorController);
        this._page1 = new Page1("Page 1", "#page1", true, this._navigatorController);
        this._page2 = new Page2("Page 2", "#page2", true, this._navigatorController);
        this._page3 = new Page3("Page 3", "#page3", true, this._navigatorController);
        this._navigatorController.addPagina(this._pageLogin);
        this._navigatorController.addPagina(this._pageCrearCuenta);
        this._navigatorController.addPagina(this._home);
        this._navigatorController.addPagina(this._page1);
        this._navigatorController.addPagina(this._page2);
        this._navigatorController.addPagina(this._page3);

        this._navigatorController.navigateToUrl("#login");
    }
}




window.onload = () => {
    let mc = new MainController();
    mc.init();
}