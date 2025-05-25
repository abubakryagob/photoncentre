// Components Loader
class Components {
    static async loadHeader() {
        const header = document.createElement('div');
        header.innerHTML = `
            <header class="header">
                <div class="header-content">
                    <h1 class="center-name">
                        <a href="index.html">The Photon Scientific Centre for Natural Sciences and Metaphysics</a>
                    </h1>
                    <h1 class="center-name arabic">
                        <a href="index.html">مركز فوتون للعلوم الطبيعية والميتافيزيقا</a>
                    </h1>
                </div>
            </header>
            <nav class="navbar">
                <div class="navbar-container">
                    <a href="index.html" class="navbar-brand">Photon SCNSM</a>
                    <button class="hamburger-menu" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div class="navbar-links" id="navbarLinks">
                        <a href="index.html" class="navbar-link">Home</a>
                        <a href="vision.html" class="navbar-link">Vision & Mission</a>
                        <a href="services.html" class="navbar-link">Services</a>
                        <a href="team.html" class="navbar-link">Our Team</a>
                        <a href="archive.html" class="navbar-link">Archive</a>
                        <a href="contact.html" class="navbar-link">Contact</a>
                    </div>
                </div>
            </nav>
        `;
        document.body.insertBefore(header, document.body.firstChild);
    }

    static async loadFooter() {
        const footer = document.createElement('footer');
        footer.className = 'footer';
        footer.innerHTML = `
            <div class="footer-container">
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <ul class="footer-links">
                        <li><a href="contact.html">Get in Touch</a></li>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">Social Media</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="vision.html">Our Vision</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="archive.html">Archive</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-links-footer">
                        <a href="https://www.youtube.com/@PhotonSCNSM" class="social-link" target="_blank">
                            <i class="fab fa-youtube"></i>
                            <span>YouTube</span>
                        </a>
                        <a href="https://www.facebook.com/PhotonSCNSM" class="social-link" target="_blank">
                            <i class="fab fa-facebook"></i>
                            <span>Facebook</span>
                        </a>
                        <a href="https://www.linkedin.com/company/107318450" class="social-link" target="_blank">
                            <i class="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>© 2024 Photon SCNSM. All rights reserved.</p>
            </div>
        `;
        document.body.appendChild(footer);
    }
}

// Initialize components
document.addEventListener('DOMContentLoaded', async () => {
    await Components.loadHeader();
    await Components.loadFooter();

    // Initialize navigation
    const navScript = document.createElement('script');
    navScript.src = '/shared/navigation.js';
    document.head.appendChild(navScript);

    // Wait for navigation script to load before initializing
    navScript.onload = () => {
        if (typeof initNavigation === 'function') {
            initNavigation();
        }
    };
});
