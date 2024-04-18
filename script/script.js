const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefalut();
  const nav = document.getElementById("nav");
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
