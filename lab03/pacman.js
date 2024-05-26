function createGame(n) {
    let game = new Array(n).fill('.');
    game[Math.floor(n / 2)] = 'C'; // Place PacMan in the middle
    game[Math.floor(Math.random() * n)] = '^'; // Place Ghost randomly
    game[Math.floor(Math.random() * n)] = '@'; // Place Fruit randomly
    return game;
}

// Example usage
console.log(createGame(10));
