//DEPENDENCIES
const toggleSwitch = document.getElementById("mode-toggle");
const body = document.body;
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

//DATA
const isDarkMode = localStorage.getItem("dark-mode") === "true";

if (!localStorage.getItem("dark-mode")) {
  localStorage.setItem("dark-mode", "false");
}

//FUNCTIONS
// Function to toggle between light and dark mode
function toggleMode() {
  body.classList.toggle("dark");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");

  // Update local storage with the current state
  localStorage.setItem("dark-mode", body.classList.contains("dark"));
}

//USER ACTIVITY

// Add event listener to the toggle switch
toggleSwitch.addEventListener("change", toggleMode);

// Check the initial state of the toggle switch and apply the corresponding styles
if (toggleSwitch.checked) {
  body.classList.add("dark");
  sunIcon.classList.add("hidden");
  toggleSwitch.checked = true;
}
