document.querySelectorAll(".toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const box = btn.nextElementSibling;
    const open = box.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "Zavřít" : (btn.classList.contains("wide") ? "Co přesně získám?" : "Rozkliknout");
  });
});

document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    panel.classList.toggle("open");
  });
});
