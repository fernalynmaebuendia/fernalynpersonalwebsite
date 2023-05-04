To reload page and back to top of the page
window.addEventListener('beforeunload', function() {
	window.scrollTo({
	  top:0,
		behavior: "smooth"
	})
});

// Up button
let mybutton = document.getElementById("arrow-up-button");
window.onscroll = function() {scrollFunction()};
// Display the "up" button when scrolling down
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.style.transition = '5s ease';   
  } 
  else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}	

// Close sidebar menu when click outside
const sidebarIcon = document.querySelector(".sidebar-icon");
const sidebar = document.querySelector(".sidebar");

sidebarIcon.onclick = function() {
  sidebarIcon.classList.toggle("active");
  sidebar.classList.toggle("active_sidebar");
}

document.onclick = function(e) {
  if (!sidebarIcon.contains(e.target) && !sidebar.contains(e.target) ) {
    sidebarIcon.classList.remove("active");
    sidebar.classList.remove("active_sidebar");
  }
}

// On scroll progress bar effects
const skillContainer = document.querySelector(".header-text");
const percentageSpan = document.querySelectorAll(".percentage");

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop >= skillContainer.offsetTop) {
    percentageSpan.forEach((percentage) => {
      percentage.style.width = percentage.getAttribute("data-width");
    });
  } else {
    percentageSpan.forEach((percentage) => {
      percentage.style.width = 0;
    });
  }
});

// Tab navigation click hover effects
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
	for(tablink of tablinks) {
		tablink.classList.remove("active-link");
	}
	for(tabcontent of tabcontents) {
		tabcontent.classList.remove("active-tab");
	}
	event.currentTarget.classList.add("active-link");
	document.getElementById(tabname).classList.add("active-tab")
}
