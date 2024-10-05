import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import user from "../../assets/images/logo.png";

const ContactInfo = () => {
  return (
    <div className="contact-hero__info">
      <img src={user} alt="User" className="contact-hero__image" />
      <>
      <h2>Akbarov Akbar</h2>
      <p>Salom!</p>
      </>
      <p>
        <FaPhoneAlt /> Телефон: (+996) 507 42-90-90
      </p>
      <p>
        <MdEmail /> Email: admin@gmail.com
      </p>
    </div>
  );
};

export default ContactInfo;
