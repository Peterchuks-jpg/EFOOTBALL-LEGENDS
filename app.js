document.getElementById('diag-btn').addEventListener('click', function() {
    const outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML = "[SYSTEM] Computing optimal player synergy...";
    
    // Squad templates
    const players = ["Legend_CR7", "Messi_Magic", "Neymar_Jr10", "Midfield_King", "Defense_Wall", "Goalie_Pro"];
    const mentalities = ["Attacking Focus", "High Pressing", "Low Block Defense", "Possession Control"];
    
    setTimeout(() => {
        // Randomly choose 3 players and 1 playstyle for demonstration
        const activeSquad = [];
        while(activeSquad.length < 3) {
            const randomPlayer = players[Math.floor(Math.random() * players.length)];
            if(!activeSquad.includes(randomPlayer)) {
                activeSquad.push(randomPlayer);
            }
        }
        const selectedStyle = mentalities[Math.floor(Math.random() * mentalities.length)];
        
        outputDiv.innerHTML = `
            <strong>[LINEUP GENERATED]</strong><br>
            • Captain: ${activeSquad[0]}<br>
            • Forward: ${activeSquad[1]}<br>
            • Playmaker: ${activeSquad[2]}<br>
            • Clan Mentality: <em>${selectedStyle}</em><br>
            <span style="color: #34d399;">✔ System ready for clan friendly.</span>
        `;
    }, 1000);
});
