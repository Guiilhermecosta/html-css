function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/main-menu.png"
    }else{
        document.querySelector('.icon').src = "assets/img/close.svg"
        menuMobile.classList.add('open');
    }
}