let progress = 0;
const progressBar = document.querySelector('.progress');
const statusText = document.querySelector('.status');

// Update every second (1000 ms)
const interval = setInterval(() => {
    progress += 100 / 300; // ~0.33% per second
    progressBar.style.width = progress + '%';
    statusText.textContent = `Loading... ${Math.floor(progress)}%`;

    if (progress >= 100) {
        clearInterval(interval);
        statusText.textContent = "Loading Complete!";
    }
}, 1000);
