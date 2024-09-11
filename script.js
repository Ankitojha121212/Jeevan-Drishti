// Simulating an incoming message
document.querySelector('.notification-bell').addEventListener('click', () => {
    let notificationCount = document.querySelector('.notification-count');
    let currentCount = parseInt(notificationCount.textContent);

    // Increment count and display
    currentCount += 1;
    notificationCount.textContent = currentCount;
    document.querySelector('.notification-bell').classList.add('has-new');
});
// hiii
// hlo