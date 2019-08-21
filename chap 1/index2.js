/**
 * ES6 CLASSES
 * 
 */ 


 class test {


   constructor(id) {
    //  dfining properties at constructor level
     this.id = id;
     this.name = function() {
       console.log('I am a test class');
       
     }
   }

  //  defining properties or function at prototype level
  description() {
    console.log('I am adescription function');
    
  }

  /**
   * Defining static functions
   * Static FX: 
   *  are always used as utility functions
   *  
   */
  static mathe (one , two) {
    return one + two;
  }


 }
 

