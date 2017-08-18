
window.onload = function(){
	pintarRow();
	mostraImagenPricipal();
} 

	


function pintarRow(){
	var row = document.createElement ("div");
	row.className = "row";


	var colMd1 = document.createElement("div");
	colMd1.className = "col-md-1";
	row.appendChild(colMd1);

	var enlace = document.createElement("a");
	enlace.setAttribute("href", "./index.html");
	colMd1.appendChild(enlace);

	var titulo = document.createElement("h1");
	titulo.id = "logo";
	titulo.innerText = "REFUGIO GÉNESIS";
	enlace.appendChild(titulo);

	var otroColMd1 = document.createElement("div");
	otroColMd1.className = "col-md-1";
	row.appendChild(otroColMd1);

	var listador = document.createElement("ul");
	listador.className = "milistado";
	otroColMd1.appendChild(listador); 

	var liHabitaciones = document.createElement("li");
	listador.appendChild(liHabitaciones);

	var enlaceHabitaciones = document.createElement("a");
	enlaceHabitaciones.setAttribute("href", "./no-sidebar.html");
	enlaceHabitaciones.innerText = "Habitaciones";
	liHabitaciones.appendChild(enlaceHabitaciones);

	var liServicios = document.createElement("li");
	listador.appendChild(liServicios);

	var masColMd1 = document.createElement("div");
	masColMd1.className = "col-md-1";
	row.appendChild(masColMd1);

	var enlaceServicios = document.createElement("a");
	enlaceServicios.setAttribute("href", "./services.html");
	enlaceServicios.innerText = "Servicios";
	liServicios.appendChild(enlaceServicios);

	var liRestaurate = document.createElement("li");
	listador.appendChild(liRestaurate);

	var adicColMd1 = document.createElement("div");
	adicColMd1.className = "col-md-1";
	row.appendChild(adicColMd1);

	var enlaceRestaurante = document.createElement("a");
	enlaceRestaurante.setAttribute("href", "./restaurant.html");
	enlaceRestaurante.innerText = "Restaurante";
	liRestaurate.appendChild(enlaceRestaurante);


	var licontactenos = document.createElement("li");
	listador.appendChild(licontactenos);

	var adic2ColMd1 = document.createElement("div");
	adic2ColMd1.className ="col-md-1";
	row.appendChild(adic2ColMd1);

	var enlaceContactenos = document.createElement("a");
	enlaceContactenos.setAttribute("href", "./contactus.html");
	enlaceContactenos.innerText = "Contáctenos";
	licontactenos.appendChild(enlaceContactenos);
}

function mostraImagenPricipal(){

	var imagen = 
}

		
