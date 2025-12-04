// 1. Obtener referencias a los elementos del DOM
const dadoElement = document.getElementById('dado');
const lanzarBtn = document.getElementById('lanzar-btn');
const limpiarBtn = document.getElementById('limpiar-btn');
const historialLista = document.getElementById('historial-lista');
const tiradasTotalSpan = document.getElementById('tiradas-total');
const sumaTotalSpan = document.getElementById('suma-total');
const promedioTotalSpan = document.getElementById('promedio-total');

// 2. Array para almacenar todos los lanzamientos
let historial = [];

// Función para generar un número aleatorio entre 1 y 6
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

// Función para actualizar el resumen estadístico
function actualizarResumen() {
    const totalTiradas = historial.length;
    
    // Calcular la suma de todos los elementos en el historial
    const sumaTotal = historial.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    
    // Calcular el promedio (si hay tiradas)
    const promedio = totalTiradas > 0 ? (sumaTotal / totalTiradas).toFixed(2) : 0;
    
    // Actualizar los elementos en el DOM
    tiradasTotalSpan.textContent = totalTiradas;
    sumaTotalSpan.textContent = sumaTotal;
    promedioTotalSpan.textContent = promedio;
}

// Función para lanzar el dado
function lanzarDado() {
    const resultado = generarNumeroAleatorio();
    
    // 1. Mostrar el resultado en el dado
    dadoElement.textContent = resultado;
    
    // 2. Registrar el resultado en el array
    historial.push(resultado);
    
    // 3. Registrar el resultado en la lista del historial (DOM)
    const nuevoElementoLista = document.createElement('li');
    nuevoElementoLista.textContent = `Tirada #${historial.length}: ${resultado}`;
    historialLista.prepend(nuevoElementoLista); // Usar prepend para que la más reciente vaya arriba
    
    // 4. Actualizar el resumen
    actualizarResumen();
}

// Función para limpiar la tirada
function limpiarTirada() {
    // 1. Resetear la interfaz
    dadoElement.textContent = '?';
    historialLista.innerHTML = ''; // Eliminar todos los elementos de la lista
    
    // 2. Resetear el historial en memoria
    historial = [];
    
    // 3. Actualizar el resumen a cero
    actualizarResumen();
}

// Asignar los Event Listeners a los botones
lanzarBtn.addEventListener('click', lanzarDado);
limpiarBtn.addEventListener('click', limpiarTirada);

// Inicializar el resumen al cargar la página
actualizarResumen();






