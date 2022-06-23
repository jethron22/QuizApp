const container = document.querySelector(".container");
const question = document.querySelector("#container2");

const containerQuestion1 = document.querySelector(".container-question");
const questionForm1  = document.querySelector("#container0");

const containerQuestion2 = document.querySelector(".container-question1");
const questionForm2 = document.querySelector("#container3");

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


