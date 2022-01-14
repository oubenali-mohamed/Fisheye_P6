function photographerFactory(data) {
  const { name, portrait, tagline, price, country, city, id } = data

  const picture = `assets/photographers/${portrait}`

  function getUserCardDOM() {
    const article = document.createElement('article')
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    const h2 = document.createElement('h2')
    h2.textContent = name
    const divText = document.createElement('div')
    const h3 = document.createElement('h3')
    h3.textContent = city + ' ' + country
    const text = document.createElement('p')
    text.textContent = tagline
    const prix = document.createElement('p')
    prix.textContent = price + '€/jour'
    prix.className = 'prix'
    const lien = document.createElement('a')
    lien.appendChild(img)
    lien.setAttribute('href', `photographer.html?id=${id}`)
    divText.appendChild(h3)
    divText.appendChild(text)
    divText.appendChild(prix)
    article.appendChild(lien)
    article.appendChild(h2)
    article.appendChild(divText)
    return article
  }
  return { name, picture, getUserCardDOM }
}
