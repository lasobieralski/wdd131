//example one
const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
console.log("Area1:", area);
radius = 4;
area = radius * radius * PI;
console.log("Area2:", area);


//example two
//const PI = 3.14
//let area = 0;
function circleArea(radius) {
    //const area = radius * PI;
    const area = radius * radius * PI;
    return area;
}
area = circleArea(3);
//console.log(area);
console.log("Area1:", area);
radius = 4;
area = circleArea(4);
console.log("Area2:", area);


//example three
//const PI = 3.14;
radius = 3; //(let radius = 3) is defined above
//let area = 0;
area = radius * radius * PI;
console.log(area);
radius = 4;
area = radius * radius * PI;
console.log(area);


//example four
//const PI = 3.14
//let area = 0;
function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}
area = circleArea(3);
console.log(area);
area = circleArea(4);
console.log(area);