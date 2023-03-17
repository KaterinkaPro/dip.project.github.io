window.addEventListener("load", function() {
    let elem = document.querySelector('#history-button');
    if (window.history.length > 2) {
        elem.addEventListener('click', () => {
            window.history.back();
        })
         
        elem.classList.remove("history-hide");
    }
});