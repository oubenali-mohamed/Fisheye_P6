function mediaFactory(data) {
  const { title, image, likes } = data

  const pictureMedia = `assets/images/${image}`

  function getMedia() {
    const divMedia = document.createElement('div')
    const imgMedia = document.createElement('img')
    imgMedia.classList = 'media_photographe'
    imgMedia.setAttribute('src', pictureMedia)
    const paraMedia = document.createElement('p')
    paraMedia.textContent = title
    const pLike = document.createElement('p')
    pLike.textContent = likes
    divMedia.appendChild(imgMedia)
    divMedia.appendChild(paraMedia)
    divMedia.appendChild(pLike)
    return divMedia
  }
  return { getMedia }
}
