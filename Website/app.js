const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); // Corrected class name
const sectBtn = document.querySelectorAll('.control'); // Corrected class name
const mainContent = document.querySelector('.main-content'); // Corrected class name and added a dot before the class name

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// Get references to HTML elements
// Display an alert when a button is clicked
function showAlert() {
    alert("Thanks for sending! You'll be temporarily redirected. See you soon!");
  }
  

