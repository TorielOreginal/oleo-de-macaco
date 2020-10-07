const audio = document.getElementById('audio')
const date = new Date()

const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()

if(hours === 0 && minutes === 0){
    audio.currentTime = 0
    audio.play()
}

function clock(){
    const clockText = document.getElementById('clock')
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const hoursLeft = hours - 24
    const minutesLeft = minutes - 60
    const secondsLeft = seconds - 60

    document.title = `${-hoursLeft}:${-minutesLeft}:${-secondsLeft} restantes`
    clockText.innerText = `${-hoursLeft}:${-minutesLeft}:${-secondsLeft}`
    if(hours === 0 && minutes === 0){
        document.title = "MEIA NOITE!"
        clockText.innerText = "Meia-noite!"
    }
}

setInterval(clock, 1000)