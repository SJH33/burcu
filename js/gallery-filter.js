
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".gallery-filters button");
  const items = document.querySelectorAll(".art-piece");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      

      items.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.style.removeProperty("display");
        } else {
          item.style.display = "none";
        }

      });

      // Optional: highlight selected button
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});
