import ContactUsForm from '@/components/pages/contactus/ContactUsForm'
import Hero from '@/components/pages/contactus/Hero'
import HowToReachUs from '@/components/pages/contactus/HowToReachUs'
import React from 'react'

const ContactUsPage = () => {
  return (
    <section>
      <Hero />
      <HowToReachUs />
      <ContactUsForm />
    </section>
  )
}

export default ContactUsPage
