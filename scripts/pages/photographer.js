//Mettre le code JavaScript lié à la page photographer.html
let urlPhotographer = window.location.search;
let searchParams = new URLSearchParams(urlPhotographer);
let id = searchParams.get("id");
let url_Photographer = "data/photographers.json";
let lightbox = new Lightbox();
let likeArray = [];

fetch(url_Photographer)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (i = 0; i < data.photographers.length; i++) {
      if (id == data.photographers[i].id) {
        const photographer = data.photographers[i];
        const profilHeader = document.getElementById("profil");
        const imgProfil = document.createElement("div");
        imgProfil.innerHTML = `<img class = "imgProfil" src = "/assets/photographers/${photographer.portrait}">`;
        const profil = document.createElement("div");
        profil.id = "nom_profil";
        profil.innerHTML = `
        <h1>${photographer.name}</h1> </br> 
        <h2>${photographer.city}  ${photographer.country}</h2> </br>
        <p>${photographer.tagline}</p>
        `;

        profilHeader.after(profil);
        profilHeader.appendChild(imgProfil);
      }
    }

    for (let i = 0; i < data.media.length; i++) {
      if (id == data.media[i].photographerId) {
        const media = data.media[i];
        // console.log(media);
        lightbox.listMedias.push(media);
        const likeMedia = media.likes;
        likeArray.push(likeMedia);
        // console.log(likeArray);
      }
    }

    const sommeMediaLike = likeArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );

    const all_media_like = document.getElementById("tout_les_likes");
    all_media_like.innerHTML = sommeMediaLike;

    for (let i = 0; i < lightbox.listMedias.length; i++) {
      const media = lightbox.listMedias[i];
      if (media.image) {
        let type = "image";
        const mediaContent = document.getElementById("photographeMedia");
        const mediaModel = new mediaFactory(media, type);
        const mediaCardDom = mediaModel.getImageCardDOM();
        mediaContent.appendChild(mediaCardDom);
        mediaCardDom.firstChild.addEventListener("click", function (e) {
          e.preventDefault();
          lightbox.play(i);
          lightbox.displayMedia();
        });
      } else {
        let type = "video";
        const mediaContent = document.getElementById("photographeMedia");
        const videoModel = new mediaFactory(media, type);
        const videoCardDom = videoModel.getVideoCardDOM();
        mediaContent.appendChild(videoCardDom);
        videoCardDom.firstChild.addEventListener("click", function (e) {
          e.preventDefault();
          lightbox.play(i);
          lightbox.displayMedia();
        });
      }
    }
  });
