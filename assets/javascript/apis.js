$(document).ready(function() {
  //Obtener la URL del API
  url = "https://digimon-api.vercel.app/api/digimon";

  //Obtener los elementos del DOM que se actualizarán
  const select = document.getElementById("default_select");
  const nombre = document.getElementById("nombre");
  const nivel = document.getElementById("nivel");
  const imagen = document.getElementById("containerimagen");

  //Función para actualizar la página web cuando se selecciona un digimon
  function actualizarDigimon() {
    //Obtener el digimon seleccionado
    const digimonSeleccionado = select.value;

    //Buscar el digimon en la lista de digimones del API
    fetch(url)
      .then(response => response.json())
      .then((json) => {
        const digimon = json.find(digimon => digimon.name === digimonSeleccionado);

        //Actualizar los elementos del DOM con la información del digimon seleccionado
        nombre.textContent = digimon.name;
        nivel.textContent =  digimon.level;
        imagen.innerHTML = `<img src="${digimon.img}" alt="${digimon.name}" class="nes-avatar is-rounded">`;
      })
      .catch(error => console.log(error));
  }

  //Agregar el evento "change" al elemento select para actualizar la página web al seleccionar un digimon
  select.addEventListener("change", actualizarDigimon);

  //Agregar los digimones al menú desplegable
  fetch(url)
    .then(response => response.json())
    .then((json) => {
      json.forEach(digimon => {
        const option = document.createElement("option");
        option.value = digimon.name;
        option.textContent = digimon.name;
        select.appendChild(option);
      });
    })
    .catch(error => console.log(error));
});
