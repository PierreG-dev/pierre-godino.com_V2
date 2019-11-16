/*=============================================
                   GENERAL
===============================================*/

// 0-> fr
// 1 -> en
var language = 0;
var headerState = 0;

function updateAll() {
    navbarUpdate();
    headerUpdate();
    portfolioUpdate();
    return 0;
}



/*=============================================
                FONCTIONNALITES
===============================================*/

/* WAYPOINTS*/
var $skillsEVT = $('.competences');

$skillsEVT.waypoint(function (direction) {
    $('.skillDetail').addClass('skillDisplayAnimation');
    $('.skillUnder').addClass('skillDisplayAnimationUnder');
    $('.skillColumn').addClass('shadowRisingAnimation');

    
}, { offset: '50%' });

/*=============================================
                    NAVBAR
===============================================*/
const navbarList = document.querySelector('#navbar_list');

//Met à jour la langue de la navbar
function navbarUpdate() {
    for (let i = 0; i < navbarData.length; ++i) {
        switch (language) {
            case 1: // cas 1
                navbarList.innerHTML += `<li class="navbar_element">${navbarData[i].english}</li>`
                break;

            default: // cas 0
                navbarList.innerHTML += `<li class="navbar_element">${navbarData[i].francais}</li>`
                break;
        }
    }
    return 0;
}

//---------- Pour les petits écrans -----------
var deployed = false; //false si menu caché / true si menu déployé
const navBurger = document.querySelector('.navBurger');
const navbar = document.querySelector('.navbar');
const blackScreen = document.querySelector('.blackScreen');


blackScreen.onclick = function() {
    if(deployed == true) {
        navbar.style.transform = 'translate3d(0,0,0)';
        blackScreen.style.opacity = '0.3';
        navBurger.style.opacity = '1';
        blackScreen.style.zIndex = '-1';
        document.body.style.overflowY = 'visible';
        deployed = false;
    }

}
navBurger.onclick = function() {
    deployed = true;
    navBurger.style.opacity = '0';
    navbar.style.transform = 'translate3d(100%,0,0)';
    blackScreen.style.opacity = '0.8'
    blackScreen.style.cursor = 'pointer';
    blackScreen.style.zIndex = '1';
    document.body.style.overflowY = 'hidden';
}

navbarUpdate();

var $navbar = $('.navbar');

$navbar.waypoint(function(direction) {
    if (direction == 'down') {
        $navbar.addClass('reduced_navbar');
        $('.competences').addClass('navbar_fix');
    }
    else {
        $navbar.removeClass('reduced_navbar');
        $('.competences').removeClass('navbar_fix');
    }
}, {offset:'7vh'});

/*=============================================
                    HEADER
===============================================*/
const headerContent = document.querySelector('.mainContainer');

//Mise en place des images de fond
function headerBackgroundSetup() {
    for(let i = 0; i < headerData.length; ++i) {
        document.querySelector('header .container').innerHTML += `<img src="${headerData[i].img_src}" alt="${headerData[i].img_alt}"></img>`;
    }
}

//Met à jour la langue du header
function headerUpdate() {
    headerContent.innerHTML = '';
    for (let i = 0; i < headerData.length; ++i) {
        switch (language) {
            case 1: // anglais
                headerContent.innerHTML += `<div class="main_element">
                                                <div class="title">
                                                    ${headerData[i].english[0]}
                                                </div>
                                                <div class="description">
                                                    ${headerData[i].english[1]}
                                                </div>
                                            </div>`
                break;

            default: // francais
                headerContent.innerHTML += `<div class="main_element">
                                                <div class="title">
                                                    ${headerData[i].francais[0]}
                                                </div>
                                                <div class="description">
                                                    ${headerData[i].francais[1]}
                                                </div>
                                            </div>`
                break;
        }
    }
    return 0;
}

function headerAnimationSetup() {
    let elements = document.querySelectorAll('header .main_element');
    let headerBackgrounds = document.querySelectorAll('header .container img');

    elements[headerState].style.opacity = '1';
    headerBackgrounds[headerState].style.opacity = '1';
    headerBackgrounds[headerState].style.animation = 'headerImgMotion 12000ms linear infinite';

    for (let i = 1; i < elements.length; ++i) {
        elements[i].style.opacity = '0';
        headerBackgrounds[i].style.opacity = '0';
    }
    
}


//Alterne les contenus du header
function headerAnimation() {
    let elements = document.querySelectorAll('header .main_element');
    let headerBackgrounds = document.querySelectorAll('header .container img');

    elements[headerState].style.opacity = '0';
    headerBackgrounds[headerState].style.opacity = '0';
    headerState = (headerState + 1) % elements.length;
    headerBackgrounds[headerState].style.animation = 'none';
    void headerBackgrounds[headerState].offsetWidth;

    if ((rand = Math.random()) < 0.5) {
        headerBackgrounds[headerState].style.animation = 'headerImgMotion 12000ms linear infinite';
    }
    else {
        headerBackgrounds[headerState].style.animation = 'headerImgMotion 12000ms linear infinite reverse';
    }    
    elements[headerState].style.opacity = '1';
    headerBackgrounds[headerState].style.opacity = '1';

    return 0;
}

