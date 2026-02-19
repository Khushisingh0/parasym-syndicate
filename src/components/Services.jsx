import { useState,useEffect } from "react";
import styles from "../style/services.module.css";
import NetworkBackground from "./NetworkBackground";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Services() {
  const [active, setActive] = useState(null);
 useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="services" className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>Our Services</h1>
        <p className={styles.subTitle}>
          Integrated intelligence, security, and governance capabilities
          designed for complex risk environments.
        </p>
      </div>

    <div className={styles.cardGrid}>

  {/* LEFT SIDE (2) */}
  <ServiceCard
    title="Cybersecurity Services"
    animation="fade-right"
    onClick={() => setActive("cyber")}
  />

  <ServiceCard
    title="Artificial Intelligence Services"
    animation="fade-right"
    onClick={() => setActive("ai")}
  />

  {/* TOP CENTER (1) */}
  <ServiceCard
    title="Cybercrime Investigation & Digital Forensics"
    animation="fade-down"
    onClick={() => setActive("forensics")}
  />

  {/* BOTTOM CENTER (1) */}
  <ServiceCard
    title="Cybersecurity & Artificial Intelligence Training"
    animation="fade-up"
    onClick={() => setActive("training")}
  />

  {/* RIGHT SIDE (2) */}
  <ServiceCard
    title="Legal Support Services"
    animation="fade-left"
    onClick={() => setActive("legal")}
  />

  <ServiceCard
    title="Strategic Communications & Advisory Services"
    animation="fade-left"
    onClick={() => setActive("strategic")}
  />

</div>


      {active && (
        <div className={styles.overlay}>

          <NetworkBackground />

          <button
            className={styles.close}
            onClick={() => setActive(null)}
          >
            ✕
          </button>

          <div className={styles.page}>
            {active === "cyber" && <Cybersecurity />}
            {active === "ai" && <AI />}
            {active === "forensics" && <Forensics />}
            {active === "training" && <Training />}
            {active === "legal" && <Legal />}
            {active === "strategic" && <Strategic />}
          </div>

        </div>
      )}

    </section>
  );
}

/* ---------------- CARD ---------------- */
function ServiceCard({ title, onClick, animation }) {
  return (
    <div
      className={styles.card}
      onClick={onClick}
      data-aos={animation}
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h3>{title}</h3>
      <p>
        Explore full operational scope, intelligence integration,
        governance controls, and strategic outcomes.
      </p>
      <span>View Details →</span>
    </div>
  );
}


