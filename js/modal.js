// FOXLEY & Co. - Full Page Product View System
// Handle full-page product details matching Figma design

import { DOM } from './utils.js';
import { getProductById, getSuggestedProducts } from './products.js';
import { cart } from './cart.js';
import { toast } from './toast.js';
import { navigation } from './navigation.js';

class ModalManager {
  constructor() {
    this.isOpen = false;
    this.currentProduct = null;
    this.currentImageIndex = 0;
    this.elements = {};
    this.init();
  }

  init() {
    this.cacheElements();
    this.setupEventListeners();
  }

  cacheElements() {
    this.elements = {
      modal: DOM.get('product-modal'),
      overlay: document.querySelector('.modal-overlay'),
      closeBtn: DOM.get('modal-close'),
      body: DOM.get('modal-body')
    };
  }

  setupEventListeners() {
    // Escape key to close
    DOM.on(document, 'keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  // Open full-page product view
  open(product) {
    this.removeFullPageView();
    this.currentProduct = product;
    this.currentProduct.images = this.currentProduct.variants[0].images;
    this.currentImageIndex = 0;
    this.isOpen = true;

    // Hide main content sections
    this.hideMainContent();
    
    // Create and show full-page product view
    this.createFullPageView();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update browser history (optional)
    if (history.pushState) {
      history.pushState({ productView: true }, '', `#product/${product.id}`);
    }
  }

  // Close full-page view
  close() {
    this.isOpen = false;
    this.currentProduct = null;

    // Remove full-page view
    this.removeFullPageView();
    
    // Show main content
    this.showMainContent();
    
    // Update browser history
    if (history.pushState) {
      history.pushState(null, '', window.location.pathname);
    }
  }

  // Hide main content sections
  hideMainContent() {
    const sectionsToHide = [
      '#hero-section',
      '#collection-preview', 
      '#heritage-story',
      '#product-section'
    ];
    
    sectionsToHide.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        element.style.display = 'none';
      }
    });
  }

  // Show main content sections
  showMainContent() {
    // Determine which sections to show based on current navigation state
    const currentSection = navigation.getCurrentSection();
    
    if (currentSection === 'home') {
      const homeElements = ['#hero-section', '#collection-preview', '#heritage-story'];
      homeElements.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
          element.style.display = '';
        }
      });
    } else {
      const productSection = document.querySelector('#product-section');
      if (productSection) {
        productSection.style.display = '';
      }
    }
  }

  // Create full-page product view
  createFullPageView() {
    const fullPageView = DOM.create('div', ['full-page-product-view']);
    fullPageView.id = 'full-page-product-view';
    
    fullPageView.innerHTML = this.renderFullPageContent();
    
    // Insert after header
    const header = document.querySelector('.header');
    if (header && header.nextSibling) {
      header.parentNode.insertBefore(fullPageView, header.nextSibling);
    } else {
      document.body.appendChild(fullPageView);
    }
    
    this.setupFullPageEvents();
  }

  // Remove full-page view
  removeFullPageView() {
    const fullPageView = DOM.get('full-page-product-view');
    if (fullPageView) {
      fullPageView.remove();
    }
  }

  // Render full-page content matching Figma design
  renderFullPageContent() {
    const product = this.currentProduct;
    const suggestedProducts = getSuggestedProducts(product.id, product.category, 3);

    return `
      <div id="full-page-product-view" class="full-page-product-view">
      <div class="full-page-header">
        <div class="container">
          <button class="back-button" id="back-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back to Collection</span>
          </button>
        </div>
      </div>

      <div class="full-page-content">
        <div class="container">
          <div class="product-detail-layout">
            <div class="product-image-section">
              ${this.renderProductImages(product)}
            </div>
            
            <div class="product-info-section">
              ${this.renderProductInfo(product)}
            </div>
          </div>
          
          ${suggestedProducts.length > 0 ? this.renderRecommendations(suggestedProducts) : ''}
        </div>
      </div>
      </div>
    `;
  }

  // Render product images section
  renderProductImages(product) {
    return `
      <div class="product-main-image">
        <img src="${product.images[this.currentImageIndex]}" 
             alt="${product.name}" 
             id="main-product-image">
        ${product.images.length > 1 ? this.renderImageControls() : ''}
      </div>
      ${product.images.length > 1 ? this.renderImageThumbnails(product) : ''}
    `;
  }

  // Render image controls
  renderImageControls() {
    return `
      <div class="image-controls">
        <button class="image-nav-btn prev-btn" id="prev-image">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button class="image-nav-btn next-btn" id="next-image">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    `;
  }

  // Render image thumbnails
  renderImageThumbnails(product) {
    return `
      <div class="image-thumbnails">
        ${product.images.map((image, index) => `
          <button class="thumbnail-btn ${index === this.currentImageIndex ? 'active' : ''}" 
                  data-image-index="${index}">
            <img src="${image}" alt="${product.name} view ${index + 1}">
          </button>
        `).join('')}
      </div>
    `;
  }

  // Render product information section
  // In modal.js, replace the entire renderProductInfo function with this one

