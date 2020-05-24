var video = document.getElementById("video_intercatiu");    
//var source = document.getElementById("source_video");
var div = document.getElementById('playVideo');
var pauses = [];

var i = 0;
function preparar()
{
    i = 0;
    video = document.getElementById("video_intercatiu");

    if(JSON.stringify(missatges) === JSON.stringify(ENG) )
    {
        // array amb les pauses (en segons)
        pauses = [13, 23.5, 40.5, 63.5, 81.5, 92, 107]; 
        

    }else if(JSON.stringify(missatges) === JSON.stringify(CAT) ){
        pauses = [11.5, 21, 33.5, 51.5, 69, 80, 95];
    }else{
        pauses = [12, 22, 33, 49, 62, 75, 89]
    } 
   /* if (video.hasAttribute("controls")) {
        video.removeAttribute("controls")   
    }*/

    div.innerHTML ="";
    div.innerHTML = '<button onclick="amagarBotons()" id="play" class="btn btn-primary what">PLAY</button>';
}
/*
video.ontimeupdate = function(){
    
    if( i < pauses.length){
        debugger;
        if(video.currentTime > pauses[i]) {
            this.pause();
            //mostrarBotons();
            i++;   
        }
    }    
}*/
        
video.addEventListener("timeupdate", function(){

    if( i < pauses.length){
        if(video.currentTime > pauses[i]) {
            this.pause();
            mostrarBotons(i);
            i++;   
        }
    }
});



function mostrarBotons(index){

    // farem que sigui visible
    div.style.display = "block";
    
    let a = document.createElement("a");
    
    var button = document.getElementById("2nboto")
    debugger;
    if(!button){
        button = document.createElement("button");
        button.className = "btn ml-3 btn-primary primari";
        button.id= "2nboto";
    }
    
    switch(index){
        case 0:
            button.innerHTML = missatges.nav.item1;
            a.href = "#who";            
            break;
        case 1:
            button.innerHTML = missatges.nav.item2;
            a.href = "#titol_skills";
            break;
        case 2:
            button.innerHTML = missatges.nav.item3;
            a.href = "#titol_entorns";
            break;
        case 3:
            button.innerHTML = missatges.nav.item4;
            a.href = "#titol_projectes";
            break;
        case 4:
            button.innerHTML = missatges.nav.item5;
            a.href = "#titol_practiques";
            break;
        case 5:
            button.innerHTML = missatges.nav.item6;
            a.href = "#elevator";
            break;
        case 6:
            button.innerHTML = missatges.nav.item7;
            a.href = "#titol_more";
            break;            
    }
    a.appendChild(button);
    div.appendChild(a);
}


function amagarBotons(){
    
    
    div.style.display = "none";
    video.play();
}


