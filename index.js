// const bill = prompt("enter bill amout pls")
// const perc = prompt('enter percentage pls')
// const persons = prompt('amout of persons')
// let test = bill * perc
// let test1 = Number(test)+Number(bill)
// let test2 = test1/persons
// console.log(test2)

const form  = document.querySelector('form')
const percDiv = document.querySelector('.perc')
const five = document.querySelector('#five')
const ten = document.querySelector('#ten')
const fiften = document.querySelector('#fiften')
const twentyFive = document.querySelector('#twentyFive')
const fifty = document.querySelector('#fifty')
const costum = document.querySelector('#costum')
const billInput = document.querySelector('#bill') 
const people = document.querySelector('#people')
const tipPer = document.querySelector('#tipPer')
const totalPer = document.querySelector('#totalPer')
const inputs = document.querySelectorAll('input')
const submit = document.querySelector('#submit')
const i = document.querySelector('i')
percDiv.childNodes.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        if(five.className == 'checked' || ten.className == 'checked' || fiften.className == 'checked' || twentyFive.className == 'checked' || fifty.className == 'checked' || costum.className == 'checked'){
            five.className = '';
            ten.className = '';
            fiften.className = '';
            twentyFive.className = '';
            fifty.className = ''; 
            costum.className = '';
            btn.className = 'checked'
         }
    })
})
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(billInput.value == '' || people.value == ''){
        submit.className ='disabled'
        i.style.display = 'inline'
    }else{
        submit.className = ''
        const checked = document.querySelector('.checked')
        i.style.display = 'none'
    console.log(checked.value)
    console.log(billInput.value)
    console.log(people.value)
    let first = Number(checked.value) / 100
    let second = Number(billInput.value) * first
    let third = Number(second) + Number(billInput.value)
    let forth = third/ Number(people.value)
    let tipPerPerson = second/Number(people.value)
    console.log(`first ${first}`)
    console.log(`second ${second}`)
    console.log(`third ${third}`)
    console.log(`forth ${forth}`)
    tipPer.innerText = `${(Math.floor(tipPerPerson * 100) / 100).toFixed(2)}`
    totalPer.innerText = `${(Math.floor(forth * 100) / 100).toFixed(2)}`
    }
    
    
})
inputs.forEach(input => input.addEventListener('change', () => {
    if(billInput.value == '' || people.value == ''){
        submit.className ='disabled'
    }else{
        submit.className = ''
    }
}))  
if(billInput.value == '' || people.value == ''){
    submit.className ='disabled'
}