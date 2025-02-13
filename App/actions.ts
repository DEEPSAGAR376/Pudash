'use server'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function submitContact(formData: FormData) {
  const data: ContactFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  }

  try {
    // Here you would typically store the data in a database
    // For now, we'll just log it and return a success message
    console.log('Contact form submission:', data)
    
    return { success: true, message: 'Message sent successfully!' }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, message: 'Failed to send message. Please try again.' }
  }
}

