function mostrarVista(id) {
  document.querySelectorAll('.vista').forEach(v => v.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
}

// Vista inicial
mostrarVista('validacion');
  console.log("Envío iniciado a:", destino);
  document.getElementById('estadoEnviar').textContent = "📤 Cartón enviado por WhatsApp.";
};

