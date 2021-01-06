let anglerAnnihilator = {
    container: document.getElementById("animation_container"),
    fishes: [],
    //fishTypeImages: [],

    init: function () {

        for (let i = 0; i < 10; i++) {
            this.fishes.push(this.createFish());
          }
      
      this.renderFish();
      //this.startGame();
      this.fishType();
    },
    createFish: function () {
    let fishdiv = document.createElement("div")
    fishdiv.className = "fish"
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

    fishType: function () {
        let RandomNum = function(){
            Random = Math.random ()*8;
            return Math.round(Random)
        }
        let fishType1 = document.getElementsByClassName("fish")
        let fishTypeImages = 
    [ 
    "https://www.clipartmax.com/png/middle/248-2482386_cute-red-fish-clipart-transparent-background-clip-art-fish.png",
    "https://previews.123rf.com/images/segoviadesign/segoviadesign1207/segoviadesign120700029/14288165-tropical-cartoon-fish.jpg",
    "https://thumbs.dreamstime.com/z/acanthurus-aquarium-tropical-fish-144745305.jpg",
    "https://thumbs.dreamstime.com/z/pygoplites-diacanthus-aquarium-tropical-fish-144745023.jpg",
    "https://images.twinkl.co.uk/tr/image/upload/illustation/Swimming-Fish---Animated-Tail---Y2-Gymnastics-Under-the-Sea-Lesson-1---Balancing-Lesson-Pack-English---KS1.png",
    "https://img.favpng.com/2/6/13/image-fish-portable-network-graphics-download-png-favpng-ebhYVWTEHGsTG2iafehsBLJP8.jpg",
    "https://webstockreview.net/images/clipart-borders-fish-8.png"]
    fishType1.src = fishTypeImages[RandomNum()];
    if (this.fishes.type == 1) {
        this.fishes.element.style.getElementsByClassName("greenFish")
    }
    
    },

    giantNet: function () {

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
            this.fishes[i].element.style.top = this.fishes[i].y_pos + "px"
            this.fishes[i].element.style.left = this.fishes[i].x_pos + "px"
           // if (fishes.green == 1) {
            //    fishes.element.style.backgroundImage = "https://st4.depositphotos.com/22309242/24217/v/950/depositphotos_242170550-stock-illustration-zanclus-cornutus-aquarium-tropical-fish.jpg"
          //  }
        }
    },
    

    //randomNum: function () {
    //    random = Math.random() * 8;
    //   return Math.round(random)
    
    //}


}
anglerAnnihilator.init();