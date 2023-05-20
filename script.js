const toggleButton = document.getElementsByClassName("navbar-toggle")[0];
const navbarItems = document.getElementsByClassName("navbar-item");
toggleButton.addEventListener("click", function() {
    for(var i = 0; i < navbarItems.length; i++)
    navbarItems[i].classList.toggle("active");
});