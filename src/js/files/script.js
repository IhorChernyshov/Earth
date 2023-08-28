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

    window.addEventListener('load', windowLoaded);
    function windowLoaded() {
        if (document.querySelector('.product__slider')){
            new Swiper('.product__slider',{
                loop:true,
                speed:1000,
                parallax:true,
                mousewheel:true,
                keyboard:true,
                on:{
                    init: function (){
                        document.documentElement.classList.add('loa')
                    }
                }
            });
        }
    }
}

//Add to cart animation

const cart = document.querySelector('.header__cart');
let cartValue = document.querySelector('.header__cart span');
const speedAnimation = 1000;

document.addEventListener('click', function (e){
    const targetElement = e.target;
    if (targetElement.closest('.product__buy')){
        const productSlide = targetElement.closest('.product__slide');
        const productImage = productSlide.querySelector('.product__picture');
        const productImageFly = productImage.cloneNode(true);

        const cartPos = {
            left: cart.getBoundingClientRect().left,
            top: cart.getBoundingClientRect().top
        }

        productImageFly.style.cssText = `
        position:fixed;
        left:${productImage.getBoundingClientRect().left}px;
        top:${productImage.getBoundingClientRect().top}px;
        width:${productImage.offsetWidth}px;
        height:${productImage.offsetHeight}px;
        transition:all ${speedAnimation}ms ease;
        `;

        document.body.append(productImageFly)

        setTimeout(() => {
            productImageFly.style.left = `${cartPos.left}px`
            productImageFly.style.top = `${cartPos.top}px`
            productImageFly.style.width = `0px`
            productImageFly.style.height = `0px`
            productImageFly.style.opacity = `0.5`
        },0);

        setTimeout(() =>{
            cartValue.innerHTML = ++cartValue.innerHTML
            productImageFly.remove()
        },speedAnimation);
    }

});

