document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".gallery-filters button");
  const items = document.querySelectorAll(".gallery-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      items.forEach((item) => {
        const category = item.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