/* ---------------- SHARED ---------------- */
function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function Side({ title, children }) {
  return (
    <div className={styles.sideBox}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

/* ================= CYBERSECURITY ================= */
function Cybersecurity() {
  return (
    <>
      <h2>Cybersecurity Services</h2>
      <p className={styles.intro}>
        Parasym Syndicate provides advanced cybersecurity services designed for environments where failure carries strategic, financial, or national-level consequences.
        Our cybersecurity practice is not limited to technical controls or compliance checklists. It focuses on how systems are actually compromised, how defenders fail under pressure, and how organizations can build resilience
        against intelligent, adaptive adversaries.
        Cybersecurity services are delivered as an integrated component of the Parasym intelligence platform, ensuring that cyber risk is evaluated alongside financial, informational, behavioral, and geopolitical factors.
      </p>

      <Section title="Adversary Simulation and Red Teaming">
        <p>
          Parasym conducts controlled, authorization-based red team
          operations using a combination of human expertise and AI-assisted
          adversary modeling.

        </p>
        <p>These exercises simulate real attacker behavior across:
        </p>
        <ul>
          <li> Network and application layers</li>
          <li>Cloud and identity infrastructure</li>
          <li>AI and data systems</li>
          <li>Human and process vulnerabilities</li>

        </ul>
        <p>The objective is to identify realistic failure paths rather than
          theoretical vulnerabilities.</p>
      </Section>

      <Section title="Threat Detection and Cyber Intelligence">
        <p>Parasym provides continuous cyber threat intelligence focused on
          early indicators of compromise, emerging attacker tradecraft, and
          cross-domain threat convergence.</p>
        <p>this includes:</p>
        <ul>
          <li>Advanced threat actor monitoring</li>
          <li>Campaign and intrusion pattern analysis</li>
          <li>Correlation of cyber activity with geopolitical or financial signals
          </li>
          <li>Early warning of coordinated or state-linked activity
          </li>
        </ul>
      </Section>

      <Section title="Security Architecture and Resilience Assessment">
        <p>We assess the structural resilience of cybersecurity architectures
          rather than individual tools.</p>
        <p>this includes:</p>
        <p>Identity and access control design</p>
        <ul>
          <li>Zero-trust maturity evaluation</li>
          <li>Cloud and hybrid infrastructure risk</li>
          <li>Dependency and single-point-of-failure analysis</li>
        </ul>
        <p>Recommendations focus on reducing systemic fragility and blast
          radius.
        </p>
      </Section>
      <Section title="AI and Model Security">
        <p>Parasym evaluates the security and misuse risk of
          artificial intelligence systems. </p>
        <p>this includes:</p>
        <ul>
          <li>Prompt-injection and model manipulation testing</li>
          <li>Training data exposure and leakage analysis</li>
          <li>AI supply-chain risk assessment</li>
          <li>Abuse and dual-use scenario modeling</li>
        </ul>
        <p>AI systems are assessed as operational assets, not
          experimental tools.
        </p>
      </Section>
      <Section title="Incident Readiness and Crisis Support">
        <p>Parasym supports organizations before, during, and after
          high-impact cyber incidents.</p>
        <p>Services include:</p>
        <ul>
          <li>Incident readiness assessments</li>
          <li>Decision-support during live incidents</li>
          <li>Attribution and impact analysis</li>
          <li>Post-incident failure reconstruction and lessons
            learned</li>
        </ul>
        <p>The focus is on preserving decision clarity under
          pressure.</p>
      </Section>

      <Side title="Governance & Control">
        <p>All cybersecurity services operate under:</p>
        <ul>
          <li>Explicit authorization and scope
            definition</li>
          <li>Human oversight and accountability</li>
          <li>Evidence integrity and auditability</li>
          <li>Alignment with legal and regulatory requirements</li>
          <li>Build long-term cyber resilience</li>
        </ul>
        <p>Parasym does not offer uncontrolled or
          autonomous offensive cyber activity.</p>
      </Side>

      <Side title="Outcome">
        <p>Parasym cybersecurity services enable
          organizations to:</p>
        <ul>
          <li>Detect threats earlier</li>
          <li>Understand realistic attack paths</li>
          <li>Reduce systemic weaknesses</li>
          <li>Respond with clarity rather than panic</li>
          <li>Build long-term cyber resilience</li>
        </ul>
        <p>Cybersecurity is treated not as an IT
          function, but as a strategic stability
          discipline.
        </p>
      </Side>
    </>
  );
}

/* ================= AI ================= */
function AI() {
  return (
    <>
      <h2>Artificial Intelligence Services</h2>
      <p className={styles.intro}>
        Parasym Syndicate provides artificial intelligence services designed for high-risk, high-consequence environments where AI systems influence security, governance, finance, and public trust.
        Our AI services focus on responsible deployment, misuse prevention, system resilience, and decision integrity. AI is treated as an operational asset that must be governed, stress-tested, and continuously evaluated — not
        as an experimental or autonomous authority.
        AI services are integrated into the Parasym intelligence platform and operate under strict human oversight and authorization controls.
      </p>

      <Section title="AI Risk Assessment and Governance">
        <p>Parasym evaluates AI systems for operational, ethical, legal, and
          reputational risk.</p>
        <p>this includes:</p>
        <ul>
          <li>AI use-case and impact analysis</li>
          <li>Governance framework design</li>
          <li>Model accountability and oversight mechanisms</li>
          <li>Regulatory and compliance alignment</li>
          <li>Decision-authority boundary definition</li>
        </ul>
        <p>The objective is to ensure AI systems support judgment rather than
          replace it.
        </p>
      </Section>

      <Section title="AI Security and Abuse Prevention">
        <p>Parasym assesses how AI systems can be exploited, manipulated, or misused.</p>
        <p>Services include:</p>
        <ul>
          <li>Prompt-injection and model manipulation testing</li>
          <li>Data poisoning and training-set risk analysis</li>
          <li>Model extraction and leakage assessment</li>
          <li>Abuse and dual-use scenario modeling</li>
        </ul>
        <p>AI systems are evaluated as potential attack surfaces. </p>
      </Section>

      <Section title="AI Red Teaming and Stress Testing">
        <p>Using controlled adversary simulation, Parasym tests AI systems
          under realistic pressure</p>
        <p>This includes:</p>
        <ul>
          <li>Adversarial input simulation</li>
          <li>Decision degradation under uncertainty</li>
          <li>Bias amplification and feedback loop testing</li>
          <li>Failure-path discovery across AI-human interaction</li>
        </ul>
        <p>The goal is to expose how AI systems fail in real operational contexts.</p>
      </Section>

      <Section title="AI Integrity and Authenticity Services">

        <p>Parasym supports organizations in maintaining trust in AIgenerated and AI-mediated content.</p>
        <p>This includes:</p>
        <ul>
          <li>Detection of synthetic media and manipulated outputs</li>
          <li>AI content attribution and provenance analysis</li>
          <li>Integrity scoring for AI-assisted decisions</li>
          <li>Verification workflows for sensitive outputs</li>
        </ul>
      </Section>
      <Section title="AI Decision Support Integration">

        <p>Parasym integrates AI systems into executive and
          operational decision processes without eroding
          accountability.</p>

        <p>This includes:</p>
        <ul>
          <li>AI-assisted intelligence synthesis</li>
          <li>Decision confidence scoring</li>
          <li>Human-in-the-loop system design</li>
          <li>Escalation and override mechanisms</li>
          <li>AI outputs are contextualized, explained, and bounded.</li>
        </ul>
      </Section>

      <Side title="Deployment Principles">
        <p>Parasym AI services operate under the
          following principles:
        </p>
        <ul>
          <li>Human supervision at all decision points</li>
          <li>Clear separation between analysis and
            authority</li>
          <li>Transparent limitations and uncertainty
          </li>
          <li>Auditability and traceability of outputs
          </li>
          <li>Autonomous decision-making without
            oversight is explicitly avoided.</li>
        </ul>
      </Side>
      <Side title="Outcome">
        <p>
        </p>
        <ul>
          <li>Deploy AI responsibly and safely</li>
          <li>Reduce AI-driven security and
            reputational risk </li>
          <li>Understand and control AI failure modes</li>
          <li>Preserve trust, legitimacy, and
            accountability
          </li>
        </ul>
        <p>Use AI as a stabilizing force rather than a
          source of risk</p>
        <p>Artificial intelligence is treated as
          infrastructure, not novelty.
        </p>

      </Side>
    </>
  );
}

/* ================= FORENSICS ================= */
function Forensics() {
  return (
    <>
      <h2>Cybercrime Investigation and Digital Forensics</h2>

      <p>
        Parasym Syndicate provides advanced cybercrime investigation and digital forensics services for complex, high-impact cases involving financial crime,
        cyber intrusions, information manipulation, and cross-border digital activity.
        Our approach combines technical forensics, intelligence correlation, and legal-grade evidence handling to support investigations that require accuracy,
        discretion, and accountability.
        <br /><br />
        Cybercrime services are integrated with the Parasym intelligence platform, enabling investigators to analyze digital evidence alongside financial flows,
        behavioral signals, media authenticity, and geopolitical context.
      </p>

      <Section title="Device and Data Forensics">
        <ul>
          <li>Computers, mobile devices, and storage media</li>
          <li>File system and artifact analysis</li>
          <li>Deleted and hidden data recovery</li>
          <li>Timeline reconstruction</li>
          <li>Chain-of-custody and forensic soundness</li>
        </ul>
      </Section>

      <Section title="Media and Information Forensics">
        <ul>
          <li>Deepfake and synthetic media analysis</li>
          <li>Image, video, and document forensics</li>
          <li>Metadata and provenance examination</li>
          <li>Narrative and disinformation linkage</li>
        </ul>
      </Section>

      <Section title="Network and Account Investigation">
        <ul>
          <li>Email and messaging account analysis</li>
          <li>Social media and platform activity reconstruction</li>
          <li>Log and access pattern analysis</li>
          <li>Attribution and behavioral consistency checks</li>
        </ul>
      </Section>

      <Section title="Intelligence-Led Investigation">
        <ul>
          <li>Motive and intent analysis</li>
          <li>Actor capability and tradecraft</li>
          <li>Coordination across platforms</li>
          <li>Likely escalation or recurrence assessment</li>
        </ul>
      </Section>

      <Section title="Financial and Crypto Forensics">
        <ul>
          <li>Bank statement and transaction analysis</li>
          <li>Mule account detection</li>
          <li>Crypto wallet tracing and clustering</li>
          <li>Cross-platform fund flow reconstruction</li>
        </ul>
      </Section>

      <Section title="Reporting and Evidence Handling">
        <ul>
          <li>Structured forensic reports</li>
          <li>Visual timelines and correlation maps</li>
          <li>Financial and digital linkage diagrams</li>
          <li>Court- and compliance-ready documentation</li>
        </ul>
      </Section>

      <Side title="Investigation Scope">
        <ul>
          <li>Financial fraud and cyber-enabled scams</li>
          <li>Money laundering and mule account networks</li>
          <li>Crypto-related crimes</li>
          <li>Account compromise and impersonation</li>
          <li>Insider threats and data misuse</li>
        </ul>
      </Side>

      <Side title="Governance & Ethics">
        <ul>
          <li>Legal authorization and scope control</li>
          <li>Evidence integrity and auditability</li>
          <li>Human oversight at all stages</li>
          <li>Confidentiality and data protection</li>
        </ul>
      </Side>

      <Side title="Outcome">
        <ul>
          <li>Confident investigation of complex cybercrime</li>
          <li>Preserved evidentiary integrity</li>
          <li>Actionable intelligence-driven insight</li>
          <li>Support for prosecution or remediation</li>
        </ul>
      </Side>
    </>
  );
}

/* ================= TRAINING ================= */
function Training() {
  return (
    <>
      <h2>Cybersecurity and Artificial Intelligence Training</h2>

      <p>
        Parasym Syndicate provides advanced training programs in cybersecurity and artificial intelligence for professionals operating in high-risk, high-responsibility environments.
        Our training is designed to build operational understanding, not just theoretical knowledge. Programs focus on how attacks occur in reality, how AI systems fail under pressure, and how decision-makers should respond
        when technical, human, and strategic factors collide.
        <br /><br />
        Training is delivered by practitioners and intelligence specialists, and is directly informed by Parasym’s operational tools and investigative experience. Cybersecurity and Artificial Intelligence Training

      </p>

      <Section title="Cybersecurity Training">
        <p>Parasym cybersecurity training covers both defensive and adversarial
          perspectives.</p>
        <p>Core Areas</p>
        <ul>
          <li>Cyber threat landscape and attacker methodologies</li>
          <li>Network, cloud, and identity security fundamentals</li>
          <li>Incident response and breach management</li>
          <li>Red team and blue team interaction</li>
          <li>Security architecture and resilience design</li>
          <li>Cyber risk communication for leadership</li>
        </ul>
        <p>Training incorporates case studies, simulations, and controlled
          adversarial scenarios rather than purely technical labs</p>
      </Section>

      <Section title="Artificial Intelligence Training">
        <p>Parasym AI training focuses on the safe, responsible, and secure
          use of AI in operational environments.</p>
        <p>Core Areas</p>
        <ul>
          <li>AI system fundamentals and limitations</li>
          <li>AI security and misuse risks</li>
          <li>Deepfakes, synthetic media, and information integrity</li>
          <li>AI governance and accountability</li>
          <li>Human-in-the-loop system design</li>
          <li>Decision-support versus decision-automation</li>
        </ul>
        <p>Participants learn how AI systems can be manipulated, misunderstood, or overtrusted — and how to prevent this.</p>
      </Section>

      <Section title="Specialized Programs">
        <p>Parasym also delivers specialized training modules, including:</p>
        <ul>
          <li>AI red teaming and adversarial testing</li>
          <li>Cybercrime investigation fundamentals</li>
          <li>Financial crime and crypto intelligence awareness</li>
          <li>Public-sector and law-enforcement focused programs</li>
          <li>Executive and board-level briefings</li>
        </ul>
        <p>Programs are customized based on role, sector, and risk profile.</p>
      </Section>

      <Section title="Delivery Formats">
        <p>Training is available through:
        </p>
        <ul>
          <li>In-person workshops</li>
          <li>Closed-group bootcamps</li>
          <li>Executive briefings</li>
          <li>Scenario-based simulations</li>
          <li>Long-term capability engagements</li>
        </ul>
        <p>All programs can be adapted for enterprise, government,
          or academic environments.</p>
      </Section>

      <Section title="Training Philosophy">
        <p>Most training teaches tools and frameworks.</p>
        <p>Programs emphasize:</p>
        <ul>
          <li>Real-world attack and abuse scenarios</li>
          <li>Adversary thinking and tradecraft</li>
          <li>Decision-making under uncertainty</li>
          <li>Legal, ethical, and governance boundaries</li>
        </ul>
        <p>The objective is to produce professionals who can
          anticipate problems, not just respond to alerts.</p>
      </Section>

      <Side title="Governance and Ethics">
        <p>Parasym training emphasizes:
        </p>
        <ul>
          <li>Legal and ethical boundaries</li>
          <li>Responsible use of knowledge</li>
          <li>Clear separation between learning and misuse</li>
          <li>Professional accountability</li>
        </ul>
        <p>Training does not include uncontrolled or
          harmful instruction.</p>
      </Side>

      <Side title="Outcome">
        <p>Parasym training enables participants to:</p>
        <ul>
          <li>Better technical and strategic decisions</li>
          <li>Improved leadership risk communication</li>
          <li>Long-term organizational resilience</li>
        </ul>
      </Side>
    </>
  );
}


/* ================= LEGAL ================= */
function Legal() {
  return (
    <>
      <h2>Legal Support Services for Cybercrime and Criminal Practice</h2>

      <p>
        Parasym Syndicate provides specialized intelligence, forensic, and technical support services for cybercrime lawyers, criminal lawyers, and legal professionals handling complex digital, financial, and technology-enabled
        cases.
        Our role is not to replace legal counsel, but to strengthen legal strategy with accurate technical understanding, evidence integrity, and intelligence-led analysis.
        All services are delivered in support of lawful proceedings and under explicit client authorization.
      </p>

      <Section title="Cybercrime Legal Support">
        <p>Parasym assists lawyers handling cases involving:</p>
        <ul>
          <li>Cyber fraud and online scams</li>
          <li>Financial crime and money laundering</li>
          <li>Crypto-related offenses</li>
          <li>Data breaches and unauthorized access</li>
          <li>Digital impersonation and identity theft</li>
          <li>Online harassment, extortion, and cyber-enabled crime</li>
        </ul>
        <p>Support is designed to help legal teams understand what actually
          happened, how it can be proven, and where technical claims may be
          weak or overstated.</p>
      </Section>

      <Section title="Digital Forensics Support for Lawyers">
        <p>Parasym provides forensic analysis and expert assistance
          to support litigation, investigation, and defense.
          Services Include:</p>
        <ul>
          <li>Forensic review of digital evidence</li>
          <li>Validation of data authenticity and integrity</li>
          <li>Timeline reconstruction of digital events</li>
          <li>Detection of tampering, fabrication, or misinterpretation</li>
          <li>Review of opposing forensic reports</li>
        </ul>
        <p>All forensic work follows evidence integrity and
          documentation standards suitable for legal scrutiny.</p>
      </Section>

      <Section title="Financial and Crypto Evidence Analysis">
        <p>Parasym supports legal teams in cases involving financial complexity.
          This includes:</p>
        <ul>
          <li>Analysis of bank statements and transaction records</li>
          <li>Money trail reconstruction</li>
          <li>Mule account network identification</li>
          <li>Crypto wallet and blockchain analysis</li>
          <li>Financial linkage visualization for court presentation</li>
        </ul>
        <p>Outputs are structured to support legal arguments and evidentiary
          clarity</p>
      </Section>

      <Section title="Media, Deepfake, and Evidence Authenticity Review">
        <p>Parasym assists lawyers in assessing the authenticity of digital
          media submitted as evidence.</p>
        <p>This includes:</p>
        <ul>
          <li>Deepfake and synthetic media detection</li>
          <li>Image, video, and audio and document analysis</li>
          <li>Metadata and provenance examination</li>
          <li>Assessment of manipulated or misleading content</li>
        </ul>
        <p>These services are particularly relevant in defamation,
          cybercrime, and digital evidence disputes.
        </p>
      </Section>

      <Section title="Technical Advisory for Criminal and Cyber Lawyers">
        <p>Parasym acts as a technical and intelligence advisor to legal teams.</p>
        <p>This includes:</p>
        <ul>
          <li>Explaining complex technical issues in legally understandable terms</li>
          <li>Identifying gaps or weaknesses in technical allegations</li>
          <li>Supporting cross-examination preparation</li>
          <li>Advising on investigative scope and limitations</li>
          <li>Helping lawyers ask the right technical questions</li>
          <li>Expert opinion and litigation support</li>
        </ul>
        <p>Where appropriate and lawful, Parasym may provide:
        </p>
        <ul>
          <li>Technical opinion reports</li>
          <li>Independent analysis summaries</li>
          <li>Assistance in preparing court submissions</li>
          <li>Support in engaging certified expert witnesses</li>
        </ul>
        <p>Parasym does not provide legal opinions and does not replace licensed legal experts.</p>
      </Section>



      <Side title="Governance and Ethical Boundaries">
        <p>All legal support services operate under:</p>
        <ul>
          <li>Client authorization</li>
          <li>Confidentiality obligations</li>
          <li>Evidence integrity requirements</li>
          <li>Legal and ethical compliance</li>
        </ul>
        <p>Parasym does not engage in unauthorized
          access, evidence fabrication, or unlawful
          investigation.</p>
      </Side>

      <Side title="Outcome">
        <p>Parasym enables legal professionals to:</p>
        <ul>
          <li>Navigate complex cyber and digital
            evidence confidently</li>
          <li>Strengthen legal arguments with technical
            clarity</li>
          <li>Challenge weak or misleading technical
            claims</li>
          <li>Reduce reliance on assumptions or thirdparty narratives</li>
          <li>Represent clients effectively in
            technology-driven cases</li>
        </ul>
        <p>Legal services are treated as a support
          function to justice, not as an advocacy
          shortcut.</p>
      </Side>
    </>
  );
}

/* ================= STRATEGIC ================= */

function Strategic() {
  return (
    <>
      <h2>Strategic Communications & Advisory Services</h2>

      <p>
        The services are advisory in nature and operate strictly within
        legal, ethical, and governance boundaries. Parasym does not engage
        in covert influence operations, unlawful propaganda, or
        unauthorized psychological manipulation.
      </p>

      <Section title="Public Relations & Reputation Management">
        <p>Scope includes:</p>
        <ul>
          <li>Reputation and perception assessment</li>
          <li>Crisis communication planning</li>
          <li>Media and stakeholder alignment</li>
          <li>Long-term trust and credibility management</li>
        </ul>
      </Section>

      <Section title="Strategic Messaging Advisory">
        <p>
          High-level guidance to ensure clarity, coherence, and
          consistency across all public-facing communications.
        </p>
        <p>Advisory support includes:</p>
        <ul>
          <li>Message and narrative alignment</li>
          <li>Tone and values consistency</li>
          <li>Communication risk mitigation</li>
          <li>Cross-channel messaging coherence</li>
        </ul>
        <p>
          All advisory work follows governance and documentation
          standards suitable for institutional accountability.
        </p>
      </Section>

      <Section title="Political & Policy Advisory">
        <p>
          Research-driven advisory support for leaders, policymakers,
          and institutions navigating complex political and policy environments.
        </p>
        <p>Key components:</p>
        <ul>
          <li>Public sentiment and perception analysis</li>
          <li>Policy narrative and impact assessment</li>
          <li>Geopolitical and regulatory context evaluation</li>
          <li>Strategic decision-impact advisory</li>
        </ul>
        <p>
          This service supports informed leadership and institutional strategy,
          not electoral operations.
        </p>
      </Section>

      <Section title="Narrative & Information Environment Analysis">
        <p>
          In-depth analysis of public discourse, media ecosystems,
          and information flows to understand how narratives emerge,
          spread, and shape perception.
        </p>
        <p>Focus Areas:</p>
        <ul>
          <li>Media landscape and discourse mapping</li>
          <li>Narrative trend identification</li>
          <li>Risk and exposure awareness</li>
          <li>Strategic positioning and preparedness</li>
        </ul>
        <p>
          This service emphasizes awareness and strategic readiness
          rather than direct manipulation.
        </p>
      </Section>

      <Section title="Crisis & Sensitivity Management">
        <p>
          Advisory support during high-risk or sensitive periods involving
          reputational threats, misinformation, or erosion of public trust.
        </p>
        <p>Approach:</p>
        <ul>
          <li>Lawful and ethical response strategies</li>
          <li>Factual correction and clarification</li>
          <li>Stakeholder confidence preservation</li>
          <li>Institutional stability and continuity support</li>
        </ul>
      </Section>

      <Section title="Ethical Influence & Governance Frameworks">
        <p>
          Design and implementation of internal frameworks to ensure
          communication strategies align with legal, ethical,
          and governance standards.
        </p>
        <p>Designed for:</p>
        <ul>
          <li>Politically or socially sensitive environments</li>
          <li>Institutional communications governance</li>
          <li>Risk reduction and accountability</li>
          <li>Long-term credibility protection</li>
        </ul>
      </Section>
    </>
  );
}
