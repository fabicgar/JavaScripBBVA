class UserAPIClient {
    constructor(apiClient) {
        this._baseUrl = "";
        this._apiClient = apiClient;
    }

    //     getUserAtPage(pagina){  

    //         let completeUrl = this._baseUrl + pagina;
    //         let promise = this._apiClient.get(completeUrl, null);

    //         let anotherPromise = promise.then((data) =>{

    //             let datos = data.results;
    //             let users = [];
    //             for (let i=0; i<datos.length; i++){

    //                 let elemento = datos[i];
    //                     let name = elemento.name;   
    //                     let url = elemento.url;

    //                 let user = new user(name,url);            

    //                 users.push(pokemon);
    //              }
    //             return users;
    //         });
    //         return anotherPromise;
    //     }



    //     getUserByUrl(url){

    //     }
}