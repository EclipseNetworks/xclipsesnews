const articles = [
  { title: "Money Fronts Coming June 17", date: "June 2025", tag: "Update", excerpt: "Acquire iconic local businesses and expand your empire in GTA Online’s Money Fronts update.", img: "https://picsum.photos/400/200?1" },
  { title: "Money Fronts Now Available", date: "June 2025", tag: "Update", excerpt: "Businesses are now open for takeover — GTA Online’s new update is live.", img: "https://picsum.photos/400/200?2" },
  { title: "New Community Race & Combat Series", date: "July 2025", tag: "Event", excerpt: "Player-created races and combat arenas join GTA Online’s curated playlists.", img: "https://picsum.photos/400/200?3" },
  { title: "Weekly Bonuses & Discounts", date: "September 2025", tag: "Event", excerpt: "Enjoy double rewards and special discounts across modes and businesses.", img: "https://picsum.photos/400/200?4" },
  { title: "Patch v1.12 Improvements", date: "March 2025", tag: "Patch", excerpt: "Gameplay tweaks, bug fixes, and balance adjustments now in effect.", img: "https://picsum.photos/400/200?5" }
];

let visible = 0;
const perPage = 3;

const grid = document.getElementById("grid");
const loadMoreBtn = document.getElementById("loadMore");
const search = document.getElementById("search");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const tagsContainer = document.getElementById("tags");

// Render articles with animation
function renderArticles(filter = "") {
  grid.innerHTML = "";
  let filtered = articles.filter(a => a.title.toLowerCase().includes(filter.toLowerCase()) || a.tag.toLowerCase().includes(filter.toLowerCase()));
  filtered.slice(0, visible).forEach((a, i) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${a.img}" alt="${a.title}" />
      <div class="meta">${a.date} • ${a.tag}</div>
      <div class="title">${a.title}</div>
      <div class="excerpt">${a.excerpt}</div>
    `;
    card.onclick = () => openModal(a);
    grid.appendChild(card);
    // Animate each card with delay
    setTimeout(() => card.classList.add("show"), i * 100);
  });
  loadMoreBtn.style.display = visible < filtered.length ? "block" : "none";
}

// Modal
function openModal(article) {
  modalTitle.textContent = article.title;
  modalBody.textContent = article.excerpt + " (Click through for full details on Rockstar’s site.)";
  modal.classList.add("show");
}
closeModal.onclick = () => modal.classList.remove("show");
window.onclick = e => { if (e.target === modal) modal.classList.remove("show"); };

// Search
search.addEventListener("input", () => renderArticles(search.value));

// Tags
const tags = [...new Set(articles.map(a => a.tag))];
tags.forEach(tag => {
  let btn = document.createElement("button");
  btn.textContent = tag;
  btn.onclick = () => {
    renderArticles(tag);
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  };
  tagsContainer.appendChild(btn);
});

// Load more
loadMoreBtn.onclick = () => { visible += perPage; renderArticles(search.value); };

// Init
visible = perPage;
renderArticles();
