//DEPENDENCIES
const toggleSwitch = document.getElementById("mode-toggle");
const body = document.body;
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

//DATA

//FUNCTIONS
// Function to toggle between light and dark mode
function toggleMode() {
  body.classList.toggle("dark");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
}

//USER ACTIVITY

// Add event listener to the toggle switch
toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    toggleMode();
  } else {
    toggleMode();
  }
});

// Check the initial state of the toggle switch and apply the corresponding styles
if (toggleSwitch.checked) {
  body.classList.add("dark");
  sunIcon.classList.add("hidden");
}
