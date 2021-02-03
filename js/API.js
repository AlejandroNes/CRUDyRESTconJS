
//CRUD - REST
const url = "http://localhost:4000/clientes"
export const actualizarDatos = async(objCliente) => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( objCliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log('error en la DB')
    }
}

//mostrar datos
export const mostrarDatos = async() => {
    try {
        const resp = await fetch(url)
        const data = await resp.json()
        return data
    } catch (error) {
        console.log('error en la DB')
    }
}

//eliminar datos
export const eliminarDatos = async(eliminarID) => {
    await fetch(`${url}/${eliminarID}`,{
        method: 'DELETE'
    })
}

//mostrarDatos
export const mostrarInformacion = async (id) => {
    try {
        const resp = await fetch(`${url}/${id}`)
        const data = resp.json()
        return data
    } catch (error) {
        console.log('error en la base de datos')
    }
}

//editar datos
export const editarDatos = async (datoscliente, id) => {
try {
    await fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify( datoscliente ),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    window.location.href = 'index.html'
} catch (error) {
    console.log('error en la base de datos')
}
}