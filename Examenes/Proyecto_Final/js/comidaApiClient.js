class ComidaApiClient {
    constructor(apiClient) {
        this._baseUrl = "http://formacion-indra-franlindebl.com/api/comidas";
        this._apiClient = apiClient;
    }

    getAllComida() {
        let completeUrl = this._baseUrl;
        let promise = this._apiClient.get(completeUrl);

        let anotherPromise = promise.then((data) => {
            let comidas = [];

            for (let i = 0; i < data.length; i++) {
                let elemento = data[i];
                let comida = new Comida(
                    elemento._id,
                    elemento.tipo,
                    elemento.precio,
                    elemento.calorias,
                    elemento.existencias,
                    elemento.nombre
                );
                comidas.push(comida)
            }

            return comidas;
        });

        return anotherPromise;
    };

    createComida(comida) {
        let completeUrl = this._baseUrl;

        let comidaObject = {
            _id: comida._id,
            tipo: comida._tipo,
            precio: comida._precio,
            calorias: comida._calorias,
            existencias: comida._existencias,
            nombre: comida._nombre
        };

        let promise = this._apiClient.post(completeUrl, comidaObject);

        let anotherPromise = promise.then((data) => {
            console.log("data");
            console.log(data);

            return true;
        });

        return anotherPromise;
    }




    // deleteComida(comida) {
    //     let completeUrl = this._baseUrl + "/" + user._id;

    //     let userObj = {
    //         username: user._id,
    //         password: user._password
    //     };

    //     let promise = this._apiClient.delete(completeUrl, userObj);

    //     let anotherPromise = promise.then((data) => {
    //         //id, email, apellidos, nombre, username
    //         //let user = new User(data._id, data._email, data._apellidos, data._nombre, data._username, data._password);
    //     });

    //     return anotherPromise;
    // }

    editarComida(comida) {
        let completeUrl = this._baseUrl + "/" + comida._id;

        let comidaObj = {
            tipo: comida._tipo,
            precio: comida._precio,
            calorias: comida._calorias,
            existencias: comida._existencias,
            nombre: comida._nombre
        };

        let promise = this._apiClient.delete(completeUrl, comidaObj);

        let anotherPromise = promise.then((data) => {
            //this._comida._id = data._id;
            this._comida._tipo = data.tipo;
            this._comida._precio = data.precio;
            this._comida._calorias = data.calorias;
            this._comida._existencias = data.existencias;
            this._comida._nombre = data.nombre;

            return this._comida;
        });

        return anotherPromise;
    }

}

class Comida {
    constructor(_id, tipo, precio, calorias, existencias, nombre) {
        this._id = _id;
        this._tipo = tipo;
        this._precio = precio;
        this._calorias = calorias;
        this._existencias = existencias;
        this._nombre = nombre;
    }
}