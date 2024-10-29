document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.filter-category');
    const options = document.querySelectorAll('.filter-options');

    categories.forEach(category => {
        category.addEventListener('click', function() {
            const categoryID = category.getAttribute('data-category') + '-options';
            options.forEach(option => {
                if (option.id === categoryID) {
                    option.style.display = option.style.display === 'flex' ? 'none' : 'flex';
                } else {
                    option.style.display = 'none';
                }
            });
        });
    });
});
