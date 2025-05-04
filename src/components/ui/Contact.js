import React, { useState } from 'react';
import './contact.css'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert('Thank you for your message! I will get back to you soon.');
    };

    return (
        <div className='main'>
            <div className='contact-container'>
                <div className='contact-info'>
                    <h2>CONTACT ME</h2>
                    <p>If you have any questions or just want to get in touch, feel free to send me a message. I'd love to hear from you!</p>
                    
                    <div className='contact-details'>
                        <div className='contact-detail-item'>
                            <div className='contact-icon'>
                                <i className='fa fa-envelope'></i>
                            </div>
                            <div className='contact-text'>
                                <h4>Email</h4>
                                <p>burhann4759@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className='contact-detail-item'>
                            <div className='contact-icon'>
                                <i className='fa fa-phone'></i>
                            </div>
                            <div className='contact-text'>
                                <h4>Phone</h4>
                                <p>+92 321 1334882</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='contact-form-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input 
                                type='text' 
                                name='name'
                                placeholder='Your Name' 
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className='form-group'>
                            <input 
                                type='email' 
                                name='email'
                                placeholder='Your Email' 
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className='form-group'>
                            <input 
                                type='tel' 
                                name='phone'
                                placeholder='Your Phone' 
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className='form-group'>
                            <textarea 
                                name='message'
                                placeholder='Message' 
                                rows='5'
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        
                        <button 
                            type='submit' 
                            className='submit-button'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};