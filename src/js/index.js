
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.style.background = "#000"; 
  } else {
    header.style.background = "#1a1a1a"; 
  }
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });

    if (navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
    }
  });
});

const form = document.getElementById("form-inscricao");
const modal = document.getElementById("modal-sucesso");
const closeButton = document.querySelector(".close-button");

const fecharModal = () => {
    modal.classList.add("hidden");
};

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    modal.classList.remove("hidden"); 
    form.reset(); 
});


closeButton.addEventListener("click", fecharModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        fecharModal();
    }
});