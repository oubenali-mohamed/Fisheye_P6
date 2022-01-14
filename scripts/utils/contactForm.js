const displayModal = document.getElementById('displayModal')
const closeModal = document.getElementById('closeModal')

displayModal.addEventListener('click', function () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
})

closeModal.addEventListener('click', function () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
})
