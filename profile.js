console.log('hello world')
let colorButton = document.querySelector('#color')
let placeButton = document.querySelector('#place')
let ritualButton = document.querySelector('#ritual')


let displayColor = evt => {
    evt.preventDefault();
	
	alert('My favorite color is purple.');
}

let displayPlace = evt => {
    evt.preventDefault();
	
	alert('My favorite place is my battlestation! (my desk, lol.)');
}

let displayRitual = evt => {
    evt.preventDefault();
	
	alert('My favorite ritual is eating a rice crispy treat before bed.');
}



colorButton.addEventListener('click' , displayColor);
placeButton.addEventListener('click' , displayPlace);
ritualButton.addEventListener('click' , displayRitual);