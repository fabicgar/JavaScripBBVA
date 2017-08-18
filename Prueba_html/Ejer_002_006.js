
var peticionDeListadoDeUsersHaCambiado = function(event){
//	console.log("Ha cambiado el estado de la petició HTTP");
	var objetoQueHaHechoLaPeticion = event.target;

//	if(xhr.readyState == 4
	if(objetoQueHaHechoLaPeticion.readyState == 4){
		console.log("Ha terminado la petición HTTP");
//		console.log("Estado de petición:");
//		console.log(objetoQueHaHechoLaPeticion.status);

		if(objetoQueHaHechoLaPeticion.status == 200){
			varresponseObject = JSON.parser(objetoQueHaHechoLaPeticion.responseText);
			tratamientoDeUsuarios(responseObject);
		}
	}
}		
//		console.log(objetoQueHaHechoLaPeticion.responseText);

//de un string a un objeto que se pueda usar

/*		var users = JSON.parse(objetoQueHaHechoLaPeticion.responseText);
		console.log("Usuario:");
		console.log(users);
*/


var peticionDeFollowersHaCambiado = function(event){
	var objetoQueHaHechoLaPeticion = event.target;

	if(objetoQueHaHechoLaPeticion.readyState == 4){
		console.log("Ha terminado la petición HTTP");


		if(objetoQueHaHechoLaPeticion.status == 200){
			var responseObject = JSON.parser(objetoQueHaHechoLaPeticion.responseText);
			console.log ("los followers son:");
			console.log(responseObject)
		}
	}
}			

/*		console.log("El primer usuario es:");
		console.log(users[0].login);
		console.log("su imagen es:");
		console.log(user[0].avatar_url);
	*/


var tratamientoDeUsuarios = function(usuarios){
	var primerUsuario = usuarios [0];
	var nombrePrimerUsuario = primerUusraio.followers_url;
	var urlFollowerPrimerUsuario = primerUsuario.followers_url;

	console.log (nombrePrimerUsuario);
	console.log(urlFollowerPrimerUsuario);

	var peticionObject = new XMLHttpRequest();

	peticionObject.onreadystatechange = notificaQueElEstadoHaCambiado2

}

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = peticionDeListadoDeUsersHaCambiado;
xhr.open("GET", "https://api.github.com/users");
xhr.send();