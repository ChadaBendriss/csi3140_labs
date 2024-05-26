function createGame(n) {
    let game = new Array(n).fill('.');

    // Helper function to get a random empty index
    function getRandomEmptyIndex() {
        let index;
        do {
            index = Math.floor(Math.random() * n);
        } while (game[index] !== '.');
        return index;
    }

    // Place Pacman ("C") in a random empty position
    const pacmanIndex = getRandomEmptyIndex();
    game[pacmanIndex] = 'C';

    // Place Ghost ("^") in a random empty position
    const ghostIndex = getRandomEmptyIndex();
    game[ghostIndex] = '^';

    // Place Fruit ("@") in a random empty position
    const fruitIndex = getRandomEmptyIndex();
    game[fruitIndex] = '@';

    return { game, pacmanIndex, score: 0 };
}

function moveLeft(gameState) {
    let { game, pacmanIndex, score } = gameState;
    
    // If Pacman is already at the leftmost position, do nothing
    if (pacmanIndex > 0) {
        // Check if the left position is a pellet
        if (game[pacmanIndex - 1] === '.') {
            score += 1; // Increase score for eating a pellet
        }

        // Move Pacman to the left
        game[pacmanIndex] = '.';
        pacmanIndex -= 1;
        game[pacmanIndex] = 'C';
    }

    return { game, pacmanIndex, score };
}

function moveRight(gameState) {
    let { game, pacmanIndex, score } = gameState;
    
    // If Pacman is already at the rightmost position, do nothing
    if (pacmanIndex < game.length - 1) {
        // Check if the right position is a pellet
        if (game[pacmanIndex + 1] === '.') {
            score += 1; // Increase score for eating a pellet
        }

        // Move Pacman to the right
        game[pacmanIndex] = '.';
        pacmanIndex += 1;
        game[pacmanIndex] = 'C';
    }

    return { game, pacmanIndex, score };
}

// Example usage
let gameState = createGame(10);
console.log(gameState); // Initial state

gameState = moveRight(gameState);
console.log(gameState); // After moving right

gameState = moveRight(gameState);
console.log(gameState); // After moving right again

gameState = moveLeft(gameState);
console.log(gameState); // After moving left
