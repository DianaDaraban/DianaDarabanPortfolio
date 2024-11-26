document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.profile-pic-container, .name, .title');

    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5 + 0.5}s`;
        element.classList.add('animate');
    });
});


document.querySelector('.portfolio-btn').addEventListener('click', function () {
    const portfolioSection = document.querySelector('.tabs-container');

    portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});


document.querySelectorAll('.icon-link').forEach(link => {
    link.addEventListener('click', function (event) {
        const contactDetails = link.querySelector('.contact-details').textContent.trim();
        console.log(contactDetails)
        if (link.classList.contains('phone-link')) {
            link.setAttribute('href', `tel:${contactDetails}`);
        } else if (link.classList.contains('email-link')) {
            link.setAttribute('href', `mailto:${contactDetails}`);
        }
    });
});


document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

        this.classList.add('active');

        document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));

        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});