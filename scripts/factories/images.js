class images {
  constructor(data) {
    this.title = data.title;
    this.likes = data.likes;
    this.image = data.image;
    this.price = data.price;
    this.date = data.date;
  }

  getImageCardDOM() {
    const divImgContent = document.createElement("div");

    const picture = `/assets/images/${this.image}`;
    const linkPicture = document.createElement("a");
    linkPicture.setAttribute("href", picture);

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.className = "media_photographe";
    linkPicture.appendChild(img);
    divImgContent.appendChild(linkPicture);

    const titleMedia = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.className = "titreMedia";
    h3.textContent = this.title;
    titleMedia.appendChild(h3);
    divImgContent.appendChild(titleMedia);

    const likeMedia = document.createElement("div");
    likeMedia.id = "mediaLike";
    const totalLike = document.createElement("p");
    const iconHeart = document.createElement("i");
    iconHeart.className = "fas fa-heart";
    totalLike.textContent = this.likes;
    totalLike.className = "total_like";

    likeMedia.appendChild(totalLike);
    likeMedia.appendChild(iconHeart);

    divImgContent.appendChild(likeMedia);
    return divImgContent;
  }
}
