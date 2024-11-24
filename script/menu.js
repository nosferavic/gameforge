document.addEventListener("scroll", () => {
  const article = document.querySelectorAll("article");
  const navItens = document.querySelectorAll(".menu-item");
  let currentArticle = "";
  article.forEach((artigo) => {
    const articleTop = artigo.offsetTop;
    const articleHeight = artigo.offsetHeight;
    if (window.scrollY >= articleTop - articleHeight / 3) {
      currentArticle = artigo.getAttribute("id");
    }
  });

  navItens.forEach((item) => {
    item.classList.remove('active');
    if (item.getAttribute("href") === `#${currentArticle}`) {
      item.classList.add("active");
    }
  });
});
