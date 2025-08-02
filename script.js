document.addEventListener('DOMContentLoaded', () => {
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
    a.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))
              .scrollIntoView({ behavior:'smooth' });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Scroll fade-in (already set up previously)
  const faders = document.querySelectorAll('.fade-in');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  faders.forEach(el => io.observe(el));

  // Smooth scroll for nav links (if used)
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      else window.location.href = a.getAttribute('href');
    });
  });
});


function doPost(e) {
  var name = e.parameter.name;
  var email = e.parameter.email;
  var subject = e.parameter.subject;
  var message = e.parameter.message;

  var recipient = "anusha.reddy2791@gmail.com"; // ✅ your Gmail address
  var emailSubject = "New Contact Form Submission: " + subject;
  var body = "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;

  MailApp.sendEmail(recipient, emailSubject, body);
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}

const rrImages = [
  "images/2.jpg",
  "images/1.png"
];
let rrIndex = 0;
const rrImg = document.getElementById('rr-slideshow');

// Center the image using JS (optional, for inline style)
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
