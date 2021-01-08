let anglerAnnihilator = {
    container: document.getElementById("animation_container"),
    fishes: [],
    net: [],
    hooks: [],
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
    },
    createFish: function () {
    let fishdiv = document.createElement("div")
    fishdiv.className = "fish"
    this.container.append(fishdiv);
    let fish = {
        type: Math.round(Math.random() * 8),
        x_pos: Math.random() * 100,
        y_pos: Math.random() * 550,
        x_velocity: Math.random() * 1,
        y_velocity: Math.random() * .5,
        radius: 5,
        element: fishdiv,
    }
    if(fish.type == 1) {
            fish.element.classList.add("yellowFish")
    } else if 
        (fish.type == 2){
            fish.element.classList.add("redFish")
    } else if 
        (fish.type == 3){
            fish.element.classList.add("blueFish")
    } else if 
        (fish.type == 4){
            fish.element.classList.add("purpleFish")
    } else if 
        (fish.type == 5){
            fish.element.classList.add("orangeFish")
    } else if
        (fish.type == 6){
            fish.element.classList.add("greyFish")
    } else if
        (fish.type == 7){
            fish.element.classList.add("pinkFish")
    } else if
        (fish.type == 8){
            fish.element.classList.add("greenFish")
    }
    return fish;
    },

    
    createGiantNet: function () {
        let netdiv = document.createElement("div")
        netdiv.className = "net"
       
        this.container.append(netdiv)
        let net = {
            x_pos: Math.random() * 1250,
            y_pos: Math.random() * 500,
            x_velocity: 0,
            y_velocity: Math.random() * .5,
            radius: 5,
            element: netdiv,
        }
        return net;
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

    startGame: function () {

    },
    endGame: function () {

    },

    swimFish: function () {
        for (let i = 0; i < this.fishes.length; i++) {
            if (this.fishes[i].canSwim == true) {

            }
        }
    },

}
anglerAnnihilator.init();