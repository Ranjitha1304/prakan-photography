const testimonials = [
    {
      name: 'Anjali & Karthik',
      img: '/assets/images/client1.png',
      msg: 'Absolutely loved our photos! The team at Prakan Photo Studio captured our special day perfectly. Every Moment was Beautifully Framed. Thank You For The Amazing Memories.'
    },
    {
      name: 'Suresh M.',
      img: '/assets/images/client2.png',
      msg: 'Professional, friendly, and creative! I Had a Portrait Session And The Results Were Beyond Expectations. The editing was subtle and natural, And The Staff Made Me Feel So Comfortable. Highly Recommended!'
    },
    {
      name: 'Divya R.',
      img: '/assets/images/client3.png',
      msg: 'The best photo studio experience ever! From The First Consultation To The Final Album Delivery, Everything was smooth. Their Attention To Detail And Passion For Photography Really Shows.'
    },
    {
      name: 'Meera & Arjun',
      img: '/assets/images/client1.png',
      msg: 'Prakan team truly made our day special with stunning photos and amazing support!'
    },
    {
      name: 'Ravi K.',
      img: '/assets/images/client2.png',
      msg: 'Best decision to hire them! Their eye for detail is unmatched.'
    },
    {
      name: 'Sneha L.',
      img: '/assets/images/client3.png',
      msg: 'We were blown away by the pictures. Every emotion captured beautifully!'
    },
    {
      name: 'Nithya G.',
      img: '/assets/images/client1.png',
      msg: 'A talented and passionate team. Great post-production work too!'
    },
    {
      name: 'Deekshitha & Sekar',
      img: '/assets/images/client2.png',
      msg: 'They made the entire shoot fun and natural. 10/10 experience.'
    },
    {
      name: 'Reena Joseph',
      img: '/assets/images/client3.png',
      msg: 'Highly creative and professional! Loved our album and trailer video!'
    }
  ];

  function showTestimonials(group) {
    const container = document.getElementById("testimonialGroup");
    container.innerHTML = "";
    const start = group * 3;
    const current = testimonials.slice(start, start + 3);

    current.forEach(t => {
      container.innerHTML += `
        <div class="testimonial-card">
          <img src="${t.img}" />
          <p>${t.msg}</p>
          <b>— ${t.name}</b>
        </div>
      `;
    });

    document.querySelectorAll(".dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === group);
    });
  }

  showTestimonials(0); // load first set initially


  // FAQ Logic

  function toggleFAQ(btn) {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector(".faq-icon");
  
    const isOpen = answer.style.display === "block";
  
    // Close all answers and reset icons
    document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
    document.querySelectorAll(".faq-icon").forEach(ic => ic.textContent = "▼");
  
    // Toggle only if the current one was closed
    if (!isOpen) {
      answer.style.display = "block";
      icon.textContent = "▲";
    }
  }
  
