window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    header.style.background = window.scrollY > 50 ? "#000" : "#1a1a1a";
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
        if(navLinks.classList.contains("show")) navLinks.classList.remove("show");
    });
});
const form = document.getElementById("form-inscricao");
const modal = document.getElementById("modal-sucesso");
const closeButton = document.querySelector(".close-button");

const abrirModal = () => modal.classList.add("active");
const fecharModal = () => modal.classList.remove("active");

form.addEventListener("submit", e => {
    e.preventDefault();
    abrirModal();
    form.reset();
});

closeButton.addEventListener("click", fecharModal);
modal.addEventListener("click", e => {
    if(e.target === modal) fecharModal();
});
