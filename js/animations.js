// FOXLEY & Co. - Animations & Visual Effects
// Handle sophisticated animations, scroll effects, and visual enhancements

import { DOM, debounce, isInViewport } from './utils.js';

class AnimationManager {
  constructor() {
    this.observer = null;
    this.particles = [];
    this.isLoadingComplete = false;
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.startLoadingSequence();
    this.setupScrollEffects();
  }

  // Loading sequence with sophisticated animations
  startLoadingSequence() {
    const loadingScreen = DOM.get('loading-screen');
    
    // Hide loading screen after elegant delay
    setTimeout(() => {
      if (loadingScreen) {
        DOM.addClass(loadingScreen, 'hidden');
      }
      
      setTimeout(() => {
        this.isLoadingComplete = true;
        this.initializePageAnimations();
      }, 600);
    }, 2000);
  }

  // Initialize page animations after loading
  initializePageAnimations() {
    this.startFloatingAnimations();
    this.setupHoverEffects();
    this.createAmbientParticles();
    this.initializeScrollAnimations();
  }

  // Setup intersection observer for scroll animations
  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElementIn(entry.target);
        }
      });
    }, options);

    // Observe elements after DOM is ready
    setTimeout(() => {
      this.observeElements();
    }, 100);
  }

  // Observe elements for scroll animations
  observeElements() {
    const elementsToObserve = [
      '.collection-card',
      '.heritage-content',
      '.section-header',
      '.product-card',
      '.hero-content',
      '.heritage-visual',
      '.value-item'
    ];

    elementsToObserve.forEach(selector => {
      const elements = DOM.getAll(selector);
      elements.forEach((element, index) => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        
        this.observer.observe(element);
      });
    });
  }

  // Animate element into view
  animateElementIn(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
    
    // Add special effects for certain elements
    if (DOM.hasClass(element, 'collection-card')) {
      this.addCardEffect(element);
    }
  }

  // Add special card effect
  addCardEffect(card) {
    setTimeout(() => {
      card.style.boxShadow = '0 20px 40px rgba(30, 58, 58, 0.15)';
      card.style.transform = 'translateY(-5px)';
    }, 300);
    
    setTimeout(() => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 4px 20px rgba(30, 58, 58, 0.08)';
    }, 800);
  }

  // Setup floating animations for hero elements
  startFloatingAnimations() {
    const floatingElements = DOM.getAll('.floating-garment');
    
    floatingElements.forEach((element, index) => {
      this.animateFloatingElement(element, index);
    });
  }

  // Animate individual floating element
  animateFloatingElement(element, index) {
    const duration = 20000 + (index * 5000); // Stagger durations
    const delay = index * 2000; // Stagger start times
    
    const keyframes = [
      { 
        transform: 'translate(0, 0) rotate(0deg) scale(1)',
        opacity: '0.6'
      },
      { 
        transform: 'translate(20px, -30px) rotate(5deg) scale(1.05)',
        opacity: '0.8'
      },
      { 
        transform: 'translate(-10px, -20px) rotate(-3deg) scale(0.95)',
        opacity: '0.7'
      },
      { 
        transform: 'translate(30px, 10px) rotate(8deg) scale(1.02)',
        opacity: '0.6'
      },
      { 
        transform: 'translate(0, 0) rotate(0deg) scale(1)',
        opacity: '0.6'
      }
    ];

    const options = {
      duration: duration,
      iterations: Infinity,
      easing: 'ease-in-out',
      delay: delay
    };

    element.animate(keyframes, options);
  }

  // Create ambient golden particles
  createAmbientParticles() {
    const heroSection = DOM.get('hero-section');
    if (!heroSection) return;

    const floatingElements = heroSection.querySelector('.floating-elements');
    if (!floatingElements) return;

    // Create additional particles
    for (let i = 0; i < 8; i++) {
      const particle = this.createParticle();
      floatingElements.appendChild(particle);
      this.animateParticle(particle, i);
    }
  }

  // Create individual particle
  createParticle() {
    const particle = DOM.create('div', ['ambient-particle']);
    particle.style.cssText = `
      position: absolute;
      width: ${2 + Math.random() * 3}px;
      height: ${2 + Math.random() * 3}px;
      background: var(--accent-color);
      border-radius: 50%;
      opacity: 0.4;
      pointer-events: none;
    `;
    return particle;
  }

  // Animate particle with random movement
  animateParticle(particle, index) {
    const duration = 15000 + Math.random() * 10000;
    const delay = Math.random() * 5000;
    
    // Random start position
    particle.style.top = Math.random() * 80 + '%';
    particle.style.left = Math.random() * 80 + '%';

    const keyframes = [
      { 
        transform: 'translate(0, 0) scale(1)',
        opacity: '0.3'
      },
      { 
        transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.2)`,
        opacity: '0.7'
      },
      { 
        transform: `translate(${Math.random() * 150 - 75}px, ${Math.random() * 150 - 75}px) scale(0.8)`,
        opacity: '0.5'
      },
      { 
        transform: 'translate(0, 0) scale(1)',
        opacity: '0.3'
      }
    ];

    const options = {
      duration: duration,
      iterations: Infinity,
      easing: 'ease-in-out',
      delay: delay
    };

    particle.animate(keyframes, options);
  }

  // Setup sophisticated hover effects
  setupHoverEffects() {
    this.setupCardHoverEffects();
    this.setupButtonHoverEffects();
    this.setupImageHoverEffects();
  }

  // Enhanced card hover effects
  setupCardHoverEffects() {
    const cards = DOM.getAll('.collection-card, .product-card');
    
    cards.forEach(card => {
      DOM.on(card, 'mouseenter', () => {
        this.enhanceCardHover(card, true);
      });
      
      DOM.on(card, 'mouseleave', () => {
        this.enhanceCardHover(card, false);
      });
    });
  }

  // Enhance card hover animation
  enhanceCardHover(card, isEntering) {
    const image = card.querySelector('img');
    const overlay = card.querySelector('.product-overlay, .card-overlay');
    
    if (isEntering) {
      card.style.transform = 'translateY(-10px) scale(1.02)';
      card.style.boxShadow = '0 25px 50px rgba(30, 58, 58, 0.2)';
      
      if (image) {
        image.style.transform = 'scale(1.1)';
      }
      
      if (overlay) {
        overlay.style.opacity = '1';
      }
    } else {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 4px 20px rgba(30, 58, 58, 0.08)';
      
      if (image) {
        image.style.transform = 'scale(1)';
      }
      
      if (overlay) {
        overlay.style.opacity = '0';
      }
    }
  }

  // Enhanced button hover effects
  setupButtonHoverEffects() {
    const buttons = DOM.getAll('.cta-primary, .cta-secondary, .btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
      DOM.on(button, 'mouseenter', () => {
        this.enhanceButtonHover(button, true);
      });
      
      DOM.on(button, 'mouseleave', () => {
        this.enhanceButtonHover(button, false);
      });
    });
  }

  // Enhance button hover animation
  enhanceButtonHover(button, isEntering) {
    if (isEntering) {
      button.style.transform = 'translateY(-2px) scale(1.05)';
      
      // Add ripple effect
      this.createRippleEffect(button);
    } else {
      button.style.transform = 'translateY(0) scale(1)';
    }
  }

  // Create ripple effect on button
  createRippleEffect(button) {
    const ripple = DOM.create('span', ['ripple-effect']);
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      margin-top: -50px;
      margin-left: -50px;
    `;
    
    // Ensure button has relative positioning
    if (getComputedStyle(button).position === 'static') {
      button.style.position = 'relative';
    }
    
    button.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  }

  // Enhanced image hover effects
  setupImageHoverEffects() {
    const images = DOM.getAll('.heritage-image img, .gallery-main-image img');
    
    images.forEach(image => {
      DOM.on(image, 'mouseenter', () => {
        image.style.transform = 'scale(1.05)';
        image.style.filter = 'brightness(1.1) contrast(1.1)';
      });
      
      DOM.on(image, 'mouseleave', () => {
        image.style.transform = 'scale(1)';
        image.style.filter = 'brightness(1) contrast(1)';
      });
    });
  }

  // Setup scroll-based effects
  setupScrollEffects() {
    const debouncedScroll = debounce(() => {
      this.handleScrollEffects();
    }, 16);
    
    DOM.on(window, 'scroll', debouncedScroll);
  }

  // Handle scroll-based effects
  handleScrollEffects() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Parallax effect for hero elements
    this.updateParallaxEffects(scrollY);
    
    // Update floating elements based on scroll
    this.updateFloatingElements(scrollY);
  }

  // Update parallax effects
  updateParallaxEffects(scrollY) {
    const heroSection = DOM.get('hero-section');
    if (!heroSection) return;
    
    const parallaxElements = heroSection.querySelectorAll('.floating-garment, .luxury-pattern');
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1);
      const yPos = -(scrollY * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  }

  // Update floating elements based on scroll
  updateFloatingElements(scrollY) {
    const floatingElements = DOM.getAll('.floating-garment');
    
    floatingElements.forEach((element, index) => {
      const speed = 0.3 + (index * 0.1);
      const rotation = scrollY * 0.1;
      const scale = 1 + (scrollY * 0.0001);
      
      element.style.transform += ` rotate(${rotation}deg) scale(${Math.min(scale, 1.2)})`;
    });
  }

  // Initialize scroll animations for sections
  initializeScrollAnimations() {
    // Add custom scroll animations for specific elements
    const customAnimations = [
      {
        selector: '.hero-title .title-line',
        animation: 'fadeInUp',
        delay: (index) => index * 200
      },
      {
        selector: '.collection-card',
        animation: 'slideInUp',
        delay: (index) => index * 150
      },
      {
        selector: '.heritage-values .value-item',
        animation: 'fadeInLeft',
        delay: (index) => index * 100
      }
    ];

    customAnimations.forEach(({ selector, animation, delay }) => {
      const elements = DOM.getAll(selector);
      elements.forEach((element, index) => {
        element.style.animationDelay = `${delay(index)}ms`;
        DOM.addClass(element, animation);
      });
    });
  }

  // Color theme animation
  animateColorChange(newColor) {
    // Create a smooth transition for color changes
    const duration = 300;
    const elements = DOM.getAll('[style*="--accent-color"], .color-picker-toggle');
    
    elements.forEach(element => {
      element.style.transition = `all ${duration}ms ease-out`;
    });
    
    // Reset transition after animation
    setTimeout(() => {
      elements.forEach(element => {
        element.style.transition = '';
      });
    }, duration);
  }

  // Cleanup observer
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Add CSS keyframes for animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

document.head.appendChild(styleSheet);

// Create and export animation manager instance
export const animations = new AnimationManager();