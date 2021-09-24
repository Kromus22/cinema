const burgerBtn = document.querySelector('.burger-btn-js')
const navigation = document.querySelector('.navigation-js')
const navigationClose = document.querySelector('.navigation-close-js')

burgerBtn.addEventListener('click', () => {
    navigation.style.right = '0';
})

navigationClose.addEventListener('click', () => {
    navigation.style.right = '';
})


