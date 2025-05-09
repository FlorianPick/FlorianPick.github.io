// Aktuelles Jahr für den Footer setzen
document.addEventListener('DOMContentLoaded', (event) => {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

// Hier könnte zukünftiger JavaScript-Code stehen
// z.B. für Animationen, Countdown-Timer etc.
console.log("Webseite im Aufbau - Skript geladen.");