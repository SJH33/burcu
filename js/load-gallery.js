async function fetchGalleryItems() {
  const galleryGrid = document.querySelector(".gallery-grid");

  const files = [
    "portrait-placeholder.md",
    "flower-placeholder.md",
    "scenery-placeholder.md",
    "animal-placeholder.md"
  ];

  for (const file of files) {
    const response = await fetch(`/gallery/${file}`);
    const text = await response.text();
    const frontmatter = parseFrontMatter(text);

    const artDiv = document.createElement("div");
    artDiv.classList.add("art-piece");
    artDiv.dataset.category = frontmatter.category;

    const img = document.createElement("img");
    img.src = frontmatter.image;
    img.alt = frontmatter.alt || frontmatter.title;

    artDiv.appendChild(img);
    galleryGrid.appendChild(artDiv);
  }
}

// Very simple YAML frontmatter parser
function parseFrontMatter(mdContent) {
  const lines = mdContent.split("\n");
  const frontmatter = {};
  let inFrontMatter = false;

  for (let line of lines) {
    if (line.trim() === "---") {
      inFrontMatter = !inFrontMatter;
      continue;
    }
    if (inFrontMatter && line.includes(":")) {
      const [key, ...rest] = line.split(":");
      frontmatter[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
    }
  }

  return frontmatter;
}

fetchGalleryItems();
