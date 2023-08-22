// Circle specific
let diameter = 30;
let maxLines = 50;

// Full draw
let xQuant = 10; //number of circles in X
let yQuant = 30; //number of circles in Y
let gridPadding = 5; //Space between each circle

// Canvas
let xsize = (xQuant + 1) * (diameter + gridPadding);
let ysize = (yQuant + 1) * (diameter + gridPadding);

function setup() {
    createCanvas(xsize, ysize, SVG);
    strokeWeight(1);
    stroke('black');
    noFill();
    noLoop();
}

function draw() {
    translate(diameter, diameter);

    for (row = 0; row < yQuant; row++) {
        for (col = 0; col < xQuant; col++) {

            drawCircle(diameter, maxLines * (1 - row / yQuant));
            translate((diameter + gridPadding), 0);

        }

        translate(-(xQuant * (diameter + gridPadding)), (diameter + gridPadding));

    }
}

function drawCircle(d, n) {

    let z = d / 2;

    let theta1, theta2;

    for (k = 1; k < n; k++) {

        theta1 = random(0, 2 * PI);
        theta2 = random(0, 2 * PI);

        x1 = z * cos(theta1);
        y1 = z * sin(theta1);

        x2 = z * cos(theta2);
        y2 = z * sin(theta2);

        line(x1, y1, x2, y2);
        ellipse(x1, y1, 3);
        ellipse(x2, y2, 3);

    }

}

function mousePressed() {
    save("circles_from_lines_variant.svg"); // give file name
}