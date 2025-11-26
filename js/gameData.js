// ============================================
// Descriptions for each card/word
// ============================================
const descriptions = {
  // Images - Easy level
  "assets/images/easy/icones_mail.png":
    "Email - Electronic mail service for sending and receiving messages over the internet",
  "assets/images/easy/recherche.png":
    "Search icon - Magnifying glass used to represent search functionality on websites",
  "assets/images/easy/eteindre.png":
    "Power button - Universal symbol for turning devices on or off",
  "assets/images/easy/parametres.png":
    "Settings icon - Gear symbol representing configuration and preferences options",
  "assets/images/easy/share.png":
    "Share icon - Symbol for distributing content across social media and platforms",
  "assets/images/easy/smartphone.png":
    "Smartphone - Mobile device with internet connectivity and app capabilities",
  "assets/images/easy/linkedin.png":
    "LinkedIn - Professional networking platform for career development and business connections",
  "assets/images/easy/reddit.png":
    "Reddit - Social news aggregation and discussion website with community forums",
  "assets/images/easy/telegram.png":
    "Telegram - Cloud-based instant messaging service with focus on speed and security",
  "assets/images/easy/icones_youtube.png":
    "YouTube - Video sharing platform for uploading and watching content",
  "assets/images/easy/icones_Facebook.png":
    "Facebook - Social networking platform for connecting with friends and family",
  "assets/images/easy/icones_Instagram.png":
    "Instagram - Photo and video sharing social networking service",
  "assets/images/easy/icones_snapchat .png":
    "Snapchat - Multimedia messaging app with disappearing content",
  "assets/images/easy/icones_whatsapp.png":
    "WhatsApp - Free messaging and voice over IP service",
  "assets/images/easy/icone_x.png":
    "X (Twitter) - Social media platform for short messages and news",
  "assets/images/easy/icones_spotify.png":
    "Spotify - Digital music streaming service with millions of songs",
  "assets/images/easy/icones_pinterest.png":
    "Pinterest - Visual discovery and bookmarking platform",
  "assets/images/easy/icones_Wifi.png":
    "WiFi - Wireless networking technology for internet connection",
  "assets/images/easy/icones_internet.png":
    "Internet - Global system of interconnected computer networks",
  "assets/images/easy/icones_www.png":
    "World Wide Web - Information system for accessing documents via the internet",
  "assets/images/easy/icones_arobase.png":
    "At sign (@) - Symbol used in email addresses and social media handles",
  "assets/images/easy/icones_likefacebook.png":
    "Like button - Facebook's reaction feature for showing appreciation",
  "assets/images/easy/icone_likeinsta.png":
    "Like heart - Instagram's heart icon for liking posts",
  "assets/images/easy/icones_firefox.png":
    "Firefox - Free and open-source web browser by Mozilla",
  "assets/images/easy/icones_safari.png":
    "Safari - Web browser developed by Apple",
  "assets/images/easy/icones_acrobat.png":
    "Adobe Acrobat - Software for creating and viewing PDF documents",
  "assets/images/easy/icones_ecosia.png":
    "Ecosia - Search engine that plants trees with ad revenue",
  "assets/images/easy/bloqueurdepub.png":
    "Ad Blocker - Software that prevents advertisements from displaying on websites",
  "assets/images/easy/wordpress.png":
    "WordPress - Content management system for websites and blogs",
  "assets/images/easy/mail.png":
    "Mail application - Email client for managing electronic correspondence",

  // Images - Medium level
  "assets/images/medium/canva.png":
    "Canva - Online graphic design platform for creating visual content easily",
  "assets/images/medium/figma.png":
    "Figma - Collaborative interface design tool used for UI/UX prototyping",
  "assets/images/medium/notion.png":
    "Notion - All-in-one workspace for notes, databases, and project management",
  "assets/images/medium/teams.png":
    "Microsoft Teams - Collaboration platform for chat, meetings, and file sharing",
  "assets/images/medium/wechat.png":
    "WeChat - Chinese multi-purpose messaging and social media app",
  "assets/images/medium/icones_photoshop.png":
    "Adobe Photoshop - Professional image editing and graphic design software",
  "assets/images/medium/icones_illustrator.png":
    "Adobe Illustrator - Vector graphics editor for creating logos and illustrations",
  "assets/images/medium/icones_indesign.png":
    "Adobe InDesign - Desktop publishing software for layout design",
  "assets/images/medium/wifi_on_and_off_aftereffect.png":
    "Adobe After Effects - Digital visual effects and motion graphics software",
  "assets/images/medium/wifi_on_and_off_premierepro.png":
    "Adobe Premiere Pro - Video editing software for film and broadcast",
  "assets/images/medium/icones_creativecloud.png":
    "Adobe Creative Cloud - Subscription service for Adobe creative applications",
  "assets/images/medium/icones_firefly.png":
    "Adobe Firefly - AI-powered creative tool for generating images and text effects",
  "assets/images/medium/wifi_on_and_off_bluetooth.png":
    "Bluetooth - Wireless technology for exchanging data over short distances",
  "assets/images/medium/wifi_on_and_off_nfc.png":
    "NFC - Near Field Communication for contactless data transfer",
  "assets/images/medium/wifi_on_and_off_cadenas.png":
    "Padlock/Security - Symbol representing data protection and encryption",
  "assets/images/medium/wifi_on_and_off_privacy.png":
    "Privacy - Settings and features for protecting personal information",
  "assets/images/medium/wifi_on_and_off_cloudflare.png":
    "Cloudflare - Web infrastructure and security company providing CDN services",
  "assets/images/medium/wifi_on_and_off_googlelens.png":
    "Google Lens - Image recognition technology for visual search",
  "assets/images/medium/wifi_on_and_off_googletask.png":
    "Google Tasks - Task management application integrated with Google services",
  "assets/images/medium/wifi_on_and_off_surveymonkey.png":
    "SurveyMonkey - Online survey development platform",
  "assets/images/medium/wifi_on_and_off_react.png":
    "React - JavaScript library for building user interfaces",
  "assets/images/medium/wifi_on_and_off_tailwind.png":
    "Tailwind CSS - Utility-first CSS framework for web design",
  "assets/images/medium/wifi_on_and_off_visualcodecommunity.png":
    "Visual Studio Code - Source code editor with debugging support",
  "assets/images/medium/wifi_on_and_off_github.png":
    "GitHub - Platform for version control and collaborative software development",
  "assets/images/medium/wifi_on_and_off_typography.png":
    "Typography - Art and technique of arranging type for readability",
  "assets/images/medium/wifi_on_and_off_mds.png":
    "Material Design System - Design language developed by Google",
  "assets/images/medium/wifi_on_and_off_kaspersky.png":
    "Kaspersky - Cybersecurity and antivirus software",
  "assets/images/medium/wifi_on_and_off_eset.png":
    "ESET - Antivirus and internet security software",
  "assets/images/medium/wifi_on_and_off-42.png":
    "WiFi Toggle - Icon representing wireless network on/off state",
  "assets/images/medium/wifi_on_and_off_aws.png":
    "AWS - Amazon Web Services cloud computing platform",

  // Images - Hard level
  "assets/images/hard/ameba.png":
    "Ameba - Japanese blogging and social networking service",
  "assets/images/hard/baidu.png":
    "Baidu - Chinese search engine and web services company",
  "assets/images/hard/billibilli.png":
    "Bilibili - Chinese video sharing platform focused on anime and gaming",
  "assets/images/hard/Bit.ly.png":
    "Bitly - URL shortening service for creating compact links",
  "assets/images/hard/bluesky.png":
    "Bluesky - Decentralized social media platform focused on user control",
  "assets/images/hard/Hootsuite.png":
    "Hootsuite - Social media management platform for scheduling posts",
  "assets/images/hard/Infomaniak.png":
    "Infomaniak - Swiss web hosting and cloud services provider",
  "assets/images/hard/kakaotalk.png":
    "KakaoTalk - Popular South Korean messaging app with multimedia features",
  "assets/images/hard/line.png":
    "LINE - Japanese messaging app with stickers, calls, and payment features",
  "assets/images/hard/Mailchimp.png":
    "Mailchimp - Email marketing platform for managing campaigns",
  "assets/images/hard/Odnoklassniki.png":
    "Odnoklassniki - Russian social networking service",
  "assets/images/hard/prestashop.png":
    "PrestaShop - Open-source e-commerce platform for online stores",
  "assets/images/hard/QQ.png":
    "QQ - Chinese instant messaging software service",
  "assets/images/hard/Salesforce.png":
    "Salesforce - Customer relationship management (CRM) platform",
  "assets/images/hard/Sarbacane.png":
    "Sarbacane - French email marketing and SMS campaign software",
  "assets/images/hard/trello.png":
    "Trello - Visual project management tool using boards, lists, and cards",
  "assets/images/hard/tumblr.png":
    "Tumblr - Microblogging and social networking platform for multimedia content",
  "assets/images/hard/vk.png": "VKontakte - Russian social networking service",
  "assets/images/hard/weibo.png":
    "Weibo - Chinese microblogging platform similar to Twitter",
  "assets/images/hard/xiaohongshu.png":
    "Xiaohongshu - Chinese social media and e-commerce platform (Little Red Book)",
  "assets/images/hard/ybann.png":
    "Y-Bann - Digital communication and marketing platform",
  "assets/images/hard/icones_vscode.png":
    "VS Code - Visual Studio Code source code editor",
  "assets/images/hard/icones_lamp.png":
    "LAMP - Linux, Apache, MySQL, PHP web development stack",
  "assets/images/hard/icones_wamp.png":
    "WAMP - Windows, Apache, MySQL, PHP development environment",
  "assets/images/hard/icones_mamp.png":
    "MAMP - Mac, Apache, MySQL, PHP development environment",
  "assets/images/hard/icones_xampp.png":
    "XAMPP - Cross-platform Apache, MySQL, PHP, Perl development package",
  "assets/images/hard/wifi_on_and_off_ahrefs.png":
    "Ahrefs - SEO tools for backlink analysis and keyword research",
  "assets/images/hard/wifi_on_and_off_docker.png":
    "Docker - Platform for developing and running containerized applications",
  "assets/images/hard/wifi_on_and_off_googleanalytics.png":
    "Google Analytics - Web analytics service tracking website traffic",
  "assets/images/hard/wifi_on_and_off_tor.png":
    "Tor Browser - Anonymous web browser protecting user privacy",

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
    "assets/images/easy/icones_mail.png",
    "assets/images/easy/recherche.png",
    "assets/images/easy/eteindre.png",
    "assets/images/easy/parametres.png",
    "assets/images/easy/share.png",
    "assets/images/easy/smartphone.png",
    "assets/images/easy/linkedin.png",
    "assets/images/easy/reddit.png",
    "assets/images/easy/telegram.png",
    "assets/images/easy/icones_youtube.png",
    "assets/images/easy/icones_Facebook.png",
    "assets/images/easy/icones_Instagram.png",
    "assets/images/easy/icones_snapchat .png",
    "assets/images/easy/icones_whatsapp.png",
    "assets/images/easy/icone_x.png",
    "assets/images/easy/icones_spotify.png",
    "assets/images/easy/icones_pinterest.png",
    "assets/images/easy/icones_Wifi.png",
    "assets/images/easy/icones_internet.png",
    "assets/images/easy/icones_www.png",
    "assets/images/easy/icones_arobase.png",
    "assets/images/easy/icones_likefacebook.png",
    "assets/images/easy/icone_likeinsta.png",
    "assets/images/easy/icones_firefox.png",
    "assets/images/easy/icones_safari.png",
    "assets/images/easy/icones_acrobat.png",
    "assets/images/easy/icones_ecosia.png",
    "assets/images/easy/bloqueurdepub.png",
    "assets/images/easy/wordpress.png",
    "assets/images/easy/mail.png",
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
    "assets/images/medium/canva.png",
    "assets/images/medium/figma.png",
    "assets/images/medium/notion.png",
    "assets/images/medium/teams.png",
    "assets/images/medium/wechat.png",
    "assets/images/medium/icones_photoshop.png",
    "assets/images/medium/icones_illustrator.png",
    "assets/images/medium/icones_indesign.png",
    "assets/images/medium/wifi_on_and_off_aftereffect.png",
    "assets/images/medium/wifi_on_and_off_premierepro.png",
    "assets/images/medium/icones_creativecloud.png",
    "assets/images/medium/icones_firefly.png",
    "assets/images/medium/wifi_on_and_off_bluetooth.png",
    "assets/images/medium/wifi_on_and_off_nfc.png",
    "assets/images/medium/wifi_on_and_off_cadenas.png",
    "assets/images/medium/wifi_on_and_off_privacy.png",
    "assets/images/medium/wifi_on_and_off_cloudflare.png",
    "assets/images/medium/wifi_on_and_off_googlelens.png",
    "assets/images/medium/wifi_on_and_off_googletask.png",
    "assets/images/medium/wifi_on_and_off_surveymonkey.png",
    "assets/images/medium/wifi_on_and_off_react.png",
    "assets/images/medium/wifi_on_and_off_tailwind.png",
    "assets/images/medium/wifi_on_and_off_visualcodecommunity.png",
    "assets/images/medium/wifi_on_and_off_github.png",
    "assets/images/medium/wifi_on_and_off_typography.png",
    "assets/images/medium/wifi_on_and_off_mds.png",
    "assets/images/medium/wifi_on_and_off_kaspersky.png",
    "assets/images/medium/wifi_on_and_off_eset.png",
    "assets/images/medium/wifi_on_and_off-42.png",
    "assets/images/medium/wifi_on_and_off_aws.png",
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
    "assets/images/hard/ameba.png",
    "assets/images/hard/baidu.png",
    "assets/images/hard/billibilli.png",
    "assets/images/hard/Bit.ly.png",
    "assets/images/hard/bluesky.png",
    "assets/images/hard/Hootsuite.png",
    "assets/images/hard/Infomaniak.png",
    "assets/images/hard/kakaotalk.png",
    "assets/images/hard/line.png",
    "assets/images/hard/Mailchimp.png",
    "assets/images/hard/Odnoklassniki.png",
    "assets/images/hard/prestashop.png",
    "assets/images/hard/QQ.png",
    "assets/images/hard/Salesforce.png",
    "assets/images/hard/Sarbacane.png",
    "assets/images/hard/trello.png",
    "assets/images/hard/tumblr.png",
    "assets/images/hard/vk.png",
    "assets/images/hard/weibo.png",
    "assets/images/hard/xiaohongshu.png",
    "assets/images/hard/ybann.png",
    "assets/images/hard/icones_vscode.png",
    "assets/images/hard/icones_lamp.png",
    "assets/images/hard/icones_wamp.png",
    "assets/images/hard/icones_mamp.png",
    "assets/images/hard/icones_xampp.png",
    "assets/images/hard/wifi_on_and_off_ahrefs.png",
    "assets/images/hard/wifi_on_and_off_docker.png",
    "assets/images/hard/wifi_on_and_off_googleanalytics.png",
    "assets/images/hard/wifi_on_and_off_tor.png",
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
