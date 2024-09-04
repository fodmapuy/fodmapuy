import React from "react";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="container mx-auto py-8 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
