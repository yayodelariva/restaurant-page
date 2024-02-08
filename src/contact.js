const contactPage = () => {
    const content = document.querySelector('#content')
    const container = document.createElement('div')
    container.classList.add('main-container')

    const promiseContainer = document.createElement('div')
    promiseContainer.classList.add('promise-container2')

    const promiseTitle = document.createElement('h2')
    promiseTitle.classList.add('promise-title')
    promiseTitle.textContent = 'Legal/Disclaimer'

    const promiseListContainer = document.createElement('div')
    promiseListContainer.classList.add('promise-list2')

    const disclaimer = document.createElement('p')
    disclaimer.innerHTML = 'Cluckin\' Bell bears no responsibility for any of the following side effects from eating our chicken - mammary gland swelling (in Cluckin\' Bell versus the state of Ohio, 1994, it was proven that the link could not be established), erectile dysfunction (in a landmark case in Mexico City last month, the judge was killed so the case was thrown out of court. COck a Doodle DO!), hair loss (you\'re bald, lady - chicken\'s have feathers - don\'t blame us!), heart disease, brain shrinkage, obesity, stomach ulcers, blindness or teenage acne. <br><br> Cluckin\' Bell recommens a healthy, mixed diet with lots of excercise. Just because our food is cheap and full of addictive chemicals, doesn\'t mean you should eat it all of the time. If you do, that\'s your look out. Guaranteed!'

    promiseListContainer.appendChild(disclaimer)
    promiseContainer.appendChild(promiseTitle)
    promiseContainer.appendChild(promiseListContainer)

    container.appendChild(promiseContainer);
    content.appendChild(container);
}

export default contactPage;