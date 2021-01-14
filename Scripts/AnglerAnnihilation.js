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
        
      
        window.onkeyup = function(event) {
            if (event.keyCode == 27) {
                    history.back();
            }
        }

        this.netMovement();
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
            x_pos: 1150,
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
                this.moveNet();
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
            if(this.fishes[i].x_pos >= 1280) {
              this.fishes.pop(i)
                //document.getElementsByClassName('redFish').style.display = 'none';
                //document.getElementsByClassName('greenFish').style.display = 'none';
                //document.getElementsByClassName('purpleFish').style.display = 'none';
                //document.getElementsByClassName('orangeFish').style.display = 'none';
                
    
            }  
        }
        
    },
    //Isabelle
    swimHook: function () {
        for (let i = 0; i < this.hooks.length; i++) {

            this.hooks[i].x_pos = this.hooks[i].x_pos + this.hooks[i].x_velocity;
            if(this.hooks[i].x_pos >= 1280) {
                this.hooks.pop(i);
            }

        }
    },
    checkIfCaught: function() {
        for (let i = 0; i < this.fishes.length; i++){
           let fish = this.fishes[i];
            for (let n = 0; n < this.net.length; n++){
                let net = this.net[n];
            
            if(fish.caught== false) {
                for (let j =0; j < this.fishes.length; j++) {
                    let fx = fish.x_pos - this.fishes[j].x_pos;
                    let fy = fish.y_pos - this.fishes[j].y_pos;
                    let nx = net.x_pos - this.net[n].x_pos;
                    let ny = net.y_pos - this.net[n].y_pos;
                    let distance = Math.sqrt(fx * nx * fy * ny);

                    if (distance < fish.radius + net.radius) {
                       console.log("collision detected")
                        //this.fishes[i].caught = true;
                        }
                    }
                }
            }
        }
    },
    
    createScore: function() {
        let scorediv = document.createElement('div');
        scorediv.id = "score";
        this.container.append(scorediv)
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

   // upArrowPressed: function() {
    //var element = document.getElementsByClassName("net");
   // element.style.top = parseInt(element.style.top) - 5 + 'px';
    //},
    
   // downArrowPressed: function () {
    //    var element = document.getElementsByClassName("net");
    //    element.style.top = parseInt(element.style.top) + 5 + 'px';
    //},

    //moveSelection: function(event) {
        //evt = evt || window.event;
    //    switch (event.keyCode) {
    //        case 38:
    //            this.upArrowPressed();
    //            break;
    //        case 40:
    //            this.downArrowPressed();
    //            break;
    //    }
    //},
   //gameLoop: function() {
    //    moveSelection();
    //    setTimeout("gameLoop()",10)
    //}

    moveNet: function () {
        this.net.y_pos = this.net.y_pos + this.net.y_velocity
    }
}
anglerAnnihilator.init();