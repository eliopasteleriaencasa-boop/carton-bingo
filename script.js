// === Utilidades para manejo de vistas ===
function activarVista(vistaId) {
  document.querySelectorAll('.vista').forEach(v => v.classList.add('oculto'));
  const vista = document.querySelector(`.${vistaId}`);
  if (vista) {
    vista.classList.remove('oculto');
    vista.classList.add('activa');
    console.log(`[Vista activa]: ${vistaId}`);
  } else {
    console.warn(`[Vista no encontrada]: ${vistaId}`);
  }
}

// === Evento: Ir al registro desde bienvenida ===
document.getElementById('registerBtn').addEventListener('click', () => {
  activarVista('vista-registro');
});

// === Validación y registro de vendedor ===
document.getElementById('sellerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const zona = document.getElementById('zona').value;

  if (!nombre || !telefono || !correo || !zona) {
    alert('Por favor completa todos los campos.');
    console.warn('[Formulario incompleto]');
    return;
  }

  // Simulación de registro (puedes integrar API aquí)
  console.log(`[Registro exitoso] Nombre: ${nombre}, Tel: ${telefono}, Correo: ${correo}, Zona: ${zona}`);

  // Mostrar confirmación
  document.getElementById('sellerForm').classList.add('oculto');
  document.getElementById('confirmacion').classList.remove('oculto');
});

// === Evento: Ir a administración ===
document.getElementById('irAdmin').addEventListener('click', () => {
  activarVista('vista-admin');
});
