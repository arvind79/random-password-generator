let generatePassButton = document.querySelector("#generate-btn")
let passFieldOneEl = document.querySelector("#passfield-one-el")
let passFieldTwoEl = document.querySelector("#passfield-two-el")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// function for button
generatePassButton.addEventListener("click", ()=>{
    let fieldOne = ""
    let fieldTwo = ""
    for(let i=0; i<15; i++) {
        let x = Math.floor(Math.random() * characters.length)
        let y = Math.floor(Math.random()* characters.length)
        // console.log(characters[x])
        fieldOne += characters[x]
        fieldTwo += characters[y]
    }
    passFieldOneEl.textContent = fieldOne
    passFieldTwoEl.textContent = fieldTwo
})