//importaciones
import { mostrarDatos, eliminarDatos } from './API.js';

(function(){
//mostrar los datos en la tabla
//variables
const respuesta = document.querySelector('#respuesta')
//eventos
document.addEventListener( 'DOMContentLoaded', async ()=> {
    const datos = await mostrarDatos()
    //desestructuracion
    datos.forEach( item => {
        const { correo, empresa, nombre, telefono, id } = item
        //insertando en HTML
        const row = document.createElement('tr')
        row.innerHTML = /*html*/`
        <th scope="row">${nombre}</th>
        <td>${telefono}</td>
        <td>${correo}</td>
        <td>${empresa}</td>
        <td class="text-center">
        <a href="editarCliente.html?id=${id}" class="btn btn-warning btn-sm mx-1">editar</a>
        <a href="#" data-cliente="${id}" class="btn btn-danger btn-sm mx-1 eliminar">borrar</a>
        </td>
        `
        respuesta.appendChild(row)
    });
    //eliminar cliente
    respuesta.addEventListener('click', eliminarCliente)
   function eliminarCliente(e){
       if(e.target.classList.contains('eliminar')){
           const eliminarID = e.target.dataset.cliente
           eliminarDatos(eliminarID)
       }
   }
} )


})();