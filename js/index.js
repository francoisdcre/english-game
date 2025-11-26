// ============================================
// État de l'application
// ============================================
const gameState = {
  players: [],
  difficulty: "MEDIUM",
  winningScore: 20,
  currentCardIndex: 0,
  cards: [],
  isGameActive: false,
  isDescriptionBlurred: true,
  quickMode: false,
  isCardBlurred: false,
  quickModeTimer: null,
};

// ============================================
// Descriptions pour chaque carte/mot
// ============================================
const descriptions = {
  // Nouvelles images - Easy level
  "Plan de travail 2.png": "Image card - Easy difficulty level",
  "Plan de travail 3.png": "Image card - Easy difficulty level",
  "Plan de travail 4.png": "Image card - Easy difficulty level",
  "Plan de travail 5.png": "Image card - Easy difficulty level",
  "Plan de travail 6.png": "Image card - Easy difficulty level",
  "Plan de travail 7.png": "Image card - Easy difficulty level",
  "Plan de travail 8.png": "Image card - Easy difficulty level",
  "Plan de travail 9.png": "Image card - Easy difficulty level",
  "Plan de travail 10.png": "Image card - Easy difficulty level",
  "Plan de travail 11.png": "Image card - Easy difficulty level",

  // Nouvelles images - Medium level
  "Plan de travail 12.png": "Image card - Medium difficulty level",
  "Plan de travail 13.png": "Image card - Medium difficulty level",
  "Plan de travail 14.png": "Image card - Medium difficulty level",
  "Plan de travail 15.png": "Image card - Medium difficulty level",
  "Plan de travail 16.png": "Image card - Medium difficulty level",
  "Plan de travail 17.png": "Image card - Medium difficulty level",
  "Plan de travail 18.png": "Image card - Medium difficulty level",
  "Plan de travail 19.png": "Image card - Medium difficulty level",
  "Plan de travail 20.png": "Image card - Medium difficulty level",
  "Plan de travail 21.png": "Image card - Medium difficulty level",

  // Nouvelles images - Hard level
  "Plan de travail 22.png": "Image card - Hard difficulty level",
  "Plan de travail 23.png": "Image card - Hard difficulty level",
  "Plan de travail 24.png": "Image card - Hard difficulty level",
  "Plan de travail 25.png": "Image card - Hard difficulty level",
  "Plan de travail 26.png": "Image card - Hard difficulty level",
  "Plan de travail 27.png": "Image card - Hard difficulty level",
  "Plan de travail 28.png": "Image card - Hard difficulty level",
  "Plan de travail 29.png": "Image card - Hard difficulty level",
  "Plan de travail 30.png": "Image card - Hard difficulty level",
  "Plan de travail 31.png": "Image card - Hard difficulty level",
  "Plan de travail 32.png": "Image card - Hard difficulty level",

  // Mots IT - Easy
  "Wi-Fi":
    "Wireless technology that allows devices to connect to the internet without cables",
  Internet: "A global network connecting millions of computers worldwide",
  "Web browser": "Software used to access and display websites on the internet",
  "Search engine": "A tool that helps you find information on the internet",
  Email: "Electronic mail sent over the internet",
  Password: "A secret code used to access a system or account",
  Username: "A unique name that identifies a user on a system or website",
  Website: "A collection of web pages accessible via the internet",
  "Home page": "The main or starting page of a website",
  Hyperlink: "A clickable link that takes you to another webpage or resource",
  Login: "The process of accessing a system with credentials",
  Logout: "The process of exiting or disconnecting from a system",
  "Online account": "A user profile on a website or online service",
  Download: "To transfer data from a remote system to your local device",
  Upload: "To transfer data from your local device to a remote system",
  Streaming: "Watching or listening to content over the internet in real-time",
  "Social network": "An online platform where people connect and share content",
  Comment: "A written response or opinion posted on social media or websites",
  Share: "To distribute or post content so others can see it",
  Like: "A button or action to show approval or support for content",
  Notification: "An alert or message informing you of activity or updates",
  "Profile picture": "An image representing a user on social media or accounts",
  "Username handle": "A unique identifier or @name used on social platforms",
  "Private message": "A direct message sent privately between users",

  // Mots IT - Medium
  "Cloud storage":
    "Online storage service where data is saved on remote servers",
  "Online backup": "A copy of data stored on the internet for recovery",
  Firewall: "A security system that monitors and controls network traffic",
  "Antivirus software": "A program that detects and removes malicious software",
  Router: "A device that directs internet traffic between networks",
  Modem: "A device that connects your home network to the internet",
  Bandwidth: "The amount of data that can be transmitted over a network",
  Latency: "The delay or time it takes for data to travel across a network",
  "Two-factor authentication":
    "A security method requiring two forms of verification",
  "Incognito mode": "A private browsing mode that doesn't save history",
  "Tracking cookie": "A small file that tracks your online activity",
  "Online form": "A digital document that collects information from users",
  "Terms of service": "Legal agreement between a user and a service provider",
  Captcha: "A test to verify that a user is human, not a bot",
  "Data leak": "Unauthorized exposure or release of sensitive information",
  "Personal data": "Information that can identify an individual person",
  "Digital footprint": "The trail of data you leave when using the internet",
  "Online payment": "A transaction made electronically over the internet",
  "End-to-end encryption":
    "Security method where only sender and receiver can read messages",
  "QR code": "A two-dimensional barcode that can be scanned for information",
  VPN: "Virtual Private Network that encrypts your internet connection",
  Server:
    "A computer system that provides services to other computers over a network",
  Database: "An organized collection of structured data stored electronically",

  // Mots IT - Hard
  Algorithm:
    "A step-by-step procedure for solving a problem or performing a task",
  HTML: "Hypertext Markup Language - the standard language for creating web pages",
  CSS: "Cascading Style Sheets - used to style and layout web pages",
  JavaScript: "A programming language used to create interactive web content",
  Framework: "A reusable software platform providing standard functionality",
  API: "Application Programming Interface - allows different software to communicate",
  Frontend:
    "The visible part of a website or application that users interact with",
  Backend: "The server-side of an application that handles data and logic",
  Asynchronous:
    "Operations that don't require waiting for completion before continuing",
  "Encryption protocol": "A set of rules for encoding data to keep it secure",
  "Decryption key": "A code used to decode encrypted information",
  HTTPS: "Secure version of HTTP protocol for encrypted web communication",
  DNS: "Domain Name System - translates website names to IP addresses",
  "IP address":
    "A unique numerical address assigned to each device on a network",
  "Proxy server":
    "An intermediary server that forwards requests between clients and servers",
  Cybersecurity:
    "Protection of computer systems and networks from digital attacks",
  "Phishing attack":
    "A fraudulent attempt to obtain sensitive information by pretending to be trustworthy",
  Malware: "Malicious software designed to damage or gain unauthorized access",
  Ransomware: "Malware that encrypts data and demands payment for decryption",
  "DDoS attack":
    "Distributed Denial of Service - overwhelming a server with traffic",
  "SQL injection":
    "A hacking technique that exploits vulnerabilities in database queries",
  OAuth: "An open standard for secure authorization and access delegation",
  WebSocket:
    "A protocol enabling real-time two-way communication between client and server",
};

