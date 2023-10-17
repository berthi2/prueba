/* 
    QUE LAS PROMESAS SON EVENTOS QUE VAN A OCURRIR A FUTURO (DENTRO DE 1 SEGUNDO O 1 HORA).
    ES DECIR, ES UN PROCESO ASINCRONO.
    JAVASCRIPT EJECUTA EN PRIMER LUGAR LO QUE LAS INSTRUCCIONES SINCRONAS (INMEDIATAS) Y EN SEGUNDO PLANO LAS ASINCRONAS (EVENTOS A FUTUROS).
*/
/*
console.log('Primera linea de codigo')

setTimeout(()=> {
    console.log('peticion a una api');
}, 1000)

console.log('Ultima linea codigo');

*/
/*
    LAS PROMESAS SE CREAN CON new Promise, reciben por parametro una funcion. Esta funcion que recibe a la vez recibe dos parametros
*/
const contenedorDetalle = document.querySelector(".modal-body")

async function armarListado() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
    const data = await response.json();
    data.results.forEach(element => {
        contenedor.innerHTML += `<p>${element.name} - <button type="button" class="btn btn-primary btn-detalle" id="${element.url}" data-bs-toggle="modal" data-bs-target="#exampleModal">
        ver detalle
      </button></p>`;
    });

    const botones = document.querySelectorAll('.btn-detalle');

    botones.forEach(element => {
        element.addEventListener('click', async () => {
            const response = await fetch(element.id);
            const data = await response.json();
            console.log(data);
            console.log(data.sprites.front_default)

            contenedorDetalle.innerHTML = `<img src="${data.sprites.front_default}">
            <h4>${data.name}</h4> 
            <p>Peso: ${data.weight}</p>
            <p>Altura: ${data.height}</p>
            <p>ID: ${data.id}</p>
            `
        })
    })
}