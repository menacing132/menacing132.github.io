function copyIP() {
    navigator.clipboard.writeText("Coming Soon...");
    alert("IP copied!");
}

async function getPlayers() {
    try {
        const res = await fetch("https://api.mcsrvstat.us/2/yourserverip.com");
        const data = await res.json();
        document.getElementById("playerCount").innerText = data.players ? data.players.online : 0;
    } catch (err) {
        console.log("Server offline or IP missing");
    }
}

getPlayers();
setInterval(getPlayers, 15000);

