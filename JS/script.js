
const header = document.querySelector('#headerMenu')

window.addEventListener("scroll", () => {

    header.classList.toggle('headerScroll', window.scrollY > 2)
    
})

const scrollLogoDown = window.addEventListener('scroll', () => {
    let logoDark = document.querySelector('.logo-dark')
    let logoLight = document.querySelector('.logo-light')

    if(!window.scrollY == 0){
        logoDark.classList.remove('hide', window.scrollY > 2)
        logoLight.classList.add('hide', window.scrollY > 2)
    } else {
        logoDark.classList.add('hide', window.scrollY > 2)
        logoLight.classList.remove('hide', window.scrollY > 2)
    
    }
 
    
})

