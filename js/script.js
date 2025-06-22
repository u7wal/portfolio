
(function(){
  emailjs.init("5L76a_M8v0qh3ZbDw");
})();

const form = document.getElementById('contact-form');
const statusMsg = document.getElementById('status-msg');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('service_bldn3sn', 'template_078rxz9', this)
    .then(function() {
      statusMsg.innerText = "✅ Message sent successfully!";
      form.reset();
    }, function(error) {
      statusMsg.innerText = "❌ Failed to send. Please try again.";
      console.error(error);
    });
});