document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const html = document.documentElement;

    function checkIfAnyPopupOpen() {
        return Array.from(document.querySelectorAll('.ac-popup-review'))
            .some(popup => popup.style.display === 'block');
    }

    function updateBodyScroll() {
        const isAnyPopupOpen = checkIfAnyPopupOpen();
        body.style.overflow = isAnyPopupOpen ? 'hidden' : 'auto';
        html.style.overflow = isAnyPopupOpen ? 'hidden' : 'auto';
    }

    document.querySelectorAll('[data-popup-id]').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const popupId = this.getAttribute('data-popup-id');
            togglePopup(popupId);
        });
    });

    function togglePopup(popupId) {
        const popup = document.getElementById(popupId);
        const overlay = document.getElementById('overlay');

        if (popup) {
            const isShown = popup.style.display === 'block';
            overlay.style.display = isShown ? 'none' : 'block';
            popup.style.display = isShown ? 'none' : 'block';
            updateBodyScroll();
        }
    };

    document.getElementById('overlay').addEventListener('click', (e) => {      
        document.querySelectorAll('.ac-popup-review').forEach(popup => {
            popup.style.display = 'none';
        });
        document.getElementById('overlay').style.display = 'none';
        updateBodyScroll();
    });

    document.querySelectorAll('.close-popup').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const popup = button.closest('.ac-popup-review');
            if (popup) {
                popup.style.display = 'none';
                document.getElementById('overlay').style.display = 'none';
                updateBodyScroll();
            }
        });
    });
});
