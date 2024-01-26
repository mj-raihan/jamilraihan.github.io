// function showContent(contentId) {

//   if (String(contentId) !== "home") {
//     $(".slideshow_container").css("display", "none");
//   }
//   if (String(contentId) === "home") {
//     // $(".container").hide();
//     $("#" + contentId).fadeIn();
//     // $("#sidebar a").removeClass("active"); // Remove active class from all tabs
//     $("#" + contentId + "-tab").addClass("active"); // Add active class to the selected tab
//     $(".slideshow_container").css("display", "block");
//   }
//   if (String(contentId) === "topic_1") {
//     $("#" + 'contentContainer').fadeIn();
//     $(document).ready(function () {
//       // Load content from another HTML file into the specified div
//       $("#contentContainer").load("topic_1.html");

//     });
//   }
//   hideSidebar(); // Hide the sidebar after clicking a component
// }

// active tab sign


function hideSidebar() {
  if ($(window).width() <= 1200) {
    $("#sidebar").removeClass("active");
    $("#menu-toggle").show();
    $("#menu-close").hide();
  }
}

$(document).ready(function () {
  function handleToggleIcons() {
    if ($(window).width() <= 1200) {
      $("#menu-toggle").show();
      $("#menu-close").hide();
    } else {
      $("#menu-toggle").hide();
      $("#menu-close").hide();
    }
  }

  handleToggleIcons();

  $(window).resize(function () {
    handleToggleIcons();
  });

  $("#menu-toggle").click(function () {
    $("#sidebar").toggleClass("active");
    $("#menu-toggle").hide();
    $("#menu-close").show();
  });

  $("#menu-close").click(function () {
    hideSidebar();
  });

  // Handle sidebar item clicks
  $("#sidebar a").click(function () {
    hideSidebar();
  });

  // active 
  // Handle sidebar item clicks
  $("#sidebar a").click(function () {
    hideSidebar();
  });

  // Display the Home content by default
  // showContent("home");
});

// popup start

// popup end


// dark mode start
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;

toggleDarkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode);
  updateIcon(isDarkMode);
});

// Check if dark mode preference is stored in local storage
const savedDarkMode = localStorage.getItem('dark-mode');

if (savedDarkMode) {
  body.classList.toggle('dark-mode', savedDarkMode === 'true');
  updateIcon(savedDarkMode === 'true');
}

function updateIcon(isDarkMode) {
  const icon = toggleDarkModeButton.querySelector('i');
  icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
}
// Function to check OS dark mode preference
// function checkOSDarkModePreference() {
//   const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

//   function handleDarkModeChange(e) {
//     const isDarkModePreferred = e.matches;
//     body.classList.toggle('dark-mode', isDarkModePreferred);
//     updateIcon(isDarkModePreferred);
//   }

//   darkModeMediaQuery.addListener(handleDarkModeChange);
//   handleDarkModeChange(darkModeMediaQuery);
// }

// // Check and apply OS dark mode preference
// checkOSDarkModePreference();

// Function to check OS dark mode preference end
// dark mode end

// news start
let slideIndex = 1;
let slideInterval;

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");

  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function startSlide() {
  slideInterval = setInterval(function () {
    changeSlide(1);
  }, 4000);
}

function stopSlide() {
  clearInterval(slideInterval);
}
changeSlide(1)
startSlide(); // Start the automatic sliding initially
// news stop

// clipboard copy text start
function copyToClipboard(text) {
  // Create a temporary textarea element
  var textarea = document.createElement('textarea');

  // Set the text content to the provided text
  textarea.value = text;

  // Append the textarea to the body
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();
  textarea.setSelectionRange(0, 99999); /* For mobile devices */

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textarea);
  // Show notification
  showNotification('Text copied to clipboard');

  // Remove notification after 2 seconds
  setTimeout(function () {
    removeNotification();
  }, 1000);
}

function showNotification(message) {
  // Create a notification element
  var notification = document.createElement('div');
  notification.innerHTML = message;
  notification.className = 'notification'; // Set the class name
  notification.style.position = 'fixed';
  notification.style.top = '10px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.padding = '10px';
  notification.style.background = '#4CAF50';
  notification.style.color = 'white';
  notification.style.borderRadius = '5px';
  notification.style.zIndex = '1000';

  // Append the notification to the body
  document.body.appendChild(notification);
}

function removeNotification() {
  // Remove the notification element
  var notification = document.querySelector('.notification');
  if (notification) {
    document.body.removeChild(notification);
  }
}
// clipboard copy text stop

// hasing start
// document.addEventListener("DOMContentLoaded", function () {
//   // Get the hash value from the URL
//   console.log("inside");
//   var hash = window.location.hash.substring(1);
//   console.log(hash);

//   // If the hash is not empty, scroll to the corresponding section
//   if (hash) {
//     var targetSection = document.getElementById(hash);
//     console.log(targetSection);
//     if (targetSection) {
//       targetSection.scrollIntoView();
//     }
//   }
// });
// hashing end

