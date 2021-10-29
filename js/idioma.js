
var missatges = CAT;
var source = document.getElementById("source_video");


function canviarIdioma(idioma){
    // canviem el video en funcio del kello
    var video = document.getElementById("video_intercatiu");    
    var cv = document.getElementById("cv_link");    
    if(idioma == "ENG" ){
        missatges = ENG;
        //video.src="videos/interactiu_english.mp4";
        cv.href = "files/CV Marti Quintana English.pdf"
    }else if(idioma == "CAT"){
        missatges = CAT;
        //video.src="videos/interactiu_catalan.mp4";
        cv.href = "files/CV Marti Quintana Catalan.pdf"
    }else{
        missatges = ESP;
        //video.src="videos/interactiu_spanish.mp4";
        cv.href = "files/CV Marti Quintana Spanish.pdf"
    }
    aplicarCanvis();
    //preparar();

}

function aplicarCanvis(){


    // NAV
    document.getElementById("item1").innerHTML = missatges.nav.item1;
    //document.getElementById("item2").innerHTML = missatges.nav.item2;
    //document.getElementById("item3").innerHTML = missatges.nav.item3;
    document.getElementById("item4").innerHTML = missatges.nav.item4;
    document.getElementById("item5").innerHTML = missatges.nav.item3;
    //document.getElementById("item6").innerHTML = missatges.nav.item6;
    document.getElementById("item7").innerHTML = missatges.nav.item7;
    

    // WHO
    document.getElementById("titol_who").innerHTML = missatges.nav.item1;
    document.getElementById("main_text_who").innerHTML = missatges.who.main_text;
    document.getElementById("sec_text_who").innerHTML = missatges.who.sec_text;

    // SKILLS
    //document.getElementById("titol_skills").innerHTML = missatges.nav.item2;

    /*var llista = document.getElementsByClassName("list-group-item");
    //debugger;
    for(var i = 0; i < missatges.skills.items.length; i++){
        // si no és a la llista creem un element <li>
        
        // el parsejem al node
       llista[i].innerHTML= missatges.skills.items[i];
    }*/

    // ENTORNS
    //document.getElementById("titol_entorns").innerHTML = missatges.nav.item3;

    // PROJECTES 
    document.getElementById("titol_estudis").innerHTML = missatges.nav.item4;
    document.getElementById("projects_mNACTEC").innerHTML = missatges.projects.mNACTEC;
    document.getElementById("projects_broggi").innerHTML = missatges.projects.broggi;
    document.getElementById("projects_mq").innerHTML = missatges.projects.mq;

    // INTERN
    //document.getElementById("titol_practiques").innerHTML = missatges.nav.item5;
    document.getElementById("intern_upc_text").innerHTML = missatges.internship.vendrell.text;
    document.getElementById("intern_upc_link").href = missatges.internship.vendrell.a;
    document.getElementById("intern_gjq_text").innerHTML = missatges.internship.trevol.text;
    document.getElementById("intern_gjq_link").href = missatges.internship.trevol.a;
    
    
    // + INFO
    document.getElementById("titol_more").innerHTML = missatges.nav.item7;
    document.getElementById("more_cv").innerHTML = missatges.mes_info.cv;
    document.getElementById("more_linkedIn").innerHTML = missatges.mes_info.linkedIn;

    // mirar coses lògiques
    text_who();    
    text_who();    
}