renderProductInfo(product) {
  // This helper function creates the color buttons HTML
  const createColorOptions = (variants) => {
    // Return nothing if the product has no variants
    if (!variants || variants.length <= 1) {
      return ''; 
    }
    
    // Create a button for each color variant
    return `
      <div class="option-group">
        <label>Color</label>
        <div class="color-options">
          ${variants.map((variant, index) => `
            <button class="color-option ${index === 0 ? 'active' : ''}">
              <span class="color-swatch" style="background-color: ${variant.color};"></span>
              <span>${variant.color}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  };

  // Main function return
  return `
    <div class="product-header">
      <h1 class="product-title">${product.name}</h1>
      <p class="product-tagline">${product.tagline}</p>
    </div>

    <div class="product-description">
      <h3>Description</h3>
      <p>${product.description}</p>
    </div>

    <div class="product-price">
      <span class="price-label">Price</span>
      <span class="price-value">${product.price}</span>
    </div>

    <div class="product-specs">
      <h3>Specifications</h3>
      <ul>
        ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
      </ul>
    </div>

    <div class="product-options">
      ${createColorOptions(product.variants)}
      
      <div class="option-group">
        <label>Size</label>
        <div class="size-options">
          <button class="size-option active" data-size="m">M</button>
          <button class="size-option" data-size="l">L</button>
          <button class="size-option" data-size="xl">XL</button>
        </div>
      </div>
    </div>

    <div class="product-actions">
      <button class="btn-primary add-to-cart-btn" data-product-id="${product.id}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="m1 1 4 4 14 7v-4l-14-7z"></path>
        </svg>
        Add to Cart
      </button>
      <button class="btn-secondary buy-now-btn" data-amazon-url="${product.amazonUrl}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7V17"/>
        </svg>
        View on Amazon
      </button>
    </div>
  `;
}

  // Render recommendations section
  renderRecommendations(products) {
    return `
      <div class="recommendations-section">
        <h2>Recommendations</h2>
        <div class="recommendations-grid">
          ${products.map(product => this.renderRecommendationCard(product)).join('')}
        </div>
      </div>
    `;
  }

  // Render recommendation card
  renderRecommendationCard(product) {
    return `
      <article class="recommendation-card" data-product-id="${product.id}">
        <div class="recommendation-image">
          <img src="${product.images[0]}" alt="${product.name}">
        </div>
        <div class="recommendation-info">
          <h4>${product.name}</h4>
          <p>${product.tagline}</p>
          <div class="recommendation-price">${product.price}</div>
        </div>
      </article>
    `;
  }
  // Add this new function to modal.js
