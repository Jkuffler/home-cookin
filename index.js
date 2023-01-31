const showButton = document.getElementById("about-btn")
const closeBtn = document.getElementById("close-btn")
const about = document.getElementById("about")

showButton.addEventListener('click', () => {
  about.showModal();
})

closeBtn.addEventListener('close', () => {
  about.closeModal();
} )