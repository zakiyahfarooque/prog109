var items = ['flower vase', 'photo frame', 'hanging plants', 'plate', 'clock'];
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

var apple = document.getElementById('flower vase');
apple.addEventListener('click', function() {
	foundItem('flower vase');
}, false);

var book = document.getElementById('photo frame');
book.addEventListener('click', function() {
	foundItem('photo frame');
}, false);

var cat = document.getElementById('hanging plants');
cat.addEventListener('click', function() {
	foundItem('hanging plants');
}, false);

var drum = document.getElementById('plate');
drum.addEventListener('click', function() {
	foundItem('plate');
}, false);

var eggplant = document.getElementById('clock');
eggplant.addEventListener('click', function() {
	foundItem('clock');
}, false);

var playAgainBtn = document.getElementById('play-again');
playAgainBtn.addEventListener('click', function() {
	replay();
}, false);
