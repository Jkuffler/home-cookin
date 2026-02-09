// OPEN any dialog
document.querySelectorAll("[data-dialog]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const dialogId = btn.dataset.dialog;
    document.getElementById(dialogId).showModal();
  });
});

// CLOSE any dialog
document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest("dialog").close();
  });
});

// Optional: click backdrop to close
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
});
