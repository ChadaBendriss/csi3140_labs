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

    return game;
}

function moveLeft(game) {
    // Find the index of Pacman
    const pacmanIndex = game.indexOf('C');
    
    // If Pacman is already at the leftmost position, do nothing
    if (pacmanIndex > 0) {
        // Swap Pacman with the left position
        game[pacmanIndex] = '.';
        game[pacmanIndex - 1] = 'C';
    }
    
    return game;
}

function moveRight(game) {
    // Find the index of Pacman
    const pacmanIndex = game.indexOf('C');
    
    // If Pacman is already at the rightmost position, do nothing
    if (pacmanIndex < game.length - 1) {
        // Swap Pacman with the right position
        game[pacmanIndex] = '.';
        game[pacmanIndex + 1] = 'C';
    }
    
    return game;
}

// Example usage
let game = createGame(10);
console.log(game); // Initial state

game = moveLeft(game);
console.log(game); // After moving left

game = moveRight(game);
console.log(game); // After moving right

game = moveRight(game);
console.log(game); // After moving right again
