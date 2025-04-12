const choices = ['piedra', 'papel', 'tijera'];
let playerChoice = '';
let computerChoice = '';

// Función para que el jugador elija una opción
function playerChoose(choice) {
    playerChoice = choice;
    updateImage('player-img', choice);
    computerPlay();
    displayResult();
    // document.getElementById('player-choice').innerText = choice.charAt(0).toUpperCase() + choice.slice(1);
}

// Función para que la computadora elija aleatoriamente
function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
    updateImage('computer-img', computerChoice);
    // document.getElementById('computer-choice').innerText = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
}

// Función para que las imagenes se muestren en las casillas del Jugador y Computadora
function updateImage(imgId, choice) {
    const imgElement = document.getElementById(imgId);
    imgElement.src = `assets/${choice}.png`;
    imgElement.alt = choice;
}

// Función para mostrar el resultado
function displayResult() {
    let resultMessage = '';

    if (playerChoice === computerChoice) {
        resultMessage = 'Es un empate!';
    } else if (
        (playerChoice === 'piedra' && computerChoice === 'tijera') ||
        (playerChoice === 'papel' && computerChoice === 'piedra') ||
        (playerChoice === 'tijera' && computerChoice === 'papel')
    ) {
        resultMessage = '¡Ganaste!';
    } else {
        resultMessage = 'Perdiste...';
    }

    document.getElementById('result').innerText = resultMessage;
}

// Función para jugar contra otro jugador online (a futuro)
function multiplayerSetup() {
    // Aquí puedes implementar la lógica de un servidor o un sistema de salas para juego online
    document.getElementById('multiplayer-section').classList.remove('hidden');
}
