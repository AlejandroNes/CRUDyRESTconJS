//importaciones
import { mostrarAlerta } from './funciones.js';
import { actualizarDatos } from './API.js';

(function() {

    //variables
    const formulario = document.querySelector('#formulario');

    //eventos
    formulario.addEventListener('submit', validarFormulario)



    //funciones
    function validarFormulario(e){
        e.preventDefault();
        //llamamos a los inputs de nuetro formulario
        const nombre = document.querySelector('#nombre').value
        const telefono = document.querySelector('#telefono').value
        const correo = document.querySelector('#correo').value
        const empresa = document.querySelector('#empresa').value

        if(nombre == '' || telefono == '' || correo == '' || empresa == '' ){
            mostrarAlerta('llene todos los campos del formulario')
            return
        }
        const objCliente = {
            nombre,
            telefono,
            correo,
            empresa
        }
        actualizarDatos(objCliente);



    }


})()