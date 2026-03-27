// قائمة الألعاب – عدلها براحتك
const games = [
{
title: "لعبة 2048",
category: "ألغاز",
url: "https://play2048.co/&quot;
},
{
title: "لعبة Dino (مثل كروم)",
category: "أركيد",
url: "https://chromedino.com/&quot;
},
{
title: "لعبة Tetris",
category: "كلاسيك",
url: "https://tetris.com/play-tetris&quot;
},
// أضف ألعاب أكثر هنا
];

const gamesContainer = document.getElementById("games-container");
const gameFrame = document.getElementById("game-frame");
const gameTitle = document.getElementById("game-title");

function renderGames() {
gamesContainer.innerHTML = "";

games.forEach((game, index) => {
const card = document.createElement("div");
card.className = "game-card";
card.onclick = () => loadGame(index);

const title = document.createElement("div");
title.className = "game-title";
title.textContent = game.title;

const category = document.createElement("div");
category.className = "game-category";
category.textContent = game.category;

card.appendChild(title);
card.appendChild(category);
gamesContainer.appendChild(card);
});
}

function loadGame(index) {
const game = games[index];
gameTitle.textContent = game.title;
gameFrame.src = game.url;
}

// أول تشغيل
renderGames();