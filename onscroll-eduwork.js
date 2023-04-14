
window.onload = function () {
	const educationEffectRight = document.querySelector('.education-effect-right');
	const workEffectRight = document.querySelector('.work-effect-right');


	window.addEventListener('scroll', scrollEffect);
		
	function scrollEffect() {
		if (window.scrollY>=900) {
			educationEffectRight.style.opacity = '1';
			educationEffectRight.style.transform = 'translate(0px)';
			educationEffectRight.style.transition = '1s ease';
	
			workEffectRight.style.opacity = '1';
			workEffectRight.style.transform = 'translate(0px)';
			workEffectRight.style.transition = '1s ease';
			
		}
		else {
			educationEffectRight.style.opacity = '0';
			educationEffectRight.style.transform = 'translate(500px)';
			educationEffectRight.style.transition = '1s ease';
			
			workEffectRight.style.opacity = '0';
			workEffectRight.style.transform = 'translate(500px)';
			workEffectRight.style.transition = '1s ease';
		}
		scrollEffect();
	}
};