// ============================================
// Données de jeu (cartes à jouer + mots IT)
// ============================================
const gameData = {
  EASY: [
    "Plan de travail 2.png",
    "Plan de travail 3.png",
    "Plan de travail 4.png",
    "Plan de travail 5.png",
    "Plan de travail 6.png",
    "Plan de travail 7.png",
    "Plan de travail 8.png",
    "Plan de travail 9.png",
    "Plan de travail 10.png",
    "Plan de travail 11.png",
    // Mots IT niveau facile
    "Wi-Fi",
    "Internet",
    "Web browser",
    "Search engine",
    "Email",
    "Password",
    "Username",
    "Website",
    "Home page",
    "Hyperlink",
    "Login",
    "Logout",
    "Online account",
    "Download",
    "Upload",
    "Streaming",
    "Social network",
    "Comment",
    "Share",
    "Like",
    "Notification",
    "Profile picture",
    "Username handle",
    "Private message",
  ],
  MEDIUM: [
    "Plan de travail 12.png",
    "Plan de travail 13.png",
    "Plan de travail 14.png",
    "Plan de travail 15.png",
    "Plan de travail 16.png",
    "Plan de travail 17.png",
    "Plan de travail 18.png",
    "Plan de travail 19.png",
    "Plan de travail 20.png",
    "Plan de travail 21.png",
    // Mots IT niveau moyen
    "Cloud storage",
    "Online backup",
    "Firewall",
    "Antivirus software",
    "Router",
    "Modem",
    "Bandwidth",
    "Latency",
    "Two-factor authentication",
    "Incognito mode",
    "Tracking cookie",
    "Online form",
    "Terms of service",
    "Captcha",
    "Data leak",
    "Personal data",
    "Digital footprint",
    "Online payment",
    "End-to-end encryption",
    "QR code",
    "VPN",
    "Server",
    "Database",
  ],
  HARD: [
    "Plan de travail 22.png",
    "Plan de travail 23.png",
    "Plan de travail 24.png",
    "Plan de travail 25.png",
    "Plan de travail 26.png",
    "Plan de travail 27.png",
    "Plan de travail 28.png",
    "Plan de travail 29.png",
    "Plan de travail 30.png",
    "Plan de travail 31.png",
    "Plan de travail 32.png",
    // Mots IT niveau difficile
    "Algorithm",
    "HTML",
    "CSS",
    "JavaScript",
    "Framework",
    "API",
    "Frontend",
    "Backend",
    "Asynchronous",
    "Encryption protocol",
    "Decryption key",
    "HTTPS",
    "DNS",
    "IP address",
    "Proxy server",
    "Cybersecurity",
    "Phishing attack",
    "Malware",
    "Ransomware",
    "DDoS attack",
    "SQL injection",
    "OAuth",
    "WebSocket",
  ],
};

