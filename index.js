CrearBotones()
function CrearBotones(params) {
const añaidrBTN = document.getElementById('añadirBoton')
const btnAction = document.getElementById('btnAction')
let c=1
btnAction.addEventListener("click", () => {
    const botones = document.createElement('button')
    botones.textContent="Boton "+c++
    añaidrBTN.appendChild(botones)
});
}

