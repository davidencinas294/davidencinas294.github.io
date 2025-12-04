// Declarar un array para almacenar los lanzamientos
let lanzamientos = [];

function lanzarDado() {
    // Generar un número aleatorio entre 1 y 6
    // PISTA: Debes emplear Math.floor y Math.random
    const resultado = Math.floor(Math.random() * 6) + 1; // [cite: 99]
    
    // Obtener la hora actual
    // PISTA: Usar Date y toLocaleTimeString
    const ahora = new Date();
    // Formatear la hora como HH:MM:SS para el registro [cite: 100]
    const horaActual = ahora.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    
    // Crear un objeto con el resultado y la fecha
    const lanzamiento = {
        resultado: resultado,
        hora: horaActual
    };
    
    // Agregar el objeto al array de lanzamientos
    // PISTA: Método para agregar al principio del array (más reciente primero) [cite: 106]
    lanzamientos.unshift(lanzamiento);
    
    // Actualizar el visual del dado con el resultado [cite: 101]
    // PISTA: Usar  document.getElementById().textContent
    document.getElementById('cara-dado').textContent = resultado;
    
    // Llamar a la función que actualiza el historial actualizarHistorial()
    actualizarHistorial(); // [cite: 105]
}


function actualizarHistorial() {
    // Obtener el elemento contenedor del historial document.getElementById()
    const historialLista = document.getElementById('historial-lista');
    
    // Limpiar el contenido actual del historial [cite: 109]
    // PISTA: Usar innerHTML
    historialLista.innerHTML = '';
    
    // Recorrer el array de lanzamientos
    // PISTA: lanzamientos.forEach
    lanzamientos.forEach(item => {
         
        // Para cada lanzamiento, crear un elemento párrafo document.createElement
        const parrafo = document.createElement('p');
        
        // Asignar el texto con formato: "resultado - hora" [cite: 105]
        parrafo.textContent = `${item.resultado} - ${item.hora}`;
        
        // Agregar el párrafo al contenedor del historial
        // PISTA: Usar appendChild
        historialLista.appendChild(parrafo);
    });
}


function limpiarHistorial() {
    // Vaciar el array de lanzamientos [cite: 109]
    lanzamientos = [];
    
    // Restablecer el visual del dado al emoji inicial [cite: 110]
    document.getElementById('cara-dado').textContent = '🎲';
    
    // Limpiar el contenido del historial visual [cite: 109]
    document.getElementById('historial-lista').innerHTML = '';
}