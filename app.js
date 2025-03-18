// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo () {
    let nombreIngresado = document.getElementById('amigo');
    let nombre = nombreIngresado.value;
    console.log (nombre);
    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return;
    } 
    
    amigos.push(nombre);
    nombreIngresado.value = "";
    actualizarListaAmigos();
    console.log(amigos);
    
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";

    for (let i=0; i<amigos.length; i++) {
        let amigo = amigos[i];
        let nuevoItem = document.createElement("li");
        nuevoItem.textContent = amigo;
        listaAmigos.appendChild(nuevoItem);
    }
} 

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let resultado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${resultado}`;
}

