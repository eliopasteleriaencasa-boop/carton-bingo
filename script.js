document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const referencia = document.getElementById("referencia").value;

  // Lista simulada de referencias válidas
  const referenciasValidas = ["ABC123", "PAGO456", "XYZ789"];

  if (referenciasValidas.includes(referencia)) {
    document.getElementById("mensaje").innerText = `✅ Pago validado. Cartón enviado a ${correo}`;
    // Aquí iría la lógica para generar el cartón y enviarlo
  } else {
    document.getElementById("mensaje").innerText = `❌ Referencia inválida. Verifica tu pago.`;
  }
});