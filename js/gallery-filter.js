function setupFilters() {
  const buttons = document.querySelectorAll(".gallery-filters button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // ✅ Update active class
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // ✅ Filter logic
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

// Make it available globally
window.setupFilters = setupFilters;
