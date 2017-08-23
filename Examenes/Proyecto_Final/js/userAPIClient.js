class UserAPIClient {
    constructor(apiClient) {
        this._baseUrl = "http://formacion-indra-franlindebl.com/api/users";
        this._apiClient = apiClient;
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
            // id, email, apellidos, nombre, username
            let user = new User(data._id, data._email, data._apellidos, data._nombre, data._username, data._password);
            return user;
        });

        return anotherPromise;
    }
}