// ============================================
// Éléments du DOM
// ============================================
const elements = {
  // Écran de configuration
  setupScreen: document.getElementById("setup-screen"),
  gameScreen: document.getElementById("game-screen"),
  playerNameInput: document.getElementById("player-name-input"),
  addPlayerBtn: document.getElementById("add-player-btn"),
  playersList: document.getElementById("players-list"),
  difficultyBtns: document.querySelectorAll(".difficulty-btn"),
  winningScoreInput: document.getElementById("winning-score-input"),
  quickModeCheckbox: document.getElementById("quick-mode-checkbox"),
  startGameBtn: document.getElementById("start-game-btn"),

  // Écran de jeu
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
// Fonctions utilitaires
// ============================================

// Mélanger un tableau (Fisher-Yates)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Générer un ID unique
function generateId() {
  return Date.now() + Math.random().toString(36).substr(2, 9);
}

// ============================================
// Gestion des joueurs
// ============================================

function addPlayer(name) {
  if (!name.trim()) {
    alert("Veuillez entrer un nom valide");
    return;
  }

  if (gameState.players.length >= 5) {
    alert("Maximum 5 joueurs autorisés");
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
      '<p class="info-text">Aucun joueur ajouté</p>';
    return;
  }

  gameState.players.forEach((player) => {
    const playerItem = document.createElement("div");
    playerItem.className = "player-item";
    playerItem.innerHTML = `
      <span>${player.name}</span>
      <button class="remove-player-btn" onclick="removePlayer('${player.id}')">Retirer</button>
    `;
    elements.playersList.appendChild(playerItem);
  });

  // Désactiver le bouton d'ajout si 5 joueurs
  elements.addPlayerBtn.disabled = gameState.players.length >= 5;
}

function updateStartButtonState() {
  elements.startGameBtn.disabled = gameState.players.length === 0;
}

// ============================================
// Gestion de la difficulté
// ============================================

function selectDifficulty(difficulty) {
  gameState.difficulty = difficulty;

  // Mettre à jour l'UI
  elements.difficultyBtns.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.difficulty === difficulty) {
      btn.classList.add("active");
    }
  });
}

// ============================================
// Gestion du jeu
// ============================================

function startGame() {
  if (gameState.players.length === 0) {
    alert("Veuillez ajouter au moins un joueur");
    return;
  }

  // Récupérer le score gagnant choisi
  const winningScore = parseInt(elements.winningScoreInput.value);
  if (isNaN(winningScore) || winningScore < 5 || winningScore > 100) {
    alert("Veuillez choisir un score gagnant entre 5 et 100");
    return;
  }
  gameState.winningScore = winningScore;

  // Récupérer le mode QUICK
  gameState.quickMode = elements.quickModeCheckbox.checked;

  // Initialiser les scores
  gameState.players.forEach((player) => (player.score = 0));

  // Préparer les cartes selon la difficulté
  gameState.cards = shuffleArray(gameData[gameState.difficulty]);
  gameState.currentCardIndex = 0;
  gameState.isGameActive = true;

  // Changer d'écran
  elements.setupScreen.classList.remove("active");
  elements.gameScreen.classList.add("active");

  // Afficher les informations
  updateGameDisplay();
  displayCurrentCard();
}

