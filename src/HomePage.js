// for header
const header = document.createElement('header');
const navLogoContainer = document.createElement('div');
const nav = document.createElement('nav');
export const navButtonContainer = document.createElement('ul')
export const logo = document.createElement('h1')
const logoLink = document.createElement('a')
const logoSpan = document.createElement('span')
export const navButtons = []
for(let i = 0; i < 2; i++){
    let navButton = document.createElement('li')
    navButton.classList.add('nav-button')
    navButtons.push(navButton)
    navButtonContainer.append(navButtons[i])

}
// for header


export function createHeaderNav(content){
    // grabs content element from index.js
    // after importing this function
    content.prepend(header)
    header.classList.add('nav-bar')
    header.appendChild(navLogoContainer)
    
    navLogoContainer.classList.add('nav-logo-container')
    logoLink.textContent = 'PINOY'
    logoLink.setAttribute('id','logo')
    logoLink.appendChild(logoSpan)
    logoSpan.classList.add('resto')
    logoSpan.textContent = ' RESTO'
    logo.appendChild(logoLink)
    navLogoContainer.appendChild(logo)
    navLogoContainer.appendChild(nav)
    nav.appendChild(navButtonContainer)
    
    navButtonContainer.classList.add('nav-button-container')
    navButtons[0].textContent = 'MENU'
    navButtons[0].setAttribute('id','menu')
    // cheat
    // navButtons[1].textContent = 'DELIVERY'
    // navButtons[1].setAttribute('id','deliv')
    navButtons[1].textContent = 'CONTACT'
    navButtons[1].setAttribute('id','contact')

};

const heroSec = document.createElement('div')
const heroParaContainer = document.createElement('div')
const pdUpper = document.createElement('h1')
const pdLower = document.createElement('h2')
const lowerHeroSec = document.createElement('div')
const decorContainer = document.createElement('div')
const decor = document.createElement('div')
const cardContainer = document.createElement('ul')

export const cards = []
for(let i = 0; i < 3; i++){
    const card = document.createElement('li')
    cards.push(card)
    cards[i].setAttribute('id',`card-${[i]}`)
    cards[i].classList.add('card')
    cardContainer.append(cards[i])
}
console.log(cards)
// import deco.png here using webpack asset modules


//  main
export const main = document.createElement('main')
//  main

export function createHeroSec(main){
    heroSec.setAttribute('id','hero')
    main.appendChild(heroSec)
    // appened all contents from hero to 'main'
    heroSec.append(heroParaContainer)
    heroParaContainer.classList.add('pinoy-delicacies')
    heroParaContainer.append(pdUpper,pdLower)
    pdUpper.classList.add('pd-upper')
    pdLower.classList.add('pd-lower')
    pdUpper.textContent = 'PINOY DELICACIES'
    pdLower.textContent = 'RIGHT AT YOUR DOORSTEP'


    heroSec.appendChild(lowerHeroSec)
    lowerHeroSec.classList.add('lower-hero')
    lowerHeroSec.appendChild(decorContainer)
    decorContainer.classList.add('dec-cont')
    decorContainer.appendChild(decor)
    decor.classList.add('dec')

    lowerHeroSec.appendChild(cardContainer)
    cardContainer.classList.add('cards')

    }