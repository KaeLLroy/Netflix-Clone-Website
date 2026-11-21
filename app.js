/* ------------------------------------------------------------------
   Netflix clone — data, rendering and interaction
   Artwork & metadata: TMDB (image.tmdb.org)
   ------------------------------------------------------------------ */

const IMG = "https://image.tmdb.org/t/p";
const posterUrl = (path) => `${IMG}/w342/${path}`;
const backdropUrl = (path, size = "w1280") => `${IMG}/${size}/${path}`;

const CATALOG = [
  {
    id: 27205,
    title: "Inception",
    year: "2010",
    runtime: "2h 28m",
    genres: ["Sci-Fi", "Thriller"],
    poster: "xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    backdrop: "8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    synopsis: "A thief who steals secrets from dreams is offered one last job: plant an idea in a mind that will never see it coming.",
  },
  {
    id: 155,
    title: "The Dark Knight",
    year: "2008",
    runtime: "2h 32m",
    genres: ["Action", "Crime"],
    poster: "qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "cfT29Im5VDvjE0RpyKOSdCKZal7.jpg",
    synopsis: "Gotham's protector faces a criminal with no rules, no motive, and no fear of the chaos he leaves behind.",
  },
  {
    id: 157336,
    title: "Interstellar",
    year: "2014",
    runtime: "2h 49m",
    genres: ["Sci-Fi", "Drama"],
    poster: "yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    backdrop: "8sNiAPPYU14PUepFNeSNGUTiHW.jpg",
    synopsis: "With Earth dying, a former pilot leads a mission through a wormhole in search of a home for what's left of humanity.",
  },
  {
    id: 603,
    title: "The Matrix",
    year: "1999",
    runtime: "2h 16m",
    genres: ["Sci-Fi", "Action"],
    poster: "dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    backdrop: "tlm8UkiQsitc8rSuIAscQDCnP8d.jpg",
    synopsis: "A hacker learns the world is a simulation, and that knowing the truth is only the first step toward breaking it.",
  },
  {
    id: 238,
    title: "The Godfather",
    year: "1972",
    runtime: "2h 55m",
    genres: ["Crime", "Drama"],
    poster: "3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop: "tSPT36ZKlP2WVHJLM4cQPLSzv3b.jpg",
    synopsis: "The aging patriarch of a crime dynasty hands control to his reluctant youngest son, who proves more capable than anyone expected.",
  },
  {
    id: 680,
    title: "Pulp Fiction",
    year: "1994",
    runtime: "2h 34m",
    genres: ["Crime", "Drama"],
    poster: "vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
    backdrop: "suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    synopsis: "Hitmen, a boxer and a gangster's wife cross paths in a crime story told wildly out of order.",
  },
  {
    id: 13,
    title: "Forrest Gump",
    year: "1994",
    runtime: "2h 22m",
    genres: ["Drama", "Romance"],
    poster: "saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    backdrop: "66Kn4XWhkuPkJxOJyPEx4U2CUfN.jpg",
    synopsis: "A kind man with a simple outlook drifts through the defining moments of the 20th century without ever meaning to.",
  },
  {
    id: 278,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "2h 22m",
    genres: ["Drama"],
    poster: "9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    backdrop: "pNjh59JSxChQktamG3LMp9ZoQzp.jpg",
    synopsis: "A banker sentenced to life forms an unlikely friendship in prison and quietly plans for a day that may never come.",
  },
  {
    id: 76341,
    title: "Mad Max: Fury Road",
    year: "2015",
    runtime: "2h 0m",
    genres: ["Action", "Adventure"],
    poster: "ulcAi4dKpAjHwYGS08vNyx9H6I9.jpg",
    backdrop: "gqrnQA6Xppdl8vIb2eJc58VC1tW.jpg",
    synopsis: "A drifter and a runaway commander flee a warlord's army across a desert that offers nowhere to hide.",
  },
  {
    id: 872585,
    title: "Oppenheimer",
    year: "2023",
    runtime: "3h 0m",
    genres: ["Drama", "History"],
    poster: "8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "neeNHeXjMF5fXoCJRsOmkNGC7q.jpg",
    synopsis: "The physicist who built the bomb, and the long reckoning that followed the brightest flash in history.",
  },
  {
    id: 438631,
    title: "Dune",
    year: "2021",
    runtime: "2h 35m",
    genres: ["Sci-Fi", "Adventure"],
    poster: "v1tRXZ4JtD2Iv6fjkPvT4GiwslV.jpg",
    backdrop: "qVgZu5BTx6pu4owCvVOm4zjTfOi.jpg",
    synopsis: "A young heir is thrust into a war for the most valuable resource in the universe — and the prophecy waiting inside it.",
  },
  {
    id: 299534,
    title: "Avengers: Endgame",
    year: "2019",
    runtime: "3h 1m",
    genres: ["Action", "Adventure"],
    poster: "jtDv3lCnST0fZRvdYFwR5CVwK2x.jpg",
    backdrop: "7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    synopsis: "After half of all life disappears, the survivors make one last, impossible attempt to bring it back.",
  },
  {
    id: 496243,
    title: "Parasite",
    year: "2019",
    runtime: "2h 12m",
    genres: ["Thriller", "Drama"],
    poster: "7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop: "TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    synopsis: "A poor family talks its way into the home of a wealthy one, and the arrangement curdles into something no one can control.",
  },
  {
    id: 120,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: "2001",
    runtime: "2h 58m",
    genres: ["Fantasy", "Adventure"],
    poster: "6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    backdrop: "oiwc338EoBgS4sEI2ixAny4KQKg.jpg",
    synopsis: "A young hobbit inherits a ring of terrible power and sets out to destroy it before it finds its way home.",
  },
  {
    id: 550,
    title: "Fight Club",
    year: "1999",
    runtime: "2h 19m",
    genres: ["Drama", "Thriller"],
    poster: "jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
    backdrop: "c6OLXfKAk5BKeR6broC8pYiCquX.jpg",
    synopsis: "An insomniac and a salesman start a club that becomes a movement, then something far harder to stop.",
  },
  {
    id: 693134,
    title: "Dune: Part Two",
    year: "2024",
    runtime: "2h 46m",
    genres: ["Sci-Fi", "Adventure"],
    poster: "6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
    backdrop: "eZ239CUp1d6OryZEBPnO2n87gMG.jpg",
    synopsis: "Paul Atreides joins the Fremen and chooses between the woman he loves and the war that will define his name.",
  },
  {
    id: 569094,
    title: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    runtime: "2h 20m",
    genres: ["Animation", "Action"],
    poster: "8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop: "kVd3a9YeLGkoeR50jGEXM6EqseS.jpg",
    synopsis: "Miles Morales is thrown across the multiverse and forced to choose between his story and everyone else's.",
  },
  {
    id: 634649,
    title: "Spider-Man: No Way Home",
    year: "2021",
    runtime: "2h 28m",
    genres: ["Action", "Adventure"],
    poster: "1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    backdrop: "iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    synopsis: "A spell meant to fix Peter's secret identity tears the multiverse open and brings old enemies looking for him.",
  },
  {
    id: 361743,
    title: "Top Gun: Maverick",
    year: "2022",
    runtime: "2h 11m",
    genres: ["Action", "Drama"],
    poster: "n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg",
    backdrop: "AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
    synopsis: "Thirty years on, Maverick returns to train a squad of graduates for a mission that may not have a way home.",
  },
];

