function burguerMenu() {
  const btnMobile = document.getElementById("btn-mobile");
  const nav = document.getElementById("nav");
  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefalut();
    nav.classList.toggle("ativo");
    const ativo = nav.classList.contains("ativo");
    event.currentTarget.setAttribute("aria-expanded", ativo);
    if (ativo) {
      event.currentTarget.setAttribute("aria-label", "fechar menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "abrir menu");
    }
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);

  const links = Array.from(document.querySelectorAll(".link"));
  const link = links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("ativo");
    });
  });
}
burguerMenu()
