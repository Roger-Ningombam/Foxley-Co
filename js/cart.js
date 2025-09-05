// FOXLEY & Co. - Cart Management System
// Handle cart state, storage, and UI updates

import { DOM, Storage } from './utils.js';
import { toast } from './toast.js';
import { getProductById } from './products.js';

class CartManager {
  constructor() {
    this.items = [];
    this.isOpen = false;
    this.elements = {};
    this.init();
  }

  init() {
    this.loadFromStorage();
    this.cacheElements();
    this.setupEventListeners();
    this.updateUI();
  }

  cacheElements() {
    this.elements = {
      drawer: DOM.get('cart-drawer'),
      overlay: document.querySelector('.cart-overlay'),
      closeBtn: DOM.get('cart-close'),
      itemsContainer: DOM.get('cart-items'),
      badge: DOM.get('cart-badge'),
      count: DOM.get('cart-count'),
      emptyState: document.querySelector('.cart-empty')
    };
  }

  setupEventListeners() {
    // Close cart events
    if (this.elements.overlay) {
      DOM.on(this.elements.overlay, 'click', () => this.close());
    }
    if (this.elements.closeBtn) {
      DOM.on(this.elements.closeBtn, 'click', () => this.close());
    }

    // Escape key to close
    DOM.on(document, 'keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  // Add item to cart
  addItem(product) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
      toast.success(`Updated ${product.name} quantity`, `Quantity: ${existingItem.quantity}`);
    } else {
      this.items.push({
        ...product,
        quantity: 1,
        addedAt: new Date().toISOString()
      });
      toast.success(`${product.name} added to wishlist`, 'Item saved to your collection');
    }

    this.saveToStorage();
    this.updateUI();
  }

  // Remove item from cart
  removeItem(productId) {
    const itemIndex = this.items.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
      const removedItem = this.items[itemIndex];
      this.items.splice(itemIndex, 1);
      
      toast.info(`${removedItem.name} removed from wishlist`);
      this.saveToStorage();
      this.updateUI();
    }
  }

  // Update item quantity
  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
        this.saveToStorage();
        this.updateUI();
      }
    }
  }

  // Clear all items
  clear() {
    this.items = [];
    this.saveToStorage();
    this.updateUI();
    toast.info('Wishlist cleared');
  }

  // Get total item count
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Get total price (for display purposes)
  getTotalPrice() {
    return this.items.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[₹,]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  }

  // Open cart drawer
  open() {
  this.isOpen = true;
  if (this.elements.drawer) {
    DOM.addClass(this.elements.drawer, 'open');
  }
  if (this.elements.overlay) {
    DOM.addClass(this.elements.overlay, 'active');
  }
  document.body.style.overflow = 'hidden';
  }

  // Close cart drawer
  close() {
  this.isOpen = false;
  if (this.elements.drawer) {
    DOM.removeClass(this.elements.drawer, 'open');
  }
  if (this.elements.overlay) {
    DOM.removeClass(this.elements.overlay, 'active');
  }
  document.body.style.overflow = '';
  }

  // Toggle cart drawer
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  // Update cart UI
  updateUI() {
    this.updateBadge();
    this.updateItemsList();
  }

  // Update cart badge
  updateBadge() {
    const count = this.getTotalItems();
    
    if (this.elements.badge) {
      this.elements.badge.textContent = count;
    }
    
    if (this.elements.count) {
      this.elements.count.textContent = count;
      
      if (count > 0) {
        DOM.addClass(this.elements.count, 'show');
      } else {
        DOM.removeClass(this.elements.count, 'show');
      }
    }
  }

  // Update items list
  updateItemsList() {
    if (!this.elements.itemsContainer) return;

    // Clear existing items
    this.elements.itemsContainer.innerHTML = '';

    if (this.items.length === 0) {
      this.showEmptyState();
    } else {
      this.hideEmptyState();
      this.renderItems();
    }
  }

  // Show empty state
  showEmptyState() {
    if (this.elements.emptyState) {
      this.elements.emptyState.style.display = 'flex';
    } else {
      const emptyState = this.createEmptyState();
      this.elements.itemsContainer.appendChild(emptyState);
    }
  }

  // Hide empty state
  hideEmptyState() {
    if (this.elements.emptyState) {
      this.elements.emptyState.style.display = 'none';
    }
  }

  // Create empty state element
  createEmptyState() {
    const emptyState = DOM.create('div', ['cart-empty']);
    emptyState.innerHTML = `
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="m1 1 4 4 14 7v-4l-14-7z"></path>
        <path d="M5.12 5.12 7 7l9-4v4l-9 4z"></path>
      </svg>
      <h3>Your wishlist is empty</h3>
      <p>Discover our curated collection of luxury pieces.</p>
    `;
    return emptyState;
  }

  // Render cart items
  renderItems() {
    this.items.forEach(item => {
      const itemElement = this.createItemElement(item);
      this.elements.itemsContainer.appendChild(itemElement);
    });
  }

  // Create cart item element
  createItemElement(item) {
    const itemElement = DOM.create('div', ['cart-item']);
    
    itemElement.innerHTML = `
      <div class="cart-item-image">
        <img src="${item.images[0]}" alt="${item.name}" loading="lazy">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-tagline">${item.tagline}</div>
        <div class="cart-item-price">${item.price}</div>
        ${item.quantity > 1 ? `<div class="cart-item-quantity">Quantity: ${item.quantity}</div>` : ''}
        <div class="cart-item-actions">
          <button class="cart-item-remove" data-product-id="${item.id}" aria-label="Remove ${item.name}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6z"/>
              <line x1="10" y1="11" x2="10" y2="17"/>
              <line x1="14" y1="11" x2="14" y2="17"/>
            </svg>
          </button>
        </div>
        <a href="${item.amazonUrl}" target="_blank" rel="noopener noreferrer" class="cart-item-amazon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7V17"/>
        </svg>
        View on Amazon
        </a>

      </div>
    `;

    // Add event listeners
    const removeBtn = itemElement.querySelector('.cart-item-remove');
    const amazonBtn = itemElement.querySelector('.cart-item-amazon');

    if (removeBtn) {
      DOM.on(removeBtn, 'click', () => {
        this.removeItem(item.id);
      });
    }

    return itemElement;
  }

  // Save cart to localStorage
  saveToStorage() {
    Storage.set('foxley-cart', this.items);
  }

  // Load cart from localStorage
  loadFromStorage() {
    this.items = Storage.get('foxley-cart', []);
  }

  // Get cart items (read-only)
  getItems() {
    return [...this.items];
  }

  // Check if item is in cart
  hasItem(productId) {
    return this.items.some(item => item.id === productId);
  }

  // Get item quantity
  getItemQuantity(productId) {
    const item = this.items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  }
}

// Create and export cart manager instance
export const cart = new CartManager();