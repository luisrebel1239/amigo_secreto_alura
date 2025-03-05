let amigos = []; // Lista para almacenar los nombres de los amigos

// Agrega un amigo a la lista
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value.trim(); // Obtiene el nombre y elimina espacios extras
  if (!nombreAmigo) { // Verifica que no esté vacío
    alert("Por favor, inserte un nombre");
    return;
  }
  amigos.push(nombreAmigo); // Agrega el nombre a la lista
  document.getElementById("amigo").value = ""; // Limpia el input
  mostrarListaAmigo(); // Actualiza la lista en pantalla
}

// Muestra la lista de amigos en pantalla
function mostrarListaAmigo() {
  document.getElementById("listaAmigos").innerHTML = amigos
    .map(amigo => `<li>${amigo}</li>`) // Convierte cada amigo en un elemento <li>
    .join(""); // Une todo en una sola cadena de HTML
}

// Sortea un amigo aleatorio de la lista
function sortearAmigo() {
  if (amigos.length === 0) { // Verifica que haya amigos en la lista
    alert("Por favor, inserte un nombre antes de sortear");
    return;
  }
  document.getElementById("resultado").textContent = 
    amigos[Math.floor(Math.random() * amigos.length)]; // Selecciona un amigo al azar
}
