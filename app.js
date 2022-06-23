const container = document.querySelector(".container");
const question = document.querySelector("#container2");

console.log(container, question);
const container0 = document.querySelector("#container0");

const container2 = document.querySelector("#container2");
container2.addEventListener("submit", (e) => {
    e.preventDefault()
    question.style.display = 'block'
    container.style.display = 'none'
})
const questionSecond = document.querySelector(".container-question");
container.addEventListener("submit", (e) => {
    e.preventDefault()
    questionSecond.style.display = 'block'
    container.style.display = 'none'
    console(questionSecond)

})
 const questionTree = document.querySelector(".container-question1");
 container3.addEventListener("submit", (e) => {
    e.preventDefault()
    questionTree.style.display ='block'
    questionSecond.style.display = 'none'
 })


