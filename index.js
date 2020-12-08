// Add your Circle class here
pi = Math.PI;
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    return this.radius * 2;
  }
  
  get circumference() {
     
    return pi * (this.radius * 2);
  }
  
  get area() {
    pi = Math.PI;
    return pi * (this.radius * this.radius);
  }
  
}







