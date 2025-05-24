document.addEventListener("DOMContentLoaded", () => {
  // Slider functionality
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".slider-btn.prev")
  const nextBtn = document.querySelector(".slider-btn.next")
  let currentSlide = 0

  // Initialize slider
  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active")
    })

    // Remove active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })

    // Show the current slide and dot
    slides[index].classList.add("active")
    dots[index].classList.add("active")
  }

  // Next slide
  function nextSlide() {
    currentSlide++
    if (currentSlide >= slides.length) {
      currentSlide = 0
    }
    showSlide(currentSlide)
  }

  // Previous slide
  function prevSlide() {
    currentSlide--
    if (currentSlide < 0) {
      currentSlide = slides.length - 1
    }
    showSlide(currentSlide)
  }

  // Event listeners for buttons
  nextBtn.addEventListener("click", nextSlide)
  prevBtn.addEventListener("click", prevSlide)

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index
      showSlide(currentSlide)
    })
  })

  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000)

  // Tab functionality
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabBtns.forEach((btn) => {
        btn.classList.remove("active")
      })

      tabContents.forEach((content) => {
        content.classList.remove("active")
      })

      // Add active class to current button and content
      btn.classList.add("active")
      tabContents[index].classList.add("active")
    })
  })
})


// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.tribal-slide');
    const dots = document.querySelectorAll('.tribal-nav-dot');
    const prevArrow = document.querySelector('.tribal-prev-arrow');
    const nextArrow = document.querySelector('.tribal-next-arrow');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Initialize the slider
    function initSlider() {
        slides.forEach((slide, index) => {
            slide.style.display = 'none';
        });
        slides[currentSlide].style.display = 'block';
        updateDots();
    }
    
    // Update the active dot
    function updateDots() {
        dots.forEach(dot => {
            dot.classList.remove('tribal-nav-active');
        });
        dots[currentSlide].classList.add('tribal-nav-active');
    }
    
    // Go to a specific slide
    function goToSlide(index) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        currentSlide = index;
        
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        } else if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        
        slides[currentSlide].style.display = 'block';
        updateDots();
    }
    
    // Event listeners for arrows
    prevArrow.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
    
    nextArrow.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
    
    // Event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            goToSlide(slideIndex);
        });
    });
    
    // Auto slide functionality
    let slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
    
    // Pause auto slide on hover
    const sliderContainer = document.querySelector('.tribal-slider-container');
    
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
            goToSlide(currentSlide + 1);
        }
    });
    
    // Touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        // Detect swipe direction
        if (touchEndX < touchStartX) {
            // Swipe left - next slide
            goToSlide(currentSlide + 1);
        } else if (touchEndX > touchStartX) {
            // Swipe right - previous slide
            goToSlide(currentSlide - 1);
        }
    }
    
    // Initialize the slider
    initSlider();
});


// -----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Get all option rows
    const optionRows = document.querySelectorAll('.mrt-option-row');
    
    // Add hover effect
    optionRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
    
    // Get all buttons
    const actionButtons = document.querySelectorAll('.mrt-action-button');
    
    // Add click event to buttons
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the option text
            const optionRow = this.closest('.mrt-option-row');
            const optionLabel = optionRow.querySelector('.mrt-option-label').textContent;
            const buttonText = this.textContent;
            
            // Show alert with the selected option
            alert(`आपण निवडले: ${optionLabel} - ${buttonText}`);
        });
    });
});


// -------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Navigation buttons
    const navButtons = document.querySelectorAll('.mrt-nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            navButtons.forEach(btn => {
                btn.classList.remove('mrt-nav-active');
            });
            
            // Add active class to clicked button
            this.classList.add('mrt-nav-active');
            
            // // Get the button text for navigation
            // const buttonText = this.textContent.trim();
            // console.log(`Navigating to: ${buttonText}`);
            
            // // Here you would typically handle navigation
            // // For demo purposes, we'll just show an alert
            // if (buttonText !== 'आमच्या विजय') {
            //     alert(`Navigating to: ${buttonText}`);
            // }
        });
    });
    
    // Read More button
    const readMoreButton = document.querySelector('.mrt-read-more-button');
    
    readMoreButton.addEventListener('click', function() {
        // Here you would typically load more content or navigate to a detail page
        // For demo purposes, we'll just show an alert
        alert('Loading more content...');
    });
    
    // Add a subtle animation to the profile image on hover
    const profileImage = document.querySelector('.mrt-profile-image');
    
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Initialize the first navigation button as active
    if (navButtons.length > 0) {
        navButtons[0].classList.add('mrt-nav-active');
    }
});

// ----------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Get all profile cards
    const profileCards = document.querySelectorAll('.mrth-profile-card');
    
    // Add hover effect to profile cards
    profileCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Get all social links
    const socialLinks = document.querySelectorAll('.mrth-social-link');
    
    // Add click event to social links
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the profile name and social platform
            const profileCard = this.closest('.mrth-profile-card');
            const profileName = profileCard.querySelector('.mrth-profile-name').textContent;
            const socialPlatform = this.querySelector('i').className;
            
            // Show alert with the selected profile and platform
            let platform = '';
            if (socialPlatform.includes('facebook')) platform = 'Facebook';
            else if (socialPlatform.includes('twitter')) platform = 'Twitter';
            else if (socialPlatform.includes('instagram')) platform = 'Instagram';
            else if (socialPlatform.includes('linkedin')) platform = 'LinkedIn';
            
            alert(`Opening ${platform} profile for ${profileName}`);
        });
    });
    
    // Add accessibility features
    const profileCards2 = document.querySelectorAll('.mrth-profile-card');
    profileCards2.forEach(card => {
        // Make cards focusable
        card.setAttribute('tabindex', '0');
        
        // Add keyboard event for accessibility
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const profileName = this.querySelector('.mrth-profile-name').textContent;
                alert(`Viewing profile details for ${profileName}`);
            }
        });
    });
});

// ---------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Get all news items
    const newsItems = document.querySelectorAll('.mrnews-item');
    
    // Add hover effect to news items
    newsItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
            this.style.transition = 'background-color 0.3s';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
        
        // Make items clickable
        item.style.cursor = 'pointer';
        
        item.addEventListener('click', function() {
            const newsTitle = this.querySelector('.mrnews-item-title').textContent;
            console.log(`Clicked on news: ${newsTitle}`);
            // Here you would typically navigate to a detail page
            // For demo purposes, we'll just show an alert
            alert(`Opening news: ${newsTitle}`);
        });
    });
    
    // View All button functionality
    const viewAllButton = document.querySelector('.mrnews-view-all-button');
    
    viewAllButton.addEventListener('click', function() {
        console.log('View All button clicked');
        // Here you would typically navigate to a news archive page
        // For demo purposes, we'll just show an alert
        alert('Navigating to all news and updates page');
    });
    
    // Add keyboard accessibility
    newsItems.forEach(item => {
        // Make items focusable
        item.setAttribute('tabindex', '0');
        
        // Add keyboard event for accessibility
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const newsTitle = this.querySelector('.mrnews-item-title').textContent;
                alert(`Opening news: ${newsTitle}`);
            }
        });
    });
});

function showCard(index) {
    const cards = document.querySelectorAll('.mrt-card');
    cards.forEach((card, i) => {
        card.style.display = (i === index) ? 'block' : 'none';
    });
}

// -----------------------------

