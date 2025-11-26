// ============================================
// Application State
// ============================================
const gameState = {
  players: [],
  difficulty: "MEDIUM",
  winningScore: 20,
  currentCardIndex: 0,
  cards: [],
  isGameActive: false,
  isDescriptionBlurred: true,
  quickMode: true,
  isCardBlurred: false,
  quickModeTimer: null,
};

// ============================================
// DOM Elements
// ============================================
const elements = {
  // Setup screen
  setupScreen: document.getElementById("setup-screen"),
  gameScreen: document.getElementById("game-screen"),
  playerNameInput: document.getElementById("player-name-input"),
  addPlayerBtn: document.getElementById("add-player-btn"),
  playersList: document.getElementById("players-list"),
  difficultyBtns: document.querySelectorAll(".difficulty-btn"),
  winningScoreInput: document.getElementById("winning-score-input"),
  startGameBtn: document.getElementById("start-game-btn"),

  // Game screen
  difficultyDisplay: document.getElementById("difficulty-display"),
  cardText: document.getElementById("card-text"),
  cardDescription: document.getElementById("card-description"),
  unblurBtn: document.getElementById("unblur-btn"),
  revealCardBtn: document.getElementById("reveal-card-btn"),
  timerDisplay: document.getElementById("timer-display"),
  searchMessage: document.getElementById("search-message"),
  nextCardBtn: document.getElementById("next-card-btn"),
  playersScoreList: document.getElementById("players-score-list"),
  quitGameBtn: document.getElementById("quit-game-btn"),
};

// ============================================
// Utility Functions
// ============================================

// Shuffle array (Fisher-Yates)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Generate unique ID
function generateId() {
  return Date.now() + Math.random().toString(36).substr(2, 9);
}

// ============================================
// Player Management
// ============================================

function addPlayer(name) {
  if (!name.trim()) {
    alert("Please enter a valid name");
    return;
  }

  if (gameState.players.length >= 5) {
    alert("Maximum 5 players allowed");
    return;
  }

  const player = {
    id: generateId(),
    name: name.trim(),
    score: 0,
  };

  gameState.players.push(player);
  updatePlayersDisplay();
  updateStartButtonState();
  elements.playerNameInput.value = "";
  elements.playerNameInput.focus();
}

function removePlayer(playerId) {
  gameState.players = gameState.players.filter((p) => p.id !== playerId);
  updatePlayersDisplay();
  updateStartButtonState();
}

function updatePlayersDisplay() {
  elements.playersList.innerHTML = "";

  if (gameState.players.length === 0) {
    elements.playersList.innerHTML =
      '<p class="info-text">No players added</p>';
    return;
  }

  gameState.players.forEach((player) => {
    const playerItem = document.createElement("div");
    playerItem.className = "player-item";
    playerItem.innerHTML = `
      <span>${player.name}</span>
      <button class="remove-player-btn" onclick="removePlayer('${player.id}')">Remove</button>
    `;
    elements.playersList.appendChild(playerItem);
  });

  // Disable add button if 5 players
  elements.addPlayerBtn.disabled = gameState.players.length >= 5;
}

function updateStartButtonState() {
  elements.startGameBtn.disabled = gameState.players.length === 0;
}

// ============================================
// Difficulty Management
// ============================================

function selectDifficulty(difficulty) {
  gameState.difficulty = difficulty;

  // Update UI
  elements.difficultyBtns.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.difficulty === difficulty) {
      btn.classList.add("active");
    }
  });
}

// ============================================
// Game Management
// ============================================

