import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const LogoMark = ({ className }: { className?: string }) => (
  <img 
    src="https://mckqwxyhemyrezwgxmai.supabase.co/storage/v1/object/public/barber-photos/site/logo-1775595727556.png" 
    alt="Step Up Logo" 
    className={cn("w-10 h-10 object-contain invert", className)}
    referrerPolicy="no-referrer"
  />
);

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Full English Content provided by the user
  const englishContent = (
    <>
      <h1 className="text-brand-black text-4xl md:text-6xl font-display font-medium tracking-tighter mb-4">Privacy Policy</h1>
      <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-black/30 mb-20 italic">Last updated: 2026-04-28</p>
      
      <div className="prose prose-sm md:prose-base max-w-none 
        prose-h2:font-display prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:tracking-tight prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-brand-black
        prose-p:text-brand-black/70 prose-p:leading-relaxed prose-p:mb-6
        prose-ul:text-brand-black/70 prose-ul:mb-8 prose-li:mb-2
        prose-strong:text-brand-black prose-strong:font-bold">
        
        <p>
          This Privacy Policy explains how Step Up Barbershop ("Step Up Barbershop", "we", "us", or "our") collects, uses, stores, shares, and protects information about you when you visit our websites, use our mobile and web applications, or otherwise interact with our services (collectively, the "Service"). By using the Service, you agree to the practices described in this Policy.
        </p>
        <p>
          Step Up Barbershop operates from the United States. Wherever you are located, by using the Service you consent to the processing of your information as described here.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following categories of information:</p>
        <ul>
          <li><strong>Account information:</strong> full name, email address, phone number, password (stored only as a salted hash), language preference, and role (client, member, barber, manager, cashier, or administrator).</li>
          <li><strong>Profile information:</strong> for barbers, this includes biography, profile and cover photos, services offered, schedule, skills, and documents; for clients and members, this includes appointment history, service preferences, notes, and membership status.</li>
          <li><strong>Booking and transactional data:</strong> appointments, services purchased, slot usage, no-shows, cancellations, payouts, tips, and commissions.</li>
          <li><strong>Payment information:</strong> card and bank details are collected and processed directly by our payment processor (Stripe). We do not store full card numbers on our servers; we only retain limited identifiers such as the last four digits, card brand, and Stripe customer/subscription IDs needed to operate billing.</li>
          <li><strong>Communications:</strong> messages, support requests, WhatsApp/SMS/email notifications you receive or reply to.</li>
          <li><strong>Device and usage data:</strong> IP address, browser type, operating system, device identifiers, pages visited, referring URLs, and timestamps. This data is collected automatically through standard server logs and analytics tools.</li>
          <li><strong>Cookies and similar technologies:</strong> see Section 11 below.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide, operate, and maintain the Service, including authenticating users, syncing calendars, processing bookings, and managing memberships.</li>
          <li>Process payments, refunds, payouts, and commissions through Stripe and related providers.</li>
          <li>Send transactional notifications (booking confirmations, reminders, cancellations, payout notices, password resets) via email, SMS, and WhatsApp.</li>
          <li>Detect, investigate, and prevent fraud, abuse, and security incidents.</li>
          <li>Comply with legal obligations, including tax, accounting, and consumer protection laws.</li>
          <li>Improve the Service, debug issues, and develop new features.</li>
          <li>With your consent, send marketing communications. You can opt out at any time.</li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>We do not sell your personal information. We share information only as needed to operate the Service, including with:</p>
        <ul>
          <li>Service providers acting on our behalf, such as Stripe (payments), Twilio (SMS/WhatsApp), Resend (email), Google (Calendar APIs and authentication), and our cloud hosting and database providers.</li>
          <li>Other users of the Service when necessary to provide functionality (for example, a barber sees the name and contact info of clients booked with them; a client sees the name and bio of the barber they book).</li>
          <li>Professional advisors (lawyers, accountants, auditors) under confidentiality obligations.</li>
          <li>Authorities, courts, or other parties when we believe in good faith that disclosure is required by law or necessary to protect rights, safety, or property.</li>
          <li>A successor entity in connection with a merger, acquisition, financing, or sale of assets, in which case we will notify affected users.</li>
        </ul>

        <h2>4. Google User Data</h2>
        <p>When you connect a Google account to Step Up Barbershop, we request the minimum OAuth scopes required to deliver the feature you enabled:</p>
        <ul>
          <li>https://www.googleapis.com/auth/calendar.events — to read and create events on the calendar you select, so we can prevent double-booking and add confirmed appointments to your Google Calendar.</li>
          <li>https://www.googleapis.com/auth/userinfo.email — to identify which Google account you connected and display it in your account settings.</li>
        </ul>
        <p>
          Limited Use disclosure: Step Up Barbershop's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.
        </p>

        <p>We specifically commit that we do NOT:</p>
        <ul>
          <li>Use Google user data for advertising purposes.</li>
          <li>Sell or transfer Google user data to third parties.</li>
          <li>Use Google user data to train generalized or third-party machine learning models.</li>
          <li>Allow humans to read Google user data, except (a) with your explicit consent, (b) for security purposes such as investigating abuse, (c) to comply with applicable law, or (d) where the data has been aggregated and anonymized.</li>
        </ul>
        <p>You can revoke our access to your Google account at any time from your in-app Settings page or directly at https://myaccount.google.com/permissions. Once revoked, we stop accessing your Google data and delete stored OAuth tokens.</p>

        <h2>5. Data Retention</h2>
        <p>We retain personal information for as long as your account is active and for as long as needed to provide the Service. After account closure, we may retain certain information:</p>
        <ul>
          <li>Financial records (invoices, payouts, tax documents) for at least seven (7) years to comply with U.S. tax and accounting requirements.</li>
          <li>Booking and appointment history for as long as needed to resolve disputes or enforce agreements.</li>
          <li>Backups containing your data may persist for up to 90 days after deletion before being fully purged.</li>
        </ul>
        <p>You can request deletion of your account and personal data at any time by contacting support@stepupbarbers.com.</p>

        <h2>6. Data Security</h2>
        <p>We protect your information using industry-standard safeguards:</p>
        <ul>
          <li>All traffic is encrypted in transit using TLS 1.2 or higher.</li>
          <li>Passwords are stored as bcrypt hashes; we never store plaintext passwords.</li>
          <li>Database access is restricted by Row-Level Security (RLS) policies, ensuring users can only access data they are authorized to see.</li>
          <li>We follow the principle of least privilege for internal access and audit logs of administrative actions.</li>
          <li>Payment data is handled by Stripe, a PCI-DSS Level 1 certified processor.</li>
        </ul>
        <p>No system is perfectly secure. If we become aware of a security incident affecting your data, we will notify you and the appropriate authorities as required by law.</p>

        <h2>7. Your Rights</h2>
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Correct or update inaccurate information.</li>
          <li>Delete your account and personal information (subject to retention requirements above).</li>
          <li>Receive a portable copy of your data.</li>
          <li>Opt out of marketing communications at any time using the unsubscribe link in our emails or by contacting us.</li>
          <li>Revoke Google OAuth access from in-app Settings or https://myaccount.google.com/permissions.</li>
          <li>Lodge a complaint with a data protection authority.</li>
        </ul>
        <p>To exercise any of these rights, email support@stepupbarbers.com. We will respond within 30 days.</p>

        <h2>8. Children's Privacy</h2>
        <p>The Service is not directed to children under 13 years of age, and we do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us at support@stepupbarbers.com and we will promptly delete it.</p>

        <h2>9. International Users</h2>
        <p>Step Up Barbershop is operated from the United States, and our infrastructure is hosted with cloud providers in the European Union (eu-west-1) and the United States. By using the Service, you consent to the transfer, storage, and processing of your information in these jurisdictions, which may have data protection laws different from those in your country.</p>

        <h2>10. Cookies and Tracking Technologies</h2>
        <p>We use cookies, local storage, and similar technologies to authenticate users, remember preferences, measure performance, and understand how the Service is used. We may use third-party analytics and advertising pixels, including Google Tag Manager and the Meta Pixel, to measure marketing performance.</p>
        <p>You can control cookies through your browser settings and opt out of interest-based advertising at https://optout.aboutads.info or https://youradchoices.com.</p>

        <h2>11. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email and/or a banner inside the Service at least 14 days before the changes take effect. The "Last updated" date at the top of this page reflects the latest revision.</p>

        <h2>12. Contact Us</h2>
        <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact:</p>
        <p>
          Step Up Barbershop<br />
          Email: support@stepupbarbers.com<br />
          Website: https://www.stepupbarbers.com
        </p>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-brand-black font-sans selection:bg-brand-silver/20">
      {/* Simple Header - No border as requested */}
      <header className="py-12">
        <div className="max-w-[1350px] mx-auto px-6 md:px-12 flex flex-col items-center gap-2">
          <LogoMark className="w-12 h-12" />
          <div className="text-center">
            <span className="text-2xl font-display font-medium tracking-tighter leading-none block uppercase">Step Up</span>
            <span className="text-[6px] tracking-[0.6em] uppercase font-light opacity-60 block">BARBERSHOP</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 md:px-12 py-10 pb-32">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] font-bold text-brand-black/40 hover:text-brand-black transition-colors mb-16 group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {t('nav.back_to_home')}
        </Link>

        {englishContent}
      </main>

      <footer className="border-t border-brand-black/5 py-16">
        <div className="max-w-[1350px] mx-auto px-6 md:px-12 text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-brand-black/20 font-bold">
            Step Up © 2026 • Excellence as standard
          </span>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;

