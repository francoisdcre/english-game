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
  quickMode: false,
  isCardBlurred: false,
  quickModeTimer: null,
};

// ============================================
// Descriptions for each card/word
// ============================================
const descriptions = {
  // Images - Easy level
  "email.png":
    "Email - Electronic mail service for sending and receiving messages over the internet",
  "loupe-de-recherche.png":
    "Search icon - Magnifying glass used to represent search functionality on websites",
  "power-button.png":
    "Power button - Universal symbol for turning devices on or off",
  "param\u00e8tre.png":
    "Settings icon - Gear symbol representing configuration and preferences options",
  "share.png":
    "Share icon - Symbol for distributing content across social media and platforms",
  "smartphone.png":
    "Smartphone - Mobile device with internet connectivity and app capabilities",
  "linkedin.png":
    "LinkedIn - Professional networking platform for career development and business connections",
  "Reddit.png":
    "Reddit - Social news aggregation and discussion website with community forums",
  "Telegram.png":
    "Telegram - Cloud-based instant messaging service with focus on speed and security",
  "tumblr.png":
    "Tumblr - Microblogging and social networking platform for multimedia content",

  // Images - Medium level
  "adblocker.png":
    "Ad Blocker - Software that prevents advertisements from displaying on websites",
  "bluesky.png":
    "Bluesky - Decentralized social media platform focused on user control",
  "Canva.png":
    "Canva - Online graphic design platform for creating visual content easily",
  "Figma.png":
    "Figma - Collaborative interface design tool used for UI/UX prototyping",
  "kakaotalk.png":
    "KakaoTalk - Popular South Korean messaging app with multimedia features",
  "line.png":
    "LINE - Japanese messaging app with stickers, calls, and payment features",
  "notion.png":
    "Notion - All-in-one workspace for notes, databases, and project management",
  "prestashop.png":
    "PrestaShop - Open-source e-commerce platform for online stores",
  "Teams.png":
    "Microsoft Teams - Collaboration platform for chat, meetings, and file sharing",
  "trello.png":
    "Trello - Visual project management tool using boards, lists, and cards",

  // Images - Hard level
  "ameba.png": "Ameba - Japanese blogging and social networking service",
  "baidu.png":
    "Baidu - China's largest search engine and internet services company",
  "bilibili.png":
    "Bilibili - Chinese video-sharing platform popular for anime and gaming content",
  "Odnoklassniki.png":
    "Odnoklassniki - Russian social networking service for classmates and friends",
  "qq.png":
    "QQ - Chinese instant messaging software with multimedia capabilities",
  "VKontakte.png":
    "VKontakte (VK) - Russian social networking platform similar to Facebook",
  "wechat.png":
    "WeChat - Chinese multi-purpose messaging and payment super-app",
  "weibo.png": "Weibo - Chinese microblogging platform similar to Twitter",
  "Wordpress.png":
    "WordPress - Popular content management system for building websites and blogs",
  "xiaohongshu.png":
    "Xiaohongshu (Red) - Chinese social media and e-commerce platform",
  "ybann.png":
    "Yandex Browser - Russian web browser with integrated security features", // Mots IT - Easy
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
// Game Data (cards + IT words)
// ============================================
const gameData = {
  EASY: [
    "email.png",
    "loupe-de-recherche.png",
    "power-button.png",
    "param\u00e8tre.png",
    "share.png",
    "smartphone.png",
    "linkedin.png",
    "Reddit.png",
    "Telegram.png",
    "tumblr.png",
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
    "adblocker.png",
    "bluesky.png",
    "Canva.png",
    "Figma.png",
    "kakaotalk.png",
    "line.png",
    "notion.png",
    "prestashop.png",
    "Teams.png",
    "trello.png",
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
    "ameba.png",
    "baidu.png",
    "bilibili.png",
    "Odnoklassniki.png",
    "qq.png",
    "VKontakte.png",
    "wechat.png",
    "weibo.png",
    "Wordpress.png",
    "xiaohongshu.png",
    "ybann.png",
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
  quickModeCheckbox: document.getElementById("quick-mode-checkbox"),
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

  // Get QUICK mode
  gameState.quickMode = elements.quickModeCheckbox.checked;

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
