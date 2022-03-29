/* window.onload = () => {
  const lightbox = document.querySelector("#lightbox");
  const links = document.querySelectorAll("a");
  const close = document.querySelector(".lightbox_close");
  const next = document.querySelector(".lightbox_next");
  const prev = document.querySelector(".lightbox_prev");
  const container_img = document.querySelector(".lightbox_container");
  let index = 0;
  console.log(links);

  //function setImage() {

  //}
  for (i = 0; i < links.length; i++) {
    //setImage();
    const link = links[i];
    if (link.firstChild.nodeName === "IMG") {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        lightbox.style.display = "block";
        const image = link.innerHTML;
        container_img.innerHTML = image;
      });
    } else {
      const video_element = link.lastChild;
      if (video_element.nodeName === "VIDEO") {
        link.addEventListener("click", function (e) {
          e.preventDefault();
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
        });
      }
    }
  }

  next.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(index);
    if (index >= links.length - 1) {
      index = -1;
    }
    index++;

    //setImage();
  });

  prev.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(index);
    if (index <= 0) {
      index = links.length;
    }
    index--;
    //setImage();
  });

  close.addEventListener("click", function (e) {
    e.preventDefault();
    lightbox.style.display = "none";
  });
}; */

class Lightbox {
  constructor() {
    this.listMedias = [];
    this.index = 0;
  }
  close() {
    const lightbox = document.querySelector("#lightbox");
    const close = document.querySelector(".lightbox_close");
    close.addEventListener("click", function (e) {
      e.preventDefault();
      lightbox.style.display = "none";
    });
  }
  next() {
    const next = document.querySelector(".lightbox_next");
    next.addEventListener("click", () => {
      if (this.index >= this.listMedias.length - 1) {
        this.index = -1;
      }
      this.index++;
    });
  }
  prev() {
    if (this.index <= 0) {
      this.index = this.listMedias.length;
    }
    this.index--;
  }
}
