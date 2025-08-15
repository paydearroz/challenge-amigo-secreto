// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    validarEntrada();
    mostrarLista();
}
// elige un amigo de la lista aleatoriamente y modifica el html para mostrarlo
function sortearAmigo(){
    if (amigos.length == 0){
        alert("Aun no agregas ningun amigo");
    } else {
        let indice = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[indice];
        document.getElementById("resultado").innerHTML = amigoSorteado; //esto podria ser una sola linea
    }
}
// valida que sea una entrada valida, si lo es la agrega a la lista
function validarEntrada(){
    let amigoIngresado = document.getElementById("amigo").value;
    if (amigoIngresado == ""){
        alert ("Ingresa un nombre valido");
    } else {
        amigos.push(amigoIngresado);
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";
}
//crea la lista de nombres y modifica el elemento en html para mostrarlo
function mostrarLista(){
    let listaMostrada = document.getElementById("listaAmigos");
    cadena = "";
    for (let i =0; i < amigos.length ; i++){
        cadena = cadena + `<li>${amigos[i]}</li>`;
    }
    listaMostrada.innerHTML = cadena;
}