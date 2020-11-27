class Slingshot{
constructor(bodyA,pointB){
    var options= {
        bodyA:bird.body,
        pointB:pointB,
        stiffness:0.04,
        length:10
    }
    this.pointB = pointB
    this.sling=Constraint.create(options)
    World.add(world,this.sling) 
}
fly(){
this.sling.bodyA= null
}
display(){
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position
   
        strokeWeight(4)
        line(pointA.x,pointA.y,this.pointB.x,this.pointB.y)
    }
    
    
}
}