setupImageControlEvents() {
  // Image navigation
  const prevBtn = DOM.get('prev-image');
  const nextBtn = DOM.get('next-image');
  
  if (prevBtn) {
    DOM.on(prevBtn, 'click', () => this.previousImage());
  }
  if (nextBtn) {
    DOM.on(nextBtn, 'click', () => this.nextImage());
  }

  // Thumbnails
  const thumbnails = document.querySelectorAll('.thumbnail-btn');
  thumbnails.forEach(thumb => {
    DOM.on(thumb, 'click', () => {
      const index = parseInt(thumb.dataset.imageIndex);
      this.setImageIndex(index);
    });
  });
}
  // Setup full-page event listeners
  setupFullPageEvents() {
    // Back button
    const backBtn = DOM.get('back-button');
    if (backBtn) {
      DOM.on(backBtn, 'click', () => this.close());
    }

    // Navigation links
    const navLinks = document.querySelectorAll('.product-nav .nav-link');
    navLinks.forEach(link => {
      DOM.on(link, 'click', (e) => {
        e.preventDefault();
        const section = link.dataset.section;
        this.close();
        setTimeout(() => {
          navigation.navigateToSection(section);
        }, 100);
      });
    });

    // Image navigation
    const prevBtn = DOM.get('prev-image');
    const nextBtn = DOM.get('next-image');
    
    if (prevBtn) {
      DOM.on(prevBtn, 'click', () => this.previousImage());
    }
    if (nextBtn) {
      DOM.on(nextBtn, 'click', () => this.nextImage());
    }

    // Thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail-btn');
    thumbnails.forEach(thumb => {
      DOM.on(thumb, 'click', () => {
        const index = parseInt(thumb.dataset.imageIndex);
        this.setImageIndex(index);
      });
    });

    // Product actions
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const buyNowBtn = document.querySelector('.buy-now-btn');

    if (addToCartBtn) {
      DOM.on(addToCartBtn, 'click', () => {
        cart.addItem(this.currentProduct);
      });
    }

    if (buyNowBtn) {
      DOM.on(buyNowBtn, 'click', () => {
        window.open(this.currentProduct.amazonUrl, '_blank', 'noopener,noreferrer');
      });
    }

    // Recommendation cards
    const recommendationCards = document.querySelectorAll('.recommendation-card');
    recommendationCards.forEach(card => {
      DOM.on(card, 'click', () => {
        const productId = card.dataset.productId;
        const product = getProductById(productId);
        if (product) {
          this.open(product);
        }
      });
    });

    // Size and color options
    const sizeOptions = document.querySelectorAll('.size-option');
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach((option, index) => {
  DOM.on(option, 'click', () => {
    // Update the active button
    colorOptions.forEach(opt => DOM.removeClass(opt, 'active'));
    DOM.addClass(option, 'active');

    // Get the new images from the clicked variant
    const selectedVariant = this.currentProduct.variants[index];
    if (!selectedVariant) return;

    // Update the product's images and reset the index
    this.currentProduct.images = selectedVariant.images;
    this.currentImageIndex = 0;

    // Re-render the entire image section
    const imageSection = document.querySelector('.product-image-section');
    if (imageSection) {
      imageSection.innerHTML = this.renderProductImages(this.currentProduct);
      this.setupImageControlEvents(); // Re-attach listeners
    }
  });
});

    sizeOptions.forEach(option => {
      DOM.on(option, 'click', () => {
        sizeOptions.forEach(opt => DOM.removeClass(opt, 'active'));
        DOM.addClass(option, 'active');
      });
    });

    colorOptions.forEach(option => {
      DOM.on(option, 'click', () => {
        colorOptions.forEach(opt => DOM.removeClass(opt, 'active'));
        DOM.addClass(option, 'active');
      });
    });
  }

  // Navigate to previous image
  previousImage() {
    if (!this.currentProduct) return;
    
    this.currentImageIndex = this.currentImageIndex > 0 
      ? this.currentImageIndex - 1 
      : this.currentProduct.images.length - 1;
    
    this.updateMainImage();
    this.updateThumbnails();
  }

  // Navigate to next image
  nextImage() {
    if (!this.currentProduct) return;
    
    this.currentImageIndex = this.currentImageIndex < this.currentProduct.images.length - 1 
      ? this.currentImageIndex + 1 
      : 0;
    
    this.updateMainImage();
    this.updateThumbnails();
  }

  // Set specific image index
  setImageIndex(index) {
    if (!this.currentProduct || index < 0 || index >= this.currentProduct.images.length) return;
    
    this.currentImageIndex = index;
    this.updateMainImage();
    this.updateThumbnails();
  }

  // Update main image
  updateMainImage() {
    const mainImage = DOM.get('main-product-image');
    if (mainImage) {
      mainImage.src = this.currentProduct.images[this.currentImageIndex];
    }
  }

  // Update thumbnail active states
  updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail-btn');
    thumbnails.forEach((thumb, index) => {
      if (index === this.currentImageIndex) {
        DOM.addClass(thumb, 'active');
      } else {
        DOM.removeClass(thumb, 'active');
      }
    });
  }
}

// Create and export modal manager instance
export const modal = new ModalManager();