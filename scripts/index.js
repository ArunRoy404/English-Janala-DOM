const showLessonsCategory = async () => {
    const levelCategory = await getLessonLevels()
    loadLessonButton(levelCategory)
}

const showLesson = async (level, id) => {
    hideAllLessonContainer()
    showLoader()
    addActive(id)
    const lessons = await getLesson(level)
    hideLoader()
    loadLesson(lessons)
}

const showModal = async (id) => {
    const detail = await getWordDetails(id)
    loadModal(detail)
}

const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-EN'; // English
    window.speechSynthesis.speak(utterance);
}

const logInBtn = document.getElementById('logIn-btn')
logInBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const userName = document.getElementById('user-name').value
    const userPass = document.getElementById('user-pass').value
    if (userName === '') {
        alert('Please Tell us your Name first')
        return
    } else {
        if (userPass === '' || userPass !== "123456") {
            alert('Wrong Password. Contact admin to get your Login Code')
            return
        } else {
            logIn()
        }
    }
})
logOut()
showLessonsCategory()

