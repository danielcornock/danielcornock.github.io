window.onload = () =>{
    sessionStorage.setItem('visited', true)
}

if(sessionStorage.getItem('visited')){
    if (document.querySelector('.hero__logo')){
        document.querySelector('.header').classList.add('header--no-anim');
        document.querySelector('.hero__logo').style.animation = "none";
        document.querySelector('.hero__title').style.animationDelay = "0s";
        document.querySelector('.hero__subtext').style.animationDelay = "0.6s";
        document.querySelector('.hero__icon').style.animationDelay = "1s";
    }
}

const headerResize = function(){
    const header = document.querySelector('.header');
    const headerLogo = header.querySelector('.header__logo');
    const headerWrapper = header.querySelector('.wrapper');
    const headerSub = header.querySelector('.header__branding__text span');
    const nav = header.querySelector('.nav');
    let prevScrollPos = window.pageYOffset;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150){
            headerLogo.classList.add("header__logo--small");
            headerWrapper.classList.add("wrapper--fixed-header");
            header.classList.add("header--fixed");
            nav.classList.add("nav--fixed");
            if(headerSub){
                headerSub.style.display = "none";
            }
            
        } else if (window.scrollY < 150){
            headerLogo.classList.remove("header__logo--small");
            headerWrapper.classList.remove("wrapper--fixed-header");
            header.classList.remove("header--fixed");
            nav.classList.remove("nav--fixed");

            if(headerSub){
                headerSub.style.display = "block";
            }
        }

        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos < 200){
            return;
        }
        if (prevScrollPos > currentScrollPos){
            header.classList.remove("header--active");
        } else {
            header.classList.add("header--active");
        }
        prevScrollPos = currentScrollPos;

    })
}();

const mobileMenuToggle = function(){
	const hamburgerBtn = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navItems = nav.querySelectorAll('.nav__item');
    const header = document.querySelector('.header--main');
    let transparentHeader = true;
		hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('is-active');
            nav.classList.toggle('nav--active'); 
            navItems.forEach(item => {
                item.classList.toggle('nav__item--active');
            });

            if(transparentHeader){
                header.style.backgroundColor = "#1f1f1f"; 
                transparentHeader = !transparentHeader;
            } else {
                header.removeAttribute('style');
                transparentHeader = !transparentHeader;
            }

        });

        navItems.forEach(item => item.addEventListener("click", () =>{
            nav.classList.remove('nav--active');
            navItems.forEach(navItem => navItem.classList.remove('nav__item--active'));
            hamburgerBtn.classList.remove('is-active');
        }));
    
}();

const setHeaderPadding = function(){
    const main = document.querySelector('.main__secondary');
    if(!main){
        return;
    }
    checkPadding();
    window.addEventListener("resize", () =>{
        checkPadding();
        
    });
    
    function checkPadding(){
        let headerHeight = (document.querySelector('.header')).clientHeight;
        main.style.paddingTop = headerHeight + "px";
    }
}();

const lightsOnLightsOff = function() {
    const button = document.querySelector('.lights');
    const body = document.querySelector('body');
    const images = document.querySelectorAll('img');

    if(!button){
        return;
    }
    button.addEventListener("click", () =>{
        body.classList.toggle('inverted');
        images.forEach(image => image.classList.toggle('inverted'));
        // button.classList.toggle('inverted');
    })
}();