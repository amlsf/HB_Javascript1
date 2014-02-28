var aboutMe = {
  hometown: "Dallas, TX",
  hair: "brown",
  color: function(color){
    this.hair = color    
  }
}; 

// aboutMe.hair = "blue";

aboutMe.color('green')
console.log(aboutMe.hair);


aboutMe.color('blue')
console.log(aboutMe.hair);