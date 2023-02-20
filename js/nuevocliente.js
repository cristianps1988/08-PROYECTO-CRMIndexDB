(function(){
    let DB;
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
        formulario.addEventListener('submit', validarCliente);
    })

    function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm', 1);
        abrirConexion.onerror = () => {
            console.log('BD conectada con éxito');
        }
        abrirConexion.onsuccess = () => {
            DB = abrirConexion.result;
        }
    }

    function validarCliente(e){
        e.preventDefault();

        // leer los inputs
        const nombreInput = document.querySelector('#nombre').value;
        const emailInput = document.querySelector('#email').value;
        const telefonoInput = document.querySelector('#telefono').value;
        const empresaInput = document.querySelector('#empresa').value;

        if(nombreInput === '' || emailInput === '' || telefonoInput === '' || empresaInput === ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }else{
            console.log('Muy bien');
        }
    }

    function imprimirAlerta(mensaje, tipo){
        const alerta = document.querySelector('.alerta');
        if(!alerta){
            const divMensaje = document.createElement('div');
            divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');
    
            if(tipo === 'error'){
                divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            } else{
                divMensaje.classList.add('bg-green-100','border-green-400', 'text-green-700' )
            }
            divMensaje.textContent = mensaje;
    
            formulario.appendChild(divMensaje);
    
            setTimeout(() => {
                divMensaje.remove();
            }, 3000);
        }
    }
})();