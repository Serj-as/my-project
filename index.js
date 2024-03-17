(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__burger-navigation');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelector('.header_item')
    const menuOverLay = document.querySelector('.burger__menu-overlay');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__burger-navigation-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__burger-navigation-active');
    });

}());


/*PopUp start*/


const loginButton = document.querySelector('.header__button');
const popUp = document.querySelector('.pop_up');
loginButton.addEventListener('click', () => {
    popUp.classList.toggle('hidden_popup')
})

popUp.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop_up')) {
        popUp.classList.toggle('hidden_popup')
    }
})

const signInButton = document.querySelector('.sign_in-button');
const emailData = document.querySelector('.sign_with-email')
const passwordData = document.querySelector('.sign_password')
signInButton.addEventListener('click', () => {
    window.alert(`E-mail: ${emailData.value}\nPassword: ${passwordData.value} `);
})

const signUpButton = document.querySelector('.register_button');
const signUp = document.querySelector('.sign_up')
signUpButton.addEventListener('click', () => {
    signUp.classList.toggle('signup_hidden')
})

signUp.addEventListener('click', (event) => {
    if (event.target.classList.contains('sign_up')) {
        signUp.classList.toggle('signup_hidden')
    }
})

let accountLink = document.querySelector('#account');
accountLink.addEventListener('click', () => {
    popUp.classList.toggle('hidden_popup')
})

popUp.addEventListener('click', (event) => {
    if (event.target.classList.contains('body')) {
        signUp.classList.toggle('hidden_popup')
    }
})

/*PopUp end*/


/*Carousel start */

const photoRight = document.querySelector('.photo_usa');
const photoLeft = document.querySelector('.photo_spain');
const photoJapan = document.querySelector('.photo_japan')
const carousel = document.querySelector('.countries__photos');
const circleOne = document.querySelector('.circle-one');
const circleColored = document.querySelector('.circle2');
const circleThree = document.querySelector('.circle3');
const circles = document.querySelector('.circles_destinations');
const leftArrow = document.querySelector('.left_arrow');
const rightArrow = document.querySelector('.right_arrow');
const mobilePhotos = document.querySelector('.mobile__countries-photos');
const mobileJapan = document.querySelector('.mobile_japan');
const mobileUsa = document.querySelector('.mobile_usa');



photoLeft.addEventListener('click', () => {
    photoRight.classList.add('transition-right');
    photoJapan.classList.add('transition-right');
    photoLeft.classList.add('transition-right');
    circleColored.classList.add('transition-left_point');
    circleOne.classList.add('transition-right_point');
})

photoLeft.addEventListener("animationend", () => {
    photoRight.classList.remove('transition-right');
    photoJapan.classList.remove('transition-right');
    photoLeft.classList.remove('transition-right');
})

photoRight.addEventListener('click', () => {
    photoRight.classList.add('transition-left');
    photoJapan.classList.add('transition-left');
    photoLeft.classList.add('transition-left');
    circleColored.classList.add('transition-right_point');
    circleThree.classList.add('transition-left_point');
})


photoRight.addEventListener("animationend", () => {
    photoRight.classList.remove('transition-left');
    photoJapan.classList.remove('transition-left');
    photoLeft.classList.remove('transition-left');
})

rightArrow.addEventListener('click', () => {
    mobileJapan.classList.add('transition-right-arrow')
    mobileUsa.classList.add('transition-right-arrow')
})




/*Carousel end */

