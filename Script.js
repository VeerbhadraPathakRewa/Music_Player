console.log("wellcome ")
let songIndex = 0;
let masterplay = document.getElementById('masterplay')
let myProgressbar = document.getElementById('myProgressbar');

let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');


let audioElement = new Audio('Song/1.mp3');
let Song = [
    { SongName: "Ram ko dekh kar", filePath: "Song/1.mp3", coverPath: "Meadiafile/1.jpg" },
    { SongName: "Kabhi sham Dhale to ", filePath: "Song/2.mp3", coverPath: "Meadiafile/1.jpg" },
    { SongName: "Jo Prem gali me", filePath: "Song/3.mp3", coverPath: "Meadiafile/1.jpg" },
    { SongName: "Mera aap ki kripa se", filePath: "Song/4.mp3", coverPath: "Meadiafile/1.jpg" },
    { SongName: "Bad Rannga hai ye isq", filePath: "Song/5.mp3", coverPath: "Meadiafile/1.jpg" },
    { SongName: "Pahle bhi mai tumse mila", filePath: "Song/6.mp3", coverPath: "Meadiafile/1.jpg" },
    { SongName: "Gir Gaya hu", filePath: "Song/7.mp3", coverPath: "Meadiafile/1.jpg" },
    { SongName: "Pahale bhi mai", filePath: "Song/8.mp3", coverPath: "Meadiafile/1.jpg" },
]


masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    //For Process bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressbar.value = progress;
})
myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
})
const makeallplays = () => {
    // e.target.classList.add('fa-circle-pause');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target)
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `Song/${songIndex + 1}.mp3`;
        mastersongname.innerText = song[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })

});
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e);
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `Song/${songIndex + 1}.mp3`;
    mastersongname.innerText = Song[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `Song/${songIndex + 1}.mp3`;
    mastersongname.innerText = Song[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})

