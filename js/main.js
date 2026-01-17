// ============================================
// VISTO - Main JavaScript
// Core functionality for the platform
// ============================================

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
      
      // Animate hamburger icon
      const spans = navbarToggle.querySelectorAll('span');
      if (navbarMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navbarToggle.contains(e.target) && !navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove('active');
        const spans = navbarToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }
});

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all elements with fade-in classes
document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  fadeElements.forEach(el => observer.observe(el));
});

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ============================================
// WHATSAPP WIDGET
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const whatsappWidget = document.querySelector('.whatsapp-widget');
  
  if (whatsappWidget) {
    // Show tooltip after 10 seconds
    setTimeout(() => {
      const tooltip = whatsappWidget.querySelector('.widget-tooltip');
      if (tooltip) {
        tooltip.style.opacity = '1';
        tooltip.style.visibility = 'visible';
        
        // Hide after 5 seconds
        setTimeout(() => {
          tooltip.style.opacity = '0';
          tooltip.style.visibility = 'hidden';
        }, 5000);
      }
    }, 10000);
    
    // WhatsApp click handler
    const whatsappButton = whatsappWidget.querySelector('.widget-button');
    if (whatsappButton) {
      whatsappButton.addEventListener('click', function() {
        // Replace with actual WhatsApp number
        const phoneNumber = '1234567890'; // Update this
        const message = encodeURIComponent('Bonjour, j\'ai besoin d\'aide concernant mes études en Italie.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      });
    }
  }
});

// ============================================
// AI ASSISTANT WIDGET
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const aiWidget = document.querySelector('.ai-widget');
  
  if (aiWidget) {
    const aiButton = aiWidget.querySelector('.widget-button');
    
    if (aiButton) {
      aiButton.addEventListener('click', function() {
        // Toggle AI chat interface (to be implemented)
        showNotification('Assistant IA en cours de développement', 'info');
      });
    }
  }
});

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'info', duration = 5000) {
  // Remove existing notification
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  
  const icon = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }[type] || 'ℹ';
  
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 1rem;">
      <div style="font-size: 1.5rem;">${icon}</div>
      <div style="flex: 1;">
        <p style="margin: 0; font-weight: 600;">${message}</p>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-text-secondary);">&times;</button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  // Auto-hide after duration
  if (duration > 0) {
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, duration);
  }
}

// Make it globally available
window.showNotification = showNotification;

// ============================================
// FORM VALIDATION HELPER
// ============================================
function validateForm(formElement) {
  let isValid = true;
  const inputs = formElement.querySelectorAll('.form-input, .form-select, .form-textarea');
  
  inputs.forEach(input => {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup?.querySelector('.form-error');
    
    // Remove previous error states
    input.classList.remove('error', 'success');
    if (errorElement) {
      errorElement.remove();
    }
    
    // Check if required and empty
    if (input.hasAttribute('required') && !input.value.trim()) {
      isValid = false;
      input.classList.add('error');
      
      if (formGroup) {
        const error = document.createElement('div');
        error.className = 'form-error';
        error.textContent = 'Ce champ est requis';
        formGroup.appendChild(error);
      }
      
      // Add shake animation
      input.classList.add('error-shake');
      setTimeout(() => {
        input.classList.remove('error-shake');
      }, 500);
    } else if (input.value.trim()) {
      input.classList.add('success');
    }
    
    // Email validation
    if (input.type === 'email' && input.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        isValid = false;
        input.classList.remove('success');
        input.classList.add('error');
        
        if (formGroup) {
          const error = document.createElement('div');
          error.className = 'form-error';
          error.textContent = 'Email invalide';
          formGroup.appendChild(error);
        }
      }
    }
  });
  
  return isValid;
}

// Make it globally available
window.validateForm = validateForm;

// ============================================
// COPY TO CLIPBOARD HELPER
// ============================================
function copyToClipboard(text, successMessage = 'Copié dans le presse-papiers!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showNotification(successMessage, 'success', 3000);
    }).catch(err => {
      console.error('Failed to copy:', err);
      showNotification('Erreur lors de la copie', 'error', 3000);
    });
  } else {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      document.execCommand('copy');
      showNotification(successMessage, 'success', 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
      showNotification('Erreur lors de la copie', 'error', 3000);
    }
    
    document.body.removeChild(textarea);
  }
}

// Make it globally available
window.copyToClipboard = copyToClipboard;

// ============================================
// ACTIVE PAGE HIGHLIGHT IN NAVBAR
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

// ============================================
// LOADING STATE HELPER
// ============================================
function setLoadingState(element, isLoading) {
  if (isLoading) {
    element.disabled = true;
    element.dataset.originalContent = element.innerHTML;
    element.innerHTML = `
      <div class="spinner spinner-sm" style="border-top-color: currentColor;"></div>
      <span>Chargement...</span>
    `;
  } else {
    element.disabled = false;
    element.innerHTML = element.dataset.originalContent || element.innerHTML;
  }
}

// Make it globally available
window.setLoadingState = setLoadingState;

// ============================================
// LAZY LOADING IMAGES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
});

// ============================================
// CONSOLE BRANDING
// ============================================
console.log(
  '%cVISTO Platform',
  'font-size: 24px; font-weight: bold; color: #0F4C81;'
);
console.log(
  '%cItalian Student Mobility Platform',
  'font-size: 14px; color: #2ECC71;'
);
console.log(
  '%cBuilt with ❤️ for students',
  'font-size: 12px; color: #E07A5F;'
);
