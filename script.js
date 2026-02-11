const roles = {
  admin: {
    title: 'Acceso Administrador',
    description: 'Ingresa tus credenciales para administrar la plataforma.',
  },
  docente: {
    title: 'Acceso Docente',
    description: 'Registra notas, asistencia y sigue el progreso de tus cursos.',
  },
  estudiante: {
    title: 'Acceso Estudiante',
    description: 'Consulta tus materias, tareas y resultados académicos.',
  },
};

const tabs = document.querySelectorAll('.role-tab');
const title = document.getElementById('formTitle');
const description = document.getElementById('formDescription');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const role = roles[tab.dataset.role];
    title.textContent = role.title;
    description.textContent = role.description;
  });
});
