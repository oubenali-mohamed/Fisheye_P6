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
    this.next();
    this.prev();
    this.close();
  }

  displayMedia() {
    if (this.listMedias[this.index].image) {
      const img = this.listMedias[this.index].image;
      const lightbox = document.querySelector("#lightbox");
      const container_img = document.querySelector(".lightbox_container");
      const photo = document.createElement("img");
      photo.setAttribute("src", "assets/images/" + img);
      if (container_img.firstChild != null) {
        container_img.removeChild(container_img.firstChild);
      }
      container_img.appendChild(photo);
      lightbox.style.display = "block";
    } else {
      const video = this.listMedias[this.index].video;
      const lightbox = document.querySelector("#lightbox");
      const container_img = document.querySelector(".lightbox_container");
      const the_video = document.createElement("video");
      const s_video = document.createElement("source");
      s_video.setAttribute("src", "/assets/images/" + video);
      s_video.setAttribute("type", "video/mp4");
      the_video.appendChild(s_video);
      if (container_img.firstChild != null) {
        container_img.removeChild(container_img.firstChild);
      }
      container_img.appendChild(the_video);
      the_video.play();
      lightbox.style.display = "block";
    }
  }

  close() {
    const lightbox = document.querySelector("#lightbox");
    const close = document.querySelector(".lightbox_close");
    close.addEventListener("click", function (e) {
      e.preventDefault();
      lightbox.style.display = "none";
    });
  }
  play(position) {
    this.index = position;
    console.log(this.index);
    console.log(this.listMedias[this.index]);
  }
  next() {
    const next = document.querySelector(".lightbox_next");
    next.addEventListener("click", () => {
      if (this.index >= this.listMedias.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
      this.displayMedia();
    });
  }
  prev() {
    const prev = document.querySelector(".lightbox_prev");
    prev.addEventListener("click", () => {
      if (this.index <= 0) {
        this.index = this.listMedias.length - 1;
      } else {
        this.index--;
      }
      this.displayMedia();
    });
  }
}
