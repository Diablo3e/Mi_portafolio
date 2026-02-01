//accion del boton del menu
function toggleMenu() {
  const sidebar = document.getElementById("mySidebar");
  const content = document.getElementById("mainContent");

  if (sidebar.style.width === "200px") {
    sidebar.style.width = "0";
    content.style.marginLeft = "0";
  } else {
    sidebar.style.width = "200px";
    content.style.marginLeft = "200px";
  }
}


//Burbuja de fondo

tsParticles.load("tsparticles", {
  particles: {
    number: { value: 50 },
    size: { value: 3 },
    move: { enable: true, speed: 1 },
    color: { value: "#ffffff" },
    opacity: { value: 0.5 },
  },
  background: { color: "#1e1e2f" }
});
