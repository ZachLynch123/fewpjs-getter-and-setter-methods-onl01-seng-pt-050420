// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    return this.radius * 2;
  }
  
  get circumference() {
    
  }
  
  get area() {
    pi = Math.PI;
    return pi * (this.radius * this.radius);
  }
  
}







