class UserController {
    constructor(userApiClient) {
        this._userApiClient = userApiClient;
        this._user = new User();
    }

    usuarioEstaLogado() {
        return true;
    }

    getGuardarUser(data) {
        for (let i = 0; i < data.length; i++) {
            let user = data[i];
        }
    }

    createUserNew(user) {
        this._userApiClient.createUser(user).then((data) => {

        });
    }

    deleteUserApi(user) {
        this._userApiClient.deleteUser(user).then((data) => {

        });
    }

    login(user) {
        this._userApiClient.loginUser(user).then((data) => {

        });
    }
}

class User {
    constructor(id, nombre, apellidos, email, username, password) {
        this._id = id;
        this._email = email;
        this._apellidos = apellidos;
        this._nombre = nombre;
        this._username = username;
        this._password = password;
    }
}