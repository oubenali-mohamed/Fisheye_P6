//Mettre le code JavaScript lié à la page photographer.html
let urlPhotographer = window.location.search;
let searchParams = new URLSearchParams(urlPhotographer);
let id = searchParams.get("id");
let url_Photographer = "data/photographers.json";

fetch(url_Photographer)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.photographers);
    for (i = 0; i < data.photographers.length; i++) {
      if (id == data.photographers[i].id) {
        const photographer = data.photographers[i];
        const profilHeader = document.getElementById("profil");
        console.log(photographer);
        const imgProfil = document.createElement("div");
        imgProfil.innerHTML = `<img class = "imgProfil" src = "assets/photographers/${photographer.portrait}">`;
        const profil = document.createElement("div");
        profil.id = "nom_profil";
        profil.innerHTML = `
        <h1>${photographer.name}</h1> </br> 
        <h2>${photographer.city}  ${photographer.country}</h2> </br>
        <p>${photographer.tagline}</p>
        `;
        profilHeader.after(profil);
        profilHeader.appendChild(imgProfil);
        /* const prix_jour = document.getElementById("total_like_price");
        prix_jour.textContent = `${photographer.price}€/jour`;
        const photographeMedia = document.getElementById("photographeMedia");
        photographeMedia.appendChild(prix_jour); */
      }
    }
    for (i = 0; i < data.media.length; i++) {
      if (id == data.media[i].photographerId) {
        const media = data.media[i];
        /* const like_all_media = document.getElementById("total_like_price");
        like_all_media.innerHTML += `${media.likes}`;
        const photographeMedia = document.getElementById("photographeMedia");
        photographeMedia.appendChild(like_all_media); */

        console.log(media);
        if (media.image) {
          let type = "image";
          const mediaContent = document.getElementById("photographeMedia");
          const mediaModel = new mediaFactory(media, type);
          const mediaCardDom = mediaModel.getImageCardDOM();
          console.log(mediaCardDom);
          mediaContent.appendChild(mediaCardDom);
        } else {
          let type = "video";
          const mediaContent = document.getElementById("photographeMedia");
          const videoModel = new mediaFactory(media, type);
          const videoCardDom = videoModel.getVideoCardDOM();
          console.log(videoCardDom);
          mediaContent.appendChild(videoCardDom);
        }
      }
    }

    /* const like_media = document.getElementById("like_media");
    like_media.addEventListener("click", function (e) {
      e.preventDefault();
      let total_like = document.getElementById("total_like");
      total_like++;
    }); */
  });