function startGame() {
  if (gameState.players.length === 0) {
    alert("Please add at least one player");
    return;
  }

  // Get chosen winning score
  const winningScore = parseInt(elements.winningScoreInput.value);
  if (isNaN(winningScore) || winningScore < 5 || winningScore > 100) {
    alert("Please choose a winning score between 5 and 100");
    return;
  }
  gameState.winningScore = winningScore;

  // Initialize scores
  gameState.players.forEach((player) => (player.score = 0));

  // Prepare cards based on difficulty
  gameState.cards = shuffleArray(gameData[gameState.difficulty]);
  gameState.currentCardIndex = 0;
  gameState.isGameActive = true;

  // Switch screen
  elements.setupScreen.classList.remove("active");
  elements.gameScreen.classList.add("active");

  // Display information
  updateGameDisplay();
  displayCurrentCard();
}

function updateGameDisplay() {
  // Display difficulty
  elements.difficultyDisplay.textContent = gameState.difficulty;
  elements.difficultyDisplay.className = `difficulty-badge ${gameState.difficulty}`;

  // Display players with their scores
  updatePlayersScoreDisplay();
}

function updatePlayersScoreDisplay() {
  elements.playersScoreList.innerHTML = "";

  gameState.players.forEach((player) => {
    const playerItem = document.createElement("div");
    playerItem.className = "player-score-item";
    playerItem.innerHTML = `
      <div class="player-info">
        <span class="player-name">${player.name}</span>
        <span class="player-score">${player.score} pts</span>
      </div>
      <div class="player-actions">
        <button class="remove-point-btn" onclick="removePoint('${player.id}')">-1</button>
        <button class="add-point-btn" onclick="addPoint('${player.id}')">+1</button>
      </div>
    `;
    elements.playersScoreList.appendChild(playerItem);
  });
}

function displayCurrentCard() {
  // If all cards have been used, reshuffle the deck
  if (gameState.currentCardIndex >= gameState.cards.length) {
    gameState.cards = shuffleArray(gameData[gameState.difficulty]);
    gameState.currentCardIndex = 0;
  }

  const currentCard = gameState.cards[gameState.currentCardIndex];

  // Reset blur state for each new card
  gameState.isDescriptionBlurred = gameState.difficulty !== "EASY";
  gameState.isCardBlurred = false;

  // Stop previous timer if it exists
  if (gameState.quickModeTimer) {
    clearInterval(gameState.quickModeTimer);
    gameState.quickModeTimer = null;
  }

  // Unblur the card
  elements.cardText.classList.remove("blurred");
  elements.revealCardBtn.style.display = "none";

  // Check if it's an image (ends with .png) or a word
  if (currentCard.endsWith(".png")) {
    // Display card image
    elements.cardText.innerHTML = `<img src="assets/images/${currentCard}" alt="Card" style="max-width: 100%; max-height: 100%; object-fit: contain;" />`;
  } else {
    // Display word
    elements.cardText.textContent = currentCard;
  }

  // Display description
  displayDescription(currentCard);

  // Start timer in QUICK mode
  if (gameState.quickMode) {
    startQuickModeTimer();
  } else {
    elements.timerDisplay.style.display = "none";
  }
}

function displayDescription(card) {
  const description = descriptions[card] || "No description available";

  // Show or hide unblur button based on difficulty
  if (gameState.difficulty === "EASY") {
    elements.cardDescription.textContent = description;
    elements.cardDescription.classList.remove("blurred");
    elements.unblurBtn.style.display = "none";
  } else if (gameState.quickMode) {
    // In QUICK mode, display unblurred description at the start
    elements.cardDescription.textContent = description;
    elements.cardDescription.classList.remove("blurred");
    elements.unblurBtn.style.display = "none";
  } else {
    elements.cardDescription.textContent = description;
    if (gameState.isDescriptionBlurred) {
      elements.cardDescription.classList.add("blurred");
      elements.unblurBtn.style.display = "block";
    } else {
      elements.cardDescription.classList.remove("blurred");
      elements.unblurBtn.style.display = "none";
    }
  }
}

function unblurDescription() {
  gameState.isDescriptionBlurred = false;
  displayDescription(gameState.cards[gameState.currentCardIndex]);
}

