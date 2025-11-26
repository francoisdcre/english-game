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
  countdownTimer: null,
  scoreChart: null,
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
  revealBtn: document.getElementById("reveal-btn"),
  countdownDisplay: document.getElementById("countdown-display"),
  timerDisplay: document.getElementById("timer-display"),
  searchMessage: document.getElementById("search-message"),
  nextCardBtn: document.getElementById("next-card-btn"),
  playersScoreList: document.getElementById("players-score-list"),
  quitGameBtn: document.getElementById("quit-game-btn"),
  scoreChart: document.getElementById("scoreChart"),

  // Leaderboard screen
  leaderboardScreen: document.getElementById("leaderboard-screen"),
  leaderboardList: document.getElementById("leaderboard-list"),
  playAgainBtn: document.getElementById("play-again-btn"),
  backToMenuBtn: document.getElementById("back-to-menu-btn"),
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
  elements.startGameBtn.disabled = gameState.players.length < 3;
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

  // Update difficulty description
  const descText = document.getElementById("difficulty-desc-text");
  if (difficulty === "EASY") {
    descText.textContent =
      "You have 10 seconds to find the answer and easy content to find";
  } else if (difficulty === "MEDIUM") {
    descText.textContent =
      "You have 6 seconds to find the answer and medium content to find";
  } else if (difficulty === "HARD") {
    descText.textContent =
      "You have 3 seconds to find the answer and hard content to find";
  }
}

function updateScoreChart() {
  const ctx = elements.scoreChart.getContext("2d");

  // Destroy existing chart if it exists
  if (gameState.scoreChart) {
    gameState.scoreChart.destroy();
  }

  // Prepare data
  const playerNames = gameState.players.map((p) => p.name);
  const playerScores = gameState.players.map((p) => p.score);

  // Create gradient colors for bars
  const colors = gameState.players.map((player) => {
    const percentage = (player.score / gameState.winningScore) * 100;
    if (percentage >= 90) return "rgba(231, 76, 60, 0.8)"; // Red - close to winning
    if (percentage >= 70) return "rgba(243, 156, 18, 0.8)"; // Orange
    if (percentage >= 50) return "rgba(241, 196, 15, 0.8)"; // Yellow
    return "rgba(102, 126, 234, 0.8)"; // Blue - default
  });

  const borderColors = gameState.players.map((player) => {
    const percentage = (player.score / gameState.winningScore) * 100;
    if (percentage >= 90) return "rgba(231, 76, 60, 1)";
    if (percentage >= 70) return "rgba(243, 156, 18, 1)";
    if (percentage >= 50) return "rgba(241, 196, 15, 1)";
    return "rgba(102, 126, 234, 1)";
  });

  // Create chart
  gameState.scoreChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: playerNames,
      datasets: [
        {
          label: "Score",
          data: playerScores,
          backgroundColor: colors,
          borderColor: borderColors,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const score = context.parsed.y;
              const percentage = (
                (score / gameState.winningScore) *
                100
              ).toFixed(1);
              return `${score} pts (${percentage}% to victory)`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: gameState.winningScore,
          ticks: {
            stepSize: 5,
          },
          title: {
            display: true,
            text: "Points",
          },
        },
        x: {
          title: {
            display: true,
            text: "Players",
          },
        },
      },
    },
  });
}

// ============================================
// Game Management
// ============================================

