const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

const songs = [
    "Audio/music1.mp3",
    "Audio/music2.mp3",
    "Audio/music3.mp3",
    "Audio/music4.mp3",
    "Audio/music5.mp3",
    "Audio/music6.mp3"
];

let currentSong = -1;

function playRandomSong() {
    let randomSong;

    do {
        randomSong = Math.floor(Math.random() * songs.length);
    } while (songs.length > 1 && randomSong === currentSong);

    currentSong = randomSong;
    music.src = songs[currentSong];
    music.play();

    musicButton.textContent = "🎵 Music: ON";
}

music.addEventListener("ended", function() {
    playRandomSong();
});

musicButton.addEventListener("click", function() {

    if (music.paused) {

        if (currentSong === -1) {
            playRandomSong();
        } else {
            music.play();
            musicButton.textContent = "🎵 Music: ON";
        }

    } else {

        music.pause();
        musicButton.textContent = "🎵 Music: OFF";

    }

});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "🌴 Thank you! Your message has been received.";

    form.reset();

});
