window.addEventListener("load", function() {
    let elem = document.querySelector('#history-button');
    if (window.history.length > 1) {
        elem.addEventListener('click', () => {
            window.history.back();
        })
         
        elem.classList.remove("history-hide");
    }
});