//Mettre le code JavaScript lié à la page photographer.html
let urlPhotographer = window.location.search;
let searchParams = new URLSearchParams(urlPhotographer);
let id = searchParams.get("id");
let url_Photographer = "data/photographers.json";
let lightbox = new Lightbox();
let likeArray = [];
let pricePhotographe = 0;

//function global qui affiche les médias
function displayMedia() {
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
}

fetch(url_Photographer)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //récupération des données de chaque photographe
    for (i = 0; i < data.photographers.length; i++) {
      if (id == data.photographers[i].id) {
        const photographer = data.photographers[i];
        const profilHeader = document.getElementById("profil");
        const imgProfil = document.createElement("div");
        imgProfil.innerHTML = `<img class = "imgProfil" src = "assets/photographers/${photographer.portrait}" alt="photo du photographe">`;
        const profil = document.createElement("div");
        profil.id = "nom_profil";
        profil.innerHTML = `
        <h1>${photographer.name}</h1> </br> 
        <h2>${photographer.city}  ${photographer.country}</h2> </br>
        <p>${photographer.tagline}</p>
        `;
        pricePhotographe = photographer.price;
        profilHeader.after(profil);
        profilHeader.appendChild(imgProfil);
      }
    }

    // récupération de chaque media du photographe et push dans le tableau listmedia
    for (let i = 0; i < data.media.length; i++) {
      if (id == data.media[i].photographerId) {
        const media = data.media[i];
        lightbox.listMedias.push(media);
        const likeMedia = media.likes;
        likeArray.push(likeMedia);
      }
    }

    //trie des medias
    const trier = document.querySelector("select");
    trier.addEventListener("change", function (e) {
      e.preventDefault();
      //suppression des élèments enfants avant de les trier pour les afficher
      const mediaContent = document.getElementById("photographeMedia");
      while (mediaContent.hasChildNodes()) {
        mediaContent.removeChild(mediaContent.firstChild);
      }
      const trie = trier.options;
      if (trie.selectedIndex == 0) {
        lightbox.listMedias.sort((a, b) => {
          return b.likes - a.likes;
        });
      } else if (trie.selectedIndex == 1) {
        lightbox.listMedias.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      } else if (trie.selectedIndex == 2) {
        lightbox.listMedias.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      }
      //fonction pour afficher les media triés
      displayMedia();
    });

    //utilisation de la méthode reduce pour additionner la somme des likes
    const sommeMediaLike = likeArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    const all_media_like = document.getElementById("tout_les_likes");
    const price_photographe = document.getElementById("pricePhotographe");
    all_media_like.innerHTML = sommeMediaLike;
    price_photographe.innerHTML = pricePhotographe + "€/jour";
    // boucle permettant d'afficher les différents medias dans le dom ensuite dans la lightbox
    displayMedia();
  });
