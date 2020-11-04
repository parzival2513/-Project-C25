class Paper{
    constructor(x, y, radius){
        var options={
          restitution:0.3,
             isStatic:false,
             friction:0.5,
             density: 1.2,
        }

        this.body = Bodies.circle(x, y, radius-10, options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        //fill(0, 0, 255);
        //circle(pos.x, pos.y, this.radius*2);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius*2, this.radius*2);
    }
}