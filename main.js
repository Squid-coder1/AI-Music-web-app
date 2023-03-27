music1="";
music2="";

leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function preload() {
    song=loadSound("music.mp3");
    song=loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    image(video,0,0,600,500)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    scoreRightWrist= results[0].poses.keypoints[10].score;
    scoreLeftWrist= results[0].poses.keypoints[9].score;
    console.log("scoreLeftWrist =" + scoreLeftWrist);    

    leftWristX =results[0].pose.leftWrist.x;
    leftWristY =results[0].pose.leftWrist.Y;
    console.log("leftWristX =" + "leftWristX" +leftWristY);

    rightWristX =results[0].pose.rightWrist.x;
    rightWristY =results[0].pose.rightWrist.Y;
    console.log("rightWristX =" + "rightWristX" +rightWristY);
    }
}