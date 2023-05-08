// Form submmission from message/contact section
const scriptURL = 'https://script.google.com/macros/s/AKfycbwrwDeKJ-0qTfmctg5o0oIqU7qT2XFj7_VrwRHAODGiG87p_ZS7tMSykR-cmQzey5CW/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
	
form.addEventListener('submit', e => {
	e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
			msg.innerHTML = "Message sent successfully!"
			setTimeout(function() {
				msg.innerHTML = ""
			}, 5000)
			form.reset()
		})
		.catch(error => console.error('Error!', error.message))
})