

import Cosmic from 'cosmicjs';

const cosmic = Cosmic();

const bucket = cosmic.bucket({
  slug: import.meta.env.VITE_COSMIC_BUCKET_SLUG,
  read_key: import.meta.env.VITE_COSMIC_READ_KEY,
  write_key: import.meta.env.VITE_COSMIC_WRITE_KEY
});

// Helper function to get single object
export async function getSingleObject(type) {
  try {
    const res = await bucket.objects.find({
      type: type,
      props: 'slug,title,metadata'
    });
    
    const obj = res.objects?.[0];
    if (!obj) return null;
    
    return {
      ...obj.metadata,
      slug: obj.slug,
      title: obj.title,
      id: obj.id
    };
    
  } catch (err) {
    console.error(`Error fetching ${type}:`, err);
    return null;
  }
}

// Helper function to get multiple objects
export async function getMultipleObjects(type) {
  try {
    const res = await bucket.objects.find({
      type: type,
      props: 'slug,title,metadata'
    });
    
    const objects = res.objects || [];
    
    return objects.map(obj => ({
      ...obj.metadata,
      slug: obj.slug,
      title: obj.title,
      id: obj.id
    }));
    
  } catch (err) {
    console.error(`Error fetching ${type}:`, err);
    return [];
  }
}

// ✅ FIXED: Form submission function with proper error handling
export async function submitFormData(formData) {
  console.log('🚀 Submitting form data to Cosmic CMS:', formData);
  
  try {
    // Validate environment variables
    if (!import.meta.env.VITE_COSMIC_BUCKET_SLUG) {
      throw new Error('VITE_COSMIC_BUCKET_SLUG is not defined');
    }
    if (!import.meta.env.VITE_COSMIC_WRITE_KEY) {
      throw new Error('VITE_COSMIC_WRITE_KEY is not defined');
    }

    // Create the object in Cosmic CMS
    const response = await bucket.objects.insertOne({
      title: `Contact from ${formData.name} - ${new Date().toLocaleString()}`,
      type: 'contact-form-submissions', 
      metadata: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        submitted_at: new Date().toISOString()
      }
    });
    
    console.log('✅ Form submitted successfully to Cosmic CMS:', response);
    return { 
      success: true, 
      data: response.object 
    };
    
  } catch (err) {
    console.error('❌ Form submission error:', err);
    
    // Provide more detailed error messages
    let errorMessage = 'Failed to submit form';
    
    if (err.message?.includes('write_key')) {
      errorMessage = 'Invalid API credentials. Please check your Cosmic CMS write key.';
    } else if (err.message?.includes('type')) {
      errorMessage = 'Invalid object type. Please ensure "contact-form-submissions" exists in Cosmic CMS.';
    } else if (err.message) {
      errorMessage = err.message;
    }
    
    return { 
      success: false, 
      error: errorMessage 
    };
  }
}

export default bucket;