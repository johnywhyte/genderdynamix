import ContactForm from '@/components/contact-us/ContactForm'
import Header from '@/components/layouts/Header'
import React from 'react'

function Contact() {
  return (
    <div>
      <Header imgUrl={"/images/header/h3.png"} title={"Contact Us"} desc={"LET’S HEAR FROM YOU"}></Header>
      <ContactForm />
    </div>
  )
}

export default Contact