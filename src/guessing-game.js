class GuessingGame {
    constructor() {
        this.min = null;  // Minimum value in the range
        this.max = null;  // Maximum value in the range
        this.currentGuess = null;  // Store the current guess
    }

    // Method to set the range of the number to guess
    setRange(min, max) {
        this.min = Math.max(0, min); // Ensure min is non-negative
        this.max = Math.max(0, max); // Ensure max is non-negative
    }



    // Method to indicate the actual number is lower than the current guess
    lower() {
        this.max = this.currentGuess;
    }

    // Method to indicate the actual number is higher than the current guess
    greater() {
        this.min = this.currentGuess; // Use current guess + 1 to exclude it
    }

    // Method to return the guess (middle of current range)
    guess() {
        this.currentGuess = Math.floor((this.min + 1 + this.max) / 2);
        return this.currentGuess;
    }
}

module.exports = GuessingGame;
