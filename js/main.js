// FOXLEY & Co. - Main Application
// Orchestrates all modules and handles global application state

import { DOM, Storage, onDOMReady } from './utils.js';
import { toast } from './toast.js';
import { cart } from './cart.js';
import { modal } from './modal.js';
import { navigation } from './navigation.js';
import { animations } from './animations.js';

class FoxleyApplication {
  constructor() {
    this.isInitialized = false;
    
    // Initialize when DOM is ready
    onDOMReady(() => {
      this.init();
    });
  }

  init() {
    if (this.isInitialized) return;
    
    console.log('🎩 Initializing FOXLEY & Co. Application...');
    
    // Initialize core systems
    this.setupGlobalEventListeners();
    this.loadUserPreferences();
    
    // Mark as initialized
    this.isInitialized = true;
    
    console.log('✨ FOXLEY & Co. Application ready');
  }

  // Setup global event listeners
  setupGlobalEventListeners() {
    // Cart button in header
    const cartBtn = DOM.get('cart-btn');
    if (cartBtn) {
      DOM.on(cartBtn, 'click', () => {
        cart.toggle();
      });
    }

    // Global keyboard shortcuts
    DOM.on(document, 'keydown', (e) => {
      this.handleGlobalKeyboard(e);
    });

    // Handle window focus/blur for optimizations
    DOM.on(window, 'focus', () => {
      this.onWindowFocus();
    });

    DOM.on(window, 'blur', () => {
      this.onWindowBlur();
    });

    // Handle visibility change for performance
    DOM.on(document, 'visibilitychange', () => {
      if (document.hidden) {
        this.onPageHidden();
      } else {
        this.onPageVisible();
      }
    });
  }

  // Handle global keyboard shortcuts
  handleGlobalKeyboard(e) {
    // Global shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'k': // Search (future feature)
          e.preventDefault();
          this.openSearch();
          break;
      }
    }

    // Escape key handling
    if (e.key === 'Escape') {
      this.handleEscapeKey();
    }

    // Number keys for quick navigation
    if (e.key >= '1' && e.key <= '4' && !e.ctrlKey && !e.metaKey) {
      const sections = ['home', 'gentlemen', 'ladies', 'accessories'];
      const sectionIndex = parseInt(e.key) - 1;
      if (sections[sectionIndex]) {
        navigation.navigateToSection(sections[sectionIndex]);
      }
    }
  }

  // Handle escape key
  handleEscapeKey() {
    // Close modals/drawers in order of priority
    if (modal.isOpen) {
      modal.close();
    } else if (cart.isOpen) {
      cart.close();
    } else if (navigation.isMobileMenuOpen) {
      navigation.closeMobileMenu();
    }
  }
  // Window focus handler
  onWindowFocus() {
    // Resume any paused animations or processes
    console.log('Application focused');
  }

  // Window blur handler
  onWindowBlur() {
    // Pause non-essential animations for performance
    console.log('Application blurred');
  }

  // Page hidden handler
  onPageHidden() {
    // Pause animations and reduce activity
    console.log('Page hidden - reducing activity');
  }

  // Page visible handler
  onPageVisible() {
    // Resume full activity
    console.log('Page visible - resuming activity');
  }

  // Get application state
  getState() {
    return {
      currentSection: navigation.getCurrentSection(),
      cartItemCount: cart.getTotalItems(),
      isModalOpen: modal.isOpen,
      isCartOpen: cart.isOpen,
    };
  }
}

// Create global application instance
const app = new FoxleyApplication();

// Export for global access
window.FoxleyApp = app;

// Export main components for external use
export { app, cart, modal, navigation, animations, toast };

console.log('🎩 FOXLEY & Co. - The Discreet Art of Dressing Well');