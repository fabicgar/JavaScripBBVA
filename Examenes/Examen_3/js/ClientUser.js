class ClientUser {
    constructor(apiClient) {
        this._baseUrl = "https://jsonplaceholder.typicode.com/users";
        this._apiClient = apiClient;
    }

    getUsuarios() {
        let completeUrl = this._baseUrl;
        let promise = this._apiClient.get(completeUrl, null);
        //data es el array que se envia de la misma forma
        let anotherPromise = promise.then((data) => {
            let usuarios = data.map((elemento) => {
                let usuario = new Usuario(elemento.id, elemento.name, elemento.username, elemento.email, elemento.address, elemento.phone, elemento.website, elemento.company)
                return usuario;
            });
            return usuarios;
        });

        return anotherPromise;
    }
}