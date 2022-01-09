function photographerFactory(data) {
  const { name, portrait, tagline, price, country, city, id } = data

  const picture = `assets/photographers/${portrait}`

  function getUserCardDOM() {
    const article = document.createElement('article')
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    const h2 = document.createElement('h2')
    h2.textContent = name + '\n' + city + ' ' + country
    const divText = document.createElement('div')
    const text = document.createElement('p')
    text.textContent = tagline + '\n ' + price + '€/jour'
    const lien = document.createElement('a')
    lien.appendChild(img)
    lien.setAttribute('href', `photographer.html?id=${id}`)
    divText.appendChild(text)
    article.appendChild(lien)
    article.appendChild(h2)
    article.appendChild(divText)
    return article
  }
  return { name, picture, getUserCardDOM }
}
