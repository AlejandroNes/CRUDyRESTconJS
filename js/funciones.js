

//funcion mostrar alerta
export function mostrarAlerta(mensaje){
    const alertaID = document.querySelector('#alertaID')
    const error = document.querySelector('.error')
    if(!error){
        const alerta = document.createElement('div')
        alerta.classList.add('alert', 'alert-danger', 'error')
        alerta.innerHTML = `
            <strong>Error!..</strong>
            <p>${mensaje}</p>
        `
        alertaID.appendChild(alerta)
        setTimeout( ()=> {
            alerta.remove();
        },2000 )
    }

}
