const choices = ["rock", "paper", "scissors"];

document.querySelectorAll('.choices button').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = getResult(playerChoice, computerChoice);
        document.getElementById('result').innerText = result;
    });
});

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
