song="";
scoreRightWrist=0;
scoreLeftWrist=0;
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(400, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", obtainedResults)
}

function modelLoaded(){
    console.log("Model's been initialised");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function obtainedResults(results){
    if(results.length>0){
        console.log(results);
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLefttWrist=results[0].pose.keypoints[9].score;
        console.log("The Right Wrist's score's "+scoreRightWrist+" and the Left Wrist's score's ")+scoreLeftWrist;
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        console.log("right wrist x position = "+rightWristX+" and left wrist x position = "+leftWristX);
        rightWristY=results[0].pose.rightWrist.y;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("right wrist y position = "+rightWristY+" and left wrist y position = "+leftWristY);
    }
}

function draw(){
    image(video, 0, 0, 400, 300);
}