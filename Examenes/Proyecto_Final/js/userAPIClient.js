class UserApiClient {
    constructor(apiClient, userController) {
        this._baseUrl = "http://formacion-indra-franlindebl.com/api/users";
        this._apiClient = apiClient;
        this._userController = userController;
    }

    createUser(user) {
        let completeUrl = this._baseUrl;

        let userObject = {
            //_id: user._id,
            email: user._email,
            apellidos: user._apellidos,
            nombre: user._nombre,
            username: user._username,
            password: user._password
        };

        let promise = this._apiClient.post(completeUrl, userObject);

        let anotherPromise = promise.then((data) => {
            console.log("data");
            console.log(data);

            return true;
        });

        return anotherPromise;
    }

    loginUser(user) {
        let completeUrl = this._baseUrl + "/login";

        let userObj = {
            username: user._username,
            password: user._password
        };

        let promise = this._apiClient.post(completeUrl, userObj);

        let anotherPromise = promise.then((data) => {
            this._userController._user._id = data._id;
            this._userController._user._email = data.email;
            this._userController._user._apellidos = data.apellidos;
            this._userController._user._nombre = data.nombre;
            this._userController._user._username = data.username;
            //this._userController._user._password = data.password;
            // las password no viene, no la guardamos
            //id, email, apellidos, nombre, username
            //let user = new User(data._id, data._email, data._apellidos, data._nombre, data._username, data._password);
            return this._userController._user;
        });

        return anotherPromise;
    }

    deleteUser(user) {
        let completeUrl = this._baseUrl + "/" + user._id;

        let userObj = {
            username: user._id,
            password: user._password
        };

        let promise = this._apiClient.delete(completeUrl, userObj);

        let anotherPromise = promise.then((data) => {
            //id, email, apellidos, nombre, username
            //let user = new User(data._id, data._email, data._apellidos, data._nombre, data._username, data._password);
        });

        return anotherPromise;
    }

    editarUser(user) {
        let completeUrl = this._baseUrl + "/" + user._id;

        let userObj = {
            email: user._email,
            apellidos: user._apellidos,
            nombre: user._nombre,
            username: user._username,
            password: user._password
        };

        let promise = this._apiClient.put(completeUrl, userObj);

        let anotherPromise = promise.then((data) => {
            this._userController._user._id = data._id;
            this._userController._user._email = data.email;
            this._userController._user._apellidos = data.apellidos;
            this._userController._user._nombre = data.nombre;
            this._userController._user._username = data.username;
            //this._userController._user._password = data.password;
            //id, email, apellidos, nombre, username
            //let user = new User(data._id, data._email, data._apellidos, data._nombre, data._username, data._password);
            return this._userController._user;
        });

        return anotherPromise;
    }

}