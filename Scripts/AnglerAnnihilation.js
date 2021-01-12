let anglerAnnihilator = {
    container: document.getElementById("animation_container"),
    animation1: undefined,
    fishes: [],
    net: [],
    hooks: [],
    score: {},
    //fishTypeImages: [],

    init: function () {

        for (let i = 0; i < 8; i++) {
            this.fishes.push(this.createFish());
        }
        this.renderFish();
        //this.startGame();
        for (let i = 0; i < 1; i++) {
            this.net.push(this.createGiantNet());
        }
        this.renderNet();
        for (let i = 0; i < 3; i++) {
            this.hooks.push(this.createHook());
        }
        window.onkeyup = function(event) {
            if (event.keyCode == 27) {
                    history.back();
            }
        }

        this.netMovement();
        this.renderHooks();
        this.startGame();

        
    },
    createFish: function () {
    let fishdiv = document.createElement("div")
    fishdiv.className = "fish"
    this.container.append(fishdiv);
    let fish = {
        type: Math.round(Math.random() * 8),
        x_pos: Math.random() * 100,
        y_pos: Math.random() * 500,
        x_velocity:  3,
        y_velocity: .5,
        radius: 5,
        element: fishdiv,
        canSwim: true,
    }
    if(fish.type == 1) {
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
        return fish;
    },


    createGiantNet: function () {
        let netdiv = document.createElement("div")
        netdiv.className = "net"
        this.container.append(netdiv)
        let net = {
            x_pos: 1250,
            y_pos: 250,
            y_velocity: 0,
            radius: 5,
            element: netdiv,
        }
        return net;
        },
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
            return hook;
            },
            startGame: function () {
                this.animation1 = window.setInterval(this.animateFish.bind(anglerAnnihilator), 30);
            },
            animateFish: function () {
                this.renderFish();
                this.renderNet();
                this.renderHooks();
                this.swimFish();
                this.swimHook();
                this.moveNet();
                
            },

        renderFish: function () {
            for (let i = 0; i < this.fishes.length; i++) {
                this.fishes[i].element.style.top = this.fishes[i].y_pos + "px"
                this.fishes[i].element.style.left = this.fishes[i].x_pos + "px"
            }
        },
        renderNet: function () {
            for (let i = 0; i < 1; i++) {
                this.net[i].element.style.top = this.net[i].y_pos + "px";
                this.net[i].element.style.left = this.net[i].x_pos + "px";
            }
        },
        renderHooks: function () {
            for (let i = 0; i < this.hooks.length; i++) {
                this.hooks[i].element.style.top = this.hooks[i].y_pos + "px";
                this.hooks[i].element.style.left = this.hooks[i].x_pos + "px";  
            }
        },

    

    swimFish: function () {
        for (let i = 0; i < this.fishes.length; i++) {
            this.fishes[i].x_pos = this.fishes[i].x_pos + this.fishes[i].x_velocity;
        }
    },
    swimHook: function () {
        for (let i = 0; i < this.hooks.length; i++) {

            this.hooks[i].x_pos = this.hooks[i].x_pos + this.hooks[i].x_velocity;


        }
    },

    startButton: function () {

    },
    endGame: function () {

    },
    
    netMovement: function () {
        window.onkeydown = function (event) {
            if(event.keyCode == 38 || event.keyCode == 87) {
                anglerAnnihilator.net.y_velocity = 4
            }
        }
    },

    moveNet: function () {
        this.net.y_pos = this.net.y_pos + this.net.y_velocity
    }
}
anglerAnnihilator.init();