class videos {
  constructor(data) {
    this.title = data.title;
    this.likes = data.likes;
    this.video = data.video;
    this.price = data.price;
    this.date = data.date;
  }
  getImageCardDOM() {
    const divVideoContent = document.createElement("div");

    const video = `assets/images/${this.video}`;
    const linkVideo = document.createElement("a");
    linkVideo.setAttribute("href", video);

    const videoContent = document.createElement("video");
    const sourceVideo = document.createElement("source");
    videoContent.appendChild(iconPlay);
    sourceVideo.setAttribute("src", video);
    sourceVideo.setAttribute("type", "video/mp4");
    videoContent.appendChild(sourceVideo);
    linkVideo.appendChild(videoContent);
    divVideoContent.appendChild(linkVideo);

    const titleVideo = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = this.title;
    titleVideo.appendChild(h3);
    divVideoContent.appendChild(titleVideo);

    const likeVideo = document.createElement("div");
    const span = document.createElement("span");
    const iconHeart = document.createElement("i");
    span.textContent = this.likes;
    iconHeart.className = "fas fa-heart";
    likeVideo.appendChild(span);
    likeVideo.appendChild(iconHeart);

    divVideoContent.appendChild(likeVideo);
    return divVideoContent;
  }
}
