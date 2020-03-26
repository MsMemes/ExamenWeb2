function addComments(){

	

	let boton = document.querySelector("#submit");

	boton.addEventListener('click', (event) => {
		let name = document.querySelector(".userName");
		let mensaje = document.querySelector("#userComment");

		// if(name.text == null){
		// 	alert("Ingresa todos los datos");
		// } 
		// else if(mensaje.text== null){
		// 	alert("Ingresa todos los datos");
		// }
		// else{
			
		// }

		let comentarios = document.querySelector(".seccionComments");
			comentarios.innerHTML = '<div id="com"' name + '<br>' + mensaje + '<input type=button value="Delete" id="delete"\> </div>';

		console.log(name.text);
		console.log(mensaje.text);
	});
}

function deleteCom(){
	let borrar = document.querySelector("#delete");

	borrar.addEventListener('click', (event) => {
		let comentarioBorrar = document.querySelector("#com");
		comentarioBorrar.style.display = none;
	})
}


function init(){
	addComments();
	deleteCom();
}

init();