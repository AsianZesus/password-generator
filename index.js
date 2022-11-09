let rectangle1El = document.getElementById("text1")
let rectangle2El = document.getElementById("text2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function buttonEl(){
    for (let i = 0; i < 17; i++){
    let randomConst1 = Math.floor(Math.random() * characters.length)
    console.log(randomConst1)
    rectangle1El.textContent += characters[randomConst1]

    let randomConst2 = Math.floor(Math.random() * characters.length)
    console.log(randomConst2)
    rectangle2El.textContent += characters[randomConst2]
}
}

// let passwordLength = 12

// function getRandomCharacter() {
//     let randomChar = Math.floor(Math.random() * characters.length)
//     return characters[randomChar]
// }

// function buttonEl() {
//     let randomPassword = ""
//     for (let i = 0; i < passwordLength; i++) {
//         randomPassword += getRandomCharacter()         
//     }
//     rectangle1El.textContent += randomPassword
//     return randomPassword
// }