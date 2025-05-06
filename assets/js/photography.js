document.addEventListener("DOMContentLoaded", () => {
const galleryData = {
  all: Array.from({ length: 15 }, (_, i) => `assets/images/all${i + 1}.png`),
  bridal: Array.from({ length: 15 }, (_, i) => `/assets/images/bridal${i + 1}.png`),
  couple: Array.from({ length: 15 }, (_, i) => `/assets/images/couple${i + 1}.png`),
  groom: Array.from({ length: 15 }, (_, i) => `assets/images/groom${i + 1}.png`),
  candid: Array.from({ length: 15 }, (_, i) => `assets/images/candid${i + 1}.png`)
};

const gallery = document.getElementById("gallery");

function renderGallery(images) {
  gallery.innerHTML = images.map((src, index) => {
    return `<img src="${src}" class="img${index + 1}" alt="photo">`;
  }).join("");
}

renderGallery(galleryData.all);

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const category = tab.dataset.category;
    renderGallery(galleryData[category]);
  });
});
});