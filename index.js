// selecting items from HTML
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
// this handles button unchecking when u check new button and it also handles new button getting checked 
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

const math = (checked) => {    
    let first = Number(checked) / 100
    let second = Number(billInput.value) * first
    let third = Number(second) + Number(billInput.value)
    let forth = third/ Number(people.value)
    let tipPerPerson = second/Number(people.value)
    tipPer.innerText = `${(Math.floor(tipPerPerson * 100) / 100).toFixed(2)}`
    totalPer.innerText = `${(Math.floor(forth * 100) / 100).toFixed(2)}`
}
// this listens for form submit and then checks if one of the fields is empty and if it is it doesn't let user submit the form and displays error messeage
// and at the end calls math function which calculates and displays all the numbers
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(billInput.value == '' || people.value == ''){
        submit.className ='disabled'
        i.style.display = 'inline'
    }else{
        submit.className = ''
        const checked = document.querySelector('.checked')
        i.style.display = 'none'
        math(checked.value)
    }
    
    
})
// gives submit button disabled if user emptys line after typing something in
inputs.forEach(input => input.addEventListener('change', () => {
    if(billInput.value == '' || people.value == ''){
        submit.className ='disabled'
    }else{
        submit.className = ''
    }
}))  
// sets class of submit button to disabled for it to give darker look on load
if(billInput.value == '' || people.value == ''){
    submit.className ='disabled'
}