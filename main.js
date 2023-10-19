let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
	if(active + 1 > lengthItems){
		active = 0;
	}else{
		active = active + 1;
	}
	reloadSlider();
}
prev.onclick = function(){
	if(active - 1 < 0){
		active = lengthItems;
	}else{
		active = active - 1;
	}
	reloadSlider();
}
let refeshSlider = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
	let checkLeft = items[active].offsetLeft;
	list.style.left = -checkLeft + 'px';

	let lastActiveDot = document.querySelector('.slider .dots li.active');
	lastActiveDot.classList.remove('active');
	dots[active].classList.add('active');
	clearInterval(refeshSlider);
	refeshSlider = setInterval(()=> {next.click()}, 5000);	

	
}

 dots.foreach((li, key) => {
 	li.addEventListener('click',function(){
 		active = key;
 		reloadSlider();
 	})
 })