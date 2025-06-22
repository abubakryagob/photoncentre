// Create and insert the header
function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `
        <div class="header-content">
            <h1 class="center-name">
                <a href="index.html">The Photon Scientific Centre for Natural Sciences and Metaphysics</a>
            </h1>
            <h1 class="center-name arabic">
                <a href="index.html">مركز فوتون للعلوم الطبيعية والميتافيزيقا</a>
            </h1>
        </div>
        <nav class="navbar">
            <div class="navbar-container">
                <button class="hamburger-menu" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="navbar-links">
                    <a href="index.html" class="navbar-link">Home</a>
                    <a href="vision.html" class="navbar-link">Vision</a>
                    <a href="services.html" class="navbar-link">Services</a>
                    <a href="team.html" class="navbar-link">Team</a>
                    <a href="archive.html" class="navbar-link">Archive</a>
                    <a href="contact.html" class="navbar-link">Contact</a>
                </div>
            </div>
        </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
}

// Create and insert the footer
function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>Photon SCNSM is dedicated to advancing scientific knowledge and fostering collaboration in the field of physics.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul class="footer-links">
                    <li><a href="vision.html">Vision</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="archive.html">Archive</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Connect With Us</h3>
                <div class="social-links-footer">
                    <a href="https://www.youtube.com/@PhotonSCNSM" class="social-link" target="_blank">
                        <i class="fab fa-youtube"></i>
                        <span>YouTube</span>
                    </a>
                    <a href="https://www.facebook.com/PhotonSCNSM" class="social-link" target="_blank">
                        <i class="fab fa-facebook"></i>
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.linkedin.com/company/107318450/admin/dashboard/" class="social-link" target="_blank">
                        <i class="fab fa-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Photon SCNSM. All rights reserved.</p>
        </div>
    `;
    document.body.appendChild(footer);
}

// Handle mobile menu
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.navbar-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createHeader();
    createFooter();
    initMobileMenu();

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
