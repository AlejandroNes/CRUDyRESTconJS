//importaciones

import {  mostrarInformacion, editarDatos } from "./API.js";
import { mostrarAlerta } from "./funciones.js";

(function(){

    //variables
    const formulario = document.querySelector('#formulario')

    const nombreInput = document.querySelector('#nombre')
    const telefonoInput = document.querySelector('#telefono')
    const correoInput = document.querySelector('#correo')
    const empresaInput = document.querySelector('#empresa')
    const idInput = document.querySelector('#id')


    //eventos
    document.addEventListener('DOMContentLoaded', form)
    formulario.addEventListener('submit', validarForm)

    //funciones
    async function form(){
        //id del formulario
        const parametrosURL = new URLSearchParams(window.location.search);
        const clienteID = parseInt(parametrosURL.get("id"));
   
        const datoCliente = await mostrarInformacion(clienteID)
        
        //desestructuracion 
        const {nombre, telefono, correo, empresa, id} = datoCliente
        
        nombreInput.value = nombre
        telefonoInput.value = telefono
        correoInput.value = correo
        empresaInput.value = empresa
        idInput.value = id

    }
    //validar Formulario
    function validarForm(e){
        e.preventDefault();
        if(nombreInput.value == '' || telefonoInput.value == '' || correoInput.value == '' || empresaInput.value == ''){
            mostrarAlerta('Complete los campos del formulario')
            return
        }
        const datosCliente = {
            nombre: nombreInput.value,
            telefono: telefonoInput.value,
            correo: correoInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        }
        editarDatos(datosCliente, datosCliente.id)
    }
})();