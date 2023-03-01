var items = ['Apple', 'Book', 'Cat', 'Drum', 'Eggplant'];
var found = 0;

function foundItem(item) {
	var itemIndex = items.indexOf(item);
	if (itemIndex !== -1) {
		items.splice(itemIndex, 1);
		document.getElementById(item.toLowerCase()).style.textDecoration = 'line-through';
		found++;
		if (found === 5) {
			document.getElementById('message').innerHTML = 'Congratulations! You found all the items!';
			var playAgain = confirm('Do you want to play again?');
			if (playAgain) {
				location.reload();
			}
		}
	}
}

function replay() {
    location.reload();
}

var apple = document.getElementById('apple');
apple.addEventListener('click', function() {
	foundItem('Apple');
}, false);

var book = document.getElementById('book');
book.addEventListener('click', function() {
	foundItem('Book');
}, false);

var cat = document.getElementById('cat');
cat.addEventListener('click', function() {
	foundItem('Cat');
}, false);

var drum = document.getElementById('drum');
drum.addEventListener('click', function() {
	foundItem('Drum');
}, false);

var eggplant = document.getElementById('eggplant');
eggplant.addEventListener('click', function() {
	foundItem('Eggplant');
}, false);

var playAgainBtn = document.getElementById('play-again');
playAgainBtn.addEventListener('click', function() {
	replay();
}, false);
