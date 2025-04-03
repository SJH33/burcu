function setupFilters() {
  const buttons = document.querySelectorAll(".gallery-filters button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Important: query art pieces at the time of filtering (not just once on load)
      const items = document.querySelectorAll(".art-piece");

      items.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.style.removeProperty("display");
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

// Make the function accessible from other scripts
window.setupFilters = setupFilters;
