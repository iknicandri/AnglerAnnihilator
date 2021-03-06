let anglerAnnihilator = {
    container: document.getElementById("animation_container"),
    animation1: undefined,
    fishes: [],
    net: undefined,
    hooks: [],



    init: function () {
        //Isabelle
        this.net = this.createGiantNet();
        this.startGame();
        this.createHook();
        this.renderNet();
        this.renderHooks();


        // Joah
        this.netMovement();
        this.hookRespawn();
        this.createFish();
        this.fishRespawn();
        this.renderFish();



    },
    //Joah
    createFish: function () {
        let fishdiv = document.createElement("div")
        fishdiv.className = "fish"
        this.container.append(fishdiv);
        let fish = {
            type: Math.round(Math.random() * 8),
            x_pos: Math.random() * 100,
            y_pos: Math.random() * 500,
            x_velocity: 3,
            y_velocity: .5,
            radius: 10,
            element: fishdiv,
            canSwim: true,
            caught: false,
        }
        if (fish.type == 1) {
            fish.element.classList.add("yellowFish")
        } else if
            (fish.type == 2) {
            fish.element.classList.add("redFish")
        } else if
            (fish.type == 3) {
            fish.element.classList.add("blueFish")
        } else if
            (fish.type == 4) {
            fish.element.classList.add("purpleFish")
        } else if
            (fish.type == 5) {
            fish.element.classList.add("orangeFish")
        } else if
            (fish.type == 6) {
            fish.element.classList.add("greyFish")
        } else if
            (fish.type == 7) {
            fish.element.classList.add("pinkFish")
        } else if
            (fish.type == 8) {
            fish.element.classList.add("greenFish")
        }
        this.fishes.push(fish)
    },

    //Joah
    fishRespawn: function () {
        this.interval = window.setInterval(this.createFish.bind(anglerAnnihilator), 2000)
    },

    //Isabelle
    createGiantNet: function () {
        let netdiv = document.createElement("div")
        netdiv.className = "net"
        this.container.append(netdiv)
        let net = {
            x_pos: 1135,
            y_pos: 250,
            y_velocity: 0,
            x_velocity: 0,
            radius: 7,
            fishCollected: 0,
            element: netdiv,
            fishCaught: false,

        }
        return net;
    },
    //Isabelle
    createHook: function () {
        let hookdiv = document.createElement("div")
        hookdiv.className = "hook"
        this.container.append(hookdiv)
        let hook = {
            x_pos: Math.random() * 100,
            y_pos: Math.random() * 550,
            x_velocity: 3,
            y_velocity: Math.random() * 5,
            radius: 5,
            element: hookdiv,
            canSwim: true,
        }
        this.hooks.push(hook)
    },
    //Joah
    hookRespawn: function () {
        this.interval = window.setInterval(this.createHook.bind(anglerAnnihilator), 4500)
    },
    //Isabelle
    startGame: function () {
        this.animation1 = window.setInterval(this.animateFish.bind(anglerAnnihilator), 30);

    },
    animateFish: function () {


        //Isabelle
        this.renderNet();
        this.renderHooks();
        this.swimFish();
        this.swimHook();
        this.endGame();

        //Joah
        this.moveNet();
        this.renderFish();
        this.checkIfCaught();


    },
    //Joah
    renderFish: function () {
        for (let i = 0; i < this.fishes.length; i++) {
            this.fishes[i].element.style.top = this.fishes[i].y_pos + "px"
            this.fishes[i].element.style.left = this.fishes[i].x_pos + "px"
        }
    },
    //Isabelle
    renderNet: function () {
        this.net.element.style.top = this.net.y_pos + "px";
        this.net.element.style.left = this.net.x_pos + "px";

    },
    //Isabelle
    renderHooks: function () {
        for (let i = 0; i < this.hooks.length; i++) {
            this.hooks[i].element.style.top = this.hooks[i].y_pos + "px";
            this.hooks[i].element.style.left = this.hooks[i].x_pos + "px";
        }
    },


    //Joah
    swimFish: function () {
        for (let i = 0; i < this.fishes.length; i++) {
            this.fishes[i].x_pos = this.fishes[i].x_pos + this.fishes[i].x_velocity;
            if (this.fishes[i].x_velocity != null) {
                if (this.fishes[i].x_pos >= 1280) {
                    this.container.removeChild(this.fishes[i].element)
                    this.fishes[i].x_velocity = null
                }
            }
        }
    },
    //Isabelle
    swimHook: function () {
        for (let i = 0; i < this.hooks.length; i++) {
            this.hooks[i].x_pos = this.hooks[i].x_pos + this.hooks[i].x_velocity;
            if (this.hooks[i].x_velocity != null) {
                if (this.hooks[i].x_pos >= 1280) {
                    this.container.removeChild(this.hooks[i].element)
                    this.hooks[i].x_velocity = null
                }
            }
        }
    },

    // Joah
    checkIfCaught: function () {
        for (let i = 0; i < this.fishes.length; i++) {
            let dx = (this.net.x_pos + this.net.radius - (this.fishes[i].x_pos + this.fishes[i].radius))
            let dy = (this.net.y_pos + this.net.radius - (this.fishes[i].y_pos + this.fishes[i].radius))
            let distance = Math.sqrt(dx * dx * dy * dy)
            if (distance <= this.net.radius + this.fishes[i].radius && this.fishes[i].x_velocity != null) {
                this.fishes[i].y_pos = null
                this.fishes[i].x_velocity = null
                this.container.removeChild(this.fishes[i].element)
                this.net.fishCollected = this.net.fishCollected + 1
                document.getElementById("score").textContent = this.net.fishCollected
            }
        }
    },
    //Isabelle
    endGame: function () {
        for (let i = 0; i < this.hooks.length; i++) {
            let nx = (this.net.x_pos + this.net.radius - (this.hooks[i].x_pos + this.hooks[i].radius))
            let ny = (this.net.y_pos + this.net.radius - (this.hooks[i].y_pos + this.hooks[i].radius))
            let distance = Math.sqrt(nx * nx * ny * ny)
            if (distance <= this.net.radius + this.hooks[i].radius && this.hooks[i].x_velocity != null) {
                this.hooks[i].x_velocity = null
                this.hooks[i].y_pos = null
                this.container.removeChild(this.hooks[i].element)
                //Modified developer.mozilla.org code
                alert("GAME OVER, you caught a fish hook! Press OK to play again.");
                document.location.reload();
            }
        }
    },

    //Joah
    netMovement: function () {
        window.onkeydown = function (event) {
            if (event.keyCode == 38 || event.keyCode == 87) {
                anglerAnnihilator.net.y_velocity = -4
            }
            if (event.keyCode == 40 || event.keyCode == 83) {
                anglerAnnihilator.net.y_velocity = 4
            }
            if (event.keyCode == 39 || event.keyCode == 68) {
                anglerAnnihilator.net.x_velocity = 4
            }
            if (event.keyCode == 37 || event.keyCode == 65) {
                anglerAnnihilator.net.x_velocity = -4
            }
        }
        window.onkeyup = function (event) {
            if (event.keyCode == 38 || event.keyCode == 87) {
                anglerAnnihilator.net.y_velocity = 0
            }
            if (event.keyCode == 40 || event.keyCode == 83) {
                anglerAnnihilator.net.y_velocity = 0
            }
            if (event.keyCode == 39 || event.keyCode == 68) {
                anglerAnnihilator.net.x_velocity = 0
            }
            if (event.keyCode == 37 || event.keyCode == 65) {
                anglerAnnihilator.net.x_velocity = 0
            }
            if (event.keyCode == 27) {
                history.back();
            }
        }
    },
    // Joah
    moveNet: function () {
        this.net.y_pos = this.net.y_pos + this.net.y_velocity
        this.net.x_pos = this.net.x_pos + this.net.x_velocity
    },

    //Joah
    createScore: function () {
        //let sb = document.getElementById("score_board_number").value;
        let scoreNumber = [];
        for (let i = 0; i <= 100; i++) {
            if (i = 1 && this.net.fishCaught == true) {
                scoreNumber.push(i);
            }


        }
    },
}
anglerAnnihilator.init();