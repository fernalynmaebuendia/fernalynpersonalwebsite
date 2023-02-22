
window.onload = function () {
	/*const aboutEffect = document.querySelector('.about-effect')

	window.addEventListener('scroll', scrollAboutEffect);
		
	function scrollAboutEffect() {
		if (window.scrollY>=500) {
			aboutEffect.style.opacity = '1';
			aboutEffect.style.transform = 'translateX(0px)';
			aboutEffect.style.transition = '1s ease-in-out';
		}
		else {
			aboutEffect.style.opacity = '0';
			aboutEffect.style.transform = 'translateX(0px)';
			aboutEffect.style.transition = '1s ease-in-out';
		}
		scrollAboutEffect();
	}*/


	const educationEffectRight = document.querySelector('.education-effect-right');
	const workEffectRight = document.querySelector('.work-effect-right');


	window.addEventListener('scroll', scrollEffect);
		
	function scrollEffect() {
		if (window.scrollY>=900) {
			educationEffectRight.style.opacity = '1';
			educationEffectRight.style.transform = 'translate(0px)';
			educationEffectRight.style.transition = '0.3s ease-in-out';
	
			workEffectRight.style.opacity = '1';
			workEffectRight.style.transform = 'translate(0px)';
			workEffectRight.style.transition = '0.3s ease-in-out';
			
		}
		else {
			educationEffectRight.style.opacity = '0';
			educationEffectRight.style.transform = 'translate(200px)';
			educationEffectRight.style.transition = '0.3s ease-in-out';
			
			workEffectRight.style.opacity = '0';
			workEffectRight.style.transform = 'translate(200px)';
			workEffectRight.style.transition = '0.3s ease-in-out';
		}
		scrollEffect();
	}

	
	/*const skillSection = document.getElementById('.skill-section');
	const progressBar = document.querySelectorAll('.progress-bar');

	function showProgress(){
		progressBar.forEach(progressBar => {
			const value = progressBar.dataset.progress;
			progressBar.style.opacity = 1;
			progressBar.style.width = `${value}%`;
		});
	}

	function hideProgress(){
		progressBar.forEach(p => {
			h3.style.opacity = 0;
			h3.style.width = 0;
		});
	}

	window.addEventListener('scroll',() =>{
		const sectionPosition = skillSection.getBoundingClientRect().top;
		const screenPosition = window.innerHeight / 2;
        	
	if (sectionPosition<screenPosition) {
		progressBar.classList.add('active');
		showProgress();
	}
	else {
		progressBar.classList.remove('active');
		hideProgress();
        }
	});*/		
};




	

