
const header = document.querySelector('#headerMenu')

window.addEventListener("scroll", () => {

    header.classList.toggle('headerScroll', window.scrollY > 2)
    
})

/* Menu Fixed */
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


/* Scroll Smoth Sections */

/* get links a */
const menuLinks = document.querySelectorAll('.menu a[href^="#"]')

/* forEach em cada elemento a */
menuLinks.forEach(link => {
    link.addEventListener('click', scrollToOnClick)
})

/* Get element href and position in pixel the sections */
function getScrollTopByHref(element){
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}

/* Retiramos a função padrão do evento, pegamos exatamente o alvo do nosso click e linkamos no menu com scroll smoth */
function scrollToOnClick(event){
    event.preventDefault()
    const element = event.target
    const toSection = getScrollTopByHref(event.target)


    scrollToPosition(toSection)
}

/* function smoth scroll position of the sections */

function scrollToPosition(toSection){
    window.scroll({
        top: toSection,
        behavior: "smooth"
    
    })
}

