import choppingBoardImg from './img/chopping-board.jpg';

export const main = document.createElement('main')
const titleMenu = document.createElement('div')
const menuText = document.createElement('h1')
const ourSpecialText = document.createElement('h2')

const specialsContainer = document.createElement('div')
const specialOne = document.createElement('div')
const specialTwo = document.createElement('div')


let specialsImageOne = document.createElement('div')
let foodNameDescOne = document.createElement('div')
let specialFoodNameOne = document.createElement('h1')
let paraOne = document.createElement('p')
let specialsImageTwo = document.createElement('div')
let foodNameDescTwo = document.createElement('div')
let specialFoodNameTwo = document.createElement('h1')
let paraTwo = document.createElement('p')
let otherFoodContainer = document.createElement('div')
let itemArr = []
let hThreeArr = []
for(let i = 0; i < 3 ; i++){
    let item = document.createElement('div')
    item.classList.add('item',`food-item${i}`)
    otherFoodContainer.append(item)
    itemArr.push(item)
    let foodImg = document.createElement('div')
    foodImg.classList.add('food-img')
    let foodTitle = document.createElement('div')
    foodTitle.classList.add('food-title')

    let hThree = document.createElement('h3')

    foodTitle.appendChild(hThree)
    hThreeArr.push(hThree)
    itemArr[i].append(foodImg,foodTitle)
}
export function createMenu(content) {

    titleMenu.setAttribute('class', 'title-menu')
    titleMenu.append(menuText, ourSpecialText)
    menuText.textContent = 'MENU'
    ourSpecialText.textContent = 'OUR SPECIALS FOR TODAY'

    //clean this up

    specialsImageOne.classList.add('specials-image')

    foodNameDescOne.classList.add('food-name-desc')
    
    specialFoodNameOne.classList.add('special-food-name')
    specialFoodNameOne.textContent = 'SPECIAL LUGAW WITH CHICHARON'
    
    paraOne.textContent = 'Lorem ipsum dolor sr sit amet,Lorem ipsum dolor sr sit amet,Lorem ipsum dolor sr sit amet,nisi'
    
    specialOne.classList.add('specials', 'specials-1')

    specialsImageTwo.classList.add('specials-image')
    
    foodNameDescTwo.classList.add('food-name-desc')
    
    specialFoodNameTwo.classList.add('special-food-name')
    specialFoodNameTwo.textContent = 'LONGANISA WITH SHRIMP FRIED RICE'
    
    paraTwo.textContent= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eneque ornare aenean euismod elementum nisi'
    
    specialTwo.classList.add('specials', 'specials-2')
    

    specialOne.append(specialsImageOne, foodNameDescOne)
    specialTwo.append(specialsImageTwo, foodNameDescTwo)
    foodNameDescTwo.append(specialFoodNameTwo, paraTwo)
    foodNameDescOne.append(specialFoodNameOne, paraOne)
    specialsContainer.append(specialOne, specialTwo)
    specialsContainer.classList.add('specials-container')

    otherFoodContainer.classList.add('other-food-items')
    // console.log(hThreeArr)
    hThreeArr[0].textContent = 'LUMPIA'
    hThreeArr[1].textContent = 'SIOPAO'
    hThreeArr[2].textContent = 'SIOMAI'

    content.appendChild(main)
    main.classList.add('menu')
    main.append(titleMenu, specialsContainer,otherFoodContainer)
}