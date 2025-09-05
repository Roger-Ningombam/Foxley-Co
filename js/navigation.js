// FOXLEY & Co. - Navigation System
// Handle routing, section switching, and scroll management

import { DOM, Animation, throttle } from './utils.js';
import { getProductsByCategory, getProductById } from './products.js';
import { cart } from './cart.js';
import { modal } from './modal.js';

class NavigationManager {
  constructor() {
    this.currentSection = 'home';
    this.isMobileMenuOpen = false;
    this.elements = {};
    this.init();
  }

  init() {
    this.cacheElements();
    this.setupEventListeners();
    this.updateNavigationState();
  }

  cacheElements() {
    this.elements = {
      header: DOM.get('header'),
      heroSection: DOM.get('hero-section'),
      collectionPreview: DOM.get('collection-preview'),
      heritageStory: DOM.get('heritage-story'),
      productSection: DOM.get('product-section'),
      mobileMenuBtn: DOM.get('mobile-menu-btn'),
      navMobile: DOM.get('nav-mobile'),
      sectionTitle: DOM.get('section-title'),
      sectionDescription: DOM.get('section-description'),
      productGrid: DOM.get('product-grid')
    };
  }

  setupEventListeners() {
    // Navigation clicks
    // Navigation clicks
    DOM.on(document, 'click', (e) => {
      const targetButton = e.target.closest('[data-section]');
      if (targetButton) {
        e.preventDefault();
        this.navigateToSection(targetButton.dataset.section);
      }
    });

    // Collection card clicks - ensure they navigate to correct sections
    DOM.on(document, 'click', (e) => {
      const collectionCard = e.target.closest('.collection-card');
      if (collectionCard && collectionCard.dataset.section) {
        e.preventDefault();
        this.navigateToSection(collectionCard.dataset.section);
      }
    });

    // Mobile menu toggle
    if (this.elements.mobileMenuBtn) {
      DOM.on(this.elements.mobileMenuBtn, 'click', () => {
        this.toggleMobileMenu();
      });
    }

    // Scroll handling with throttle
    const throttledScroll = throttle(() => this.handleScroll(), 16);
    DOM.on(window, 'scroll', throttledScroll);

    // Window resize handling
    DOM.on(window, 'resize', () => {
      if (window.innerWidth > 1024 && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    });

    // Close mobile menu when clicking outside
    DOM.on(document, 'click', (e) => {
      if (this.isMobileMenuOpen && 
          !e.target.closest('#nav-mobile') && 
          !e.target.closest('#mobile-menu-btn')) {
        this.closeMobileMenu();
      }
    });

    // Handle browser back/forward
    DOM.on(window, 'popstate', (e) => {
      if (e.state && e.state.productView) {
        // User navigated back from product view
        modal.close();
      }
    });
  }

  // Navigate to specific section
  // Replace your navigateToSection with this
navigateToSection(section) {
  this.currentSection = section;
  this.updateNavigationState();

  // 1) Close modal product view if that path is active
  if (typeof modal !== 'undefined' && modal && typeof modal.close === 'function') {
    // close() should restore main content visibility
    modal.close();
  }

  // 2) Hard-clean any stray full-page product view nodes (cover all variants)
  const strayNodes = [
    document.getElementById('full-page-product-view'),
    document.querySelector('.full-page-product-view'),
    document.querySelector('.product-detail-page')
  ].filter(Boolean);

  strayNodes.forEach(n => n.remove());

  // 3) Ensure only the right main section is visible
  const main = document.getElementById('main-content');
  if (main) {
    main.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
  }

  if (section === 'home') {
    this.showHomeSection();
    Animation.scrollToTop();
  } else {
    this.showProductSection(section);
    // Delay to ensure DOM is painted before scrolling
    setTimeout(() => {
      if (this.elements.productSection) {
        Animation.scrollTo(this.elements.productSection, 100);
      }
    }, 0);
  }

  // 4) Close mobile menu if open
  if (this.isMobileMenuOpen) this.closeMobileMenu();

  // 5) Optional: clear any history state set by product view
  if (history.state && history.state.productView) {
    history.replaceState({}, '');
  }
}


  // Update navigation active states
  updateNavigationState() {
    // Update nav links
    const navLinks = DOM.getAll('.nav-link, .nav-link-mobile');
    navLinks.forEach(link => {
      DOM.removeClass(link, 'active');
      if (link.dataset.section === this.currentSection) {
        DOM.addClass(link, 'active');
      }
    });
  }

  // Show home section
  showHomeSection() {
    this.showElement(this.elements.heroSection);
    this.showElement(this.elements.collectionPreview);
    this.showElement(this.elements.heritageStory);
    this.hideElement(this.elements.productSection);
    
    // Ensure collection cards have proper data attributes
    this.setupCollectionCardLinks();
  }

  // Setup collection card links
  setupCollectionCardLinks() {
    // Set up collection card data attributes for proper navigation
    const collectionCards = DOM.getAll('.collection-card');
    
    collectionCards.forEach((card, index) => {
      // Map cards to sections based on their position/content
      if (card.querySelector('h3')?.textContent.includes('Gentleman')) {
        card.dataset.section = 'gentlemen';
      } else if (card.querySelector('h3')?.textContent.includes('Lady') || 
                 card.querySelector('h3')?.textContent.includes('Ladies')) {
        card.dataset.section = 'ladies';
      } else if (card.querySelector('h3')?.textContent.includes('Accessories')) {
        card.dataset.section = 'accessories';
      } else {
        // Fallback based on index
        const sections = ['gentlemen', 'ladies', 'accessories'];
        card.dataset.section = sections[index] || 'gentlemen';
      }
      
      // Ensure cursor pointer
      card.style.cursor = 'pointer';
    }); 
  }

  // Show product section
  showProductSection(category) {
    this.hideElement(this.elements.heroSection);
    this.hideElement(this.elements.collectionPreview);
    this.hideElement(this.elements.heritageStory);
    this.showElement(this.elements.productSection);
    
    this.updateProductSection(category);
  }

  // Update product section content
  updateProductSection(category) {
    const products = getProductsByCategory(category);
    
    // Update section title and description
    const sectionData = this.getSectionData(category);
    if (this.elements.sectionTitle) {
      this.elements.sectionTitle.textContent = sectionData.title;
    }
    if (this.elements.sectionDescription) {
      this.elements.sectionDescription.textContent = sectionData.description;
    }

    // Update product grid
    this.renderProductGrid(products);
  }

  // Get section data
  getSectionData(category) {
    const sectionData = {
      gentlemen: {
        title: "Gentlemen's Collection",
        description: "For the discerning gentleman who appreciates tradition and quality."
      },
      ladies: {
        title: "Ladies' Collection", 
        description: "Elegant pieces that speak to the sophisticated woman."
      },
      accessories: {
        title: "Timeless Accessories",
        description: "The perfect finishing touches for a complete ensemble."
      }
    };

    return sectionData[category] || {
      title: "Our Collection",
      description: "Discover our curated selection of luxury pieces."
    };
  }

  // Render product grid
  renderProductGrid(products) {
    if (!this.elements.productGrid) return;

    this.elements.productGrid.innerHTML = products.map(product => 
      this.createProductCard(product)
    ).join('');

    // Setup product card event listeners
    this.setupProductCardEvents();
  }

  // Create product card HTML
  createProductCard(product) {
    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-image">
          <img src="${product.images[0]}" 
               alt="${product.name}" 
               loading="lazy"
               sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw">
          <div class="product-overlay">
            <div class="overlay-content">
              <span>View Details</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-tagline">${product.tagline}</p>
          <div class="product-price">${product.price}</div>
          <div class="product-actions">
            <button class="btn-primary product-add-to-cart" data-product-id="${product.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="m1 1 4 4 14 7v-4l-14-7z"></path>
              </svg>
              Add to Cart
            </button>
            <button class="btn-secondary product-amazon" data-amazon-url="${product.amazonUrl}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
              View on Amazon
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // Setup product card event listeners
  setupProductCardEvents() {
    // Product card clicks (view details) - now opens full page
    const productCards = DOM.getAll('.product-card');
    productCards.forEach(card => {
      DOM.on(card, 'click', (e) => {
        // Don't trigger if clicking on buttons
        if (e.target.closest('button')) return;
        
        const productId = card.dataset.productId;
        const product = getProductById(productId);
        if (product) {
          modal.open(product);
        }
      });
    });

    // Add to cart buttons
    const addToCartBtns = DOM.getAll('.product-add-to-cart');
    addToCartBtns.forEach(btn => {
      DOM.on(btn, 'click', (e) => {
        e.stopPropagation();
        const productId = btn.dataset.productId;
        const product = getProductById(productId);
        if (product) {
          cart.addItem(product);
        }
      });
    });

    // Amazon buttons
    const amazonBtns = DOM.getAll('.product-amazon');
    amazonBtns.forEach(btn => {
      DOM.on(btn, 'click', (e) => {
        e.stopPropagation();
        const amazonUrl = btn.dataset.amazonUrl;
        if (amazonUrl) {
          window.open(amazonUrl, '_blank', 'noopener,noreferrer');
        }
      });
    });
  }

  // Toggle mobile menu
  toggleMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  // Open mobile menu
  openMobileMenu() {
    this.isMobileMenuOpen = true;
    if (this.elements.navMobile) {
      DOM.addClass(this.elements.navMobile, 'active');
    }
    if (this.elements.mobileMenuBtn) {
      DOM.addClass(this.elements.mobileMenuBtn, 'active');
    }
  }

  // Close mobile menu
  closeMobileMenu() {
    this.isMobileMenuOpen = false; 
    if (this.elements.navMobile) {
      DOM.removeClass(this.elements.navMobile, 'active');
    }
    if (this.elements.mobileMenuBtn) {
      DOM.removeClass(this.elements.mobileMenuBtn, 'active');
    }
  }

  // Handle scroll events
  handleScroll() {
    const scrollY = window.scrollY;
    
    // Update header appearance
    if (this.elements.header) {
      if (scrollY > 50) {
        DOM.addClass(this.elements.header, 'scrolled');
      } else {
        DOM.removeClass(this.elements.header, 'scrolled');
      }
    }
  }

  // Utility methods for showing/hiding elements
  showElement(element) {
    if (element) {
      DOM.removeClass(element, 'hidden');
      element.style.display = '';
    }
  }

  hideElement(element) {
    if (element) {
      DOM.addClass(element, 'hidden');
      element.style.display = 'none';
    }
  }

  // Get current section
  getCurrentSection() {
    return this.currentSection;
  }

  // Check if mobile menu is open
  isMobileMenuOpen() {
    return this.isMobileMenuOpen;
  }
}

// Create and export navigation manager instance
export const navigation = new NavigationManager();