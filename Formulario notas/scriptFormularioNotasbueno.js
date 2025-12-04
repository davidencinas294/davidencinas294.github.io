// Declarar un array para almacenar las notas
let notas = [];

function agregarNota(event) {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
    
    // Obtener el valor del campo nombre con document.getElementById [cite: 124]
    const nombreInput = document.getElementById('nombre-alumno');
    const nombre = nombreInput.value.trim();
	
    // Obtener el valor del campo nota con document.getElementById [cite: 124]
    const notaInput = document.getElementById('nota-alumno');
    // Usamos parseFloat para obtener el valor numérico (con decimales)
    const nota = parseFloat(notaInput.value); 
	
    // **Validación de campos (aunque el HTML tiene 'required', esta es una validación extra de JS)** [cite: 125]
    if (!nombre || isNaN(nota)) {
        alert("Por favor, rellene el nombre y la nota.");
        return;
    }

    // Crear un objeto con los datos
    const nuevaNota = {
        nombre: nombre,
        // Almacenamos la nota con dos decimales para una visualización limpia
        nota: nota.toFixed(2) 
    };
    
    // Agregar el objeto al array de notas [cite: 126]
    // PISTA: Método de array para agregar elementos
    notas.push(nuevaNota);
    
    // Actualizar la tabla visualmente empleando function actualizarTabla() [cite: 128]
    actualizarTabla();
    	
    // Limpiar los campos del formulario con document.getElementById [cite: 130]
    nombreInput.value = '';
    notaInput.value = '';
}


function actualizarTabla() {
    // Obtener el elemento tbody de la tabla con document.getElementById('cuerpo-tabla');
    const cuerpoTabla = document.getElementById('cuerpo-tabla');
    
    // Limpiar el contenido actual de la tabla [cite: 134]
    // PISTA: Propiedad para establecer HTML
    cuerpoTabla.innerHTML = '';
    
    // Recorrer el array de notas 
    // PISTA: Método para iterar arrays
	//notas.forEach
    notas.forEach(item => {
        // Para cada nota, crear una nueva fila
        const fila = document.createElement('tr');
        
        // Crear celda para el nombre
        const celdaNombre = document.createElement('td');
        // Asignar el texto con el nombre [cite: 129]
        celdaNombre.textContent = item.nombre;
        
        // Crear celda para la nota
        const celdaNota = document.createElement('td');
        // Asignar el texto con la nota [cite: 129]
        celdaNota.textContent = item.nota;
        
        // Agregar las celdas a la fila
        // PISTA: Método para agregar elementos al DOM
		//fila.appendChild()
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaNota);
        
        // Agregar la fila a la tabla
        cuerpoTabla.appendChild(fila);
    });
}


function limpiarTodasLasNotas() {
    // Vaciar el array de notas [cite: 133]
    notas = [];
    
    // Actualizar la tabla visualmente (para limpiar la tabla visual) [cite: 134]
    actualizarTabla();
}