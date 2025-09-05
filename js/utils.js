// FOXLEY & Co. - Utility Functions
// Common helper functions and DOM utilities

// DOM Utilities
export const DOM = {
  // Get element by ID with error handling
  get(id) {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with ID '${id}' not found`);
    }
    return element;
  },

  // Get elements by selector
  getAll(selector) {
    return document.querySelectorAll(selector);
  },

  // Create element with classes and attributes
  create(tag, classes = [], attributes = {}) {
    const element = document.createElement(tag);
    if (classes.length) element.className = classes.join(' ');
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    return element;
  },

  // Add event listener with error handling
  on(element, event, handler, options = {}) {
    if (element && typeof handler === 'function') {
      element.addEventListener(event, handler, options);
    }
  },

  // Remove class from element
  removeClass(element, className) {
    if (element) element.classList.remove(className);
  },

  // Add class to element
  addClass(element, className) {
    if (element) element.classList.add(className);
  },

  // Toggle class on element
  toggleClass(element, className) {
    if (element) element.classList.toggle(className);
  },

  // Check if element has class
  hasClass(element, className) {
    return element ? element.classList.contains(className) : false;
  }
};

// Local Storage Utilities
export const Storage = {
  // Get item from localStorage with JSON parsing
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn(`Error reading from localStorage: ${error.message}`);
      return defaultValue;
    }
  },

  // Set item in localStorage with JSON stringification
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`Error writing to localStorage: ${error.message}`);
      return false;
    }
  },

  // Remove item from localStorage
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`Error removing from localStorage: ${error.message}`);
      return false;
    }
  }
};

// Animation Utilities
export const Animation = {
  // Smooth scroll to element
  scrollTo(element, offset = 0) {
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  },

  // Smooth scroll to top
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },

  // Fade in element
  fadeIn(element, duration = 300) {
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.display = 'block';
    
    const start = performance.now();
    
    function animate(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      element.style.opacity = progress;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    
    requestAnimationFrame(animate);
  },

  // Fade out element
  fadeOut(element, duration = 300) {
    if (!element) return;
    
    const start = performance.now();
    const startOpacity = parseFloat(getComputedStyle(element).opacity) || 1;
    
    function animate(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      element.style.opacity = startOpacity * (1 - progress);
      
      if (progress >= 1) {
        element.style.display = 'none';
      } else {
        requestAnimationFrame(animate);
      }
    }
    
    requestAnimationFrame(animate);
  }
};

// Debounce function
export function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Throttle function
export function throttle(func, delay) {
  let lastExecution = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastExecution >= delay) {
      func.apply(this, args);
      lastExecution = now;
    }
  };
}

// Format price
export function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Generate unique ID
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Check if element is in viewport
export function isInViewport(element) {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Wait for DOM content loaded
export function onDOMReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

// Color utilities
export const Color = {
  // Convert hex to RGB
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },

  // Check if color is light
  isLight(hex) {
    const rgb = this.hexToRgb(hex);
    if (!rgb) return false;
    
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    return brightness > 128;
  },

  // Get contrasting color
  getContrast(hex) {
    return this.isLight(hex) ? '#000000' : '#ffffff';
  }
};

// Device detection
export const Device = {
  // Check if mobile device
  isMobile() {
    return window.innerWidth <= 768;
  },

  // Check if tablet device
  isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
  },

  // Check if desktop device
  isDesktop() {
    return window.innerWidth > 1024;
  },

  // Get device type
  getType() {
    if (this.isMobile()) return 'mobile';
    if (this.isTablet()) return 'tablet';
    return 'desktop';
  }
};

// Image loading utility
export function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// Copy to clipboard
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.warn('Copy to clipboard failed:', error);
    return false;
  }
}