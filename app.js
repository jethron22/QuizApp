const container = document.querySelector(".container");
const question = document.querySelector("container2");


const containerQuestion1 = document.querySelector(".container-question");

const questionForm1  = document.querySelector("container0");

const containerQuestion2 = document.querySelector(".container-question1");

// select timer from HTML file

const timerElement = document.getElementById("file")

// display all container

console.log(container, question);

container.addEventListener("submit", (e) => {
    e.preventDefault()
    containerQuestion1.style.display = 'block'
    containerQuestion2.style.display ='none'
    container.style.display = 'none'
    console(questionSecond)
})

questionForm1.addEventListener("submit", (e) => {
    e.preventDefault()
    containerQuestion2.style.display ='block'
    containerQuestion1.style.display = 'none'
    container.style.display = 'none'
 })

 questionForm2.addEventListener("submit", (e) => {
    e.preventDefault()
    containerQuestion2.style.display ='none'
    containerQuestion1.style.display = 'none'
    container.style.display = 'block'
})
containerQuestion1.addEventListener("submit", (e) => {
    e.preventDefault()
    containerQuestion2.style.display = 'block'
    questionForm1.style.display = 'none'
    container.style.display = 'none'
})
 
// setting timer

const departMinutes = 1
let temps = departMinutes * 60
setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)



