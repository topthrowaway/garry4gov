document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bg-audio");
    let playButton = document.getElementById("play-button");

    // Ensure audio starts at a reasonable volume
    audio.volume = 0.5;

    // Try to autoplay when the page loads
    let playAudio = () => {
        audio.play().then(() => {
            playButton.style.display = "none"; // Hide button after playing
        }).catch(() => {
            console.log("Autoplay blocked, waiting for user interaction.");
        });
    };

    // Auto-trigger play when page loads
    playAudio();

    // Keep play/pause functionality in case autoplay fails
    playButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "⏸ Pause";
        } else {
            audio.pause();
            playButton.textContent = "▶ Play";
        }
    });
});
