function changeStyle(){
    document.getElementById("topnav").style.display = "flex";
    let currentStyle = document.getElementById("technicalStyle").getAttribute("href");

    let newStyle;
    if (currentStyle == "css_files/technical.css"){
        document.getElementById("topnav").style.display = "none";
        newStyle = "css_files/technical2.css"
        localStorage.setItem("indexStyle", "css_files/index2.css");
        localStorage.setItem("technicalStyle", newStyle);
        localStorage.setItem("qualificationStyle", "css_files/qualifications2.css");
        localStorage.setItem("serviceStyle", "css_files/service2.css");
        localStorage.setItem("aiStyle", "css_files/ai2.css");
    }
    else{
        document.getElementById("topnav").style.display = "flex";
        newStyle = "css_files/technical.css";
        localStorage.setItem("indexStyle", "css_files/index.css");
        localStorage.setItem("technicalStyle", newStyle);
        localStorage.setItem("qualificationStyle", "css_files/qualifications.css");
        localStorage.setItem("serviceStyle", "css_files/service.css");
        localStorage.setItem("aiStyle", "css_files/ai.css");
    }
    document.getElementById("technicalStyle").setAttribute("href", newStyle);
}

window.onload = function(){
    let style = localStorage.getItem("technicalStyle");
    if (style != null)
        document.getElementById("technicalStyle").setAttribute("href", style);
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