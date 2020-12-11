let anglerAnnihilator = {
    container: document.getElementById("animation_container"),
    fish: [],
    init: function () {

        for (let i = 0; i < 34; i++) {
            this.fish.push(this.createGreyFish())
        }
        for (let i = 0; i < 33; i++) {
            this.fish.push(this.createYellowFish())
        }
        for (let i = 0; i < 31; i++) {
            this.fish.push(this.createOrangeFish())
        }
        for (let i = 0; i < 30; i++) {
            this.fish.push(this.createBlueFish())
        }
        for (let i = 0; i < 32; i++) {
            this.fish.push(this.createGreenFish())
        }
        for (let i = 0; i < 28; i++) {
            this.fish.push(this.createRedFish())
        }
        for (let i = 0; i < 27; i++) {
            this.fish.push(this.createPurpleFish())
        }
        for (let i = 0; i < 10; i++) {
            this.fish.push(this.createMagicFish())
        }
        for (let i = 0; i < 35; i++) {
            this.fish.push(this.createBrownFish())
        }
this.renderFish();
this.startGame();

    },
    createFish: function() {

    },
    createGreyFish: function () {
        let grey = {
            canSwim: false,
            timer: 0,

            
        }
        return grey
    },
    createYellowFish: function () {
        let yellow = {
            canSwim: false,
            timer: 0,
        }
        return yellow
    },
    createOrangeFish: function () {
        let orange = {
            canSwim: false,
            timer: 0,

        }
        return orange
    },
    createBlueFish: function () {
        let blue = {
            canSwim: false,
            timer: 0,
        }
        return blue
    },
    createGreenFish: function () {
        let green = {
            canSwim: false,
            timer: 0,
        }
        return green
    },
    createRedFish: function () {
        let red = {
            canSwim: false,
            timer: 0,
        }
        return red
    },
    createPurpleFish: function () {
        let purple = {
            canSwim: false,
            timer: 0,
        }
        return purple
    },
    createMagicFish: function () {
        let Magic = {
            canSwim: false,
            timer: 0,
        }
        return Magic
    },
    createBrownFish: function () {
        let brown = {
            canSwim: false,
            timer: 0,
        }
        return brown
    },

    startGame: function () {

    },
    endGame: function () {

    },
    swimFish: function () {
        for (let i = 0; i < this.fish.length; i++) {
            if (this.fish[i].canSwim == true) {

            }
        }
    },
    renderFish: function () {

    }
}

MyApp.init();