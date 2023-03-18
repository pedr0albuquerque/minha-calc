const form = document.querySelector('#container')
const sectionInputs = document.querySelector('#sectionInputs')
const button = document.querySelector('#button-calc')

button.addEventListener('click', function(event){
    event.preventDefault()

    const accountValue = document.querySelector('#inputAccountValue').value
    const serviceFeedback = document.querySelector('#inputServiceFeedback').value
    const people = document.querySelector('#inputPeople').value

    const calc = calcular(accountValue, serviceFeedback,people)
    
    const res = document.querySelector('p')
    res.innerText = 'A gorjeta sera: R$ '+calc+' para cada pessoa.'
    
    sectionInputs.appendChild(res)
})

function calcular(accountValue, serviceFeedback, people){
    return (accountValue * serviceFeedback) /people
}