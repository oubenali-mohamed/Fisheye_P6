function photographerFactory(data) {
  const { name, portrait, tagline, price, country, city } = data

  const picture = `assets/photographers/${portrait}`

  function getUserCardDOM() {
    const article = document.createElement('article')
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    const h2 = document.createElement('h2')
    h2.textContent = name
    const lien = document.createElement('a')
    const divText = document.createElement('div')
    const ville = document.createElement('p')
    ville.textContent = city + ' ' + country
    const text = document.createElement('p')
    text.textContent = tagline
    const prix = document.createElement('p')
    prix.textContent = price
    divText.appendChild(ville)
    divText.appendChild(text)
    divText.appendChild(prix)
    article.appendChild(img)
    article.appendChild(h2)
    article.appendChild(divText)
    return article
  }
  return { name, picture, getUserCardDOM }
}
