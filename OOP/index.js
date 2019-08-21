
//  Defining objects using object litteral syntax
 

 const circle = {
  radius: 1,
  location: {
    x: 5,
    y: 10
  },
  draw: function() {
    console.log('draw');
    
  }
 }
//  calling object's properties
circle.draw();

// FACTORY FUNCTION
function createCircle(radius) {
  return {
    radius, /* ES6 feature */
    draw : function() {
      console.log('Draw Elijah');
      
    }
  };
}
// creating an instance of that object
const circle1 = createCircle(1);

// CONSTRUCTOR FUNCTION
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
    console.log(radius);
  }
}
// const another = new Circle(1);
// In javascript functions are objects

/**
 * VALUE VS REFERENCE TYPE
 */
 
 let x = 10;
 let y = x;

 x = 20;
//  console.log(x);
//  console.log(y);
// ------------------------------

let obj = { value : 20}
function increase(obj) {
  obj.value++;
}
increase(obj);
// console.log(obj);
// ------------------------------


/**
 * ADDING AND REMOVING PROPERTIES
 */ 
function Rectangle() {
  return {
    lengh: 10,
    width: 5,
    print: function() {
      console.log(this.width);
    }
  };
}
const rect = Rectangle();
rect.area = rect.width * rect.lengh;
console.log(rect)
delete rect.area;  // remove a property
console.log(rect)
// ------------------------------

/**
 * ENUMS IN JS
 */

 for (const key in rect) {
   if (typeof rect[key] !== 'function') {
     console.log(rect[key]);
   }
 }

 const data = Object.keys(rect);
 console.log(data);

 for (let index = 0; index < rect.lengh; index++) {
   if ("width" in rect) {
     console.log('The rectangle has a width');
   }
 }

 /**
  * ABSTRACTION IN JS
  */

  // To declare private variable in objects ,
  // we have to create the as local variable with `let` key word
  // instead of creating them as properties

  // GETTERS AND SETTERS 

  function Computation() {
    this.z = 'Z-Axis'
    let a = 50;

    Object.defineProperty(this, 'defaultProperty', {
      get: function() {
        return a;
      },
      set: function (value) {
        if (!values.x || !value.y) {
          throw new Error('Invalid circle location');
        }
        defaultProperty = value;
      }
    });
  }
const comp = new Computation();
console.log(comp);

// PROPERTY DESCRIPTOR

let xy = { name : 'Elijah' };
// let xyBase = Object.getPrototypeOf(xy);
// let xyBaseDescriptor =  Object.getOwnPropertyDescriptor(xyBase, 'toString');
// console.log(Object.keys(xyBaseDescriptor));

Object.defineProperty(xy, 'name', {
  writable:false,
  configurable: true
});
xy.name = 'BUsanga';
delete xy.name;
console.log(xy.name);
// ------------------------------

// PROTOTYPE VS INSTANCE MEMBERS

function Triangle(base) {
  // Instance memmber
  this.base = base;
  this.move =  function () {
    console.log('move');
  }
}
// Prototye memmber
Triangle.prototype.draw =  function () {
  this.move();
  console.log('draw');
}
// Overriding the prototype's toString() method 
Triangle.prototype.toString = function () {
  console.log('Triangular shape with the base ' + this.base);
}
let t1 = new Triangle(1);

// ITERATING OVER INSTANCE AND PROTOTYPE MEMBERS

// Returns instance members (or own members)
console.log(Object.keys(t1));
// Returns all members (Instance + Prototype)
for (let key in t1) console.log(key);

// PROTOTYPICAL INHERITANCE

function Shape (color) {
  this.color = color;
}
Shape.prototype.duplicate = function () {
  console.log('duplicate');
}

function Square (width, color) {
  // calling the super constructor with arg passed
  Shape.call(this, color);
  // ------------------------
  this.width = width;
}
// Inheritting the Shape prototypec
Square.prototype =  Object.create(Shape.prototype);
//  when we reset the prototype we have also to reset the constructor
// new Square.prototype.constructor(5) == new Square(5);
Square.prototype.constructor = Square;

const sh = new Shape();
const sq = new Square(4, 'green');

// INTERMIDIATE FUNCTION INHERITANCE

  // function extend (Child, Parent) {
  //   Child.prototype = Object.create(Parent.prototype);
  //   Child.prototype.construcor = Parent;
  // }

  // extend(Square, Shape);


// COMPOSITiON & MIXINS

// Defining the mixin
function mixin (target, ...sources) {
  // 
  Object.assign(target, ...sources);
}

// Compositions
const canEat = {
  eat : function () {
    console.log('eat');
  }
}

const canWalk = {
  walk : function () {
    console.log('walk');
  }
}

const canSwim = {
  swim : function () {
    console.log('swim');
  }
}

// storing the object into a variable
const person = Object.assign({}, canEat, canWalk, canSwim);
console.log(person);

// declaring as an object the assign compositions with mixin
function GoldFish () {
}
mixin(GoldFish, canEat, canSwim);
const goldfish = new GoldFish();
console.log(goldfish);









