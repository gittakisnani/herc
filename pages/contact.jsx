import React, { useState } from 'react'
import ContactLabel from '../components/ContactLabel'
import Container from '../components/Container'
import CoverSection from '../components/CoverSection'
import HeadMeta from '../components/HeadMeta'
import ContactUs from '../public/assets/images/ContactUs.webp'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [missing, setMissing] = useState([])

    const handleChange = e => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if([formData.name, formData.email, formData.message].every(Boolean)) return alert('Submitted');
        setMissing(Object.keys(formData).filter(key => !Boolean(formData[key])))

    } 
  return (
    <>
        <HeadMeta title='Contact' desc='Contact page' />
        <main>
        <CoverSection height={400} src={ContactUs} btn={false} primaryText='Contact us' />
        <Container className='mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 lg:my-20'>
            <div className='flex flex-col gap-10 lg:gap-14'>
            <div style={{ fontFamily: 'DM Sans'}} className='flex flex-col gap-1 text-lg'>
                <h4 className='text-xl lg:text-3xl mb-2 font-medium'>
                Headquarters
                </h4>
                <p>The Mina Studio</p>
                <p>8241 Us 41, </p>
                <p>Monteagle, </p>
                <p>TN, 37356</p>
            </div>
            <div style={{ fontFamily: 'DM Sans'}} className='flex flex-col gap-1 text-lg'>
                <h4 className='text-xl lg:text-3xl mb-2 font-medium'>
                Collaborations
                </h4>
                <p>Reach out to collaborate at</p>
                <p>collab@mina.com</p>
            </div>
            </div>
            <div>
                <h4 className='text-xl lg:text-3xl mb-2 font-medium'>
                Inquiries
                </h4>
                <form className='w-full flex flex-col gap-2'>
                    <ContactLabel value={formData.name} onChange={handleChange} missed={missing.includes('name')} name='name' id='name' placeholder='Your name' required label='Name' />
                    <ContactLabel value={formData.lastName} onChange={handleChange} name='lastName' id='lastName' placeholder='Last name' label='Last Name' />
                    <ContactLabel value={formData.email} onChange={handleChange} missed={missing.includes('email')} name='email' id='email' placeholder='Your email' required label='Email' type='email' />
                    <ContactLabel value={formData.message} textArea onChange={handleChange} missed={missing.includes('message')} name='message' id='message' placeholder='Your Message' required label='Message' />
                    <button onClick={handleSubmit} className='w-fit p-4 px-10 bg-gray-50 border-2 border-purple-900 transitions hover:bg-purple-900 hover:text-gray-50 text-purple-900 font-medium mt-4'>
                        Submit
                     </button>   
                </form>
            </div>
        </Container>
        </main>
    </>
  )
}

export default Contact