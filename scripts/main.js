// =========================
// FAQ
// =========================
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".faq-question").forEach(button => {

    button.addEventListener("click", () => {

      const item = button.parentElement;
      item.classList.toggle("active");

      const icon = item.querySelector(".faq-icon");

      icon.textContent = item.classList.contains("active") ? "-" : "+";

    });

  });

});


// =========================
// HAMBURGER MENU
// =========================
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {

  nav.classList.toggle("active");

  hamburger.textContent =
    nav.classList.contains("active") ? "✕" : "☰";

});

document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("active");
    hamburger.textContent = "☰";
  });

});

document.addEventListener("click", (e) => {

  if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
    hamburger.textContent = "☰";
  }

});


// =========================
// TESTIMONIOS SLIDER
// =========================
const testimonios = [
      {
        texto: "“MentorEdu me ha permitido identificar con anticipación a los estudiantes que presentan dificultades. Antes, este proceso era manual y tomaba mucho tiempo. Ahora puedo actuar de manera oportuna y brindar apoyo más personalizado, lo que impacta directamente en el rendimiento del grupo.”.",
        nombre: "Carlos Mendoza",
        img: "assets/images/doc1.png",
        logo: "assets/icons/uni.png"
      },
      {
        texto: "“La plataforma facilita enormemente el seguimiento académico. Los reportes automáticos y las alertas me permiten tomar decisiones basadas en datos reales, en lugar de intuición. Esto mejora la calidad de la enseñanza y optimiza el tiempo dentro y fuera del aula.”",
        nombre: "José Ramírez",
        img: "assets/images/doc2.png",
        logo: "assets/icons/uni2.png"
      },
      {
        texto: "“Una de las mayores ventajas de MentorEdu es la visibilidad que ofrece sobre el progreso de los estudiantes. Puedo ver patrones de comportamiento, detectar riesgos y ajustar mis estrategias de enseñanza. Es una herramienta que realmente aporta valor al proceso educativo.”",
        nombre: "Luis Herrera",
        img: "assets/images/doc3.png",
        logo: "assets/icons/uni3.png"
      }
];

let index = 0;

function updateTestimonio() {
  document.getElementById("testimonio-text").innerText = testimonios[index].texto;
  document.getElementById("testimonio-nombre").innerText = testimonios[index].nombre;
  document.getElementById("testimonio-img").src = testimonios[index].img;
  document.getElementById("testimonio-logo").src = testimonios[index].logo;
}

function nextTestimonio() {
  index = (index + 1) % testimonios.length;
  updateTestimonio();
}

function prevTestimonio() {
  index = (index - 1 + testimonios.length) % testimonios.length;
  updateTestimonio();
}

// hacer funciones globales (porque usas onclick en HTML)
window.nextTestimonio = nextTestimonio;
window.prevTestimonio = prevTestimonio;