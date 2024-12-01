
document.getElementById('contact-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the form from reloading the page

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  const feedbackElement = document.getElementById('feedback');
  feedbackElement.style.display = 'none';

  try {
      const response = await fetch('/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message })
      });

      if (response.ok) {
          feedbackElement.style.color = 'green';
          feedbackElement.textContent = 'Message sent successfully!';
      } else {
          feedbackElement.style.color = 'red';
          feedbackElement.textContent = 'Failed to send the message. Please try again.';
      }
  } catch (error) {
      console.error('Error:', error);
      feedbackElement.style.color = 'red';
      feedbackElement.textContent = 'An error occurred. Please try again later.';
  }

  feedbackElement.style.display = 'block';
});
