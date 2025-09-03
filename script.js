function toggleView(viewId) {
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active');
  });
  document.getElementById(viewId).classList.add('active');
}

function toggleAuditMode() {
  document.body.classList.toggle('audit-mode');
  alert("Modo auditoría activado: solo lectura");
}

// Guardar estado del panel lateral (opcional)
window.addEventListener('load', () => {
  const sidebar = document.getElementById('sidebar');
  const isOpen = localStorage.getItem('sidebarOpen') === 'true';
  sidebar.style.display = isOpen ? 'block' : 'none';
});
