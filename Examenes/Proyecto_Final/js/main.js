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
        this._userApiClient = new UserApiClient(this._apiClient, this._userController);
        this._userController = new UserController(this._userApiClient);
        this._comidaApiClient = new ComidaApiClient(this._apiClient);
        this._bebidaApiClient = new BebidaApiClient(this._apiClient);
        this._navigatorController = new NavigatorController(this._userController);
        this._homeUrl = null;
    }



    init() {
        this._pageLogin = new PageLogin("Iniciar sesión", "#login", false, this._navigatorController, this._userController, this._userApiClient);
        this._pageCrearCuenta = new PageCrearCuenta("Crear Cuenta", "#crear-cuenta", false, this._navigatorController, this._userController);
        this._home = new PageHome("PageHome", "#pagehome", true, this._navigatorController, this._userController);
        this._pageGestionBebida = new PageGestionBebida("PageGestionBebida", "#pageGestionBebida", true, this._navigatorController, this._bebidaApiClient);
        this._pageGestionComida = new PageGestionComida("PageGestionComida", "#pageGestionComida", true, this._navigatorController, this._comidaApiClient);
        this._perfilUser = new PerfilUser("PerfilUser", "#perfilUser", true, this._navigatorController, this._userController, this._userApiClient);
        this._navigatorController.addPagina(this._pageLogin);
        this._navigatorController.addPagina(this._pageCrearCuenta);
        this._navigatorController.addPagina(this._home);
        this._navigatorController.addPagina(this._pageGestionBebida);
        this._navigatorController.addPagina(this._pageGestionComida);
        this._navigatorController.addPagina(this._perfilUser);

        this._navigatorController.navigateToUrl("#login");
    }
}




window.onload = () => {
    let mc = new MainController();
    mc.init();
}