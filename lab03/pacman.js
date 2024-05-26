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

function checkLevelCompletion(gameState) {
    // Check if there are no more pellets (".") left in the game
    return !gameState.game.includes('.');
}

function resetGame(n, score) {
    // Create a new game with the same score
    let newGameState = createGame(n);
    newGameState.score = score; // Preserve the score
    return newGameState;
}

// Example usage
let gameState = createGame(10);
console.log(gameState); // Initial state

gameState = moveRight(gameState);
console.log(gameState); // After moving right

gameState = moveRight(gameState);
console.log(gameState); // After moving right again

if (checkLevelCompletion(gameState)) {
    gameState = resetGame(10, gameState.score);
    console.log("Level completed! Moving to the next level.");
}

gameState = moveLeft(gameState);
console.log(gameState); // After moving left

if (checkLevelCompletion(gameState)) {
    gameState = resetGame(10, gameState.score);
    console.log("Level completed! Moving to the next level.");
}

console.log(gameState);