const ROWS = [
  { title: "Trending now", ids: [693134, 872585, 634649, 361743, 155, 603, 27205, 569094, 496243] },
  { title: "New releases", ids: [693134, 872585, 361743, 569094, 634649, 438631, 299534] },
  { title: "Critically acclaimed", ids: [278, 238, 680, 13, 76341, 120, 550, 157336] },
];

const FEATURED = 157336;
const myList = new Set();

/* ------------------------------------------------------------------ */

const $ = (sel, root = document) => root.querySelector(sel);

const esc = (value) =>
  String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));

const byId = (id) => CATALOG.find((item) => item.id === Number(id));

const playIcon = `<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>`;
const chevron = (dir) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${dir === "left" ? "m15 18-6-6 6-6" : "m9 6 6 6-6 6"}" /></svg>`;

function metaHTML(item) {
  return [item.year, item.runtime, ...item.genres]
    .map((part) => `<span>${esc(part)}</span>`)
    .join("");
}

function cardHTML(item) {
  return `<button type="button" class="card" data-id="${item.id}" aria-label="${esc(item.title)}, ${item.year}">
      <span class="card__poster">
        <img src="${posterUrl(item.poster)}" alt="" loading="lazy" decoding="async" />
      </span>
      <span class="card__title">${esc(item.title)}</span>
    </button>`;
}

