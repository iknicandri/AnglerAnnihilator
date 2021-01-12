let anglerAnnihilator = {
    container: document.getElementById("animation_container"),
    animation1: undefined,
    fishes: [],
    net: [],
    hooks: [],
    score: {},
    //fishTypeImages: [],

    //Isabelle
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
        this.renderHooks();
        this.startGame();
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
        x_velocity:  3,
        y_velocity: .5,
        radius: 5,
        element: fishdiv,
        canSwim: true,
        caught: false,
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

    //Isabelle
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
            return hook;
            },
            //Isabelle
            startGame: function () {
                this.animation1 = window.setInterval(this.animateFish.bind(anglerAnnihilator), 30);
            },
            animateFish: function () {
                this.renderFish();
                this.renderNet();
                this.renderHooks();
                this.swimFish();
                this.swimHook();
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
            for (let i = 0; i < 1; i++) {
                this.net[i].element.style.top = this.net[i].y_pos + "px";
                this.net[i].element.style.left = this.net[i].x_pos + "px";
            }
        },
        //Isabelle
        renderHooks: function () {
            for (let i = 0; i < this.hooks.length; i++) {
                this.hooks[i].element.style.top = this.hooks[i].y_pos + "px";
                this.hooks[i].element.style.left = this.hooks[i].x_pos + "px";  
            }
        },

    
    //Isabelle
    swimFish: function () {
        for (let i = 0; i < this.fishes.length; i++) {
            this.fishes[i].x_pos = this.fishes[i].x_pos + this.fishes[i].x_velocity;
        }
    },
    //Isabelle
    swimHook: function () {
        for (let i = 0; i < this.hooks.length; i++) {

            this.hooks[i].x_pos = this.hooks[i].x_pos + this.hooks[i].x_velocity;


        }
    },
    checkIfCaught: function () {
        
        var fish1 = {x: 5, y: 5, width: 70, height: 70}
        var net2 = {x: 20, y: 10, width: 100, height: 100}
        
        if (fish1.x < net2.x + net2.width &&
           fish1.x + fish1.width > net2.x &&
           fish1.y < net2.y + net2.height &&
           fish1.y + fish1.height > net2.y) {
            // collision detected!
        }
        
        // filling in the values =>
        
        if (5 < 30 &&
            55 > 20 &&
            5 < 20 &&
            55 > 10) {
            // collision detected!
        }


        //for(let i = 0; i < this.net.length; i++) {
        //    let aNet = this.net[i];
        //    if(aNet.caught == false){
        //       for (let j = 0; j < this.fishes.length; j++) {
        //            let dx = aNet.x_pos - this.fishes[j].x_pos;
        //            let dy = aNet.y_pos - this.fishes[j].y_pos;
        //            let distance = Math.sqrt(dx * dx * dy * dy);
        //
        //            if (distance < aNet.radius + this.fishes[j].radius) {
        //                console.log("fish have been caught")
        //                if(this.fishes[j].caught == false) {
        //                    this.fishes[j].caught = true;
        //                }
        //            }
        //        }
        //    }
        // }
    },

    startButton: function () {

    },
    endGame: function () {

    },
    Respawn: function () {
    
    },

}
anglerAnnihilator.init();