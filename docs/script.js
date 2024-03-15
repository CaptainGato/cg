const choices = ["rock", "paper", "scissors"];

document.querySelectorAll('.choices button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('result').innerText = ""; // Limpiar resultado anterior
        document.getElementById('countdown').innerText = "3"; // Mostrar contador inicial
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        countdownAndShowResult(playerChoice, computerChoice);
    });
});

function countdownAndShowResult(player, computer) {
    let count = 3;
    const countdownInterval = setInterval(() => {
        count--;
        if (count === 0) {
            clearInterval(countdownInterval);
            const result = getResult(player, computer);
            document.getElementById('result').innerText = result;
            document.getElementById('countdown').innerText = ""; // Limpiar contador
        } else {
            document.getElementById('countdown').innerText = count;
        }
    }, 1000);
}

function getResult(player, computer) {
    if (player === computer) {
        return "Empate!";
    } else if ((player === "rock" && computer === "scissors") ||
               (player === "paper" && computer === "rock") ||
               (player === "scissors" && computer === "paper")) {
        return "¡Ganaste!";
    } else {
        return "¡Perdiste!";
    }
}
