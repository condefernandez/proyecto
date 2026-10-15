//Datos
const nombre = "lucas frutis bb"
const clave = "1234567"

//capturamos la info del DOM
let nomIng = document.getElementById ("ususario");
let claveIng = document.getElementById("contraseña");
let boton = dodument.getElementById("btn-ingresar");

//escuchamos al evento
boton.AddEventListener(click,function(){
    alert(nomIng.value);
})