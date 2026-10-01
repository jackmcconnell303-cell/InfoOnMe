function displayInfo() {
    const name = document.getElementById('name')?.value.trim() || 'No name entered';
    const email = document.getElementById('email')?.value.trim() || 'No email entered';
    const date = document.getElementById('date')?.value || 'No date entered';

    document.getElementById('display-name').textContent = name;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-date').textContent = date;
}

document.addEventListener('DOMContentLoaded', () => {
    const displayButton = document.querySelector('[data-action="display-info"]');
    if (displayButton) {
        displayButton.addEventListener('click', displayInfo);
    }
});
