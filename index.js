// ABOUT dialog
const aboutBtn = document.getElementById("about-btn");
const aboutDialog = document.getElementById("about");

// CCC dialog
const cccBtn = document.getElementById("ccc-btn");
const cccDialog = document.getElementById("ccc");

// Open dialogs
aboutBtn.addEventListener("click", () => aboutDialog.showModal());
cccBtn.addEventListener("click", () => cccDialog.showModal());

// Close dialogs (shared behavior)
document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest("dialog").close();
  });
});
