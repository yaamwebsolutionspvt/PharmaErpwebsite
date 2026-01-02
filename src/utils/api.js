/**
 * API abstraction layer for future backend integration
 * Placeholder functions that can be swapped with actual API calls
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

/**
 * Generic API request handler
 */
const request = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'An error occurred');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * Contact form submission
 */
export const submitContactForm = async (formData) => {
  // Placeholder - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      resolve({ success: true, message: 'Thank you for your message!' });
    }, 1000);
  });

  // Future implementation:
  // return request('/contact', {
  //   method: 'POST',
  //   body: JSON.stringify(formData),
  // });
};

/**
 * Newsletter subscription
 */
export const subscribeNewsletter = async (email) => {
  // Placeholder - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Newsletter subscription:', email);
      resolve({ success: true, message: 'Successfully subscribed!' });
    }, 1000);
  });

  // Future implementation:
  // return request('/newsletter', {
  //   method: 'POST',
  //   body: JSON.stringify({ email }),
  // });
};

/**
 * Demo request
 */
export const requestDemo = async (demoData) => {
  // Placeholder - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Demo requested:', demoData);
      resolve({ success: true, message: 'Demo request received!' });
    }, 1000);
  });

  // Future implementation:
  // return request('/demo', {
  //   method: 'POST',
  //   body: JSON.stringify(demoData),
  // });
};

export default {
  submitContactForm,
  subscribeNewsletter,
  requestDemo,
};

