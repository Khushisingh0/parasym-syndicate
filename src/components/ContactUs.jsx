import styles from "../style/contactUs.module.css";
import NetworkBackground from "./NetworkBackground";

export default function ContactUs() {
  return (
    <section id="contact" className={styles.wrapper}>
<NetworkBackground/>
      {/* CIRCUIT BACKGROUND */}
     

      <div className={styles.container}>
        <div className={styles.card}>

          <h1 className={styles.heading}>Contact Us</h1>
          <p className={styles.subheading}>
            Engage with Parasym. Strategic intelligence begins with a conversation.
          </p>

          <form className={styles.form}>

            <div className={styles.row}>
              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Company Name" />
            </div>

            <div className={styles.row}>
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" />
            </div>

            <select required>
              <option value="">Select Service</option>
              <option>Cybersecurity assessments</option>
              <option> Vulnerability assessment & penetration testing</option>
              <option>Security architecture review</option>
              <option>Incident readiness & response support</option>
              <option>Threat intelligence & risk analysis</option>
              <option> Hybrid cyber physical risk advisory</option>
            </select>

            <textarea
              rows="5"
              placeholder="Briefly describe your requirement..."
            ></textarea>

            <button type="submit">Submit Inquiry</button>

          </form>

        </div>
      </div>
    </section>
  );
}
