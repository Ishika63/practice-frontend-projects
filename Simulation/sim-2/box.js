function Box(x, y, w, h, color) {
    
    var options={
            friction: 0.5,
            restitution: 0.8
            
    };

    this.body = Bodies.rectangle(x, y, w, h,options);
    this.w = w;
    this.h = h;


    //boxA = Bodies.rectangle(100, 100, 80, 80);
    Composite.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        //fill(Math.floor(Math.random*255), Math.floor(Math.random*255), Math.floor(Math.random*255));
        fill(0,255,0);
        rect(0, 0, w, h);
        pop();
    }
}