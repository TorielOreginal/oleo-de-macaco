function clock(){
    const audio = document.getElementById('audio')
    const clockText = document.getElementById('clock')
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const hoursLeft = String(-(hours - 23))
    const minutesLeft = String(-(minutes - 60))
    const secondsLeft = String(-(seconds - 60))

    function updateTime(k) {
        if (parseInt(k) < 10) {
            return "0" + k;
        }
        else {
            return k;
        }
    }

    const hoursLeft1 = updateTime(hoursLeft)
    const minutesLeft1 = updateTime(minutesLeft)
    const secondsLeft1 = updateTime(secondsLeft)

    document.title = `${hoursLeft1}:${minutesLeft1}:${secondsLeft1} restantes`
    clockText.innerText = `${hoursLeft1}:${minutesLeft1}:${secondsLeft1}`
    if(hours === 0 && minutes === 0){
        document.title = "MEIA NOITE!"
        clockText.innerText = "Meia-noite!"
    }

    if(hours === 0 && minutes === 0 && seconds === 0){
        audio.currentTime = 0
        audio.play()
    }

}

setInterval(clock, 1000)
