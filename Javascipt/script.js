const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

music.volume = 0.03;

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
    } while (randomSong === currentSong && songs.length > 1);

    currentSong = randomSong;
    music.src = songs[currentSong];
    music.load();

    music.play()
        .then(function() {
            musicButton.textContent = "🎵 Music: ON";
        })
        .catch(function(error) {
            console.log("Music error:", error);
            musicButton.textContent = "🎵 Music: ERROR";
        });
}

music.addEventListener("ended", function() {
    playRandomSong();
});

musicButton.addEventListener("click", function() {

    if (music.paused) {

        if (currentSong === -1) {
            playRandomSong();
        } else {
            music.play()
                .then(function() {
                    musicButton.textContent = "🎵 Music: ON";
                })
                .catch(function(error) {
                    console.log("Music error:", error);
                });
        }

    } else {

        music.pause();
        musicButton.textContent = "🎵 Music: OFF";

    }

});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form) {
    form.addEventListener("submit", function(event) {

        event.preventDefault();

        formMessage.textContent =
            "🌴 Thank you! Your message has been received.";

        form.reset();

    });
}
