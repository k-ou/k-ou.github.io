(function () {

    var button = document.getElementById('cn-button'),
        wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
    var open = false;
    button.addEventListener('click', handler, false);

    function handler() {
        if (!open) {
            this.innerHTML = "Close";
            this.classList.add(wrapper, 'opened-nav');
        } else {
            this.innerHTML = "Menu";
            this.classList.remove(wrapper, 'opened-nav');
        }
        open = !open;
    }

    function closeWrapper() {
        this.classList.remove(wrapper, 'opened-nav');
    }

})();
