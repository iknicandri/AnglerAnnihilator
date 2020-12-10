let anglerAnnihilator = {
    container: document.getElementById("animation_container"),
    fish: [],
    init: function () {


    },
    createGreyFish: function () {
        let grey = {
            canSwim: Math.random(),
        }
        return grey
    },
    createYellowFish: function () {
        let yellow = {
            canSwim: Math.random(),
        }
        return yellow
    },
    createOrangeFish: function () {
        let orange = {
            canSwim: Math.random(),
        }
        return orange
    },
    createBlueFish: function () {
        let blue = {
            canSwim: Math.random(),
        }
        return blue
    },
    createGreenFish: function () {
        let green = {
            canSwim: Math.random(),
        }
        return green
    },
    createRedFish: function () {
        let red = {
            canSwim: Math.random(),
        }
        return red
    },
    createPurpleFish: function () {
        let purple = {
            canSwim: Math.random(),
        }
        return purple
    },
    createMagicFish: function () {
        let Magic = {
            canSwim: Math.random(),
        }
        return Magic
    },
    createBrownFish: function () {
        let brown = {
            canSwim: Math.random(),
        }
        return brown
    },

    startGame: function () {

    },
    endGame: function () {

    },
    swimFish: function () {
        for (let i = 0; i < this.fish.length; i++) {
            if (this.fish[i].canSwim ) {
                
            }
}
    }
}

MyApp.init();