function updateGameDisplay() {
  // Afficher la difficulté
  elements.difficultyDisplay.textContent = gameState.difficulty;
  elements.difficultyDisplay.className = `difficulty-badge ${gameState.difficulty}`;

  // Afficher les joueurs avec leurs scores
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
  // Si on a parcouru toutes les cartes, remélanger le paquet
  if (gameState.currentCardIndex >= gameState.cards.length) {
    gameState.cards = shuffleArray(gameData[gameState.difficulty]);
    gameState.currentCardIndex = 0;
  }

  const currentCard = gameState.cards[gameState.currentCardIndex];

  // Réinitialiser l'état du flou pour chaque nouvelle carte
  gameState.isDescriptionBlurred = gameState.difficulty !== "EASY";
  gameState.isCardBlurred = false;

  // Arrêter le timer précédent s'il existe
  if (gameState.quickModeTimer) {
    clearInterval(gameState.quickModeTimer);
    gameState.quickModeTimer = null;
  }

  // Déflouter la carte
  elements.cardText.classList.remove("blurred");
  elements.revealCardBtn.style.display = "none";

  // Vérifier si c'est une image (se termine par .png) ou un mot
  if (currentCard.endsWith(".png")) {
    // Afficher l'image de la carte
    elements.cardText.innerHTML = `<img src="assets/images/${currentCard}" alt="Carte" style="max-width: 100%; max-height: 100%; object-fit: contain;" />`;
  } else {
    // Afficher le mot
    elements.cardText.textContent = currentCard;
  }

  // Afficher la description
  displayDescription(currentCard);

  // Démarrer le timer en mode QUICK
  if (gameState.quickMode) {
    startQuickModeTimer();
  } else {
    elements.timerDisplay.style.display = "none";
  }
}

function displayDescription(card) {
  const description = descriptions[card] || "No description available";

  // Afficher ou masquer le bouton de défloutage selon la difficulté
  if (gameState.difficulty === "EASY") {
    elements.cardDescription.textContent = description;
    elements.cardDescription.classList.remove("blurred");
    elements.unblurBtn.style.display = "none";
  } else if (gameState.quickMode) {
    // En mode QUICK, afficher la description non floutée au début
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

  // Flouter aussi la description en mode QUICK
  if (gameState.quickMode) {
    elements.cardDescription.classList.add("blurred");
    elements.unblurBtn.style.display = "block";

    // Afficher le message "CHERCHEZ !" avec animation
    elements.searchMessage.style.display = "block";
    elements.searchMessage.classList.add("zoom-in");

    // Masquer le message après 2 secondes
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

  // Ne PAS déflouter la description, seulement la carte
  // La description reste floutée et peut être révélée avec son propre bouton
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

    // Vérifier si le joueur a atteint le score gagnant
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
  // Si aucun gagnant spécifié, trouver celui avec le plus de points
  if (!winner) {
    winner = gameState.players.reduce((prev, current) =>
      current.score > prev.score ? current : prev
    );
  }

  const message =
    `🎉 Partie terminée!\n\n🏆 Gagnant: ${winner.name} avec ${winner.score} points!\n\nScores finaux:\n` +
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

  // Retour à l'écran de configuration
  elements.gameScreen.classList.remove("active");
  elements.setupScreen.classList.add("active");
}

// ============================================
// Event Listeners
// ============================================

// Ajouter un joueur
elements.addPlayerBtn.addEventListener("click", () => {
  const name = elements.playerNameInput.value;
  addPlayer(name);
});

// Ajouter un joueur avec Enter
elements.playerNameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const name = elements.playerNameInput.value;
    addPlayer(name);
  }
});

// Sélection de la difficulté
elements.difficultyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectDifficulty(btn.dataset.difficulty);
  });
});

// Démarrer la partie
elements.startGameBtn.addEventListener("click", startGame);

// Carte suivante
elements.nextCardBtn.addEventListener("click", nextCard);

// Quitter la partie
elements.quitGameBtn.addEventListener("click", () => {
  if (confirm("Êtes-vous sûr de vouloir quitter la partie en cours?")) {
    quitGame();
  }
});

// Déflouter la description
elements.unblurBtn.addEventListener("click", unblurDescription);

// Révéler la carte en mode QUICK
elements.revealCardBtn.addEventListener("click", revealCard);

// ============================================
// Initialisation
// ============================================

// Rendre les fonctions globales pour les onclick
window.removePlayer = removePlayer;
window.addPoint = addPoint;
window.removePoint = removePoint;

// Initialiser l'affichage
updatePlayersDisplay();
updateStartButtonState();
