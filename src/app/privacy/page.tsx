import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = { title: "Privacy Policy | IIA Telangana Chapter" };

const h2Style: React.CSSProperties = { fontSize: "1.05rem", fontWeight: 700, color: "#c9a227", margin: "2rem 0 0.6rem" };
const p: React.CSSProperties = { fontSize: "0.92rem", lineHeight: 1.85, color: "rgba(240,237,230,0.75)", margin: "0 0 0.85rem" };

export default function PrivacyPage() {
  return (
    <div style={{ background: "#0f2060", minHeight: "100vh", color: "#f0ede6" }}>
      <Navbar />
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "8rem 1.75rem 5rem" }}>
        <div style={{ marginBottom: "3rem", borderBottom: "1px solid rgba(201,162,39,0.2)", paddingBottom: "2rem" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a227", marginBottom: "0.75rem" }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, margin: 0 }}>Privacy Policy</h1>
          <p style={{ ...p, marginTop: "1rem", marginBottom: 0 }}>Last updated: June 2026</p>
        </div>

        <h2 style={h2Style}>Introduction</h2>
        <p style={p}>This Privacy Policy describes how <strong style={{ color: "#f0ede6" }}>THE INDIAN INSTITUTE OF ARCHITECTS, TELANGANA CHAPTER</strong> and its affiliates (collectively "we, our, us") collect, use, share, protect or otherwise process your information/personal data through our website <strong style={{ color: "#c9a227" }}>https://iiatchapter.netlify.app</strong> (hereinafter referred to as Platform).</p>
        <p style={p}>Please note that you may be able to browse certain sections of the Platform without registering with us. We do not offer any product/service under this Platform outside India and your personal data will primarily be stored and processed in India. By visiting this Platform, providing your information or availing any product/service offered on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and conditions, and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy. If you do not agree please do not use or access our Platform.</p>

        <h2 style={h2Style}>Collection</h2>
        <p style={p}>We collect your personal data when you use our Platform, services or otherwise interact with us during the course of our relationship and related information provided from time to time. Some of the information that we may collect includes but is not limited to personal data/information provided to us during sign-up/registering or using our Platform such as name, date of birth, address, telephone/mobile number, email ID and/or any such information shared as proof of identity or address.</p>
        <p style={p}>Some of the sensitive personal data may be collected with your consent, such as your bank account or credit or debit card or other payment instrument information. You always have the option to not provide information, by choosing not to use a particular service or feature on the Platform. We may track your behaviour, preferences, and other information that you choose to provide on our Platform.</p>
        <p style={p}>If you receive an email or a call from a person/association claiming to be THE INDIAN INSTITUTE OF ARCHITECTS seeking any personal data like debit/credit card PIN, net-banking or mobile banking password, we request you to never provide such information. If you have already revealed such information, report it immediately to an appropriate law enforcement agency.</p>

        <h2 style={h2Style}>Usage</h2>
        <p style={p}>We use personal data to provide the services you request. To the extent we use your personal data to market to you, we will provide you the ability to opt-out of such uses. We use your personal data to assist in handling and fulfilling orders; enhancing customer experience; to resolve disputes; troubleshoot problems; inform you about online and offline offers, products, services, and updates; customise your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; conduct marketing research, analysis and surveys.</p>

        <h2 style={h2Style}>Sharing</h2>
        <p style={p}>We may share your personal data internally within our group entities, our other corporate entities, and affiliates to provide you access to the services and products offered by them. We may disclose personal data to third parties such as business partners, third party service providers, prepaid payment instrument issuers, and other payment options opted by you.</p>
        <p style={p}>These disclosures may be required for us to provide you access to our services and products, to comply with our legal obligations, to enforce our user agreement, to facilitate our marketing and advertising activities, to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our services. We may disclose personal and sensitive personal data to government agencies or other authorised law enforcement agencies if required to do so by law.</p>

        <h2 style={h2Style}>Security Precautions</h2>
        <p style={p}>To protect your personal data from unauthorised access or disclosure, loss or misuse we adopt reasonable security practices and procedures. Once your information is in our possession or whenever you access your account information, we adhere to our security guidelines to protect it against unauthorised access and offer the use of a secure server. However, the transmission of information is not completely secure for reasons beyond our control. By using the Platform, the users accept the security implications of data transmission over the internet and the World Wide Web which cannot always be guaranteed as completely secure, and therefore, there would always remain certain inherent risks regarding use of the Platform.</p>

        <h2 style={h2Style}>Data Deletion and Retention</h2>
        <p style={p}>You may write to us at the contact information provided below to assist you with data deletion requests. We may in the event of any pending grievance, claims, or any other services refuse or delay deletion. We retain your personal data information for a period no longer than is required for the purpose for which it was collected or as required under any applicable law. However, we may retain data related to you if we believe it may be necessary to prevent fraud or future abuse or for other legitimate purposes. We may continue to retain your data in anonymised form for analytical and research purposes.</p>

        <h2 style={h2Style}>Your Rights</h2>
        <p style={p}>You may access, rectify, and update your personal data directly through the functionalities provided on the Platform.</p>

        <h2 style={h2Style}>Consent</h2>
        <p style={p}>By visiting our Platform or by providing your information, you consent to the collection, use, storage, disclosure and otherwise processing of your information on the Platform in accordance with this Privacy Policy. You have an option to withdraw your consent that you have already provided by writing to the Grievance Officer at the contact information provided below. Please mention "Withdrawal of consent for processing personal data" in your subject line. However, please note that your withdrawal of consent will not be retrospective and will be in accordance with the Terms of Use, this Privacy Policy, and applicable laws.</p>

        <h2 style={h2Style}>Changes to this Privacy Policy</h2>
        <p style={p}>Please check our Privacy Policy periodically for changes. We may update this Privacy Policy to reflect changes to our information practices. We may alert/notify you about the significant changes to the Privacy Policy, in the manner as may be required under applicable laws.</p>

        <h2 style={h2Style}>Grievance Officer</h2>
        <div style={{ background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.2)", borderRadius: "0.875rem", padding: "1.5rem 1.75rem", marginTop: "0.5rem" }}>
          <p style={{ ...p, margin: "0 0 0.4rem", color: "#f0ede6", fontWeight: 600 }}>Ar. Narasimham V V L</p>
          <p style={{ ...p, margin: "0 0 0.4rem" }}>Chairman, IIA Telangana Chapter</p>
          <p style={{ ...p, margin: "0 0 0.4rem" }}>802C Al Karim Trade Centre, MG Road, Ranigunj, Secunderabad, Telangana 500003</p>
          <p style={{ ...p, margin: 0 }}>Phone: <a href="tel:+919848046148" style={{ color: "#c9a227" }}>+91 9848046148</a> &nbsp;·&nbsp; Monday – Friday, 9:00 AM – 6:00 PM</p>
        </div>

        <div style={{ borderTop: "1px solid rgba(201,162,39,0.15)", paddingTop: "2rem", marginTop: "2.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/terms" style={{ fontSize: "0.85rem", color: "#c9a227", textDecoration: "none" }}>Terms &amp; Conditions →</Link>
          <Link href="/refund" style={{ fontSize: "0.85rem", color: "#c9a227", textDecoration: "none" }}>Refund Policy →</Link>
          <Link href="/" style={{ fontSize: "0.85rem", color: "rgba(240,237,230,0.5)", textDecoration: "none" }}>← Back to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
