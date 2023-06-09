// Obtén una referencia al elemento del fondo
const background = document.querySelector(".background");

// Escucha el evento 'mousemove' en la ventana
window.addEventListener("mousemove", (event) => {
  // Obtiene la posición del mouse relativa al tamaño del fondo
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  // Aplica las transformaciones al fondo
  background.style.transform = `translate(-${x * 50}px, -${y * 50}px)`;
});