function hydrateImages(root) {
  root.querySelectorAll("img").forEach((img) => {
    const reveal = () => img.classList.add("is-loaded");
    if (img.complete && img.naturalWidth > 0) reveal();
    else {
      img.addEventListener("load", reveal, { once: true });
      img.addEventListener("error", reveal, { once: true });
    }
  });
}

/* ---------------------------------------------------------------- hero */

function renderHero() {
  const item = byId(FEATURED);
  const hero = $("#hero");

  hero.innerHTML = `
    <div class="hero__art">
      <img src="${backdropUrl(item.backdrop, "w1920")}" alt="" fetchpriority="high" decoding="async" />
    </div>
    <div class="hero__content">
      <p class="hero__eyebrow">Featured</p>
      <h1 class="hero__title" id="heroTitle">${esc(item.title)}</h1>
      <p class="hero__meta">${metaHTML(item)}</p>
      <p class="hero__overview">${esc(item.synopsis)}</p>
      <div class="hero__actions">
        <button type="button" class="btn btn--primary" data-play="${item.id}">${playIcon}Play</button>
        <button type="button" class="btn btn--ghost" data-open="${item.id}">More info</button>
      </div>
    </div>`;

  hydrateImages(hero);
}

/* --------------------------------------------------------------- rows */

function rowHTML(row) {
  const items = row.ids.map(byId).filter(Boolean);

  return `<section class="row">
      <div class="row__head">
        <h2 class="row__title">${esc(row.title)}</h2>
      </div>
      <div class="row__wrap">
        <button type="button" class="row__nav row__nav--prev" aria-label="Scroll ${esc(row.title)} left" tabindex="-1">${chevron("left")}</button>
        <div class="row__track" tabindex="0" aria-label="${esc(row.title)}">${items
          .map(cardHTML)
          .join("")}</div>
        <button type="button" class="row__nav row__nav--next" aria-label="Scroll ${esc(row.title)} right" tabindex="-1">${chevron("right")}</button>
      </div>
    </section>`;
}

function syncArrows(wrap) {
  const track = $(".row__track", wrap);
  const prev = $(".row__nav--prev", wrap);
  const next = $(".row__nav--next", wrap);
  const max = track.scrollWidth - track.clientWidth - 1;

  prev.disabled = track.scrollLeft <= 1;
  next.disabled = track.scrollLeft >= max;
}

function renderRows() {
  const browse = $("#browse");
  browse.innerHTML = ROWS.map(rowHTML).join("");

  browse.querySelectorAll(".row__wrap").forEach((wrap) => {
    const track = $(".row__track", wrap);
    syncArrows(wrap);
    track.addEventListener("scroll", () => syncArrows(wrap), { passive: true });

    $(".row__nav--prev", wrap).addEventListener("click", () => {
      track.scrollBy({ left: -track.clientWidth * 0.82, behavior: "smooth" });
    });
    $(".row__nav--next", wrap).addEventListener("click", () => {
      track.scrollBy({ left: track.clientWidth * 0.82, behavior: "smooth" });
    });
  });

  hydrateImages(browse);
}

window.addEventListener("resize", () => {
  document.querySelectorAll(".row__wrap").forEach(syncArrows);
});

/* -------------------------------------------------------------- modal */

const modal = $("#modal");
const modalImage = $("#modalImage");
const modalTitle = $("#modalTitle");
const modalMeta = $("#modalMeta");
const modalOverview = $("#modalOverview");
const modalAdd = $("#modalAdd");
const modalAddText = $("#modalAddText");
const modalPlay = $("#modalPlay");

let currentId = null;
let lastFocused = null;

