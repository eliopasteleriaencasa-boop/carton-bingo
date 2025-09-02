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
    const zona = document.getElementById('zonaCartones').value.trim();
    const evento = document.getElementById('eventoCartones').value.trim();
    const cantidad = parseInt(document.getElementById('cantidadCartones').value);
    const resultado = document.getElementById('resultadoCartones');

    if (!zona || !evento || isNaN(cantidad) || cantidad < 1 || cantidad > 1000) {
      alert("Completa todos los campos correctamente.");
      return;
    }

    cartones = [];
    const fecha = new Date().toISOString().slice(0,10).replace(/-/g,'');
    const base = `${zona}-${evento}-${fecha}`;

    let html = `<h3>Cartones generados:</h3><table><thead><tr><th>#</th><th>Código Único</th><th>Secuencia</th></tr></thead><tbody>`;

    for (let i = 1; i <= cantidad; i++) {
      const secuencia = String(i).padStart(4, '0');
      const codigo = `${base}-${secuencia}`;
      cartones.push(codigo);
      html += `<tr><td>${i}</td><td>${codigo}</td><td>${secuencia}</td></tr>`;
    }

    html += `</tbody></table>`;
    resultado.innerHTML = html;

    document.getElementById('menu').classList.remove('oculto');
    mostrarVista('cartones');
  });
});

// Vista inicial
mostrarVista('presentacion');
