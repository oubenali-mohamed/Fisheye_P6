async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  fetch('data/photographers.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data.photographers)
      const photographersSection = document.querySelector(
        '.photographer_section',
      )
      const photographers = data.photographers
      return photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer)
        const userCardDOM = photographerModel.getUserCardDOM()
        photographersSection.appendChild(userCardDOM)
      })
    })

  // et bien retourner le tableau photographers seulement une fois
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()
