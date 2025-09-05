// FOXLEY & Co. - Toast Notification System
// Elegant toast notifications for user feedback

import { DOM, generateId, Animation } from './utils.js';

class ToastManager {
  constructor() {
    this.toasts = new Map();
    this.container = null;
    this.init();
  }

  init() {
    this.createContainer();
  }

  createContainer() {
    this.container = DOM.get('toast-container');
    if (!this.container) {
      this.container = DOM.create('div', ['toast-container']);
      this.container.id = 'toast-container';
      document.body.appendChild(this.container);
    }
  }

  // Show success toast
  success(title, description = '', duration = 4000) {
    return this.show('success', title, description, duration);
  }

  // Show info toast
  info(title, description = '', duration = 4000) {
    return this.show('info', title, description, duration);
  }

  // Show error toast
  error(title, description = '', duration = 6000) {
    return this.show('error', title, description, duration);
  }

  // Show warning toast
  warning(title, description = '', duration = 5000) {
    return this.show('warning', title, description, duration);
  }

  // Show toast with custom type
  show(type = 'info', title, description = '', duration = 4000) {
    const id = generateId();
    const toast = this.createToast(id, type, title, description);
    
    this.toasts.set(id, toast);
    this.container.appendChild(toast.element);
    
    // Trigger show animation
    setTimeout(() => {
      DOM.addClass(toast.element, 'show');
    }, 10);

    // Auto-hide after duration
    if (duration > 0) {
      toast.autoHideTimer = setTimeout(() => {
        this.hide(id);
      }, duration);
    }

    return id;
  }

  // Hide specific toast
  hide(id) {
    const toast = this.toasts.get(id);
    if (!toast) return;

    // Clear auto-hide timer
    if (toast.autoHideTimer) {
      clearTimeout(toast.autoHideTimer);
    }

    // Remove show class to trigger hide animation
    DOM.removeClass(toast.element, 'show');

    // Remove from DOM after animation
    setTimeout(() => {
      if (toast.element.parentNode) {
        toast.element.parentNode.removeChild(toast.element);
      }
      this.toasts.delete(id);
    }, 300);
  }

  // Hide all toasts
  hideAll() {
    this.toasts.forEach((_, id) => {
      this.hide(id);
    });
  }

  // Create toast element
  createToast(id, type, title, description) {
    const toastElement = DOM.create('div', ['toast', type]);
    toastElement.dataset.toastId = id;

    // Icon
    const icon = this.getIcon(type);
    
    // Content
    const content = DOM.create('div', ['toast-content']);
    
    const titleElement = DOM.create('div', ['toast-title']);
    titleElement.textContent = title;
    content.appendChild(titleElement);

    if (description) {
      const descElement = DOM.create('div', ['toast-description']);
      descElement.textContent = description;
      content.appendChild(descElement);
    }

    // Close button
    const closeButton = DOM.create('button', ['toast-close']);
    closeButton.innerHTML = this.getCloseIcon();
    closeButton.setAttribute('aria-label', 'Close notification');

    // Event listeners
    DOM.on(closeButton, 'click', () => {
      this.hide(id);
    });

    // Pause auto-hide on hover
    DOM.on(toastElement, 'mouseenter', () => {
      const toast = this.toasts.get(id);
      if (toast && toast.autoHideTimer) {
        clearTimeout(toast.autoHideTimer);
        toast.autoHideTimer = null;
      }
    });

    // Resume auto-hide on mouse leave
    DOM.on(toastElement, 'mouseleave', () => {
      const toast = this.toasts.get(id);
      if (toast && !toast.autoHideTimer) {
        toast.autoHideTimer = setTimeout(() => {
          this.hide(id);
        }, 2000); // Shorter duration after interaction
      }
    });

    // Assemble toast
    if (icon) toastElement.appendChild(icon);
    toastElement.appendChild(content);
    toastElement.appendChild(closeButton);

    return {
      element: toastElement,
      autoHideTimer: null
    };
  }

  // Get icon for toast type
  getIcon(type) {
    const icons = {
      success: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
                </svg>`,
      error: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M15 9l-6 6M9 9l6 6"/>
              </svg>`,
      warning: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`,
      info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <circle cx="12" cy="12" r="10"/>
               <path d="M12 16v-4M12 8h.01"/>
             </svg>`
    };

    if (icons[type]) {
      const iconElement = DOM.create('div', ['toast-icon']);
      iconElement.innerHTML = icons[type];
      return iconElement;
    }
    return null;
  }

  // Get close icon
  getCloseIcon() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>`;
  }
}

// Create global toast manager instance
const toast = new ToastManager();

// Export toast functions
export { toast };

// For backward compatibility, also export individual functions
export const showToast = {
  success: (title, description, duration) => toast.success(title, description, duration),
  info: (title, description, duration) => toast.info(title, description, duration),
  error: (title, description, duration) => toast.error(title, description, duration),
  warning: (title, description, duration) => toast.warning(title, description, duration)
};