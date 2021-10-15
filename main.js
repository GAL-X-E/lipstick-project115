noseX = 0;
noseY = 0;

function preload(){
    l1 = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y+15;
    }
}

function draw(){
    image(video,0,0,300,300);
    image(l1,noseX,noseY,50,25);
}

function take_snapshot(){
    save('l1.png');
}