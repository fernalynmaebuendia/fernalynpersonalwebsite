// To reload page and back to top of the page
// window.addEventListener('beforeunload', function() {
// 	window.scrollTo({
// 	  top:0,
// 		behavior: "smooth"
// 	})
// });

// Scroll Up button functionality module
function handleScrollUpButton() {
  const upButton = document.getElementById("arrow-up-button");
  // Display the "Up" button when scrolling down
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      upButton.style.display = "block";
      upButton.style.transition = '5s ease';   
    } 
    else {
      upButton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document 
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  // Attach scroll event listener
  window.addEventListener("scroll", scrollFunction);
  // Attach click event listener
  upButton.addEventListener("click", topFunction);
}

// Sidebar functionality module
function handleSidebar() {
  const sidebarIcon = document.querySelector(".sidebar-icon");
  const sidebar = document.querySelector(".sidebar");
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  
  // Close sidebar menu when clicking on a sidebar link
  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Close the sidebar
      sidebarIcon.classList.remove("active");
      sidebar.classList.remove("active_sidebar");
    });
  });
  // Open sidebar
  function toggleSidebar() {
    sidebarIcon.classList.toggle("active");
    sidebar.classList.toggle("active_sidebar");
  }
  // Close sidebar menu when click outside
  function closeSidebar(e) {
    if (!sidebarIcon.contains(e.target) && !sidebar.contains(e.target)) {
      sidebarIcon.classList.remove("active");
      sidebar.classList.remove("active_sidebar");
    }
  }
  // Attach click event listener to sidebar icon
  sidebarIcon.addEventListener("click", toggleSidebar);
  // Attach click event listener to document
  document.addEventListener("click", closeSidebar);
}

// On scroll progress bar effects module
function handleProgressBar() {
  const skillContainer = document.querySelector(".header-text");
  const percentageSpan = document.getElementsByClassName("percentage");
  
  function onScrollProgressBar() {
    if (document.documentElement.scrollTop >= skillContainer.offsetTop) {
      for (let i = 0; i < percentageSpan.length; i++) {
        percentageSpan[i].style.width = percentageSpan[i].getAttribute("data-width");
      }
    } else {
      for (let i = 0; i < percentageSpan.length; i++) {
        percentageSpan[i].style.width = 0;
      }
    }
  } 
  // Attach scroll event listener
  window.addEventListener("scroll", onScrollProgressBar);
}

// Tab navigation click hover effects
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname, event) {
	for (tablink of tablinks) {
		tablink.classList.remove("active-link");
	}
	for (tabcontent of tabcontents) {
		tabcontent.classList.remove("active-tab");
	}
	event.currentTarget.classList.add("active-link");
	document.getElementById(tabname).classList.add("active-tab");
}

// Call the modularized functions
handleScrollUpButton();
handleSidebar();
handleProgressBar();