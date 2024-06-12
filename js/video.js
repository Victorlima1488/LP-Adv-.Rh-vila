document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');
    const playButton = document.getElementById('playButton');

    function togglePlay() {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none';
        } else {
            video.pause();
            playButton.style.display = 'block';
        }
    }

    // Ensure video is only loaded once
    let isLoaded = false;
    video.addEventListener('loadeddata', () => {
        if (!isLoaded) {
            isLoaded = true;
            video.play().then(() => {
                playButton.style.display = 'none';
            }).catch(error => {
                playButton.style.display = 'block';
            });
        }
    });

    // Play the video on click and hide the play button
    video.addEventListener('click', togglePlay);

    // Show play button when video is paused
    video.addEventListener('pause', () => playButton.style.display = 'block');

    // Hide play button when video is playing
    video.addEventListener('play', () => playButton.style.display = 'none');
});
