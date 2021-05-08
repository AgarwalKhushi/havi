class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
           pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.p=pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pA = this.chain.bodyA.position;
        var pB = this.p;
        strokeWeight(4);
        line(pA.x, pA.y, pB.x, pB.y);
    }
    
}