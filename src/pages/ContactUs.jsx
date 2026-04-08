import styles from "../style/contactUs.module.css";
import NetworkBackground from "../components/Shared/NetworkBackground";
import BackHomeButton from "../components/Shared/BackHomeButton";

export default function ContactUs() {
    return (
        <section id="contact" className={styles.wrapper}>
            <NetworkBackground />
            <BackHomeButton />


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
                            <option>Cybersecurity services</option>
                            <option> Artificial Intelligence services</option>
                            <option>CyberCrime Investment & Digital Forensics</option>
                            <option>CyberSecurity & Artificial Intelligence Training</option>
                            <option>Legal Support Services</option>
                            <option>Strategic Communications & Advisory Services</option>
                            <option>Geopolitical Intelligence & Risk Analysis</option>
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
