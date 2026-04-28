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

const TermsOfService = () => {
  const { t, i18n } = useTranslation();

  const englishContent = (
    <>
      <h1 className="text-brand-black text-4xl md:text-6xl font-display font-medium tracking-tighter mb-4">Terms of Service</h1>
      <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-black/30 mb-20 italic">Last updated: 2026-04-28</p>
      
      <div className="prose prose-sm md:prose-base max-w-none 
        prose-h2:font-display prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:tracking-tight prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-brand-black
        prose-p:text-brand-black/70 prose-p:leading-relaxed prose-p:mb-6
        prose-ul:text-brand-black/70 prose-ul:mb-8 prose-li:mb-2
        prose-strong:text-brand-black prose-strong:font-bold">
        
        <p>
          These Terms of Service ("Terms") govern your access to and use of the websites, applications, and services provided by Step Up Barbershop ("Step Up Barbershop", "we", "us", or "our"). By creating an account or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the Service you confirm that you have read, understood, and agree to these Terms and our Privacy Policy. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization, and "you" refers to both you and the organization.</p>

        <h2>2. Description of Service</h2>
        <p>Step Up Barbershop provides a software-as-a-service platform for barbershops, including online booking, calendar management, membership and subscription management, point-of-sale (POS), client management, payouts and commissions, recruitment workflows, and related tools. Features may be added, modified, or removed at our discretion.</p>

        <h2>3. Eligibility</h2>
        <p>You must be at least 18 years old (or the age of majority in your jurisdiction) and have the legal capacity to enter into a binding contract to use the Service. By using the Service, you represent and warrant that you meet these requirements.</p>

        <h2>4. Account Registration and Security</h2>
        <p>You must provide accurate, current, and complete information when creating an account and keep it up to date. You are responsible for safeguarding your password and for any activity that occurs under your account. You must notify us immediately at support@stepupbarbers.com if you suspect any unauthorized access. We are not liable for losses caused by unauthorized use of your account.</p>

        <h2>5. User Roles</h2>
        <p>The Service supports multiple roles, each with distinct rights and obligations:</p>
        <ul>
          <li><strong>Administrator:</strong> full access to franchise-wide configuration, financials, and user management.</li>
          <li><strong>Manager:</strong> management of one or more shop locations, including staff, schedules, and reporting.</li>
          <li><strong>Barber:</strong> management of personal calendar, services, members, payouts, and bio.</li>
          <li><strong>Cashier:</strong> operation of the POS terminal at an assigned location.</li>
          <li><strong>Client / Member:</strong> booking appointments, managing subscriptions, and viewing personal history.</li>
        </ul>
        <p>You agree to use the Service only within the permissions granted by your role.</p>

        <h2>6. Membership Plans and Subscriptions</h2>
        <p>We offer recurring membership plans that grant a defined number of service slots per billing period. Unless explicitly stated otherwise in your plan, unused slots do not roll over to the next period. Plans renew automatically at the end of each billing period until canceled. You may cancel at any time from your billing settings; cancellations take effect at the end of the current billing period.</p>

        <h2>7. Payments, Billing, and Refunds</h2>
        <p>All payments are processed by Stripe. By providing payment information, you authorize us (and Stripe) to charge the applicable fees, taxes, and any other amounts due. Subscription fees are billed in advance and are generally non-refundable. Refunds are not provided for service slots already consumed, for partial billing periods after cancellation, or where prohibited by applicable law. If you dispute a charge, contact us first at support@stepupbarbers.com so we can attempt to resolve the issue before initiating a chargeback.</p>

        <h2>8. Bookings, Cancellations, and No-Shows</h2>
        <p>Booking, cancellation, and no-show policies (including any associated fees) are set by the individual shop or barber and shown to you at the time of booking. You agree to honor those policies. Repeated no-shows or late cancellations may result in suspension or termination of your account at our discretion.</p>

        <h2>9. Acceptable Use</h2>
        <p>You agree NOT to:</p>
        <ul>
          <li>Use the Service for any unlawful, fraudulent, or harmful purpose.</li>
          <li>Attempt to access accounts or data that are not yours, or to bypass security measures.</li>
          <li>Reverse engineer, scrape, or interfere with the Service or its underlying infrastructure.</li>
          <li>Upload viruses, malware, or other harmful code.</li>
          <li>Post content that is defamatory, obscene, harassing, infringing, or otherwise objectionable.</li>
          <li>Use the Service to send spam or unsolicited communications.</li>
          <li>Resell, sublicense, or otherwise exploit the Service without our written permission.</li>
        </ul>

        <h2>10. User Content</h2>
        <p>You retain ownership of content you submit to the Service (bios, photos, reviews, notes, messages). By submitting content, you grant Step Up Barbershop a worldwide, non-exclusive, royalty-free license to host, store, reproduce, modify, display, and distribute that content as needed to operate and promote the Service. You are solely responsible for ensuring that your content does not infringe any third party's rights.</p>

        <h2>11. Intellectual Property</h2>
        <p>The Service, including software, logos, designs, text, graphics, and the Step Up Barbershop name and brand, is owned by Step Up Barbershop or its licensors and is protected by intellectual property laws. Except for the limited rights expressly granted in these Terms, no rights are transferred to you.</p>

        <h2>12. Third-Party Services</h2>
        <p>The Service integrates with third-party services such as Google Calendar, Stripe, Twilio, Resend, and others. Your use of those services is governed by their own terms and privacy policies. We are not responsible for the acts or omissions of third-party providers.</p>

        <h2>13. Disclaimers</h2>
        <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant that the Service will be uninterrupted, error-free, secure, or that any data will be accurate, complete, or preserved.</p>

        <h2>14. Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL STEP UP BARBERSHOP, ITS AFFILIATES, OR THEIR OFFICERS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE. OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM ARISING OUT OF THESE TERMS OR THE SERVICE WILL NOT EXCEED THE GREATER OF (A) THE FEES YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS (US $100).</p>

        <h2>15. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless Step Up Barbershop and its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorney's fees) arising out of or in any way connected with (a) your access to or use of the Service, (b) your violation of these Terms, or (c) your violation of any third-party right.</p>

        <h2>16. Termination</h2>
        <p>You may terminate your account at any time by contacting us at support@stepupbarbers.com or via in-app account deletion. We may suspend or terminate your access immediately, with or without notice, if we believe you have violated these Terms or applicable law, or if termination is necessary to protect the Service or other users. Sections that by their nature should survive termination (including ownership, disclaimers, limitation of liability, indemnification, and governing law) will survive.</p>

        <h2>17. Governing Law and Dispute Resolution</h2>
        <p>These Terms are governed by the laws of the State of New Jersey, United States, without regard to conflict-of-law principles. You agree that any dispute arising out of or relating to these Terms or the Service will be brought exclusively in the state or federal courts located in Newark, Essex County, New Jersey, and you consent to personal jurisdiction in those courts. The parties may, by mutual written agreement, submit any dispute to binding arbitration in Newark, NJ under the Commercial Arbitration Rules of the American Arbitration Association in lieu of litigation.</p>

        <h2>18. Changes to These Terms</h2>
        <p>We may modify these Terms from time to time. When we make material changes, we will notify you by email and/or a banner inside the Service at least 14 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the revised Terms.</p>

        <h2>19. Contact</h2>
        <p>Questions about these Terms should be sent to:</p>
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

export default TermsOfService;