function openModal(id) {
  const item = byId(id);
  if (!item) return;

  currentId = item.id;
  lastFocused = document.activeElement;

  modalImage.src = backdropUrl(item.backdrop, "w780");
  modalImage.alt = "";
  modalTitle.textContent = item.title;
  modalMeta.innerHTML = metaHTML(item);
  modalOverview.textContent = item.synopsis;
  modalImage.classList.remove("is-loaded");

  const added = myList.has(item.id);
  modalAdd.setAttribute("aria-pressed", String(added));
  modalAddText.textContent = added ? "In your list" : "Add to list";

  document.body.classList.add("modal-open");
  modal.showModal();
  modal.querySelector(".modal__panel").scrollTop = 0;
  modalImage.addEventListener("load", () => modalImage.classList.add("is-loaded"), { once: true });
  if (modalImage.complete) modalImage.classList.add("is-loaded");

  $("#modalClose").focus();
}

function closeModal() {
  modal.close();
}

modal.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  currentId = null;
  if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

$("#modalClose").addEventListener("click", closeModal);

modalPlay.addEventListener("click", () => {
  toast("Playback isn't wired up in this demo.");
});

modalAdd.addEventListener("click", () => {
  if (currentId == null) return;
  const item = byId(currentId);
  const added = myList.has(item.id);

  if (added) myList.delete(item.id);
  else myList.add(item.id);

  modalAdd.setAttribute("aria-pressed", String(!added));
  modalAddText.textContent = added ? "Add to list" : "In your list";
  toast(added ? `Removed ${item.title}` : `Added ${item.title} to your list`);
});

/* ------------------------------------------------------------- search */

const searchInput = $("#searchInput");
const searchClear = $("#searchClear");
const results = $("#results");
const resultsGrid = $("#resultsGrid");
const resultsEmpty = $("#resultsEmpty");
const resultsTitle = $("#resultsTitle");
const resultsCount = $("#resultsCount");

function search(query) {
  const q = query.toLowerCase();
  return CATALOG.filter((item) =>
    [item.title, item.year, ...item.genres].join(" ").toLowerCase().includes(q)
  );
}

function renderResults(query) {
  const matches = search(query);

  resultsTitle.textContent = `Results for “${query}”`;
  resultsCount.textContent = `${matches.length} ${matches.length === 1 ? "title" : "titles"}`;
  resultsGrid.innerHTML = matches.map(cardHTML).join("");
  resultsEmpty.hidden = matches.length > 0;

  if (!matches.length) {
    resultsEmpty.innerHTML = `No titles match <strong>${esc(query)}</strong>. Try a genre like “Sci-Fi” or “Crime”.`;
  }

  hydrateImages(resultsGrid);
}

function enterSearch(query) {
  document.body.classList.add("is-searching");
  results.hidden = false;
  renderResults(query);
}

function exitSearch() {
  document.body.classList.remove("is-searching");
  results.hidden = true;
  resultsGrid.innerHTML = "";
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  searchClear.hidden = query.length === 0;

  if (!query) exitSearch();
  else enterSearch(query);
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  searchClear.hidden = true;
  exitSearch();
  searchInput.focus();
});

$("#searchForm").addEventListener("submit", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && searchInput === document.activeElement && searchInput.value) {
    searchInput.value = "";
    searchClear.hidden = true;
    exitSearch();
  }
});

/* -------------------------------------------------------------- toast */

let toastTimer;

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2400);
}

/* ------------------------------------------------------------- global */

document.addEventListener("click", (event) => {
  const play = event.target.closest("[data-play]");
  if (play) {
    toast("Playback isn't wired up in this demo.");
    return;
  }

  const open = event.target.closest("[data-open]");
  if (open) {
    openModal(open.dataset.open);
    return;
  }

  const card = event.target.closest(".card[data-id]");
  if (card) openModal(card.dataset.id);
});

const nav = $("#nav");

function onScroll() {
  nav.classList.toggle("is-solid", window.scrollY > 24);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  searchInput.value = "";
  searchClear.hidden = true;
  exitSearch();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* -------------------------------------------------------------- start */

renderHero();
renderRows();
