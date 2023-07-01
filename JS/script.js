
window.addEventListener("scroll", () => {
    let header = document.querySelector('#headerMenu')


    header.classList.toggle('headerScroll', window.scrollY > 2)


    
})

const scrollLogoDown = window.addEventListener('scroll', () => {
    let logoDark = document.querySelector('.logo-dark')
    let logoLight = document.querySelector('.logo-light')

    logoDark.classList.remove('hide', window.scrollY > 2)
    logoLight.classList.add('hide', window.scrollY > 2)
})

