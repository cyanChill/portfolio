import { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

import styles from "../styles/Contact.module.css";
import { customToast } from "../utils/customToast";
import FancyInput from "../components/FormElements/FancyInput";
import FormButton from "../components/FormElements/FormButton";
import SEO from "../components/Optimizations/SEO";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const DEFAULT_CONTACT_FORM = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(DEFAULT_CONTACT_FORM);

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* Note: This utilizes Netlify's form feature */
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...contactInfo }),
    })
      .then((res) => {
        customToast("success", "Successfully submited form.");
        setContactInfo(DEFAULT_CONTACT_FORM);
      })
      .catch((err) => {
        customToast("error", err.message);
      });
  };

  return (
    <>
      <SEO
        pageName="Contact"
        description="Here's where you can contact and find more about me."
      />

      <div className={styles.wrapper}>
        <h1 className="glitch-v2" data-val="Contact">
          <span>Contact</span>
        </h1>
        <p className={styles.msg}>
          I&apos;m currently looking for a role as a full-stack developer. If
          you have any questions, an offer, or want to chat, send an email or
          message and I&apos;ll get back to you as soon as I can.
        </p>

        <div className={styles.actions}>
          <SocialLinks className="" />

          <form onSubmit={handleSubmit} className={styles.form}>
            <FancyInput
              type="text"
              labelText="Name"
              required
              value={contactInfo.name}
              onChange={(e) =>
                setContactInfo((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <FancyInput
              type="email"
              labelText="Email"
              required
              value={contactInfo.email}
              onChange={(e) =>
                setContactInfo((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <FancyInput
              type="text"
              labelText="Message"
              required
              value={contactInfo.message}
              onChange={(e) =>
                setContactInfo((prev) => ({ ...prev, message: e.target.value }))
              }
            />

            <FormButton type="submit" className={styles.submissionBtn}>
              <span>Send</span>
            </FormButton>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

const SocialLinks = ({ className }) => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("anthonyliang9@gmail.com");
  };

  return (
    <div className={`${styles.socialLinks} ${className}`}>
      <a href="https://github.com/cyanChill" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/anthonyliang9/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>

      <a
        href="mailto:anthonyliang9@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Email Me"
        onClick={copyEmailToClipboard}
      >
        <AiOutlineMail />
      </a>
    </div>
  );
};
