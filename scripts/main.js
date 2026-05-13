const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const authModal = document.getElementById("authModal");
const authForm = document.getElementById("authForm");
const authTitle = document.getElementById("authTitle");
const authSubtitle = document.getElementById("authSubtitle");
const formFeedback = document.getElementById("formFeedback");
const registerTab = document.getElementById("registerTab");
const loginTab = document.getElementById("loginTab");
const authSubmit = document.querySelector(".auth-submit");
const registerOnlyFields = document.querySelectorAll(".register-only");

let currentAuthMode = "register";

function setMenuState(isOpen) {
  nav.classList.toggle("active", isOpen);
  hamburger.textContent = isOpen ? "×" : "☰";
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
}

function setAuthMode(mode) {
  currentAuthMode = mode;
  const isRegister = mode === "register";

  registerTab.classList.toggle("active", isRegister);
  loginTab.classList.toggle("active", !isRegister);
  registerOnlyFields.forEach((field) => {
    field.hidden = !isRegister;
  });

  authTitle.textContent = isRegister ? "Crea tu cuenta" : "Ingresa a MentorEdu";
  authSubtitle.textContent = isRegister
    ? "Empieza a guardar exámenes, resolver dudas y ganar puntos."
    : "Continúa tu preparación desde tus exámenes, foros y retos guardados.";
  authSubmit.textContent = isRegister ? "Crear cuenta" : "Ingresar";
  formFeedback.textContent = "";
}

function openAuthModal(mode = "register") {
  setAuthMode(mode);
  authModal.classList.add("open");
  authModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  setTimeout(() => document.getElementById("email").focus(), 50);
}

function closeAuthModal() {
  authModal.classList.remove("open");
  authModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  formFeedback.textContent = "";
}

hamburger.addEventListener("click", () => {
  setMenuState(!nav.classList.contains("active"));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("click", (event) => {
  if (!hamburger.contains(event.target) && !nav.contains(event.target)) {
    setMenuState(false);
  }
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const icon = item.querySelector(".faq-icon");
    const isActive = item.classList.toggle("active");

    icon.textContent = isActive ? "-" : "+";
  });
});

document.querySelectorAll("[data-auth-open]").forEach((button) => {
  button.addEventListener("click", () => {
    openAuthModal(button.dataset.authTab || "register");
  });
});

document.querySelectorAll("[data-auth-close]").forEach((button) => {
  button.addEventListener("click", closeAuthModal);
});

document.querySelectorAll("[data-auth-switch]").forEach((button) => {
  button.addEventListener("click", () => {
    setAuthMode(button.dataset.authSwitch);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && authModal.classList.contains("open")) {
    closeAuthModal();
  }
});

authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formFeedback.textContent =
    currentAuthMode === "register"
      ? "Cuenta creada y perfil listo para personalización."
      : "Sesión iniciada correctamente.";
});
