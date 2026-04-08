import { useEffect, useRef, useState } from "react";
import styles from "../style/contactUs.module.css";
import NetworkBackground from "../components/Shared/NetworkBackground";
import BackHomeButton from "../components/Shared/BackHomeButton";

const SERVICE_OPTIONS = [
    "Cybersecurity services",
    "Artificial Intelligence services",
    "CyberCrime Investment & Digital Forensics",
    "CyberSecurity & Artificial Intelligence Training",
    "Legal Support Services",
    "Strategic Communications & Advisory Services",
    "Geopolitical Intelligence & Risk Analysis",
];

function ServiceSelect({ name = "service" }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const wrapRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        const onDocMouseDown = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", onDocMouseDown);
        return () => document.removeEventListener("mousedown", onDocMouseDown);
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <div className={styles.selectWrap} ref={wrapRef}>
            <input type="hidden" name={name} value={value} required />
            <button
                type="button"
                className={styles.selectTrigger}
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
            >
                <span className={value ? undefined : styles.selectTriggerPlaceholder}>
                    {value || "Select Service"}
                </span>
                <span className={styles.selectChevron} aria-hidden />
            </button>
            {open && (
                <ul className={styles.selectMenu} role="listbox">
                    {SERVICE_OPTIONS.map((label) => (
                        <li
                            key={label}
                            className={styles.selectOption}
                            role="option"
                            aria-selected={value === label}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                                setValue(label);
                                setOpen(false);
                            }}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

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

                        <ServiceSelect name="service" />

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
