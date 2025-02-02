let spinWheel = document.querySelector('.spin-wheel');
let spinBtn = document.querySelector('.spin-btn');
let resultCard = document.querySelector('.card');
let spinAgainBtn = resultCard.querySelector('.btn');
let resultTitle = resultCard.querySelector('.card-title');
let numbers = document.querySelectorAll(".number");
const segments = [
    "پوچ",
    "اشتراک رایگان",
    "5 % تخفیف",
    "10 % تخفیف", 
    "دوباره بچرخون",
    "15 % تخفیف",
    "پوچ",
    "50 % تخفیف"
]; 
let spinning = false;

function spin() {
    resultCard.classList.add("d-none")
    if (spinning) return; // Prevent multiple spins
    spinning = true;
    let initialAngle = Math.floor(Math.random() * 3600); 
    while (initialAngle % 45 === 0) {
        initialAngle = Math.floor(Math.random() * 3600);
    }
    let finalAngle = initialAngle + 3600; // Spin for an additional 3600 degrees

    spinWheel.style.transition = 'transform 4s ease-out';
    spinWheel.style.transform = `rotate(${finalAngle}deg)`;

    setTimeout(() => {
        let segment = getSegment(finalAngle % 360); // Fix: Use modulo 360 to get the final angle within 0-359 degrees
        let message = getMessageForSegment(segment);
        showWinAlert(message);
        spinning = false; // Reset spinning state
    }, 4000); // Show the alert after 4 seconds (same duration as the spin)

    spinBtn.disabled = true; // Disable the spin button during spinning
}

function getSegment(angle) {
    // Define the segments and their corresponding angles
    // You can adjust these values based on your wheel configuration
    if (angle >= 0 && angle < 22.5) {
        return 1;
    } else if (angle >= 22.5 && angle < 67.5) {
        return 2;
    } else if (angle >= 67.5 && angle < 112.5) {
        return 3;
    } else if (angle >= 112.5 && angle < 157.5) {
        return 4;
    } else if (angle >= 157.5 && angle < 202.5) {
        return 5;
    } else if (angle >= 202.5 && angle < 247.5) {
        return 6;
    } else if (angle >= 247.5 && angle < 292.5) {
        return 7;
    } else if (angle >= 292.5 && angle < 337.5) {
        return 8;
    } else if (angle >= 337.5 && angle < 360) {
        return 1;
    }
}

function getMessageForSegment(userSegment) {
    // Define the messages for each segment
    let message = segments[userSegment - 1]
    return message
}

function showWinAlert(message) {
    resultCard.classList.remove("d-none")
    resultTitle.innerHTML = message
}

spinBtn.addEventListener('click', spin);
spinAgainBtn.addEventListener('click', spin);
