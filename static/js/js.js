const tabs = document.querySelectorAll('.tab');

tabs.forEach(clickedTab =>{
	clickedTab.addEventListener('click', () =>{
		tabs.forEach(tab => {
			tab.classList.remove('active');
		});
		clickedTab.classList.add('active');
	});
});

const ups = document.querySelectorAll('.up');

ups.forEach(clickedTab =>{
	clickedTab.addEventListener('click', () =>{
		ups.forEach(up => {
			up.classList.remove('active');
		});
		clickedTab.classList.add('active');
	});
});






	


	if (window.screen.width < 800) {

		const slider = document.querySelector('.gallery');
		let isDown = false;
		let startX;
		let scrollLeft;
		
		slider.addEventListener('mousedown', e => {
		  isDown = true;
		  slider.classList.add('active');
		  startX = e.pageX - slider.offsetLeft;
		  scrollLeft = slider.scrollLeft;
		});
		slider.addEventListener('mouseleave', _ => {
		  isDown = false;
		  slider.classList.remove('active');
		});
		slider.addEventListener('mouseup', _ => {
		  isDown = false;
		  slider.classList.remove('active');
		});
		slider.addEventListener('mousemove', e => {
		  if (!isDown) return;
		  e.preventDefault();
		  const x = e.pageX - slider.offsetLeft;
		  const SCROLL_SPEED = 3;
		  const walk = (x - startX) * SCROLL_SPEED;
		  slider.scrollLeft = scrollLeft - walk;
		});
	
		
	}


	
