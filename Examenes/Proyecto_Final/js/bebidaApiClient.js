class BebidaApiClient {
    constructor(apiClient) {
        this._baseUrl = "http://formacion-indra-franlindebl.com/api/bebidas";
        this._apiClient = apiClient;
    }

    getAllBebida() {
        let completeUrl = this._baseUrl;
        let promise = this._apiClient.get(completeUrl);

        let anotherPromise = promise.then((data) => {
            let bebidas = [];

            for (let i = 0; i < data.length; i++) {
                let elemento = data[i];
                let bebida = new Bebida(
                    elemento._id,
                    elemento.grados,
                    elemento.esAlcoholica,
                    elemento.precio,
                    elemento.calorias,
                    elemento.existencias,
                    elemento.nombre
                );
                bebidas.push(bebida)
            }

            return bebidas;
        });

        return anotherPromise;
    };

    createBebida(bebida) {
        let completeUrl = this._baseUrl;

        let bebidaObject = {
            _id: bebida._id,
            tipo: bebida._grados,
            esAlcoholica: bebida._esAlcoholica,
            precio: bebida._precio,
            calorias: bebida._calorias,
            existencias: bebida._existencias,
            nombre: bebida._nombre
        };

        let promise = this._apiClient.post(completeUrl, bebidaObject);

        let anotherPromise = promise.then((data) => {
            console.log("data");
            console.log(data);

            return true;
        });

        return anotherPromise;
    }




    // deleteUser(user) {
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

    editarBebida(bebida) {
        let completeUrl = this._baseUrl + "/" + bebida._id;

        let bebidaObj = {
            grados: bebida._grados,
            esAlcoholica: bebida._esAlcoholica,
            precio: bebida._precio,
            calorias: bebida._calorias,
            existencias: bebida._existencias,
            nombre: bebida._nombre
        };

        let promise = this._apiClient.put(completeUrl, bebidaObj);

        let anotherPromise = promise.then((data) => {
            let bebida = new Bebida(data.grados, data.esAlcoholica, data);
            //this._comidaController._comida._id = data._id;
            this._bebida._grados = data.grados;
            this._bebida._esAlcoholica = data.esAlcoholica;
            this._bebida._precio = data.precio;
            this._bebida._calorias = data.calorias;
            this._bebida._existencias = data.existencias;
            this._bebida._nombre = data.nombre;

            return bebida;
        });

        return anotherPromise;
    }

}

class Bebida {
    constructor(_id, grados, esAlcoholica, precio, calorias, existencias, nombre) {
        this._id = _id;
        this._grados = grados;
        this._esAlcoholica = null;
        this._precio = precio;
        this._calorias = calorias;
        this._existencias = existencias;
        this._nombre = nombre;
    }
}