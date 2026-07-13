// ---- PLAYER CARD INTERACTIVE ENGINE ----

// Get input elements
const inputName = document.getElementById('card-name');
const inputRating = document.getElementById('card-rating');
const inputPos = document.getElementById('card-pos');
const inputTheme = document.getElementById('card-theme');

// Get preview display elements
const previewName = document.getElementById('preview-name');
const previewRating = document.getElementById('preview-rating');
const previewPos = document.getElementById('preview-pos');
const efCard = document.getElementById('ef-card');

// Update name dynamically
inputName.addEventListener('input', function(e) {
    let nameVal = e.target.value.trim();
    previewName.textContent = nameVal ? nameVal : "LEGEND";
});

// Update rating dynamically
inputRating.addEventListener('input', function(e) {
    let ratingVal = e.target.value;
    // Keep values in a solid game-logic range
    if(ratingVal > 110) ratingVal = 110;
    if(ratingVal < 1) ratingVal = 1;
    previewRating.textContent = ratingVal;
});

// Update position dynamically
inputPos.addEventListener('change', function(e) {
    previewPos.textContent = e.target.value;
});

// Update visual card theme class dynamically
inputTheme.addEventListener('change', function(e) {
    // Reset classes
    efCard.className = "ef-card"; 
    // Add selected theme class
    efCard.classList.add(e.target.value);
});


// ---- TACTICAL HUB TERMINAL LOGIC ----

document.getElementById('diag-btn').addEventListener('click', function() {
    const outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML = "[SYSTEM] Computing optimal player synergy...";
    
    const players = ["Legend_CR7", "Messi_Magic", "Neymar_Jr10", "Midfield_King", "Defense_Wall", "Goalie_Pro"];
    const mentalities = ["Attacking Focus", "High Pressing", "Low Block Defense", "Possession Control"];
    
    setTimeout(() => {
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
