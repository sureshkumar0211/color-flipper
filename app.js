
var textBtn=document.querySelector(".text");
function color(){
    var randomcolor = (Math.floor(Math.random()*16777209)).toString(16);
    document.body.style.backgroundColor="#" + randomcolor;
    textBtn.innerText = "#" + randomcolor;
}