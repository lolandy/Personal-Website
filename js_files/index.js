function changeStyle(){
    let currentStyle = document.getElementById("indexStyle").getAttribute("href");

    let newStyle;
    if (currentStyle == "css_files/index.css"){
        document.getElementById("topnav").style.display = "none";
        newStyle = "css_files/index2.css";
        localStorage.setItem("indexStyle", newStyle);
        localStorage.setItem("technicalStyle", "css_files/technical2.css");
        localStorage.setItem("qualificationStyle", "css_files/qualifications2.css");
        localStorage.setItem("serviceStyle", "css_files/service2.css");
        localStorage.setItem("aiStyle", "css_files/ai2.css");
    }
    else{
        document.getElementById("topnav").style.display = "flex";
        document.getElementById("biography").style.marginTop = "0%";
        newStyle = "css_files/index.css";
        localStorage.setItem("indexStyle", newStyle);
        localStorage.setItem("technicalStyle", "css_files/technical.css");
        localStorage.setItem("qualificationStyle", "css_files/qualifications.css");
        localStorage.setItem("serviceStyle", "css_files/service.css");
        localStorage.setItem("aiStyle", "css_files/ai.css");
    }
    document.getElementById("indexStyle").setAttribute("href", newStyle);
}

window.onload = function(){
    console.log("load")
    let style = localStorage.getItem("indexStyle");
    if (style != null)
        document.getElementById("indexStyle").setAttribute("href", style);
}

function openMenu(){
    let show = document.getElementById("topnav").style.display;
    console.log(show)
    if (show == "none" || show == ""){
        document.getElementById("topnav").style.display = "flex";
    }
    else{
        document.getElementById("topnav").style.display = "none";
    }
}

window.addEventListener("scroll", function(){
    if (this.scrollY > 0){
        shrink();
    }
    else if (this.screenY == 0){
        inlarge();
    }
});

function shrink(){
    let name = document.getElementById("bigNameLink");
    name.style.animation = "shrink 500ms 1 forwards";

    let biography = document.getElementById("biography");
    biography.style.animation = "marginUp 500ms 1 forwards";

    name.addEventListener("animationend", function(){
        name.style.fontSize = "30px"
    });

    biography.addEventListener("animationend", function(){
        biography.style.marginTop = "4%"
    });
}

function inlarge(){
    let name = document.getElementById("bigNameLink");
    name.style.animation = "inlarge 500ms 1 forwards";

    let biography = document.getElementById("biography");
    biography.style.animation = "marginDown 500ms 1 forwards";

    name.addEventListener("animationend", function(){
        name.style.fontSize = "300px"
    });

    biography.addEventListener("animationend", function(){
        biography.style.marginTop = "25%"
    });
}

