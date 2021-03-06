// When the user scrolls the page, execute scroll
window.onscroll = function() {scroll()};

// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scroll()
{
    if (window.pageYOffset >= sticky)
    {
        navbar.classList.add("sticky")
    }
    else
    {
        navbar.classList.remove("sticky");
    }
}