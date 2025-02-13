import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [vazio, SetVazio] = useState(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_i219ik8";
    const templateId = "template_weqdxpd";
    const publicKey = "mxABhMe0zjagVABMe";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "rahul8474@gmail.com",
      message: message,
    };

    // Send the email using EmailJS
    if (!(name === "" || email === "" || message === "")) {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    } else {
      SetVazio(true);
      setTimeout(SetarVazioTrue, 3000);
    }
  };

  function SetarVazioTrue() {
    SetVazio(false);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>&lt;ContactUS/&gt;</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* {/* <input
            type="text"
            className={styles.form__field}
            placeholder="Seu nome"
            required=""
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="name" className={styles.form__label}>
            Nome
          </label>
          <input
            type="email"
            className={styles.form__field}
            placeholder="Email"
            required=""
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="email" className={styles.form__label}>
            Nome
          </label> 
        */}

        <div className={styles["form__group"]}>
          <input
            type="input"
            className={styles["form__field"]}
            placeholder=""
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="name" className={styles["form__label"]}>
            Name
          </label>
        </div>
        <div className={styles["form__group"]}>
          <input
            type="email"
            className={styles["form__field"]}
            placeholder=""
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="name" className={styles["form__label"]}>
            Email
          </label>
        </div>
        <div className={styles["form__group"]}>
          <textarea
            type="text"
            className={styles["form__field"]}
            placeholder=""
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <label for="message" data="message" className={styles["form__label"]}>
            Message
          </label>
        </div>
        {!vazio ? "" : "Erro, tente novamente"}
        <button type="submit" class={styles["button"]}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
