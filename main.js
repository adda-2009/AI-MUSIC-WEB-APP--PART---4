song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function setup()
{
canvas=createCanvas(200,200);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{
image(video,0,0,200,200);
fill("#E63232");
stroke("#E63232");
circle(leftWristX,leftWristY,25);
InNumberleftWristY=Number(leftWristY);
removeDecimals=floor(InNumberleftWristY);
volume=removeDecimals/600;
document.getElementById("volumeh3").innerHTML="volume = "+volume;
song.setVolume(volume);
}

function preload()
{
song=loadSound("Made-In-India(PaglaSongs).mp3");
}

function play()
{
song.play();
song.setVolume(1);
song.rate(1);
}

function stop()
{
song.stop();
}

function modelLoaded()
{
console.log('Model Loaded.... :)');
}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);
console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
}
}