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