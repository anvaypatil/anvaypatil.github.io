
function modalHandling(modalId, buttonId, closeButtonId) {
    // Get the modal
    const modal = document.getElementById(modalId);
    // Get the button that opens the modal
    const btn = document.getElementById(buttonId);
    // Get the <span> element that closes the modal
    const span = document.getElementById(closeButtonId);
    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
}

modalHandling("blogModal","blogButton", "blogModalClose");
modalHandling("talkModal","talkButton", "talkModalClose");
modalHandling("aboutModal","aboutButton", "aboutModalClose");