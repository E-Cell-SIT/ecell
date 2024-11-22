document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.coverflow__image');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    let currentIndex = 0;

    function updateGallery() {
        images.forEach((img, index) => {
            img.style.opacity = '0';
            img.style.zIndex = '0';
            img.style.transform = 'translate(-50%, -50%) scale(0.5) rotateY(0deg)';
        });

        images[currentIndex].style.opacity = '1';
        images[currentIndex].style.zIndex = '10';
        images[currentIndex].style.transform = 'translate(-50%, -50%) scale(1) rotateY(0deg)';

        // Update the previous and next images for a smooth transition
        const prevIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        const nextIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;

        images[prevIndex].style.opacity = '0.5';
        images[prevIndex].style.zIndex = '9';
        images[prevIndex].style.transform = 'translate(-150%, -50%) scale(0.75) rotateY(-45deg)';

        images[nextIndex].style.opacity = '0.5';
        images[nextIndex].style.zIndex = '9';
        images[nextIndex].style.transform = 'translate(50%, -50%) scale(0.75) rotateY(45deg)';
    }

    prevArrow.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateGallery();
    });

    nextArrow.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateGallery();
    });

    updateGallery();
});