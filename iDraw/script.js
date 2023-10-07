const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 60;
canvas.height = 400;

let start_background_color = "white";
let context = canvas.getContext("2d");
context.fillStyle = start_background_color;
context.fillRect(0, 0, canvas.width, canvas.height);

let draw_color = "black";
let draw_width = "2";
let is_drawing = false;

let restore_array = [];
let index = -1;

function change_color(element){
    draw_color = element.style.background;
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(e){
    is_drawing = true;
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    e.preventDefault();
}

function draw(e){
    if(is_drawing){
        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.strokeStyle = draw_color;
        context.lineWidth = draw_width;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
        e.preventDefault();
    }
}

function stop(e){
    if(is_drawing){
        context.stroke();
        context.closePath();
        is_drawing = false;
        e.preventDefault();
        if(e.type!= "mouseout"){
            restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
            index++;
        }
        console.log(restore_array);
    }
}
function clear_canvas(){
    context.fillStyle = start_background_color;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);
    restore_array = [];
    index = -1;
}
function undo_canvas(){
    if(index<=0){
        clear_canvas();
    }else{
        index--;
        restore_array.pop();
        context.putImageData(restore_array[index], 0, 0);
    }
}
