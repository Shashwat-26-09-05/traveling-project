// 1. Toggle Navigation Menu (Header)
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('active');
});

// 2. Register Modal
const registerBtn = document.getElementById('registerBtn');
const registerModal = document.getElementById('registerModal');
const closeModal = document.getElementById('closeModal');

registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
});
closeModal.addEventListener('click', () => {
    registerModal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

// Registration Form Validation & Success
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = this.querySelectorAll('input');
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const password = inputs[2].value;
    const confirmPassword = inputs[3].value;

    const errorDiv = document.getElementById('register-error');
    const successDiv = document.getElementById('register-success');

    errorDiv.classList.add('hidden');
    successDiv.classList.add('hidden');

    if (!name || !email || !password || !confirmPassword) {
        errorDiv.textContent = 'All fields are required.';
        errorDiv.classList.remove('hidden');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorDiv.textContent = 'Please enter a valid email address.';
        errorDiv.classList.remove('hidden');
        return;
    }

    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match.';
        errorDiv.classList.remove('hidden');
        return;
    }

    errorDiv.classList.add('hidden');
    successDiv.classList.remove('hidden');

    setTimeout(() => {
        successDiv.classList.add('hidden');
        registerModal.style.display = 'none';
        this.reset();
    }, 2000);
});

// 3. About Us Modal
const aboutLink = document.getElementById('aboutUsLink');
const aboutModal = document.getElementById('aboutUsModal');
const closeAbout = document.getElementById('closeAboutUs');

aboutLink.addEventListener('click', () => {
    aboutModal.style.display = 'block';
});
closeAbout.addEventListener('click', () => {
    aboutModal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === aboutModal) {
        aboutModal.style.display = 'none';
    }
});

// 4. Terms and Conditions Modal
const termsLink = document.getElementById('termsLink');
const termsModal = document.getElementById('termsModal');
const closeTerms = document.getElementById('closeTerms');

termsLink.addEventListener('click', () => {
    termsModal.style.display = 'block';
});
closeTerms.addEventListener('click', () => {
    termsModal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === termsModal) {
        termsModal.style.display = 'none';
    }
});

// 5. Booking Alert Register Link
const registerLink = document.getElementById('registerLink');
registerLink.addEventListener('click', () => {
    registerModal.style.display = 'block';
});

// 6. Contact Form Validation & Success
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    const errorDiv = document.getElementById('contact-error');
    const successDiv = document.getElementById('form-success');

    errorDiv.classList.add('hidden');
    successDiv.classList.add('hidden');

    if (!name || !email || !message) {
        errorDiv.textContent = 'All fields are required.';
        errorDiv.classList.remove('hidden');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorDiv.textContent = 'Please enter a valid email address.';
        errorDiv.classList.remove('hidden');
        return;
    }

    errorDiv.classList.add('hidden');
    successDiv.classList.remove('hidden');

    setTimeout(() => {
        successDiv.classList.add('hidden');
        this.reset();
    }, 2000);
});

// 7. Vehicles Gallery Modal
document.getElementById("vehiclesBtn").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("vehiclesModal").style.display = "block";
});
document.getElementById("closeVehicles").addEventListener("click", function () {
    document.getElementById("vehiclesModal").style.display = "none";
});
window.addEventListener("click", function (event) {
    const modal = document.getElementById("vehiclesModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// 8. Smooth scroll and close menu after clicking a link
document.querySelectorAll('#navbar a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navbar').classList.remove('active');
    });
});
