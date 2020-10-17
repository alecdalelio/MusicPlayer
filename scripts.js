const songs = [
    "SUGGA.mp3",
    "Kamikaze.mp3",
    "BS.mp3",
    "MidnightBlues.mp3",
    "Afterthought.mp3",
]

const createSongList = () => {
    const list = document.createElement("ol")

    for(let i = 0; i<songs.length; i++) {
        const item = document.createElement("li")
        item.appendChild(document.createTextNode(songs[i]))
        list.appendChild(item)
    }
  return list
}

document.getElementById("songList").appendChild(createSongList())

songList.onclick = (e) => {
    const clickedItem = e.target
    const source = document.getElementById("source")
    source.src = "songs/" + clickedItem.innerText

    document.getElementById("currentlyPlaying").innerText = "Currently playing: "
    document.getElementById("currentSong").innerText = clickedItem.innerText

    player.load()
    player.play()
}

const playAudio = () => {
    if(player.readyState) {
        player.play()
    }
}

const pauseAudio = () => {
    player.pause();
}

const slider = document.getElementById("volumeSlider")

slider.oninput = (e) => {
    const volume = e.target.value
    console.log(volume)
    player.volume = volume
}

const updateProgress = () => {
    if(player.currentTime>0) {    
    const progressBar = document.getElementById("progress")
    // console.log(progressBar.value + "progress bar value")
    // console.log(player.currentTime + "current time")
    // console.log(player.duration + "duration")

    progressBar.value = (player.currentTime / player.duration) * 100
    }
}