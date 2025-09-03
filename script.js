// Activar panel al hacer clic en "Comenzar"
document.getElementById("btnComenzar").addEventListener("click", function () {
  document.getElementById("presentacion").style.display = "none";
  document.getElementById("panel").style.display = "flex";
});

// Datos del cliente y historial
let cliente = {};
let historial = [];

// Registro
document.getElementById("formRegistro").addEventListener("submit", function (e) {
  e.preventDefault();
  cliente.nombre = document.getElementById("nombre").value.trim();
  cliente.whatsapp = document.getElementById("whatsapp").value.trim();
  cliente.referencia = document.getElementById("referencia").value.trim();

  document.getElementById("registroEstado").innerText =
    `✅ Cliente registrado: ${cliente.nombre} (${cliente.whatsapp})`;
});

// Validación simulada
function validarPago() {
  const referenciasValidas = ["ABC123", "PAGO456", "XYZ789"];
  if (!cliente.referencia) {
    document.getElementById("validacionEstado").innerText =
      `⚠️ Primero debes registrar al cliente.`;
    return;
  }

  if (referenciasValidas.includes(cliente.referencia)) {
    cliente.estadoPago = "Validado";
    document.getElementById("validacionEstado").innerText =
      `✅ Pago validado para ${cliente.nombre}`;
  } else {
    cliente.estadoPago = "Rechazado";
    document.getElementById("validacionEstado").innerText =
      `❌ Referencia inválida. Verifica el pago.`;
  }
}

// Generación de cartón
function generarCarton() {
  if (cliente.estadoPago !== "Validado") {
    document.getElementById("cartonVisual").innerText =
      `⚠️ No se puede generar cartón sin validar el pago.`;
    return;
  }

  const fecha = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const secuencia = Math.floor(10000 + Math.random() * 90000);
  cliente.carton = `BGO-${fecha}-${secuencia}-VZLA`;

  document.getElementById("cartonVisual").innerText =
    `🎫 Cartón generado: ${cliente.carton}`;
}

// Envío simulado
function enviarCarton() {
  if (!cliente.carton) {
    document.getElementById("envioEstado").innerText =
      `⚠️ No hay cartón generado para enviar.`;
    return;
  }

  document.getElementById("envioEstado").innerText =
    `📤 Cartón enviado a ${cliente.whatsapp} (simulado)`;

  historial.push({
    nombre: cliente.nombre,
    whatsapp: cliente.whatsapp,
    referencia: cliente.referencia,
    carton: cliente.carton,
    fecha: new Date().toLocaleString()
  });

  actualizarHistorial();
}

// Auditoría
function actualizarHistorial() {
  const contenedor = document.getElementById("historial");
  contenedor.innerHTML = "";

  historial.forEach((registro, index) => {
    const item = document.createElement("div");
    item.innerText = `${index + 1}. ${registro.nombre} | ${registro.whatsapp} | ${registro.referencia} | ${registro.carton} | ${registro.fecha}`;
    contenedor.appendChild(item);
  });
}
