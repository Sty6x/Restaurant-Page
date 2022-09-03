
export const main = document.createElement('main')
const contactHeader = document.createElement('h1')
const para = document.createElement('p')
const form = document.createElement('form')
const submitButton = document.createElement('button')

let formContainerP = []
for (let i = 0; i < 3; i++) {
    let p = document.createElement('p')
    formContainerP.push(p)
    form.append(formContainerP[i])
}
console.log(formContainerP)
const nameLabel = document.createElement('label')
const nameinput = document.createElement('input')

const mailLabel = document.createElement('label')
const mailInput = document.createElement('input')

const textAreaLabel = document.createElement('label')
const textAreaInput = document.createElement('textarea')


export function createContact(content) {
    
    content.appendChild(main)
    main.classList.add('contact-us')
    main.append(contactHeader, para, form,submitButton)
    
    contactHeader.textContent = 'CONTACT US'
    para.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.sit amet consectetur, adipisicing elit.sit amet consectetur, adipisicing elit. Placeat, rerum.'
    formContainerP[0].append(nameLabel, nameinput)
    formContainerP[1].append(mailLabel, mailInput)
    formContainerP[2].append(textAreaLabel, textAreaInput)
    
    function setAttributes(element, attributes) {
        Object.keys(attributes).forEach(attr => {
            element.setAttribute(attr, attributes[attr]);
        });
    }

    const nameAttributes = {
        id: 'name',
        type: 'text',
        required: ''
    };
    const mailAttributes = {
        id: 'mail',
        type: 'email',
        required: ''
    };
    const textAreaAttributes = {
        name:'comment',
        id: 'comment',
        cols:10,
        rows:5,
        maxlength:100
    };
    nameLabel.textContent = 'YOUR NAME:'
    nameLabel.setAttribute('for', 'name')
    setAttributes(nameinput, nameAttributes)
    
    mailLabel.textContent = 'YOUR E-MAIL:'
    mailLabel.setAttribute('for', 'mail')
    setAttributes(mailInput, mailAttributes)

    
    textAreaLabel.textContent = 'LEAVE A MESSAGE:'
    textAreaLabel.setAttribute('for','comment')
    setAttributes(textAreaInput,textAreaAttributes)
    formContainerP[2].classList.add('comment')


    submitButton.setAttribute('type','submit')
    submitButton.textContent = 'SUBMIT >'
    form.appendChild(submitButton)
    
}