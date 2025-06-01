const faviconNeutral = "/";
const favicons = [
    "icons/notifIcon1.png", "icons/notifIcon2.png", "icons/notifIcon3.png", "icons/notifIcon4.png", "icons/notifIcon5.png", 
    "icons/notifIcon6.png", "icons/notifIcon7.png", "icons/notifIcon8.png", "icons/notifIcon9.png", "icons/notifIconfull.png"
];

function updateFavicon(unreadCount) {
    let faviconPath = faviconNeutral;
    if (unreadCount > 0) {
        faviconPath = unreadCount >= 10 ? favicons[9] : favicons[unreadCount - 1];
    }
    
    let favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
    favicon.rel = "icon";
    favicon.href = faviconPath;
    document.head.appendChild(favicon);
}

window.addEventListener("focus", () => updateFavicon(0));

function storeMessage(id, message) {
    let storedMessages = JSON.parse(localStorage.getItem("sentMessages")) || {};
    storedMessages[id] = message;
    localStorage.setItem("sentMessages", JSON.stringify(storedMessages));
}

function deleteMessage(id) {
    let storedMessages = JSON.parse(localStorage.getItem("sentMessages")) || {};
    if (storedMessages[id]) {
        delete storedMessages[id];
        localStorage.setItem("sentMessages", JSON.stringify(storedMessages));
        document.getElementById(`message-${id}`).remove();
    }
}
