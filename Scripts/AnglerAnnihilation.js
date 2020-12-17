let anglerAnnihilator = {
    container: document.getElementById("animation_container"),
    fish: [],
    init: function () {
        
        //fishes.src = fish[randomNum()];

        this.renderFish();
        this.startGame();

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

    startGame: function () {

    },
    endGame: function () {

    },

    swimFish: function () {
        for (let i = 0; i < this.fish.length; i++) {
            if (this.fish[i].canSwim == true) {

            }
        }
    },
    renderFish: function () {
        for (let i = 0; i < this.fish.length; i++) {
            this.fish[i].element.style.top = this.fish[i].y_pos + "px"
            this.fish[i].element.style.left = this.fish[i].x_pos + "px"
        }
    },
    startAnimation: function () {
        var frames = document.getElementById("animation").children;
        var frameCount = frames.length;
        var i = 0;
        setInterval(function () { 
            frames[i % frameCount].style.display = "none";
            frames[++i % frameCount].style.display = "block";
        }, 100);
    }

    //randomNum: function () {
    //    random = Math.random() * 8;
    //   return Math.round(random)
    
    //}


}

MyApp.init();