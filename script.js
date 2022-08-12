// console.log("Welcome to spotify");
// variable declaration
let songindex = 0;
let masterplay = document.getElementById('masterplay');
let progessbar = document.getElementById('songprogressbar');
let audioelement = new Audio('songs/1.mp3');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songitem'));

// audioelement.play();
let songs = [
    { songName: "Tera Hua-Cash", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Labon Pe Naam - Radhe Shyam", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Udd Jaa Parindey - Radhe Shyam", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Spaceship - AP Dhillon - Hidden Gems", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Nagumomu Thaarale - Radhe Shyam", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Let Me Love You - DJ Snake ft.(Justin Bieber)", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Sakhiyaan-Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
    { songName: "Bhula Dena-Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tumhari Kasam-Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },

    // above is a list of songs
];

let s = document.getElementById('sname').innerHTML = songs[0].songName;

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerHTML = songs[i].songName;
})

// play/pause
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})


// listen to events
// time update id applied on audioelement
audioelement.addEventListener('timeupdate', () => {

    // update seek bar
    let progessper = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    progessbar.value = progessper;
    // above part moves the bar with second progessper is percentage of completed

})
progessbar.addEventListener('change', () => {
    audioelement.currentTime = parseInt((progessbar.value * audioelement.duration) / 100);
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        let songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songindex + 1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        document.getElementById('sname').innerHTML = songs[songindex].songName;
        gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 9) {
        songindex = 0;
    }
    else {
        songindex++;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    document.getElementById('sname').innerHTML = songs[songindex].songName;
    gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 10;
    }
    else {
        songindex--;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    document.getElementById('sname').innerHTML = songs[songindex].songName;
})

// if (progessper == 99) {
//     if (songindex >= 9)
//         songindex = 1;
// }
// else {
//     songindex++;
// }
// audioelement.src = `songs/${songindex}.mp3`;
// audioelement.currentTime = 0;
// audioelement.play();
// masterplay.classList.remove('fa-play-circle');
// masterplay.classList.add('fa-pause-circle');
// document.getElementById('sname').innerHTML = songs[songindex - 1].songName;
// gif.style.opacity = 1;