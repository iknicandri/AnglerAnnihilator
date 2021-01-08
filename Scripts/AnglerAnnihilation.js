let anglerAnnihilator = {
    container: document.getElementById("animation_container"),
    fishes: [],
    //fishTypeImages: [],

    init: function () {

        for (let i = 0; i < 8; i++) {
            this.fishes.push(this.createFish());
          }
      this.renderFish();
      //this.startGame();
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
        fish.element.classList.add("yellowFish");
    } 
    return fish;
    },

    
    createGiantNet: function () {
        let netdiv = document.createElement("div")
        netdiv.className = "net"
        this.container.append(netdiv)
        let net = {
            x_pos: Math.random() * 100,
            y_pos: Math.random() * 550,
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