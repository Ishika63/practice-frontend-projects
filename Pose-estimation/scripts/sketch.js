let video;
let poseNet;
let pose;
let X = 40;
let Y = 40;

function setup(){
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', getPoses);
}


function getPoses(poses){
    if(poses.length > 0){
        pose = poses[0].pose.keypoints;
    }
}

function modelReady(){
    console.log("model loaded");
}

function draw(){
    background(0);
    image(video, 0, 0, 640, 480);
    if(pose){
        // console.log(pose)
        for(let i=0;i<pose.length;i++){
            if(pose[i].score > 0.2){
                fill(255);
                ellipse(pose[i].position.x, pose[i].position.y, 20);
            }
        }
        
    }
}