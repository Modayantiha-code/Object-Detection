modelstatus = "";
finalarray = [];
x = 0;
y = 0;


function setup() {
    mycanvas = createCanvas(700, 440);
    mycanvas.center()
    COCOmodel = ml5.objectDetector('cocossd', modelhasloaded);
    document.getElementById("status").innerHTML = "Detecting objects...";
    webcam = createCapture(VIDEO);
    webcam.hide();
}

function modelhasloaded() {
    console.log("Model has loaded");
    modelstatus = true
    COCOmodel.detect(webcam, getResults);
}

function getResults(errorname, resultsarray) {
    if (errorname) {
        console.error(errorname);
    } else {
        console.log(resultsarray);
        finalarray = resultsarray;
    }
}



function draw() {
    image(webcam, 0, 0, 700, 440);
    if (modelstatus != "") {
        randomred = random(255);
        randomgreen = random(255);
        randomblue = random(255);
        for (forloopvalue = 0; forloopvalue = finalarray.length; forloopvalue = forloopvalue + 1) {
            document.getElementById("status").innerHTML = "Objects Detected";
            document.getElementById("numberofobjects").innerHTML = finalarray.length;
            x = finalarray[forloopvalue].x;
            y = finalarray[forloopvalue].y;
            height = finalarray[forloopvalue].height;
            width = finalarray[forloopvalue].width;
            objectname = finalarray[forloopvalue].label;
            fill(randomred, randomgreen, randomblue);
            text(objectname, x, y);
            noFill();
            stroke(randomred, randomgreen, randomblue);
            rect(x, y, width, height);
        }
    }

}