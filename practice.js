function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = {x: 0, y: 0}
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);

console.log(Object.keys(circle));
