const container = document.querySelector(".container");
const question = document.querySelector("#container2");
const questionSecond = document.querySelector(".container-question");
 const questionTree = document.querySelector(".container-question1");

console.log(container, question);
const container0 = document.querySelector("#container0");

const container2 = document.querySelector("#container2");



container.addEventListener("submit", (e) => {
    e.preventDefault()
    questionSecond.style.display = 'block'
    container.style.display = 'none'
    console(questionSecond)

})

 container3.addEventListener("submit", (e) => {
    e.preventDefault()
    questionTree.style.display ='block'
    questionSecond.style.display = 'none'
 })

container2.addEventListener("submit", (e) => {
    e.preventDefault()
    question.style.display = 'block'
    container.style.display = 'none'
})


