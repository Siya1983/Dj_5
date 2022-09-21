song_1="";
song_2="";

scoreLeftWrist=0;
leftWristX=0;
leftWristY=0;


song1_status="";
song2_status="";
rightWrightX=0;
rightWrightY=0;
scoreRightWrist=0;

function setup(){
    canvas= createCanvas(550, 400);
    canvas.position(370, 180)

    video= createCapture(VIDEO);
   video.size(550, 400);
   video.position(370, 180);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload(){
song_1= loadSound("music.mp3");
song_2= loadSound("music2.mp3");
}


function draw(){
    image(video, 0, 0, 600, 500);
song1_status= song_1.isPlaying();
song2_status= song_2.isPlaying();
    fill("FF0000");
    stroke("FF0000");

    if(scoreLeftWrist > 0.2);
    {
        circle(leftWristX,leftWristY,20);
song_1.stop()
if(song2_status ==  false){
song_2.play();
document.getElementById("song").innerHTML = "Playing peter the pan song";
}
}
 
if(scoreRightWrist > 0.2);
    {
        circle(RightWristX,RightWristY,20);
song2.stop()
if(song1_status ==  false){
song_1.play();
document.getElementById("song").innerHTML = "Playing harry potter theme song";
}
}
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);

scoreLeftWrist=results[0].keypoints[9].score;
console.log("scoreLeftWrist = " + scoreLeftWrist);

leftWristX=results[0].pose.leftWrist.X;
leftWristY=results[0].pose.leftWrist.Y;

scoreRightWrist=results[0].keypoints[10].score;



rightWristX=results[0].pose.rightWrist.X;
rightWristY=results[0].pose.rightWrist.Y;

console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function play(){
song.play();
song.setVolume(1);
song.rate(1);
}