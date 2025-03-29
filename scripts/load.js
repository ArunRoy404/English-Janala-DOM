const loadLessonButton = (levels) => {
    const container = document.getElementById('lesson-button-container')
    levels.forEach(element => {
        container.innerHTML += `
        <button onclick="showLesson(${element.level_no}, ${element.id})" id="${element.id}" class="btn-property btn"><i class="mr-1 fa-solid fa-book-open"></i> Lesson - ${element.level_no}</button>
        `
    });
}

const loadLesson = (lessons) => {
    if (!lessons.length) {
        document.getElementById('go-next-lesson').classList.remove('hidden')
    } else {
        document.getElementById('lesson-container-parent').classList.remove('hidden')

        const lessonContainer = document.getElementById('lesson-container')
        lessonContainer.innerHTML = ''

        lessons.forEach(lesson => {
            lessonContainer.innerHTML += `
            <!-- lesson card  -->
            <div class="bg-white p-14 rounded-xl space-y-14">
                <!-- words container  -->
                <div class="space-y-6">
                    <h1 class="inter text-3xl font-bold">${lesson.word}</h1>
                    <p class="inter text-xl font-medium">Meaning /Pronunciation</p>
                    <h1 class="hind-siliguri primary-color text-3xl font-semibold">"${(lesson.meaning === null || lesson.meaning === undefined)? 'অর্থ নেই' : lesson.meaning} / ${lesson.pronunciation}"</h1>
                </div>

                <!-- button container  -->
                <div class="flex justify-between">
                    <button onclick="showModal(${lesson.id})" class="btn rounded-lg bg-[#1A91FF1A] p-4 py-6 text-[#374957] text-2xl"><i
                            class="fa-solid fa-circle-info"></i></button>
                    <button onclick="pronounceWord('${lesson.word}')" class="btn rounded-lg bg-[#1A91FF1A] p-4 py-6 text-[#374957] text-2xl"><i
                            class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
            `
        })
    }
}

const loadModal = (detail) => {
    const modalBody = document.getElementById('modal-body')
    modalBody.innerHTML = `
    <!-- word info container  -->
    <div class="border-2 border-[#edf7ff] rounded-xl space-y-8 p-6">
        <!-- word  -->
        <div>
            <h1 class="text-4xl font-semibold">${detail.word} (<img src="assets/fi-ss-microphone.svg" alt=""
                    class="inline"> : <span>${detail.pronunciation}</span> )</h1>
        </div>

        <!-- meaning  -->
        <div class="space-y-3">
            <h2 class="font-semibold text-2xl">Meaning</h2>
            <h3 class="hind-siliguri font-medium text-2xl">${(detail.meaning === null || detail.meaning === undefined) ?'অর্থ পাওয়া যায়নি' :detail.meaning}</h3>
        </div>

        <!-- example  -->
        <div class="space-y-3">
            <h2 class="font-semibold text-2xl">Example</h2>
            <h3 class="font-normal text-2xl">${detail.sentence}</h3>
        </div>

        <!-- synonyms  -->
        <div class="space-y-3">
            <h2 class="hind-siliguri font-medium text-2xl">সমার্থক শব্দ গুলো</h2>
            <!-- synonyms container  -->
            <div id="synonyms-container" class="space-x-5">
            </div>
        </div>
    </div>

    <!-- modal button  -->
    <div class="modal-action flex justify-start">
        <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <div class="">
                <button
                    class="btn text-white hind-siliguri font-medium text-2xl  !py-2 !px-5 w-max h-max rounded-xl bg-[#422AD5]">Complete
                    Learning</button>
            </div>
        </form>
    </div>
    `

    const synonymsContainer = document.getElementById('synonyms-container')
    synonymsContainer.innerHTML = ``

    detail.synonyms.forEach(synonym => {
        synonymsContainer.innerHTML += `
        <button class="btn py-2 px-5 bg-[#EDF7FF] border-[1px] border-[#d7e4ef] text-xl ">${synonym}</button>
        `
    })

    // display modal 
    const modal = document.getElementById('my_modal_4')
    modal.showModal()
}