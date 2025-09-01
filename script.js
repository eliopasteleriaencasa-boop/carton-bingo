// 🧾 Datos del cliente y historial
let cliente = {};
let historial = [];

// 🟢 Registro de cliente
document.getElementById("formRegistro").addEventListener("submit", function(e) {
  e.preventDefault();

  cliente.nombre = document.getElementById("nombre").value.trim();
  cliente.whatsapp = document.getElementById("whatsapp").value.trim();
  cliente.referencia = document.getElementById("referencia").value.trim();

  document.getElementById("registroEstado").innerText =
    `✅ Cliente registrado: ${cliente.nombre} (${cliente.whatsapp})`;
});

// 🔍 Validación de pago (simulada)
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

// 🎫 Generación de cartón (simulada)
function generarCarton() {
  if (cliente.estadoPago !== "Validado") {
    document.getElementById("cartonVisual").innerText =
      `⚠️ No se puede generar cartón sin validar el pago.`;
    return;
  }

  cliente.carton = `Cartón #${Math.floor(100000 + Math.random() * 900000)}`;
  document.getElementById("cartonVisual").innerText =
    `🎫 Cartón generado: ${cliente.carton}`;
}

// 📤 Envío por WhatsApp (simulado)
function enviarCarton() {
  if (!cliente.carton) {
    document.getElementById("envioEstado").innerText =
      `⚠️ No hay cartón generado para enviar.`;
    return;
  }

  const mensaje = `Hola ${cliente.nombre}, aquí está tu cartón: ${cliente.carton}`;
  document.getElementById("envioEstado").innerText =
    `📤 Cartón enviado a ${cliente.whatsapp} (simulado)`;

  // 🗂️ Registrar en historial
  historial.push({
    nombre: cliente.nombre,
    whatsapp: cliente.whatsapp,
    referencia: cliente.referencia,
    carton: cliente.carton,
    fecha: new Date().toLocaleString()
  });

  actualizarHistorial();
}

// 📋 Mostrar historial en auditoría
function actualizarHistorial() {
  const contenedor = document.getElementById("historial");
  contenedor.innerHTML = "";

  historial.forEach((registro, index) => {
    const item = document.createElement("div");
    item.innerText = `${index + 1}. ${registro.nombre} | ${registro.whatsapp} | ${registro.referencia} | ${registro.carton} | ${registro.fecha}`;
    contenedor.appendChild(item);
  });
}
