// selecting page

const buttonOps = document.querySelector(".button-ops")
const loginPage = document.querySelector("#loginPage")
const resultPage = document.querySelector("#resultPage")
const questionsPage = document.querySelector("#questionsPage")
const userName = document.querySelector(".name")
const userMail = document.querySelector(".mail")
const errorName = document.querySelector("#errorName")
const errorMail = document.querySelector("#errorMail")
const buttonSuivant = document.querySelector(".button-suivant")
const buttonQuitter = document.querySelector(".button-quitter")
const selectorAll = document.querySelectorAll(".selector")
const selectorId1 = document.getElementById("t1")
const selectorId2 = document.getElementById("t2")
const selectorId3 = document.getElementById("t3")
const selectorId4 = document.getElementById("t4")
const myTitle = document.querySelector("#title")
const nQuest = document.getElementById("nQuest")
const progress = document.getElementById("progress")
const compte = document.getElementById("compte")
const userName1 = document.getElementById("userName1")
const userEmail1 = document.getElementById("userEmail1")
const userScore1 = document.getElementById("userScore1")
const selectorImg = document.getElementById("selectorImg")
const accueilB = document.getElementById("accueilB")


// _______________Déclaration d'une variable du type Array pour stocker les Q & R ___________________________________


const questionsAll = [
    {
        myQuest: "Comment insérer des balises javascript dans une page HTML ?",
        rep1: '<script',
        rep2: '<src>',
        rep3: '<script> puis <\script>',
        rep4: 'Aucune bonne reponse',
        vrai: 0,
    },
    {
        myQuest: "Avec quel attribut lier un fichier HTML avec un fichier JS externe ?",
        rep1: "Avec l'attribut src='' '' ",
        rep2: "L'attribut img=''''",
        rep3: "Avec l'attribut Alt=''''",
        rep4: "Aucune bonne réponse",
        vrai: 0,
    },
    {
        myQuest: "Cochez la bonne réponse",
        rep1: "Javascript est un langage de balisage",
        rep2: "Javascript est un langage de programmation",
        rep3: "DOM signifie, Document Object Middle",
        rep4: "Aucune bonne réponse ",
        vrai: 2,
    },
    {
        myQuest: "Cochez la bonne réponse",
        rep1: "Il n'existe pas de librairie JS",
        rep2: "JS ne fonctionne jamais coté client",
        rep3: "Javascript fonctionne coté client",
        rep4: "Aucune bonne réponse",
        vrai: 2,
    },
    {
        myQuest: "Sont des types de données en JS sauf",
        rep1: "String",
        rep2: "Array",
        rep3: "Number",
        rep4: "Hover",
        vrai: 3,
    },

    {
        myQuest: "Quel selecteur sert à selectionner une class dans le DOM ",
        rep1: "Document.getElementById",
        rep2: "Document.getElementByname",
        rep3: "Document.getElementByClassName",
        rep4: "Aucune bone reponse",
        vrai: 1,
    },
    {
        myQuest: "Quel élément sert de poser une condition JS",
        rep1: "If & else",
        rep2: "here",
        rep3: "from",
        rep4: "Why",
        vrai: 0,
    },
    {
        myQuest: "Quel élément sert de déclaration d'une fonction en JS",
        rep1: "when(){}",
        rep2: "function myFunct(){}",
        rep3: "for[]()",
        rep4: "Let myFunct(){}",
        vrai: 1,
    },
    {
        myQuest: "À quoi sert la boucle for ?",
        rep1: 'avec ce texte ici',
        rep2: 'avec ce texte ici',
        rep3: 'avec ce texte ici',
        rep4: 'avec ce texte ici',
        vrai: 2,
    },
    {
        myQuest: "Sont des librairie et framework JS sauf:",
        rep1: "React.js",
        rep2: "Vue.js",
        rep3: "Laravel",
        rep4: "Angular.js",
        vrai: 2,
    },
    {
        myQuest: "Citez les differents framework JS",
        rep1: 'avec ce texte ici',
        rep2: 'avec ce texte ici',
        rep3: 'avec ce texte ici',
        rep4: 'avec ce texte ici',
        vrai: 1,
    },
    {
        myQuest: "Énumérez différents boucles en JS",
        rep1: 'avec ce texte ici',
        rep2: 'avec ce texte ici',
        rep3: 'avec ce texte ici',
        rep4: 'avec ce texte ici',
        vrai: 2,
    },
    {
        myQuest: "À quoi sert le Dom en JS",
        rep1: 'avec ce texte ici',
        rep2: 'avec ce texte ici',
        rep3: 'avec ce texte ici',
        rep4: 'avec ce texte ici',
        vrai: 3,
    },
    {
        myQuest: "Comment on ajoute un écouteur d'événement en JS",
        rep1: 'avec ce texte ici',
        rep2: 'avec ce texte ici',
        rep3: 'avec ce texte ici',
        rep4: 'avec ce texte ici',
        vrai: 1,
    },
    {
        myQuest: "Que signifie l'opérateur == en javascript",
        rep1: 'avec ce texte ici',
        rep2: 'avec ce texte ici',
        rep3: 'avec ce texte ici',
        rep4: 'avec ce texte ici',
        vrai: 0,
    },
]



