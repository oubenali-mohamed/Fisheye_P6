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
      let the_title = this.listMedias[this.index].title;
      let title_photo = document.getElementById("titre_photo");
      title_photo.innerHTML = the_title;

      if (container_img.firstChild != null) {
        container_img.removeChild(container_img.firstChild);
      } else {
        container_img.appendChild(photo);
        lightbox.style.display = "block";
      }
    } else {
      const video = this.listMedias[this.index].video;
      const lightbox = document.querySelector("#lightbox");
      const container_img = document.querySelector(".lightbox_container");
      const the_video = document.createElement("video");
      const s_video = document.createElement("source");
      s_video.setAttribute("src", "/assets/images/" + video);
      s_video.setAttribute("type", "video/mp4");
      the_video.appendChild(s_video);
      let the_title = this.listMedias[this.index].title;
      let title_photo = document.getElementById("titre_photo");
      title_photo.innerHTML = the_title;

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
  }
  next() {
    const next = document.querySelector(".lightbox_next");
    next.addEventListener("click", () => {
      if (this.index >= this.listMedias.length - 1) {
        this.index = -1;
      } else {
        this.index++;
        console.log(this.index);
        this.displayMedia();
      }
    });
  }
  prev() {
    const prev = document.querySelector(".lightbox_prev");
    prev.addEventListener("click", () => {
      if (this.index <= 0) {
        this.index = this.listMedias.length;
      } else {
        this.index--;
        console.log(this.index);
        this.displayMedia();
      }
    });
  }
}
