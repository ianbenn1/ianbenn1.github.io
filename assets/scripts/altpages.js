document.addEventListener("DOMContentLoaded", () => {
    //Flashing Cursor on header
    setInterval(() => { 
        document.querySelector(".header .cursor").style.visibility = ((document.querySelector(".header .cursor").style.visibility != 'visible') ? 'visible' : 'hidden');
    }, 530);

});

const openmenudoor = () => {

    let menuClassName = "";

    if(window.innerHeight > window.innerWidth)//may need touchup
    {//Mobile
        menuClassName = ".mobile-menu";
    }
    else {//DT
        menuClassName = ".desktop-menu";
    }


    document.querySelector(".page").classList.toggle("opendoor");
    document.querySelector("html").classList.toggle("menu-open");
    document.querySelector("body").classList.toggle("menu-open");
    let button = document.querySelector(".menu-button");
    if(button.textContent == "Menu") {
        button.textContent = "Close";
        document.querySelector(menuClassName).hidden = false
    } else {
        button.textContent = "Menu";
        document.querySelector(menuClassName).hidden = true;
    }

}