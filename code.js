function btn_Click(){
    var vid = document.getElementById("ricvid");
    if (vid.style.visibility == "hidden") {vid.style.visibility = "visible";}
    else if(vid.style.visibility == "visible"){vid.style.visibility = "hidden";}
    if (vid.paused)
        vid.play(); 
    else if (!vid.paused)
        vid.pause();
    
}

function codeAddress(){
    var vid = document.getElementById("ricvid");
    vid.style.visibility = "hidden";
}

window.onload = codeAddress;