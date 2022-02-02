/* function mediaFactory(data) {
  const { title, image, likes } = data;

  const pictureMedia = `assets/images/${image}`;

  function getMedia() {
    const divMedia = document.createElement("div");
    const imgMedia = document.createElement("img");
    imgMedia.classList = "media_photographe";
    imgMedia.setAttribute("src", pictureMedia);
    const linkMedia = document.createElement("a");
    linkMedia.setAttribute("href", "index.html");
    linkMedia.appendChild(imgMedia);
    const paraMedia = document.createElement("p");
    paraMedia.classList = "titreMedia";
    paraMedia.textContent = title;
    const pLike = document.createElement("p");
    pLike.classList = "like";
    pLike.textContent = likes;
    const heart = document.createElement("i");
    heart.classList = "fas fa-heart";
    pLike.appendChild(heart);
    divMedia.appendChild(linkMedia);
    divMedia.appendChild(paraMedia);
    divMedia.appendChild(pLike);
    return divMedia;
  }
  return { getMedia };
}
 */

class mediaFactory {
  constructor(data, type) {
    if (type == "image") {
      return new images(data);
    } else if (type == "video") {
      return new videos(data);
    } else {
      throw "Unknown type format";
    }
  }
}
