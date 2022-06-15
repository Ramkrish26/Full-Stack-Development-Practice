var r,g,b;
r = Math.round(Math.random()*256); 
g = Math.round(Math.random()*256);
b = Math.round(Math.random()*256);
document.getElementById("button1").onclick = function(){
    document.getElementById("facebook").style.backgroundColor = "rgb("+r+","+g+","+b+")";
}
