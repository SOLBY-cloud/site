// Variables iniciales
let powerLevel = 1; // Nivel de poder inicial
let solbyBalance = 0; // Balance inicial de SOLBY
let level = 1; // Nivel inicial

// Elementos del DOM
const coin = document.getElementById('coin');
const powerDisplay = document.getElementById('power');
const balanceDisplay = document.getElementById('balance');
const miningRateDisplay = document.getElementById('miningRate');
const upgradeButton = document.getElementById('upgradeMining');

// Actualizar la tasa de minado
function updateMiningRate() {
    const rate = powerLevel * 2;
    miningRateDisplay.textContent = `Mining Rate: ${rate} $SOLBY/tap`;
}

// Evento de minado (Nivel 1)
coin.addEventListener('click', () => {
    if (level === 1) {
        solbyBalance += powerLevel * 2; // Minado basado en el nivel de poder
        balanceDisplay.textContent = solbyBalance;
    } else {
        alert('Mining is only available at Level 1!');
    }
});

// Botón "Mining Power UP ... SOON" (deshabilitado)
upgradeButton.addEventListener('click', () => {
    alert('Mining Power Upgrade functionality is coming soon! Stay tuned.');
});

// Inicializar los valores iniciales
updateMiningRate();
