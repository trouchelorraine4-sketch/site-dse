const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu a");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", () => {
        menu.classList.toggle("ativo");

        const menuAberto = menu.classList.contains("ativo");

        botaoMenu.setAttribute("aria-expanded", menuAberto);
        botaoMenu.textContent = menuAberto ? "✕" : "☰";
    });

    linksMenu.forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("ativo");
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.textContent = "☰";
        });
    });
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 820 && menu && botaoMenu) {
        menu.classList.remove("ativo");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.textContent = "☰";
    }
});