import React, { useState } from "react";
import axios from "axios";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(""); 

    const data = {
      name,
      message,
    };

    const response = await axios.post("https://api.39ortomekteb.info/api/contact/create", data);
    
    response.data?.success ? handleSuccess() : handleFailure();
  };

  const handleSuccess = () => {
    setStatus("Successfully created contact!");
    clearForm();
  };

  const handleFailure = () => {
    setStatus("Failed to create contact.");
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "996507429090";
    const whatsappMessage = encodeURIComponent(
      `Имя: ${name}\nСообщение: ${message}`
    );

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    clearForm();
    setStatus("Сообщение отправлено через WhatsApp!");
  };

  const clearForm = () => {
    setName("");
    setMessage("");
  };

  return (
    <div className="contact-hero__form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Сообщение</label>
          <textarea
            id="message"
            name="message"
            placeholder="Ваше сообщение"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-btns">
          <button type="submit" disabled={loading}>
            {loading ? "Отправка..." : "Добавить contact"}
          </button>
          <button
            type="button"
            onClick={handleWhatsAppSubmit}
            disabled={loading}
          >
            {loading ? "Отправка..." : "Отправить доверенность"}
          </button>
        </div>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};
