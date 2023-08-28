// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

import Swiper from 'swiper/bundle';

window.addEventListener('load',windowLoad);
const swiper = new Swiper;
function windowLoad(){
    document.documentElement.classList.add('loaded')

    const menu = document.querySelector('.menu__body');
    let menuActiveElement;

    if(menu){

        menuActiveElement = document.querySelector('.menu__active span');
        let menuActiveItem = menu.querySelector('.menu__item._active');
        const menuItems = menu.querySelectorAll('.menu__item');


        window.onresize = displayWindowSize;
        window.onload = displayWindowSize;

        function displayWindowSize() {
            let myWidth = window.innerWidth;
            let myHeight = window.innerHeight;
            return myWidth
        };
        if(!menuActiveItem && displayWindowSize() > 991.98){
            menuItems[0].classList.add('_active');
            console.log('I rrrrrrr')
            menuActiveElement.style.cssText = `
            height:${menuItems[0].offsetHeight}px;
            top:${menuItems[0].offsetTop}px;
            background-color: ${menuItems[0].dataset.activeColor};
            `;
        } else if(!menuActiveItem || displayWindowSize() < 991.98){
            console.log('I 0000000')
            menuActiveElement.style.cssText = `
            height:${menuItems[0].offsetHeight}px;
            top:${50}px;
            background-color: ${menuItems[0].dataset.activeColor};
            `;
        }
        menuActiveItem ? menuSetActive(menuActiveItem) : null
        menu.addEventListener('click', menuActions);


    }
        function menuActions(e){
            const menuItem = e.target;
            if (menuItem.closest('.menu__item')){
                const menuParentItem = menuItem.closest('.menu__item');
                const menuActiveItem = menu.querySelector('.menu__item._active');
                if (!menuParentItem.classList .contains('_active')) {
                    menuActiveItem ?
                        menuActiveItem.classList.remove('_active') : null;
                }
                menuSetActive(menuParentItem);
                e.preventDefault();
            }
        }


    function menuSetActive (menuParentItem){
        menuParentItem.classList.add('_active');

        menuActiveElement.style.cssText = `
        height:${menuParentItem.offsetHeight}px;
        top:${menuParentItem.offsetTop}px;
        background-color: ${menuParentItem.dataset.activeColor};
        `;
    }

}

