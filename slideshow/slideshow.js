// Array of image URLs and descriptions
const images = [
	{
		url: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Omori_cover.jpg',
		description: 'Omori'
	},
	{
		url: 'https://user-images.githubusercontent.com/122185308/222077121-12d52327-3436-474c-bbb4-0f2b5a204e87.jpg',
		description: 'Stardew Valley'
	},
	{
		url: 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg',
		description: 'The Last of Us'
	},
	{
		url: 'https://upload.wikimedia.org/wikipedia/en/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg',
		description: 'Halo'
	},
	{
		url: 'https://user-images.githubusercontent.com/122185308/222077695-82a07d50-73ea-4aa0-8b45-2309a51aa2f7.png',
		description: 'Batman Arkham Series'
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
