window.onload = () => {
  const lightbox = document.querySelector("#lightbox");
  const links = document.querySelectorAll("a");
  const close = document.querySelector(".lightbox_close");
  const next = document.querySelector(".lightbox_next");
  const prev = document.querySelector(".lightbox_prev");
  const container_img = document.querySelector(".lightbox_container");
  console.log(links);

  for (i = 0; i < links.length; i++) {
    const link = links[i];
    console.log(link);
    if (link.firstChild) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        lightbox.style.display = "block";
        const image = document.createElement("img");
        image.src = this.href;
        container_img.appendChild(image);
      });
    } else {
      const video = document.createElement("video");
      const source = document.createElement("source");
      source.setAttribute("src", this.href);
      source.setAttribute("type", "video/mp4");
      video.appendChild(source);
      container_img.appendChild(video);
    }
  }

  next.addEventListener("click", function () {
    e.preventDefault();
  });
  prev.addEventListener("click", function () {
    e.preventDefault();
  });
  close.addEventListener("click", function () {
    lightbox.style.display = "none";
  });
};
