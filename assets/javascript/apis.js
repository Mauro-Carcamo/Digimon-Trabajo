$(document).ready(function() {
  url = "https://digimon-api.vercel.app/api/digimon";
  const select = document.getElementById("default_select");
  const nombre = document.getElementById("nombre");
  const nivel = document.getElementById("nivel");
  const imagen = document.getElementById("containerimagen");
  function actualizarDigimon() {
    const digimonSeleccionado = select.value;
    fetch(url)
      .then(response => response.json())
      .then((json) => {
        const digimon = json.find(digimon => digimon.name === digimonSeleccionado);
        nombre.textContent = digimon.name;
        nivel.textContent =  digimon.level;
        imagen.innerHTML = `<img src="${digimon.img}" alt="${digimon.name}" class="nes-avatar is-rounded">`;
      })
      .catch(error => console.log(error));
  }
  select.addEventListener("change", actualizarDigimon);
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
