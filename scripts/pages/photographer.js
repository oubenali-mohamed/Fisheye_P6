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
      }
    }

    for (i = 0; i < data.media.length; i++) {
      if (id == data.media[i].photographerId) {
        const media = data.media[i];
        const photographeMedia = document.getElementById("photographeMedia");
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMedia();
        console.log(mediaCardDOM);
        photographeMedia.appendChild(mediaCardDOM);
      }
    }
    /*  for (i = 0; i < data.media.length; i++) {
      if (id == data.media[i].photographerId) {
        const media = data.media[i]
        console.log(data.media[i])
        const main = document.getElementById('main')
        const media_photographe = document.createElement('div')
        media_photographe.innerHTML = `
        <img class="media_photographe" src = "assets/images/${media.image}">
        <h3>${media.title}</h3>
        <p class="likes">${media.likes}</p>`
        main.appendChild(media_photographe)
      }
    } */
  });
