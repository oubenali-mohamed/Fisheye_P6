//Mettre le code JavaScript lié à la page photographer.html
let urlPhotographer = window.location.search;
let searchParams = new URLSearchParams(urlPhotographer);
let id = searchParams.get("id");
let url_Photographer = "data/photographers.json";
let lightbox = new Lightbox();

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

    for (i = 0; i < data.media.length; i++) {
      if (id == data.media[i].photographerId) {
        const media = data.media[i];
        //console.log(media);
        lightbox.listMedias.push(media);
        lightbox.close();
        lightbox.next();
        lightbox.prev();

        if (media.image) {
          let type = "image";
          const mediaContent = document.getElementById("photographeMedia");
          let mediaModel = new mediaFactory(media, type);
          let mediaCardDom = mediaModel.getImageCardDOM();
          mediaContent.appendChild(mediaCardDom);
          mediaCardDom.addEventListener("click", function () {
            const lightbox = document.querySelector("#lightbox");
            const container_img = document.querySelector(".lightbox_container");
            const photo = document.createElement("img");
            photo.setAttribute("src", "/assets/images/" + mediaModel.image);
            if (container_img.firstChild != null) {
              container_img.removeChild(container_img.firstChild);
            }
            container_img.appendChild(photo);
            lightbox.style.display = "block";
          });
        } else {
          let type = "video";
          const mediaContent = document.getElementById("photographeMedia");
          let videoModel = new mediaFactory(media, type);

          let videoCardDom = videoModel.getVideoCardDOM();
          mediaContent.appendChild(videoCardDom);
          videoCardDom.addEventListener("click", function () {
            const lightbox = document.querySelector("#lightbox");
            const container_img = document.querySelector(".lightbox_container");
            const the_video = document.createElement("video");
            const s_video = document.createElement("source");
            s_video.setAttribute("src", "/assets/images/" + videoModel.video);
            s_video.setAttribute("type", "video/mp4");
            the_video.appendChild(s_video);
            if (container_img.firstChild != null) {
              container_img.removeChild(container_img.firstChild);
            }
            container_img.appendChild(the_video);
            the_video.play();
            lightbox.style.display = "block";
          });
        }
      }
    }
  });
