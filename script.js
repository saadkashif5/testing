document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        var navbarToggler = document.querySelector('.navbar-toggler');
        var navbarCollapse = document.querySelector('.navbar-collapse');

        if (navbarToggler && navbarCollapse.classList.contains('show')) {
            navbarToggler.click(); // This simulates the toggle button click to close the menu
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelectorAll(".dvd-logo");
    const container = document.getElementById("screensaver-container");

    logos.forEach(logo => {

        let speed = 1.25;

        let dx = speed * (Math.random() < 0.5 ? 1 : -1); 
        let dy = speed * (Math.random() < 0.5 ? 1 : -1); 
        let x = Math.floor(Math.random() * (container.clientWidth - logo.clientWidth));
        let y = Math.floor(Math.random() * (container.clientHeight - logo.clientHeight));

        function moveLogo() {

            x += dx;
            y += dy;

            if (x + logo.clientWidth > container.clientWidth) 
            {
                x = container.clientWidth - logo.clientWidth;
                dx = -dx; 
            } 
            else if (x < 0) 
            {
                x = 0;
                dx = -dx;
            }
            if (y + logo.clientHeight > container.clientHeight) 
            {
                y = container.clientHeight - logo.clientHeight;
                dy = -dy; 
            } 
            else if (y < 0) 
            {
                y = 0;
                dy = -dy; 
            }

            logo.style.left = x + "px";
            logo.style.top = y + "px";

            requestAnimationFrame(moveLogo);
        }

        moveLogo();
    });
});