function startQuickModeTimer() {
  let timeLeft = 3;
  elements.timerDisplay.textContent = timeLeft;
  elements.timerDisplay.style.display = "block";

  gameState.quickModeTimer = setInterval(() => {
    timeLeft--;
    elements.timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(gameState.quickModeTimer);
      gameState.quickModeTimer = null;
      blurCard();
    }
  }, 1000);
}

function blurCard() {
  gameState.isCardBlurred = true;
  elements.cardText.classList.add("blurred");
  elements.timerDisplay.style.display = "none";
  elements.revealCardBtn.style.display = "block";

  // Also blur description in QUICK mode
  if (gameState.quickMode) {
    elements.cardDescription.classList.add("blurred");
    elements.unblurBtn.style.display = "block";

    // Display "SEARCH!" message with animation
    elements.searchMessage.style.display = "block";
    elements.searchMessage.classList.add("zoom-in");

    // Hide message after 2 seconds
    setTimeout(() => {
      elements.searchMessage.classList.remove("zoom-in");
      elements.searchMessage.classList.add("fade-out");

      setTimeout(() => {
        elements.searchMessage.style.display = "none";
        elements.searchMessage.classList.remove("fade-out");
      }, 500);
    }, 2000);
  }
}

function revealCard() {
  gameState.isCardBlurred = false;
  elements.cardText.classList.remove("blurred");
  elements.revealCardBtn.style.display = "none";

  // Do NOT unblur the description, only the card
  // The description remains blurred and can be revealed with its own button
}
function nextCard() {
  gameState.currentCardIndex++;
  displayCurrentCard();
}

function addPoint(playerId) {
  const player = gameState.players.find((p) => p.id === playerId);
  if (player) {
    player.score++;
    updatePlayersScoreDisplay();

    // Check if player has reached winning score
    if (player.score >= gameState.winningScore) {
      endGame(player);
    }
  }
}

function removePoint(playerId) {
  const player = gameState.players.find((p) => p.id === playerId);
  if (player && player.score > 0) {
    player.score--;
    updatePlayersScoreDisplay();
  }
}

function endGame(winner = null) {
  // If no winner specified, find the one with most points
  if (!winner) {
    winner = gameState.players.reduce((prev, current) =>
      current.score > prev.score ? current : prev
    );
  }

  const message =
    `🎉 Game over!\n\n🏆 Winner: ${winner.name} with ${winner.score} points!\n\nFinal scores:\n` +
    gameState.players
      .sort((a, b) => b.score - a.score)
      .map((p, i) => `${i + 1}. ${p.name}: ${p.score} points`)
      .join("\n");

  alert(message);
  quitGame();
}

function quitGame() {
  gameState.isGameActive = false;
  gameState.currentCardIndex = 0;
  gameState.cards = [];

  // Return to setup screen
  elements.gameScreen.classList.remove("active");
  elements.setupScreen.classList.add("active");
}

// ============================================
// Event Listeners
// ============================================

// Add player
elements.addPlayerBtn.addEventListener("click", () => {
  const name = elements.playerNameInput.value;
  addPlayer(name);
});

// Add player with Enter key
elements.playerNameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const name = elements.playerNameInput.value;
    addPlayer(name);
  }
});

// Difficulty selection
elements.difficultyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectDifficulty(btn.dataset.difficulty);
  });
});

// Start game
elements.startGameBtn.addEventListener("click", startGame);

// Next card
elements.nextCardBtn.addEventListener("click", nextCard);

// Quit game
elements.quitGameBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to quit the current game?")) {
    quitGame();
  }
});

// Unblur description
elements.unblurBtn.addEventListener("click", unblurDescription);

// Reveal card in QUICK mode
elements.revealCardBtn.addEventListener("click", revealCard);

// ============================================
// Initialization
// ============================================

// Make functions global for onclick handlers
window.removePlayer = removePlayer;
window.addPoint = addPoint;
window.removePoint = removePoint;

// Initialize display
updatePlayersDisplay();
updateStartButtonState();
