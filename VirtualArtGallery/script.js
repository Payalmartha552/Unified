let currentIndex = 0;

function showArtwork(index) {
    const artworks = document.querySelectorAll('.artwork');
    artworks.forEach((artwork, i) => {
        if (i === index) {
            artwork.style.transform = 'translateX(0)';
        } else if (i < index) {
            artwork.style.transform = 'translateX(-100%)';
        } else {
            artwork.style.transform = 'translateX(100%)';
        }
    });
}

document.getElementById('prevButton').addEventListener('click', () => {
    const artworks = document.querySelectorAll('.artwork');
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : artworks.length - 1;
    showArtwork(currentIndex);
});

document.getElementById('nextButton').addEventListener('click', () => {
    const artworks = document.querySelectorAll('.artwork');
    currentIndex = (currentIndex < artworks.length - 1) ? currentIndex + 1 : 0;
    showArtwork(currentIndex);
});

// Initialize the first artwork as visible
showArtwork(currentIndex);
