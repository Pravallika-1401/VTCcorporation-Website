// Utility function to create consistent page URLs
export const createPageUrl = (pageName) => {
  // Convert page names to URL-friendly paths
  const pageMap = {
    'Home': '/',
    'About': '/about',
    'Products': '/products',
    'ProductDetail': '/product-detail',
    'Gallery': '/gallery',
    'Contact': '/contact'
  };
  
  return pageMap[pageName] || '/';
};

// Smooth scroll to element
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

// Format phone number
export const formatPhoneNumber = (phoneNumber) => {
  return phoneNumber.replace(/(\d{2})(\d{4})(\d{4})(\d{2})/, '+$1 $2 $3 $4');
};

export default {
  createPageUrl,
  scrollToElement,
  formatPhoneNumber
};