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
  "paramètre.png":
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
    "Yandex Browser - Russian web browser with integrated security features",

  // Words - Easy level
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

  // Words - Medium level
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

  // Words - Hard level
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
    "paramètre.png",
    "share.png",
    "smartphone.png",
    "linkedin.png",
    "Reddit.png",
    "Telegram.png",
    "tumblr.png",
    // Words - Easy level
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
    // Words - Medium level
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
    // Words - Hard level
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
