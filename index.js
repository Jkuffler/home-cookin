const aboutBtn = document.getElementById("about-btn")
const about = document.getElementById("about")
const closeBtn = document.getElementById("close-btn")

aboutBtn.addEventListener('click', () => {
  about.showModal();
})

closeBtn.addEventListener('click', () => {
  about.close();
} )