function startGame() {
  if (gameState.players.length < 3) {
    alert("Please add at least 3 players to start the game");
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

  // Update chart
  updateScoreChart();
}

function startCountdown(callback) {
  let countLeft = 3;
  elements.countdownDisplay.textContent = countLeft;
  elements.countdownDisplay.style.display = "flex";

  // Hide card content during countdown
  elements.cardText.style.visibility = "hidden";
  elements.cardDescription.style.visibility = "hidden";

  gameState.countdownTimer = setInterval(() => {
    countLeft--;

    if (countLeft > 0) {
      elements.countdownDisplay.textContent = countLeft;
    } else {
      clearInterval(gameState.countdownTimer);
      gameState.countdownTimer = null;
      elements.countdownDisplay.style.display = "none";

      // Show card content
      elements.cardText.style.visibility = "visible";
      elements.cardDescription.style.visibility = "visible";

      // Execute callback to start the game timer
      if (callback) callback();
    }
  }, 1000);
}

function displayCurrentCard() {
  // If all cards have been used, reshuffle the deck
  if (gameState.currentCardIndex >= gameState.cards.length) {
    gameState.cards = shuffleArray(gameData[gameState.difficulty]);
    gameState.currentCardIndex = 0;
  }

  const currentCard = gameState.cards[gameState.currentCardIndex];

  // Reset blur state for each new card
  gameState.isCardBlurred = false;

  // Stop previous timer if it exists
  if (gameState.quickModeTimer) {
    clearInterval(gameState.quickModeTimer);
    gameState.quickModeTimer = null;
  }

  // Unblur the card
  elements.cardText.classList.remove("blurred");
  elements.revealBtn.style.display = "none";

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

  // Start countdown before showing timer
  startCountdown(() => {
    // Start timer (QUICK mode always active)
    startQuickModeTimer();
  });
}

function displayDescription(card) {
  const description = descriptions[card] || "No description available";

  // In QUICK mode (always active), description starts unblurred
  elements.cardDescription.textContent = description;
  elements.cardDescription.classList.remove("blurred");
}

function startQuickModeTimer() {
  // Set timer duration based on difficulty
  let timeLeft;
  switch (gameState.difficulty) {
    case "EASY":
      timeLeft = 10;
      break;
    case "MEDIUM":
      timeLeft = 6;
      break;
    case "HARD":
      timeLeft = 3;
      break;
    default:
      timeLeft = 6;
  }

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
  elements.revealBtn.style.display = "block";

  // Blur description (QUICK mode always active)
  elements.cardDescription.classList.add("blurred");

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

function revealCard() {
  gameState.isCardBlurred = false;
  elements.cardText.classList.remove("blurred");
  elements.cardDescription.classList.remove("blurred");
  elements.revealBtn.style.display = "none";
}
function nextCard() {
  // Clear any active countdown
  if (gameState.countdownTimer) {
    clearInterval(gameState.countdownTimer);
    gameState.countdownTimer = null;
    elements.countdownDisplay.style.display = "none";
  }

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

  // Sort players by score
  const sortedPlayers = [...gameState.players].sort(
    (a, b) => b.score - a.score
  );

  // Display leaderboard
  displayLeaderboard(sortedPlayers);

  // Switch to leaderboard screen
  gameState.isGameActive = false;
  elements.gameScreen.classList.remove("active");
  elements.leaderboardScreen.classList.add("active");
}

function quitGame() {
  gameState.isGameActive = false;
  gameState.currentCardIndex = 0;
  gameState.cards = [];

  // Return to setup screen
  elements.gameScreen.classList.remove("active");
  elements.leaderboardScreen.classList.remove("active");
  elements.setupScreen.classList.add("active");
}

function displayLeaderboard(sortedPlayers) {
  elements.leaderboardList.innerHTML = "";

  sortedPlayers.forEach((player, index) => {
    const leaderboardItem = document.createElement("div");
    leaderboardItem.className = "leaderboard-item";

    // Add special class for top 3
    if (index === 0) leaderboardItem.classList.add("winner");
    if (index === 1) leaderboardItem.classList.add("second");
    if (index === 2) leaderboardItem.classList.add("third");

    // Medals for top 3
    let rankDisplay = `#${index + 1}`;
    if (index === 0) rankDisplay = "🥇";
    if (index === 1) rankDisplay = "🥈";
    if (index === 2) rankDisplay = "🥉";

    leaderboardItem.innerHTML = `
      <div class="leaderboard-rank">${rankDisplay}</div>
      <div class="leaderboard-player">
        <div class="leaderboard-player-name">${player.name}</div>
      </div>
      <div class="leaderboard-score">${player.score} pts</div>
    `;

    elements.leaderboardList.appendChild(leaderboardItem);
  });
}

function playAgain() {
  // Reset player scores
  gameState.players.forEach((player) => {
    player.score = 0;
  });

  // Restart game
  elements.leaderboardScreen.classList.remove("active");
  startGame();
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

// Reveal card and description
elements.revealBtn.addEventListener("click", revealCard);

// Play again
elements.playAgainBtn.addEventListener("click", playAgain);

// Back to menu
elements.backToMenuBtn.addEventListener("click", quitGame);

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
