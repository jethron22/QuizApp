const container = document.querySelector(".container");

const containerQuestion = document.querySelector(".container-question");

const buttonOps = document.querySelector(".button-ops");
const buttonSuivant = document.querySelector(".button-suivant");


// select timer from HTML file

//const timerElement = document.getElementById("file")

// display all container

//console.log(container, question);

buttonOps.addEventListener("click", (e) => {
    e.preventDefault()
    containerQuestion.style.display = 'block'
    container.style.display = 'none'
})

buttonSuivant.addEventListener ("click", (e) => {
    e.preventDefault()
    containerQuestion.style.display = 'block'
    container.style.display = 'none'
    
    const question = document.querySelector(input["Avec <script>", "on ouvre l'élément label", "on ferme HTML et on ouvre <script>", "Aucune bonne reponse"])

})




// questionForm1.addEventListener("submit", (e) => {
//     e.preventDefault()
//     containerQuestion2.style.display ='block'
//     containerQuestion1.style.display = 'none'
//     container.style.display = 'none'
//  })

//  questionForm2.addEventListener("submit", (e) => {
//     e.preventDefault()
//     containerQuestion2.style.display ='none'
//     containerQuestion1.style.display = 'none'
//     container.style.display = 'block'
// })
// containerQuestion1.addEventListener("submit", (e) => {
//     e.preventDefault()
//     containerQuestion2.style.display = 'block'
//     questionForm1.style.display = 'none'
//     container.style.display = 'none'
// })
 
// // setting timer

// const departMinutes = 1
// let temps = departMinutes * 60
// setInterval(() => {
//   let minutes = parseInt(temps / 60, 10)
//   let secondes = parseInt(temps % 60, 10)

//   minutes = minutes < 10 ? "0" + minutes : minutes
//   secondes = secondes < 10 ? "0" + secondes : secondes

//   timerElement.innerText = `${minutes}:${secondes}`
//   temps = temps <= 0 ? 0 : temps - 1
// }, 1000)



