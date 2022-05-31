const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)


checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    // this is the way to calculate when to trigger the animation
    // loop through the node list of boxes
    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top;
        // this method returns DOM rectangle object providing info about the size of an element and its position relative to the viewport
        if ( boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}