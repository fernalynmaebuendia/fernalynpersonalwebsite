// Form submmission from message/contact section
const scriptURL = 'https://script.google.com/macros/s/AKfycbwrwDeKJ-0qTfmctg5o0oIqU7qT2XFj7_VrwRHAODGiG87p_ZS7tMSykR-cmQzey5CW/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
const nameErrorMsg = document.getElementById("nameErrorMsg");
const emailErrorMsg = document.getElementById("emailErrorMsg");
const messageErrorMsg = document.getElementById("messageErrorMsg");
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', e => {
	e.preventDefault();
	const nameInput = form.querySelector('input[name="Name"]').value;
	const emailInput = form.querySelector('input[name="Email"]').value;
	const messageInput = form.querySelector('textarea[name="Message"]').value;
	let hasErrors = false;
	
	// Simple validations
	if (nameInput.trim() === "") {
		nameErrorMsg.innerHTML = "Please enter your name";
		nameErrorMsg.style.display = "block";
		setTimeout(function () {
			nameErrorMsg.style.display = "none";
		}, 3000);
		hasErrors = true;
	}

	if (emailInput.trim() === "") {
		emailErrorMsg.innerHTML = "Please enter your email address ";
		emailErrorMsg.style.display = "block";
		setTimeout(function () {
			emailErrorMsg.style.display = "none";
		}, 3000);
		hasErrors = true;
	} else if (!isValidEmail(emailInput)) {
		emailErrorMsg.innerHTML = "Invalid email address";
		emailErrorMsg.style.display = "block";
		setTimeout(function () {
			emailErrorMsg.style.display = "none";
		}, 3000);
		hasErrors = true;
	}

	if (messageInput.trim() === "") {
		messageErrorMsg.innerHTML = "Please enter your message";
		messageErrorMsg.style.display = "block";
		setTimeout(function () {
			messageErrorMsg.style.display = "none";
		}, 3000);
		hasErrors = true;
	} 

	if (hasErrors) {
		return;
	}

	// Disable the submit button
    submitButton.disabled = true;

	// Get data from form to google form sheets
	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 3000); // Display for 3 seconds
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
        .finally(() => {
            // Re-enable the submit button after the request is complete
            submitButton.disabled = false;
        });
	});

// Simple email validation function
function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}