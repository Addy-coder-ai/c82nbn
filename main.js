var mouseevent="empty";
var lastposOfX,lastposOfY;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="black";
widthOfLine=5;
canvas.addEventListener("mousedown",my_MouseDown);
function my_MouseDown(e) {
 mouseevent="mousedown";   
}
canvas.addEventListener("mousemove",my_MouseMove);
function my_MouseMove(e) {
currentPosOfMouseX=e.clientX-canvas.offsetLeft;    
currentPosOfMouseY=e.clientY-canvas.offsetTop; 
if (mouseevent=="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthOfLine;
    console.log("last Position Of X and Y coordinates =");
    console.log("X="+lastposOfX+"Y="+lastposOfY);
    ctx.moveTo(lastposOfX,lastposOfY);

    console.log("Current Position Of X and Y coordinates =");
    console.log("X="+currentPosOfMouseX+"Y="+currentPosOfMouseY);
    ctx.lineTo(currentPosOfMouseX,currentPosOfMouseY);
}
lastposOfX=currentPosOfMouseX;
lastposOfY=currentPosOfMouseY;
}
canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp(e) {
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseLeave);
function my_mouseLeave(e) {
    mouseevent="mouseleave";
}

