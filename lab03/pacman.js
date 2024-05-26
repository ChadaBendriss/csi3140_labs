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

    // Place Pacman ("C") in the middle
    const pacmanIndex = Math.floor(n / 2);
    game[pacmanIndex] = 'C';

    // Place Ghost ("^") in a random empty position
    const ghostIndex = getRandomEmptyIndex();
    game[ghostIndex] = '^';

    // Place Fruit ("@") in a random empty position
    const fruitIndex = getRandomEmptyIndex();
    game[fruitIndex] = '@';

    return game;
}

// Example usage
console.log(createGame(10));

