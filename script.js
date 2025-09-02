let cartones = [];

function mostrarVista(id) {
  document.querySelectorAll('.vista').forEach(v => v.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
}

document.addEventListener('DOMContentLoaded', () => {
  // Botón Comenzar
  document.getElementById('btnComenzar').addEventListener('click', () => {
    mostrarVista('generacion');
  });

  // Botón Generar
  document.getElementById('btnGenerar').addEventListener('click', () => {
    const cantidad = parseInt(document.getElementById('cantidadCartones').value);
    if (isNaN(cantidad) || cantidad < 1 || cantidad > 1000) {
      alert("Ingresa un número válido entre 1 y 1000.");
      return;
    }

    cartones = [];
    for (let i = 1; i <= cantidad; i++) {
      const codigo = `B-${String(i).padStart(3, '0')}`;
      cartones.push(codigo);
    }

    const resultado = document.getElementById('resultadoCartones');
    resultado.innerHTML = `<h3>Cartones generados:</h3><ul>${cartones.map(c => `<li>${c}</li>`).join('')}</ul>`;

    document.getElementById('menu').classList.remove('oculto');
    mostrarVista('cartones');
  });
});

// Vista inicial
mostrarVista('presentacion');






