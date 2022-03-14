window.onload = () => {
  const lightbox = document.querySelector("#lightbox");
  const links = document.querySelectorAll("a");
  const close = document.querySelector(".lightbox_close");
  const next = document.querySelector(".lightbox_next");
  const prev = document.querySelector(".lightbox_prev");
  const container_img = document.querySelector(".lightbox_container");
  let index = 0;
  console.log(links);

  for (i = 0; i < links.length; i++) {
    const link = links[i];
    if (link.firstChild.nodeName === "IMG") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        function imageLightbox() {
          lightbox.style.display = "block";
          const image = link.innerHTML;
          container_img.innerHTML = image;
        }
        imageLightbox();
      });
    } else {
      const video_element = link.lastChild;
      if (video_element.nodeName === "VIDEO") {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          function videoLightbox() {
            lightbox.style.display = "block";
            const video = document.createElement("video");
            const sourceVideo = document.createElement("source");
            sourceVideo.setAttribute(
              "src",
              video_element.firstChild.attributes[0].nodeValue
            );
            sourceVideo.setAttribute("type", "video/mp4");
            video.appendChild(sourceVideo);
            video.play();
            if (container_img.firstChild != null) {
              container_img.removeChild(container_img.firstChild);
            }
            container_img.appendChild(video);
          }
          videoLightbox();
        });
      }
    }
  }

  next.addEventListener("click", function (e) {
    e.preventDefault();
    if (index >= links.length - 1) index = -1;
    index--;
    const link = links[i];
    const image = link.innerHTML;
    container_img.innerHTML = image;
  });

  prev.addEventListener("click", function (e) {
    e.preventDefault();
    if ((index <= 0, (index = links.length), i--)) {
      const link = links[i];
      lightbox.style.display = "block";
      const image = link.innerHTML;
      container_img.innerHTML = image;
    }
  });
  close.addEventListener("click", function (e) {
    e.preventDefault();
    lightbox.style.display = "none";
  });
};
