
const testFunction = () => {
    const content = document.querySelector('#content');

    //logo

    const logo = document.createElement('img')
    logo.classList.add('logo')
    logo.src = '../src/img/logo.webp'

    //homepage-AD

    const homepageAD = document.createElement('img')
    homepageAD.classList.add('homepage-ad')
    homepageAD.src = '../src/img/homepage-ad.jpg'

    //navbar-buttons





    //navbar

    const navbar = document.createElement('div')
    navbar.classList.add('navbar')
    
    navbar.appendChild(logo)
    navbar.appendChild(homepageAD)

    //promise

    const promiseContainer = document.createElement('div')
    promiseContainer.classList.add('promise-container')

    const promiseTitle = document.createElement('h2')
    promiseTitle.classList.add('promise-title')
    promiseTitle.textContent = 'Our Promise to You'

    const promiseListContainer = document.createElement('div')
    promiseListContainer.classList.add('promise-list')

    const promiseList = document.createElement('ul')
    promiseList.innerHTML = '<h3>Cock a doodle do\'s</h3><br><ul><li>Since 1982. Cluckin\' Bell has been leading the way in providing billions of chickens with a very happy resting place - your stomach! Using our uniquely humane way of factory farming them, we can provide you with the cheapest, most satisfying fried chicken around!</li><br><li>Using our patented herby feed, the chickens are effectively being marinated from the day they are born. All to bring the taste all the way to your plate. Cock A Doodle Do!</li><br><li>Our chickens don\'t die in vain. Guaranteed!</li></ul><br><h3>Cock a doodle don\'ts</h3><br><ul><li>No Cluckin\' Bell chicken ever saw the light of day, so they don\'t know what they are missing!</li><br><li>Unlike other chains, our chickens WANT to be deep fried at a young age!</li><br><li>Our deep fried chicken is healthy, especially for girls hitting puberty!</li></ul>'

    promiseListContainer.appendChild(promiseList)
    promiseContainer.appendChild(promiseTitle)
    promiseContainer.appendChild(promiseListContainer)



    //main-container

    const container = document.createElement('div')
    container.classList.add('main-container')
    container.appendChild(navbar)
    container.appendChild(promiseContainer)


    content.appendChild(container)

    
}

export default testFunction