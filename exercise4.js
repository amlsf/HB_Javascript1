var cat = {
        energy: 10,
        food: 20, 
        social: 3,
        happiness: 15, 
        // Adds random number of points to energy up to num minutes of sleep; can also put negatives in
        nap: function(num){
            random = Math.random();
            this.energy += Math.floor(random * (num+1));
            // console.log(random);
            // console.log(this.energy);
        },
        // Adds up from 10 to 50 max points if feed cat yummyFood, otherwise add 5
        feed: function(food){
            yummyFood = ['chicken','fish','beef']
            if (yummyFood.indexOf(food) > -1) {
                this.food += Math.floor(Math.random() * (51 - 10) + 10)
            }
            else {
                this.food += 5;
            }
        },
        // Makes the cat moody, sometimes does not want to be pet 
        cuddle: function(){
            random = Math.floor(Math.random() * 2)
            if (random === 1) {
                console.log("prrrr");
                this.social += 20;
            } else {
                console.log("ouch, you got scratched by a moody kitty!")
                this.social -= 15
            }
        },
        play: function(){
            console.log("chase!");
            this.happiness += 25;
        },
        // Prints all the properties of cat, does not print functions
        printall: function(){
            for (property in cat) {
                if (typeof this[property] !== 'function') {
                    console.log(property + ': ' + this[property]);
                }
            }
        },
        petVsLaser: function(petOrLaser){
            if (petOrLaser === 'pet') {
                this.happiness += 12;
                this.energy -= 8;
            } else if (petOrLaser === 'laser') {
                this.food -= 10;
                this.happiness += 20;
                this.energy +=10;
            } else {
                console.log('Invalid input. Input \'pet\' or \'laser\' only')
            }
        }
};


cat.printall();

// cat.nap(20);
// cat.nap(-50);
// cat.printall();

// cat.feed('chicken');
// cat.feed('otherstuff');
// cat.printall();

// cat.cuddle();
// cat.printall();

// cat.play();
// cat.printall();

// cat.petVsLaser('yuck');
// cat.petVsLaser('laser');
// cat.petVsLaser('pet');
// cat.printall();


