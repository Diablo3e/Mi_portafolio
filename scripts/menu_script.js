function toggleMenu() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar.style.width === "200px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "200px";
  }
}
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
