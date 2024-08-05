noseX=0;
noseY=0;

function preload() {
face_tatto = loadImage('https://i.postimg.cc/K8sL6VBg/tatto.png');

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
image(video, 0, 0,300,300);
fill(255, 0, 0);
stroke("black");
//circle(noseX, noseY, 20);
image(face_tatto, noseX, noseY, 110, 110);
}

function take_snapshot() {
    save('myfilterImage.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x-50;
    noseY = results[0].pose.nose.y-50;
    console.log("nose x =" + noseX);
    console.log("nose y =" + noseY);
}
}