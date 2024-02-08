const menuPage = () => {
    const content = document.querySelector('#content')
    const container = document.createElement('div')
    container.classList.add('main-container')

    const menuImg = document.createElement('img')
    menuImg.classList.add('menu-img')
    menuImg.src = '../src/img/menu.png'

    container.appendChild(menuImg);
    content.appendChild(container)
}

export default menuPage;