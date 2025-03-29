const getLessonLevels = async() =>{
    const url = 'https://openapi.programming-hero.com/api/levels/all'
    const response = await fetch(url)
    const data = await response.json()
    return data.data
}
const getLesson = async(id) =>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.data
}

const getWordDetails = async(id) =>{
    const url = `https://openapi.programming-hero.com/api/word/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.data
}