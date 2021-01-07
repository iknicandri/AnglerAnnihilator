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
    fishdiv.classList.add("yellowFish");
    
    this.container.append(fishdiv)
    let fish = {
        x_pos: Math.random() * 100,
        y_pos: Math.random() * 550,
        x_velocity: Math.random() * 1,
        y_velocity: Math.random() * .5,
        radius: 5,
        element: fishdiv,
    }
    return fish;
    },

    
    createGiantNet: function () {
        let netdiv = document.createElement("div")
        netdiv.className = "net"
        //let net = document.getElementsByClassName("net")
        this.container.append(netdiv)
        
        //document.body.appendChild(net);
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