// _______________CETTE SECTION CONTIENT TOUTES LES FONCTIONS UTILISÉES__________________________




/*________________Nous créons 3 variables: l'un pour compter les questions, 
l'autre pour stocker les réponses(vérifications) la troisième pour vérifier les scores du USER*/ 

let takeQuestion = 0
let userAnswer
let userScore = 0

function selectorImage() {
    if (userScore < 8) {
        selectorImg.src = 'failures.jpeg'
        userScore1.textContent = userName.value +',' +' ' + "Tu viens d'échouer avec" +' '+ userScore + '/15';
        userScore1.style.color = "red"
    }
}
/*________________Cette fonction compare la réponse de l'utilisateur et la vrai réponse du QUIZ______________*/

function compareAnswer() {
    if (userAnswer == questionsAll[takeQuestion].vrai) {
        userScore++
    }
}
//________________Le compteur décremente à partir de 60 sec, et sa longueur est de 100___________________________

let compteur = 60
let widthCompteur = 100
let id


/* _______________Nous créons une fonction qui va décrementer de 
60 à 0 et réinitialiser le comptage à chaque fois que l'on passe à la page suivante du Quiz*/

function counter() {
    if (compteur >= 0) {
        widthCompteur = widthCompteur - (100 / 60)
        progress.style.width = (widthCompteur) + "%"
        compte.textContent = compteur
        compteur--
    } else {
        clearInterval(id)
        initializeCounter()
        takeQuestion++
        callQuestion()
    }
}
/*________________Cette fonction va initialiser le compteur à 60 à chaque nouvelle page*/

function initializeCounter() {
    compteur = 60
    widthCompteur = 100
    clearInterval(id)
    id = setInterval(counter, 1000)
}
//________________Cette fonction affiche les résultats de l'utilisateur: Son nom, son Email et son Score_____________

function resultAction() {
    userName1.textContent = userName.value;
    userEmail1.textContent = userMail.value;
    userScore1.textContent = 'Bravo'+' '+ userName.value +' '+ "! tu as trouvé" + ' ' + userScore + '/15';
    selectorImage()
}
//________________Cette fonction vérifie si tout les boutons des réponses on été parcourus par le USER_____________________

function checkRadio() {
    for (let i = 0; i < 4; i++) {
        if (selectorAll[i].checked) {
            userAnswer = i
            return true
        }
    } return false
}

function deselectAll() {
    for (let i = 0; i < 4; i++) {
        if (selectorAll[i].checked) {
            selectorAll[i].checked = false
        }
    }
}

function ckeckOpacity() {
    selectorAll.forEach(elt => {
        elt.addEventListener('click', (e) => {
            buttonSuivant.style.opacity = "2"
        })
    });
}
ckeckOpacity()


function callQuestion() {
    let stockQuestion = questionsAll[takeQuestion]
    myTitle.textContent = stockQuestion.myQuest
    nQuest.textContent = takeQuestion + 1
    selectorId1.textContent = stockQuestion.rep1
    selectorId2.textContent = stockQuestion.rep2
    selectorId3.textContent = stockQuestion.rep3
    selectorId4.textContent = stockQuestion.rep4
    buttonSuivant.style.opacity = "0.4"
}

callQuestion()

/* Fonction qui gère la validation avant de passer le QUIZ */

function clickButtonOps() {
    const userregexName = /[A-z]+./
    const userregexMail = /^[a-zA-Z0-9\._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    if (userregexName.test(userName.value) && userregexMail.test(userMail.value)) {
        loginPage.style.display = "none"
        resultPage.style.display = "none"
        questionsPage.style.display = "block"
    } else {
        if (!userregexName.test(userName.value)) {
            errorName.textContent = "Mettez un nom valide avant de commencer le jeux"
            errorName.style.color = "red"
            errorName.style.fontSize = "small"
        }
        if (!userregexMail.test(userMail.value)) {
            errorMail.textContent = "S'il vous plait, mettez un email valide avant de commencer à jouer"
            errorMail.style.color = "red"
            errorMail.style.fontSize = "small"
        }
    }
}

// _________________________All events pages______________________________________

buttonOps.addEventListener('click', (e) => {
    e.preventDefault()
    initializeCounter()
    clickButtonOps()
})



buttonSuivant.addEventListener('click', (e) => {
    e.preventDefault()
    if (checkRadio()) {
        compareAnswer()
        console.log(userScore)
        deselectAll()
        takeQuestion++
        if (takeQuestion == 15) {
            resultAction()
            loginPage.style.display = "none"
            resultPage.style.display = "block"
            questionsPage.style.display = "none"
        } else {
            initializeCounter()
            callQuestion()
        }
    }

})
buttonQuitter.addEventListener('click', (e) => {
    e.preventDefault()
    resultAction()
    let message = true
    loginPage.style.display = "none"
    resultPage.style.display = "block"
    questionsPage.style.display = "none"

})

accueilB.addEventListener('click', (e) => {
    location.reload()
})