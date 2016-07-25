var container = document.getElementById('container');
var iterations = 100;


function generateBlock() {
	if(document.querySelectorAll('div').length >= iterations) {
		return;
	}

	var elem = document.createElement('div');
	var randNum = getRandomInt(1, 4);

	if (randNum === 1) {
		elem.className = 'melon';
	} else if (randNum === 2) {
		elem.className = 'coral';
	} else if (randNum === 3) {
		elem.className = 'peach';
	} else {
		elem.className = 'sage';
	}

	container.appendChild(elem);
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}

setInterval( function() {
	generateBlock();
}, 500);