const quizForm = document.querySelector('#quiz');

quizForm.addEventListener('submit', function(e) {
	e.preventDefault();

	const time = parseInt(document.querySelector('input[name="time"]:checked').value);
	const space = parseInt(document.querySelector('input[name="space"]:checked').value);
	const social = parseInt(document.querySelector('input[name="social"]:checked').value);

	let pet = "";

	if (time === 1 && space === 1 && social === 1) {
		pet = "dog";
	} else if (time === 2 && space === 2 && social === 1) {
		pet = "cat";
	} else if (time === 2 && space === 2 && social === 2) {
		pet = "rodent";
	} else if (time === 2 && space === 1 && social === 2) {
		pet = "cat";
	} else if (time === 2 && space === 1 && social === 1) {
		pet = "cat";
	} else {
		pet = "no pet";
	}

	localStorage.setItem('pet', pet);
	window.location.href = 'result.html';
});
