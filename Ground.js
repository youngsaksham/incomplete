class Ground{
    constructor(x, y, width, height) {
      var pac = {
       " isStatic" : true
      }
      this.body = Bodies.rectangle(x, y, width, height, pac);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
         
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
      }
  };
  