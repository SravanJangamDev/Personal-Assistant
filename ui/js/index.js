showTab("home")

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = tab.id === tabId ? 'block' : 'none';
    });
}

function goToTab(tabId) {
    showTab(tabId);
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('onclick').includes(tabId)) {
            link.click();
        }
    });
}



