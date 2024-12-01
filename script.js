
// Variables iniciales
let powerLevel = 1; // Nivel de poder inicial
let solbyBalance = 0; // Balance inicial de SOLBY
let level = 1; // Nivel inicial

// Elementos del DOM
const coin = document.getElementById('coin');
const powerDisplay = document.getElementById('power');
const balanceDisplay = document.getElementById('balance');
const miningRateDisplay = document.getElementById('miningRate');

// Función para guardar el progreso en Local Storage
function saveProgress() {
    const data = {
        powerLevel,
        solbyBalance,
        level,
    };
    localStorage.setItem('solbyGameData', JSON.stringify(data));
}

// Función para cargar el progreso desde Local Storage
function loadProgress() {
    const savedData = localStorage.getItem('solbyGameData');
    if (savedData) {
        const data = JSON.parse(savedData);
        powerLevel = data.powerLevel;
        solbyBalance = data.solbyBalance;
        level = data.level;
    }
}

// Función para actualizar la tasa de minado
function updateMiningRate() {
    const rate = powerLevel * 2;
    miningRateDisplay.textContent = `Mining Rate: ${rate} $SOLBY/tap`;
}

// Evento de minado (Nivel 1)
coin.addEventListener('click', () => {
    if (level === 1) {
        solbyBalance += powerLevel * 2; // Minado basado en el nivel de poder
        balanceDisplay.textContent = solbyBalance;
        saveProgress(); // Guardar el progreso después de cada tap
    } else {
        alert('Mining is only available at Level 1!');
    }
});

// Inicializar la aplicación cargando el progreso
loadProgress();
balanceDisplay.textContent = solbyBalance;
powerDisplay.textContent = powerLevel;
updateMiningRate();
