//Mettre le code JavaScript lié à la page photographer.html
let urlPhotographer = window.location.search
let searchParams = new URLSearchParams(urlPhotographer)
let id = searchParams.get('id')
let url_Photographer = 'data/photographers.json'

fetch(url_Photographer)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data.photographers)
  })
//verification des champs du formulaire avec les regex
const nameRegex = /^[a-zA-Z][a-zéèç]/
const emailRegex = /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z]+[.]{1}[a-z]{2,6}$/