headerUpdate();
headerBackgroundSetup();
headerAnimationSetup()
var animation = setInterval(headerAnimation, 10000);

/*=============================================
                    PORTFOLIO
===============================================*/

function portfolioUpdate() {
    let portfolioContainer = document.querySelector('.portfolio .container .row');
    portfolioContainer.innerHTML = '';
    let sizeRegulator = 0;

    for (let i = 0; i < portfolioData.length; ++i) {
        switch (language) {
            case 1: //anglais
                if (i % 2 != 0) {
                    portfolioContainer.innerHTML += `<div class="col-sm-0 col-md-1 col-lg-1"></div>`;
                    sizeRegulator = (sizeRegulator + 1) % 2;
                }
                if(sizeRegulator == 1)
                    portfolioContainer.innerHTML += `<a href="${portfolioData[i].href}">
                                                        <div class="col-sm-12 col-md-5 col-lg-5 box">
                                                            <div class="darkMaker"></div>
                                                            <h4>${portfolioData[i].english}</h4>
                                                            <img src="${portfolioData[i].img_src}">
                                                        </div>
                                                     </a>`;
                else
                    portfolioContainer.innerHTML += `<a href="${portfolioData[i].href}">
                                                        <div class="col-sm-12 col-md-6 col-lg-6 box">
                                                            <div class="darkMaker"></div>
                                                            <h4>${portfolioData[i].english}</h4>
                                                            <img src="${portfolioData[i].img_src}">
                                                        </div>
                                                     </a>`;          
                break;

            default: //francais
                if (i % 2 != 0) {
                    portfolioContainer.innerHTML += `<div class="col-sm-0 col-md-1 col-lg-1 "></div>`;
                    sizeRegulator = (sizeRegulator + 1) % 2;
                    console.log(i);
                }
                if (sizeRegulator == 1)
                    portfolioContainer.innerHTML += `<a href="${portfolioData[i].href}">
                                                        <div class="col-sm-12 col-md-5 col-lg-5 box">
                                                            <div class="darkMaker"></div>
                                                            <h4>${portfolioData[i].francais}</h4>
                                                            <img src="${portfolioData[i].img_src}">
                                                        </div>
                                                     </a>`;
                else
                    portfolioContainer.innerHTML += `<a href="${portfolioData[i].href}">
                                                        <div class="col-sm-12 col-md-6 col-lg-6 box">
                                                            <div class="darkMaker"></div>
                                                            <h4>${portfolioData[i].francais}</h4>
                                                            <img src="${portfolioData[i].img_src}">
                                                        </div>
                                                     </a>`;
                break;
        }
    }
}

portfolioUpdate();

/*=============================================
                   COMPETENCES
===============================================*/
//var imgHauteur = '' + $('header img').height() * 0.5875 + 'px';
//document.querySelector('.competences').style.marginTop = imgHauteur;

const skillsContent = document.querySelectorAll('.skillDetail');

function skillsUpdate() {

    for (let i = 0; i < skillsContent.length; ++i) {
        skillsContent[i].innerHTML = '';
    }

    for (let i = 0; i < skillData.length; ++i) {
        switch(skillData[i].category) {
            case "front-end" : 
                switch(language) {
                    case 1: //anglais
                        skillsContent[0].innerHTML += `<img src="${skillData[i].img_src}" alt="">`;
                        break;

                    default: //francais
                        skillsContent[0].innerHTML += `<img src="${skillData[i].img_src}" alt="">`;
                        break;
                    
                }
                break;

            case "back-end" : 
                switch(language) {
                    case 1: //anglais
                        skillsContent[1].innerHTML += `<img src="${skillData[i].img_src}" alt="">`;
                        break;

                    default: //francais
                        skillsContent[1].innerHTML += `<img src="${skillData[i].img_src}" alt="">`;
                        break;
                    
                }
                break;

            case "dev-ops" : 
                switch(language) {
                    case 1: //anglais
                        skillsContent[2].innerHTML += `<img src="${skillData[i].img_src}" alt="">`;
                        break;

                    default: //francais
                        skillsContent[2].innerHTML += `<img src="${skillData[i].img_src}" alt="">`;
                        break;
                    
                }
                break;
        }
    }
}

skillsUpdate();
/*=============================================
                    A PROPOS
===============================================*/

/*=============================================
                    CONTACT
===============================================*/

/*=============================================
                     FOOTER
===============================================*/