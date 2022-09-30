console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let ducky = document.querySelector('#duckswag')

let compliment = evt => {
	
	evt.preventDefault();
	
	alert('Nice muscles bro, dont touch my ducky tho.')
}



ducky.addEventListener('mouseover' , compliment)