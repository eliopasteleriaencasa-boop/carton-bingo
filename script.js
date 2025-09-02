// 🔄 Mostrar solo la sección activa
function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(s => s.classList.remove('visible'));
  const activa = document.getElementById(id);
  if (activa) {
    activa.classList.add('visible');
    console.log("Sección mostrada:", id);
  } else {
    console.warn("Sección no encontrada:", id);
  }
}

// 🛒 Manejo de compra
document.getElementById('formCompra').onsubmit = function(e) {
  e.preventDefault();
  const nombre = e.target.nombre.value.trim();
  const telefono = e.target.telefono.value.trim();

  if (!nombre || !telefono) {
    document.getElementById('estadoCompra').textContent = "❌ Completa todos los campos.";
    return;
  }

  // Aquí podrías conectar con Apps Script o Airtable
  console.log("Compra registrada:", { nombre, telefono });
  document.getElementById('estadoCompra').textContent = "✅ Cartón generado correctamente.";
};

// ✅ Manejo de validación
document.getElementById('formValidar').onsubmit = function(e) {
  e.preventDefault();
  const transaccion = e.target.transaccion.value.trim();

  if (!transaccion) {
    document.getElementById('estadoValidar').textContent = "❌ Ingresa el ID de transacción.";
    return;
  }

  // Aquí podrías validar contra tu base de datos
  console.log("Validación enviada:", transaccion);
  document.getElementById('estadoValidar').textContent = "✅ Pago validado.";
};

// 📤 Manejo de envío por WhatsApp
document.getElementById('formEnviar').onsubmit = function(e) {
  e.preventDefault();
  const destino = e.target.destino.value.trim();

  if (!destino || !/^\d{10,15}$/.test(destino)) {
    document.getElementById('estadoEnviar').textContent = "❌ Ingresa un teléfono válido.";
    return;
  }

  // Aquí podrías conectar con UltraMsg o WATI
  console.log("Envío iniciado a:", destino);
  document.getElementById('estadoEnviar').textContent = "📤 Cartón enviado por WhatsApp.";
};
