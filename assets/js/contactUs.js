    // Form Validation
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const form = e.target;
        const phone = document.getElementById('phone');
  
        if (!form.checkValidity()) {
          alert("Please fill all the required fields correctly.");
          form.classList.add('was-validated');
          return;
        }
  
        if (!/^[0-9]{10}$/.test(phone.value)) {
          alert("Please enter a valid 10-digit phone number.");
          return;
        }
  
        alert("Form submitted successfully!");
        form.reset();
        form.classList.remove('was-validated');
      });