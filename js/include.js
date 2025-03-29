document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach(async el => {
    const file = el.getAttribute("data-include");
    const res = await fetch(file);
    if (res.ok) {
      el.innerHTML = await res.text();
    } else {
      el.innerHTML = `<p>Error loading ${file}</p>`;
    }
  });
});
