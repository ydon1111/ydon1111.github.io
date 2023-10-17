
function animateCount() {
    const elements = document.querySelectorAll('.nums');

    elements.forEach(function(element) {
        const countTo = parseInt(element.getAttribute('data-count'));
        let countNum = parseInt(element.textContent);

        const duration = 3000;
        const startTimestamp = null;

        function step(timestamp) {
            if (!startTimestamp) {
                startTimestamp = timestamp;
            }

            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            countNum = Math.floor(countNum + (countTo - countNum) * progress);
            element.textContent = countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    });
}
animateCount();

