// Add the following JavaScript code to create an automatic image slideshow

var currentImageIndex = 0;
var images = document.querySelectorAll('.gallery-image');

function showNextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

// Set interval for automatic slideshow
var slideshowInterval = setInterval(showNextImage, 2000); // Change the interval time (in milliseconds) as needed

// Pause the slideshow when hovering over images
images.forEach(function(image) {
    image.addEventListener('mouseenter', pauseSlideshow);
    image.addEventListener('mouseleave', resumeSlideshow);
});

function pauseSlideshow() {
    clearInterval(slideshowInterval);
}

function resumeSlideshow() {
    slideshowInterval = setInterval(showNextImage, 3000); // Change the interval time (in milliseconds) as needed
}
// Add the following JavaScript code to cycle through owner photos and names automatically

var owners = [
    { name: 'Rupal Sahu', photo: 'rs.jpg' },
    { name: 'Sonal Sahu', photo: 'ss.jpg' },
    
];

var currentOwnerIndex = 0;
var ownerImageElement = document.getElementById('ownerImage');
var ownerNameElement = document.querySelector('.owner-name');

function rotateOwner() {
    currentOwnerIndex = (currentOwnerIndex + 1) % owners.length;
    ownerImageElement.src = owners[currentOwnerIndex].photo;
    ownerNameElement.textContent = owners[currentOwnerIndex].name;
}

// Set interval for automatic owner rotation (every 5 seconds)
var ownerRotationInterval = setInterval(rotateOwner, 5000); // Adjust interval as needed
