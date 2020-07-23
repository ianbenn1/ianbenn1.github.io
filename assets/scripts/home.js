// Homepage setup functions
document.addEventListener("DOMContentLoaded", () => {
    //Flashing Cursor on header
    setInterval(() => { 
        document.querySelector(".header .cursor").style.visibility = ((document.querySelector(".header .cursor").style.visibility != 'visible') ? 'visible' : 'hidden');
    }, 530);

    //Set background based on local time
    var cur_hr = (new Date()).getHours();
    if (cur_hr >= 17 && cur_hr < 20){ //Evening
        document.querySelector(".heroimg").style.backgroundImage  = "url('/assets/img/bg_main_eve_crop1.jpg')";
    }
    else if (cur_hr >= 20 || cur_hr < 5) //night
    {
        document.querySelector(".heroimg").style.backgroundImage  = "url('/assets/img/bg_main_night.jpg')";
    }
    else { //day

    }

    //Check window size for swiper
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    //console.log("Viewport width on load is " + vw);
    swiperMobileArangement(vw);

    //Grab Bing background image
    fetch("https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-CA")
        .then(resp => {
            resp.json().then(data => {
                if(data.images[0].url !== undefined && data.images[0].url !== null && data.images[0].url.length > 25)
                {
                    document.querySelector(".bing-daily-image").src = 'https://www.bing.ca' + data.images[0].url;
                    //console.log('https://www.bing.ca' + data.images[0].url)
                }
                else {
                    document.querySelector(".bing-daily-image").src = "/assets/img/splashscreen.jpg";
                }
            });
        }).catch(document.querySelector(".bing-daily-image").src = "/assets/img/splashscreen.jpg");


    //Grab visitor IP and aprox location
    fetch('https://json.geoiplookup.io/')
        .then(resp => {
            resp.json().then(data => {
                if(data && data.success)
                {
                    console.log(`IP: ${data.ip}\nCountry: ${data.country_name}\nISP: ${data.isp}`)
                }
            });
        });

    //Console Easter egg
    console.log(`   _____          _      
  / ____|        | |     
 | |     ___   __| | ___ 
 | |    / _ \\ / _' |/ _ \\
 | |___| (_) | (_| |  __/
  \\_____\\___/ \\__,_|\\___|`);
    console.log(`
   _____               
  / ____|              
 | |     __ _ _ __ ___ 
 | |    / _' | '__/ __|
 | |___| (_| | |  \\__ \\
  \\_____\\__._|_|  |___/
 `);
 console.log(`   _____       __  __          
  / ____|     / _|/ _|         
 | |     ___ | |_| |_ ___  ___ 
 | |    / _ \\|  _|  _/ _ \\/ _ \\
 | |___| (_) | | | ||  __/  __/
  \\_____\\___/|_| |_| \\___|\___|`);
  console.log(`   _____            _                 
  / ____|          (_)                
 | |     __ _ _ __  _ _ __   ___  ___ 
 | |    / _' | '_ \\| | '_ \\ / _ \\/ __|
 | |___| (_| | | | | | | | |  __/\\__ \\
  \\_____\\__,_|_| |_|_|_| |_|\\___||___/`);
});

// Socials Hover
document.querySelector(".socials .github").addEventListener("mouseover", () => {
    document.querySelector(".socials").style.background = null;
    document.querySelector(".socials").style.background = 'linear-gradient(90deg, rgba(155,155,155,0.7) 30%, rgba(237,237,237,0.45) 40%, rgba(255,255,255,0.35) 100%)';
});
document.querySelector(".socials .github").addEventListener("mouseout", () => {
    document.querySelector(".socials").style.background = null;
    document.querySelector(".socials").style.background = 'rgba(255, 255, 255, 0.35)';
});

document.querySelector(".socials .linkedin").addEventListener("mouseover", () => {
    document.querySelector(".socials").style.background = null;
    document.querySelector(".socials").style.background = 'linear-gradient(90deg, rgba(237,237,237,0.45) 30%, rgba(137,137,137,0.9) 50%, rgba(255,255,255,0.35) 70%)';
});
document.querySelector(".socials .linkedin").addEventListener("mouseout", () => {
    document.querySelector(".socials").style.background = null;
    document.querySelector(".socials").style.background = 'rgba(255, 255, 255, 0.35)';
});

document.querySelector(".socials .instagram").addEventListener("mouseover", () => {
    document.querySelector(".socials").style.background = null;
    document.querySelector(".socials").style.background = 'linear-gradient(90deg, rgba(237,237,237,0.45) 0%, rgba(255,255,255,0.35) 60%, rgba(137,137,137,0.7) 70%)';
});
document.querySelector(".socials .instagram").addEventListener("mouseout", () => {
    document.querySelector(".socials").style.background = null;
    document.querySelector(".socials").style.background = 'rgba(255, 255, 255, 0.35)';
});

//Socials onclick
document.querySelector(".socials .github").onclick = () => {
    var tab = window.open('https://github.com/ianbenn1', '_blank');
    tab.focus();
};
document.querySelector(".socials .linkedin").onclick = () => {
    var tab = window.open('https://www.linkedin.com/in/ian-bennett-092528166/', '_blank');
    tab.focus();
};
document.querySelector(".socials .instagram").onclick = () => {
    var tab = window.open('https://www.instagram.com/ianbenn1/', '_blank');
    tab.focus();
};





/* -- Easter Eggs -- */

//header type easter egg
document.querySelector(".header h6").onclick = () => {
    document.querySelector(".header h6").append(" ");
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 32) { e.preventDefault(); }
        document.querySelector(".header h6").append(String.fromCharCode(e.keyCode))
    });
};

// Hero text adendum easter egg
document.querySelector(".descrip-period").addEventListener("mouseover", () => {
    document.querySelector(".heroimg-content h5 .hover").style.visibility = 'visible';
});
document.querySelector(".descrip-period").addEventListener("mouseout", () => {
    document.querySelector(".heroimg-content h5 .hover").style.visibility = 'hidden';
});



var slideSwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    preloadImages: false,
    lazyLoading: true,
    centeredSlides: true,
    paginationClickable: true,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
var mobileSlideSwiper = new Swiper('.swiper-container-mobile', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    preloadImages: false,
    lazyLoading: true,
    centeredSlides: true,
    paginationClickable: true,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination-mobile',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-mobile',
      prevEl: '.swiper-button-prev-mobile',
    },
});

window.onresize = (event) => {
    let vpw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    //console.log("resize event. vw: " + vpw);
    swiperMobileArangement(vpw);
};

const swiperMobileArangement = (vw) => {
    if (vw < 1050) //mobile
    {
        document.querySelector('.swiper-container').style.display = "none";
        document.querySelector('.swiper-container-mobile').style.display = "block";

        slideSwiper.init();
        slideSwiper.update();
        mobileSlideSwiper.init();
        mobileSlideSwiper.update();
        //console.log("Changed to mobile slides");
    }
    else if (vw > 1125) // back to desktop
    {
        document.querySelector('.swiper-container-mobile').style.display = "none";
        document.querySelector('.swiper-container').style.display = "block";
        

        slideSwiper.init();
        slideSwiper.update();
        mobileSlideSwiper.init();
        mobileSlideSwiper.update();
        //console.log("Changed to desktop slides");
    }
}