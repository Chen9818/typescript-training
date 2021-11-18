class Point{
    private x: number;
    y: number;
    public draw(){
        console.log("x:"+this.x+",y:"+this.y)
    }
}

let point = new Point();

point.y = 2;
point.draw();