let anglerAnnihilator = {
    container: document.getElementById("animation_container"),
    fishes: [],
    fishTypeImages: [],

    init: function () {

        for (let i = 0; i < 10; i++) {
            this.fishes.push(this.createFish());
          }

      this.renderFish();
      this.startGame();
    },
    createFish: function () {
    let fishdiv = document.createElement("div")
    fishdiv.className = "fish"
    this.container.append(fishdiv)
    let fish = {
        x_pos: Math.random() * 580,
        y_pos: Math.random() * 580,
        x_velocity: Math.random() * 1,
        y_velocity: Math.random() * .5,
        radius: 5,
        element: fishdiv,
    }
    return fish;
    },

    fishtype: function () {
    
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
    renderFish: function () {
        for (let i = 0; i < this.fishes.length; i++) {
            console.log("renderingFish")
            this.fishes[i].element.style.top = this.fishes[i].y_pos + "px"
            this.fishes[i].element.style.left = this.fishes[i].x_pos + "px"
        }
    },
    

    //randomNum: function () {
    //    random = Math.random() * 8;
    //   return Math.round(random)
    
    //}


}
anglerAnnihilator.init();