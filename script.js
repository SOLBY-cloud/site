// Variables iniciales
let miningRate = 0; // Minado por segundo
let solbyBalance = 0; // Balance de SOLBY
let tonBalance = 0; // Balance de TON
let miningPower = 0; // Poder de minado

// Elementos del DOM
const coin = document.getElementById('coin');
const balanceDisplay = document.getElementById('balance');
const miningRateDisplay = document.getElementById('miningRate');
const powerDisplay = document.getElementById('power');
const tonDisplay = document.getElementById('tonBalance');

// Función para actualizar las estadísticas
function updateStats() {
    miningRateDisplay.textContent = `${miningRate} $SOLBY/sec`;
    balanceDisplay.textContent = solbyBalance;
    powerDisplay.textContent = miningPower;
    tonDisplay.textContent = tonBalance;
}

// Evento al tocar la moneda
coin.addEventListener('click', () => {
    solbyBalance += miningPower; // Aumenta el balance basado en el poder de minado
    updateStats();
});

// Inicializar el estado del juego
miningPower = 1; // Poder inicial
miningRate = miningPower * 1; // Tasa de minado inicial
updateStats();
