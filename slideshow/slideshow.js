// Array of image URLs and descriptions
const images = [
	{
		url: 'images/image1.jpg',
		description: 'Description 1'
	},
	{
		url: 'images/image2.jpg',
		description: 'Description 2'
	},
	{
		url: 'images/image3.jpg',
		description: 'Description 3'
	},
	{
		url: 'images/image4.jpg',
		description: 'Description 4'
	},
	{
		url: 'images/image5.jpg',
		description: 'Description 5'
	}
];

// Get HTML elements
const imageEl = document.getElementById('slideshow-image');
const descriptionEl = document.getElementById('slideshow-description');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Index of current image
let currentImageIndex = 0;

// Show the current image and description
function showImage() {
	imageEl.src = images[currentImageIndex].url;
	descriptionEl.textContent = images[currentImageIndex].description;
}

// Handle user clicks on Previous button
function onPrevClick() {
	currentImageIndex--;
	if (currentImageIndex < 0) {
		currentImageIndex = images.length - 1;
	}
	showImage();
}

// Handle user clicks on Next button
function onNextClick() {
	currentImageIndex++;
	if (currentImageIndex >= images.length) {
		currentImageIndex = 0;
	}
	showImage();
}

// Add event listeners to buttons
prevBtn.addEventListener('click', onPrevClick);
nextBtn.addEventListener('click', onNextClick);

// Show the first image
showImage();

// Automatically show the next image every 3 seconds
setInterval(onNextClick, 3000);
