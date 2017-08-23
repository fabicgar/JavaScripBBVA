class PokemonApi {
    constructor(apiClient) {
        this._baseUrl = "http://pokeapi.co/api/v2/pokemon/?offset=";
        this._apiClient = apiClient;
    }

    getPokemonsAtPage(pagina) {
        let offset = (pagina - 1) * 20;
        let completeUrl = this._baseUrl + offset;
        let promise = this._apiClient.get(completeUrl, null);

        let anotherPromise = promise.then((data) => {

            let datos = data.results;
            let pokemons = [];
            for (let i = 0; i < datos.length; i++) {

                let elemento = datos[i];
                let name = elemento.name;
                let url = elemento.url;

                let pokemon = new Pokemon(name, url);

                pokemons.push(pokemon);
            }
            return pokemons;
        });
        return anotherPromise;
    }



    getPokemonByUrl(url) {
        let promise = this._apiClient.get(url, null);
        var anotherPromise = promise.then((data) => {
            let pokemon = new Pokemon(
                data.name,
                data.weight,
                data.height,
                data.urlDePokemon,
                data.sprites.front_default

            );
            return pokemon;
        });
        return anotherPromise;

    }
}