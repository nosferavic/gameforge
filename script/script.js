function burguerMenu() {
  const btnMobile = document.getElementById("btn-mobile");
  const nav = document.getElementById("nav");
  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
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
burguerMenu();

function linkSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  const header = document.querySelector('#header');
  const headerHeight = header.clientHeight;

  if (linksInternos.length) {
    function scrollSuave(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(href);

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = targetPosition - headerHeight;

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollSuave);
    });
  }
}
linkSuave();


function scrollAnimate() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.6;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const itSectionVisible = sectionTop - windowMetade < 0;
        if (itSectionVisible) {
          section.classList.add("animar");
        } else section.classList.remove("animar");
      });
    }
  }
  window.addEventListener("scroll", animaScroll);
}
scrollAnimate();

const header = document.querySelector('#header')
console.log(header)
const headerHeight = header.clientHeight
console.log(headerHeight)