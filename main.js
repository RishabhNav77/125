leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
difference = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotResult);
}

function draw() {
    background("#ffffff");
    textSize(difference);
    fill("#000000");
    text('Rishabh',leftWristx,leftWristy);
    
    
}

function modelloaded() {
    console.log("Model is Loaded !")

}

function gotResult(results) {
    if(results.length > 0) {
        leftWristx = results[0].pose.leftWrist.x;
       rightWristx = results[0].pose.rightWrist.y;
       leftWristy = results[0].pose.leftWrist.y; 
       difference = floor(leftWristx - rightWristx);

       console.log(results);
       console.log("leftWristx = " + leftWristx + "rightWristx = " + rightWristx);
       console.log("difference = " + difference);
    }
}