const logInSuccessAlert = () => {
    Swal.fire({
        title: "অভিনন্দন",
        text: "চলুন আজ নতুন কিছু শেখা যাক",
        icon: "success"
    });
}

let lastActive = document.createElement('button');
const removeActive = () => {
    lastActive.classList.remove('active')
}
const addActive = (id) => {
    removeActive()
    lastActive = document.getElementById(id)
    lastActive.classList.add('active')
}

const showLoader = () => {
    document.getElementById('loader').classList.remove('hidden')
}

const hideLoader = () => {
    document.getElementById('loader').classList.add('hidden')
}

const hideAllLessonContainer = () => {
    document.getElementById('select-lesson').classList.add('hidden')
    document.getElementById('go-next-lesson').classList.add('hidden')
    document.getElementById('lesson-container-parent').classList.add('hidden')
}

const logIn = () => {
    logInSuccessAlert()
    document.getElementById('login-section').classList.add('hidden')
    document.getElementById('nav-container').classList.remove('hidden')
    document.getElementById('lesson-section').classList.remove('hidden')
    document.getElementById('faq-section').classList.remove('hidden')

    const activeBTN = document.querySelector('#lesson-button-container .active')
    if(activeBTN !== null){
        activeBTN.classList.remove('active')
    }
    hideAllLessonContainer()
    document.getElementById('select-lesson').classList.remove('hidden')
}
const logOut = () => {
    document.getElementById('login-section').classList.remove('hidden')
    document.getElementById('nav-container').classList.add('hidden')
    document.getElementById('lesson-section').classList.add('hidden')
    document.getElementById('faq-section').classList.add('hidden')
}