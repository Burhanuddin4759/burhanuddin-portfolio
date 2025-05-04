import React from 'react';
import { SERVICES } from '../../data/services';

export const Services = () => {
  return (
    <div className='main'>
      <h2>Services</h2>
      <div className='services-container'>
        {
          SERVICES.map((item, index) => {
            return (
              <div className='services-item' key={index}>
                <div className='services-img-container'>
                  <img className='services-img' alt={item.service} src={item.img} />
                  <div className='services-overlay'>
                    <p>{item.description || 'Professional development services tailored to your needs'}</p>
                  </div>
                </div>
                <h5>{item.service}</h5>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}