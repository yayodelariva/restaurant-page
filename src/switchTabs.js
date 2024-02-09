import testFunction from "./homepage"
import menuPage from "./menu"
import contactPage from "./contact"

const createBtns = () => {

    

const content = document.querySelector('#content')

const homeBtn = document.createElement('button')
const menuBtn = document.createElement('button')
const aboutBtn = document.createElement('button')

homeBtn.textContent = 'Home'
menuBtn.textContent = 'Menu'
aboutBtn.textContent = 'About'

homeBtn.classList.add('navbar-btn-left')
menuBtn.classList.add('navbar-btn-middle')
aboutBtn.classList.add('navbar-btn-right')

const btnContainer = document.createElement('div')
btnContainer.classList.add('btnContainer')
btnContainer.appendChild(homeBtn)
btnContainer.appendChild(menuBtn)
btnContainer.appendChild(aboutBtn)

homeBtn.addEventListener('click', () => {
    clearContent();
    testFunction();
});

menuBtn.addEventListener('click', () => {
    clearContent();
    menuPage();
})

aboutBtn.addEventListener('click', () => {
    clearContent();
    contactPage();
})

content.appendChild(btnContainer)

}

function clearContent(){
    const content = document.querySelector('#content')
    const container = document.querySelector('.main-container')
    if (container) {
        content.removeChild(container)
    }
}

export default createBtns