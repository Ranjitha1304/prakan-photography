
// Modal control functions
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.body.style.overflow = '';
    
  // Reset the form when closing
  if (modalId === 'loginModal') {
    document.getElementById('loginForm').reset();
  } else if (modalId === 'registerModal') {
    document.getElementById('registerForm').reset();
  }
}


function switchToRegister() {
  document.getElementById('loginForm').reset();
  closeModal('loginModal');
  openModal('registerModal');
}

function showSuccessMessage(message) {
  const successModal = document.getElementById('successModal');
  successModal.querySelector('h5').textContent = message;
  openModal('successModal');
  
  setTimeout(() => {
    closeModal('successModal');

        // Also reset forms when success message closes (extra safety)
    document.getElementById('loginForm').reset();
    document.getElementById('registerForm').reset();
  }, 1000);
}

// Update your login button to use the new modal system
document.querySelector('.login-btn').addEventListener('click', function() {
  openModal('loginModal');
});

// LOGIN FORM SUBMIT
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailPhone = document.getElementById("loginEmailPhone").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailPhone);
  const isPhone = /^\d{10}$/.test(emailPhone);

  if ((!isEmail && !isPhone) || password.length < 4) {
    alert("Please enter a valid Email or 10-digit Phone and Password (min 4 characters)");
    return;
  }

  closeModal('loginModal');
  showSuccessMessage("Login Successful!");
});

// REGISTER FORM SUBMIT
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = /^\d{10}$/.test(phone);

  if (!name || !emailValid || !phoneValid || password.length < 4) {
    alert("Fill all fields correctly: valid email, 10-digit phone, and password (min 4 chars)");
    return;
  }

  closeModal('registerModal');
  showSuccessMessage("Registration Successful!");
});


