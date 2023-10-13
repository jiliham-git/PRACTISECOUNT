let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let saveBtn= document.getElementById("save-btn")
 let count = 0
 
 function increment(){
    count += 1
    countEl.textContent = count
 }

function save(){
    let saveCount = count +' - '
    saveEl.textContent += saveCount
    countEl.textContent = 0
    count = 0
}

let welcomeEL = document.getElementById("welcome-el")

let name = "Abdul "

let greeting ="Welcome back "

let welcomeMessage = greeting + name

welcomeEL.innerText = welcomeMessage

welcomeEL.innerText +=  ' ' +"👋"