import './style.css';
import {
    createHeaderNav,
    logo,
    navButtons,
    main as homepageMain,
    createHeroSec,
    navButtonContainer
} from './HomePage';
import {
    createMenu,
    main as menuMain
} from './menu';

import {
    createContact,
    main as contactMain
} from './contact';
//cant go back to default
const body = document.querySelector('body')


//appends header from HomePAge to content
const content = document.getElementById('content')
console.log(content)
createHeaderNav(content)

// creates hero section and appends as child inside main
createHeroSec(homepageMain)

// controlling appending and removing 'main' contents for each module
// append main or homepageMain to content div by default
content.appendChild(homepageMain)

logo.addEventListener('click', () => {
    location.reload();
})

navButtonContainer.addEventListener('click', (e) => {
    const navButton = e.target
    if (navButton.matches('#menu')) {
        createMenu(content)
        body.classList.add('on-menu')
        content.removeChild(contactMain)
    }
    if (navButton.matches('#deliv')) {
        console.log(' delivery pressed')
    }
    if (navButton.matches('#contact')) {
        createContact(content)
        content.removeChild(menuMain)
        body.classList.remove('on-menu')
        body.classList.add('default')
        console.log(' contact pressed')

    }
})

// removes any of the 'main' contencts of each module
navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        content.removeChild(homepageMain)
    })
});