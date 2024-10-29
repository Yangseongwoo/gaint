document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show the button with fade in effect when scrolled down 2000px from the top
    window.onscroll = function() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    };

    // Scroll to the top of the document when the button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});