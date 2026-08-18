"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Lock,
  Eye,
  Cookie,
  UserCheck,
  Scale,
  Mail,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

import PageHero from "@/components/PageHero";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-alabaster min-h-screen">
      {/* Hero Header */}
      <PageHero
        title="Privacy Policy"
        description="Our commitment to safeguarding your privacy and personal data at Buildwise UAE."
        breadcrumbs={[{ name: "Privacy Policy" }]}
      />

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl border border-[#C5A880]/20 shadow-xl shadow-[#C5A880]/5 p-6 sm:p-10 lg:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Top decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-champagne-gold/40 via-champagne-gold to-champagne-gold/40" />

            {/* Last updated badge */}
            <div className="flex items-center gap-2 mb-8 text-xs font-semibold uppercase tracking-wider text-champagne-gold bg-champagne-gold/10 px-3 py-1.5 rounded-full w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Policy Document</span>
            </div>

            {/* Introduction */}
            <div className="prose prose-slate max-w-none space-y-4 font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
              <p>
                At <strong className="text-charcoal">Buildwise UAE</strong>, accessible from our official website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Buildwise UAE and how we use it.
              </p>
              <p>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              </p>
              <p>
                This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they share and/or is collected by the Buildwise UAE website. This policy is not applicable to any information collected offline or via channels other than this website.
              </p>
            </div>

            <hr className="my-10 border-neutral-200/60" />

            {/* Section 1: Consent */}
            <section className="mb-10">
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                  1
                </span>
                Consent
              </h2>
              <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section className="mb-10">
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                  2
                </span>
                Information We Collect
              </h2>
              <div className="space-y-4 font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                <p>
                  The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                </p>
                <p>
                  If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                </p>
                <p>
                  When you register for an Account or submit an inquiry, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                </p>
              </div>
            </section>

            {/* Section 3: How We Use Your Information */}
            <section className="mb-10">
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                  3
                </span>
                How We Use Your Information
              </h2>
              <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed mb-4">
                We use the information we collect in various ways, including to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-sm sm:text-base text-slate-grey">
                {[
                  "Provide, operate, and maintain our website",
                  "Improve, personalize, and expand our website",
                  "Understand and analyze how you use our website",
                  "Develop new products, services, features, and functionality",
                  "Communicate with you directly or through partners for customer service and marketing",
                  "Send you emails regarding your inquiries or services",
                  "Find and prevent fraudulent activities",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-alabaster/60 border border-neutral-200/50">
                    <CheckCircle2 className="w-4 h-4 text-champagne-gold flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 4: Log Files */}
            <section className="mb-10">
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                  4
                </span>
                Log Files
              </h2>
              <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                Buildwise UAE follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as a part of hosting services’ analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.
              </p>
            </section>

            {/* Section 5: Cookies and Web Beacons */}
            <section className="mb-10">
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                  5
                </span>
                Cookies and Web Beacons
              </h2>
              <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                Like any other website, Buildwise UAE uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.
              </p>
            </section>

            {/* Section 6: Third-Party Privacy Policies */}
            <section className="mb-10">
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                  6
                </span>
                Third-Party Privacy Policies
              </h2>
              <div className="space-y-4 font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                <p>
                  Buildwise UAE’s Privacy Policy does not apply to other advertisers or websites. Thus, we advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                </p>
                <p>
                  You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.
                </p>
              </div>
            </section>

            {/* Section 7: Children’s Information */}
            <section className="mb-10">
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                  7
                </span>
                Children’s Information
              </h2>
              <div className="space-y-4 font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                <p>
                  Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                </p>
                <p>
                  Buildwise UAE does not knowingly collect any Personal Identifiable Information from children under the age of 18. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                </p>
              </div>
            </section>

            {/* Section 8: GDPR Compliance */}
            <section className="mb-10 p-6 sm:p-8 rounded-xl bg-alabaster/80 border border-[#C5A880]/30 relative">
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-6 flex items-center gap-3">
                <Scale className="w-6 h-6 text-champagne-gold" />
                Privacy under General Data Protection Regulation (EU) 2016/679 (GDPR)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg text-charcoal font-medium mb-3">
                    Legal Basis for Processing Personal Data under GDPR
                  </h3>
                  <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed mb-3">
                    We may process Personal Data under the following conditions:
                  </p>
                  <ul className="space-y-2.5 font-sans text-sm sm:text-base text-slate-grey">
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-charcoal min-w-[140px] sm:min-w-[160px]">• Consent:</span>
                      <span>You have given your consent for processing Personal Data for one or more specific purposes.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-charcoal min-w-[140px] sm:min-w-[160px]">• Performance of a contract:</span>
                      <span>Provision of Personal Data is necessary for the performance of an agreement with you and/or for any pre-contractual obligations thereof.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-charcoal min-w-[140px] sm:min-w-[160px]">• Legal obligations:</span>
                      <span>Processing Personal Data is necessary for compliance with a legal obligation to which the Company is subject.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-bold text-charcoal min-w-[140px] sm:min-w-[160px]">• Vital interests:</span>
                      <span>Processing Personal Data is necessary in order to protect your vital interests or of another natural person.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-200/80">
                  <h3 className="font-serif text-lg text-charcoal font-medium mb-3">
                    Your Rights under GDPR
                  </h3>
                  <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed mb-3">
                    We undertake to respect the confidentiality of your Personal Data and to guarantee you can exercise your rights. You have the right under this Privacy Policy, and by law if you are within the EU, to:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                    {[
                      "Request access to your Personal Data",
                      "Request correction of the Personal Data that we hold about you",
                      "Object to Processing of your Personal Data",
                      "Request Erasure of your Personal Data",
                      "Request the transfer of your Personal Data",
                      "Withdraw your Consent",
                    ].map((right, index) => (
                      <div key={index} className="flex items-center gap-2 font-sans text-sm text-charcoal font-medium bg-white p-3 rounded-md border border-neutral-200/60">
                        <CheckCircle2 className="w-4 h-4 text-champagne-gold flex-shrink-0" />
                        <span>{right}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-sans text-sm text-slate-grey">
                    You may exercise your rights at any time by sending an email to{" "}
                    <a href="mailto:naaz@buildwiseuae.com" className="text-champagne-gold font-semibold hover:underline">
                      naaz@buildwiseuae.com
                    </a>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Changes To Our Privacy Policy */}
            <section className="mb-10">
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                  9
                </span>
                Changes To Our Privacy Policy
              </h2>
              <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                We may change this privacy policy from time to time. We will post any privacy policy changes on this page. We strongly encourage you to review our privacy policy whenever you use our services to stay informed about our information practices.
              </p>
            </section>

            {/* Section 10: Contact Us */}
            <section className="p-6 sm:p-8 rounded-xl bg-charcoal text-white relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-champagne-gold/10 rounded-full blur-2xl pointer-events-none" />
              <h2 className="font-serif text-xl sm:text-2xl font-semibold mb-3 text-champagne-gold flex items-center gap-2.5">
                <Mail className="w-5 h-5" />
                Contact Us
              </h2>
              <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                If you have any questions or require further clarification regarding this Privacy Policy, please reach out to us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 font-sans text-sm">
                <a
                  href="mailto:naaz@buildwiseuae.com"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-champagne-gold text-charcoal font-semibold hover:bg-champagne-gold/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  naaz@buildwiseuae.com
                </a>
              </div>
            </section>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
