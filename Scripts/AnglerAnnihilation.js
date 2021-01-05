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
    //createFish: function () {
    //    let fishes = document.createElement("div")
    //    fishes.className = "fish" 
    //    let fishArray = [
    //        {name: 'greyFish', image: "https://images.twinkl.co.uk/tr/image/upload/illustation/Swimming-Fish---Animated-Tail---Y2-Gymnastics-Under-the-Sea-Lesson-1---Balancing-Lesson-Pack-English---KS1.png"},
    //         {name: 'yellowFish', image: "https://grid.gograph.com/tropical-cartoon-fish-eps-illustration_gg61604880.jpg"},
    //         {name: 'orangeFish', image:"https://thumbs.dreamstime.com/b/pygoplites-diacanthus-aquarium-tropical-fish-144745023.jpg"},
    //         {name: 'blueFish', image:"https://webstockreview.net/images/clipart-fish-teal-3.png"},
    //         {name: 'greenFish', image:"https://thumbs.dreamstime.com/b/zanclus-cornutus-aquarium-tropical-fish-144745146.jpg"},
    //         {name: 'redFish', image:"https://www.carlswebgraphics.com/fish-images/2020-red-fish-clipart.jpg"},
    //         {name: 'purpleFish', image:"https://img.favpng.com/2/6/13/image-fish-portable-network-graphics-download-png-favpng-ebhYVWTEHGsTG2iafehsBLJP8.jpg"},
    //         {name: 'magicFish', image:"https://webstockreview.net/images/clipart-borders-fish-8.png"},
    //         {name: 'brownFish', image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSggT2-afkjHeOQ0lVVWCCtlhtA8m-KQebg&usqp=CAU"}
    //     ]

    //     for (let i = 0; i < this.fish.length; i += 1) {
    //         var fishImage = this.fish[i]
    //        var pez = getRandomItem(fishArray)
    //         this.fishArray[i].push(this.fish)
    //         fish[i].innerHTML = pez.name + '<img src="' + pez.image + ' > '
    //         document.getElementById('animation_container').appendChild(fishImage);
    //     }
    // },

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