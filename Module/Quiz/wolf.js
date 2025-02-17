class Wolf {
    constructor(strength) {
        this.strength = Math.floor(Math.random() * 100)
    }

    howl() {
        return "Auuuuuu"
    }
}

export default Wolf