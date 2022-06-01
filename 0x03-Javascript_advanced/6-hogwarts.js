class studentHogwarts {
  constructor(privateScore,name) {
    this.privateScore = 0;
    this.name = null;
  }
  
  changeScoreBy = function(points) {
    this.privateScore += points;
  }

  setName = function(newName) {
    this.name = newName;
  };

  rewardStudent = function() {
    this.changeScoreBy(1);
  };

  penalizeStudent = function() {
    this.changeScoreBy(-1);
  };

  getScore = function() {
    return (`${this.name}: ${this.privateScore}`)
  };

}

const harry = new studentHogwarts();
harry.setName('harry');
for(let i = 0; i < 4; i++){
  harry.rewardStudent();
}
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
for(let i = 0; i < 3; i++){
draco.penalizeStudent();
}
console.log(draco.getScore());
