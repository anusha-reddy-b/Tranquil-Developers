document.addEventListener('DOMContentLoaded', () => {
  // Fade-in effect for elements with .fade-in class
  const faders = document.querySelectorAll('.fade-in');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  faders.forEach(el => io.observe(el));

document.querySelectorAll('.nav-links a').forEach(a => {
  const originalHref = a.getAttribute('href');

  // Handle removal of index.html in local links
  if (
    originalHref &&
    !originalHref.startsWith('#') &&
    !originalHref.startsWith('http') &&
    originalHref.includes('index.html')
  ) {
    const cleanHref = originalHref.replace(/index\.html(\b|\/)?/g, '/');
    a.setAttribute('href', cleanHref);
  }

  a.addEventListener('click', e => {
    const href = a.getAttribute('href');

    // Smooth scroll + remove # from URL
    if (href && href.startsWith('#')) {
      e.preventDefault();

      const targetId = href.slice(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });

        // Update the URL without reloading or using #
        const currentUrl = window.location.href.split('#')[0];
        history.replaceState(null, '', currentUrl + '/' + targetId); // or + '/' + targetId
      }
    }
  });
});



  // Replace index.html in the browser URL if present
  if (location.pathname.endsWith('index.html')) {
    const newPath = location.pathname.replace(/index\.html$/, '');
    history.replaceState(null, '', newPath + location.search + location.hash);
  }
});

// Google Apps Script backend function (for contact form)
function doPost(e) {
  var name = e.parameter.name;
  var email = e.parameter.email;
  var subject = e.parameter.subject;
  var message = e.parameter.message;

  var recipient = "anusha.reddy2791@gmail.com";
  var emailSubject = "New Contact Form Submission: " + subject;
  var body = "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;

  MailApp.sendEmail(recipient, emailSubject, body);
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}

// Slideshow logic for rotating images
const rrImages = [
  "images/2.jpg",
  "images/1.png"
];
let rrIndex = 0;
const rrImg = document.getElementById('rr-slideshow');
if (rrImg) {
  rrImg.style.display = 'block';
  rrImg.style.marginLeft = 'auto';
  rrImg.style.marginRight = 'auto';

  setInterval(() => {
    rrIndex = (rrIndex + 1) % rrImages.length;
    rrImg.style.opacity = 0;
    setTimeout(() => {
      rrImg.src = rrImages[rrIndex];
      rrImg.style.opacity = 1;
    }, 500);
  }, 5000);
}
