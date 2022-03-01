window.onload = () => {
  const lightbox = document.querySelector("#lightbox");
  const links = document.querySelectorAll("a");
  const close = document.querySelector(".lightbox_close");
  console.log(links);

  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const image = document.querySelector(".lightbox_container img");
      image.src = this.href;
      lightbox.style.display = "block";
    });
  }
  close.addEventListener("click", function () {
    lightbox.style.display = "none";
  });
};
