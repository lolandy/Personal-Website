function changeStyle(){
    document.getElementById("topnav").style.display = "flex";
    let currentStyle = document.getElementById("aiStyle").getAttribute("href");

    let newStyle;
    if (currentStyle == "css_files/ai.css"){
        document.getElementById("topnav").style.display = "none";
        newStyle = "css_files/ai2.css";
        localStorage.setItem("indexStyle", "css_files/index2.css");
        localStorage.setItem("technicalStyle", "css_files/technical2.css");
        localStorage.setItem("qualificationStyle", "css_files/qualifications2.css");
        localStorage.setItem("serviceStyle", "css_files/service2.css");
        localStorage.setItem("aiStyle", newStyle);
    }
    else{
        document.getElementById("topnav").style.display = "flex";
        newStyle = "css_files/ai.css";
        localStorage.setItem("indexStyle", "css_files/index.css");
        localStorage.setItem("technicalStyle", "css_files/technical.css");
        localStorage.setItem("qualificationStyle", "css_files/qualifications.css");
        localStorage.setItem("serviceStyle", "css_files/service.css");
        localStorage.setItem("aiStyle", newStyle);
    }
    document.getElementById("aiStyle").setAttribute("href", newStyle);
}

window.onload = function(){
    let style = localStorage.getItem("aiStyle");
    if (style != null)
        document.getElementById("aiStyle").setAttribute("href", style);
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