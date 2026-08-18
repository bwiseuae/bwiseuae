"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Scale,
  CreditCard,
  Calendar,
  AlertCircle,
  HelpCircle,
  Mail,
  Globe,
  Clock,
  Building2,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Info,
} from "lucide-react";

import PageHero from "@/components/PageHero";

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState<string>("definitions");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "definitions", label: "Definitions" },
    { id: "scope", label: "1. Scope of Services" },
    { id: "company-rights", label: "2. Our Rights & KYC" },
    { id: "client-rights", label: "3. Client Responsibilities" },
    { id: "payment-terms", label: "4. Payment Terms" },
    { id: "deferred-payments", label: "5. Deferred Payments" },
    { id: "refund-policy", label: "6. Refund Policy" },
    { id: "exit-policy", label: "7. Exit Policy" },
    { id: "force-majeure", label: "8. Force Majeure" },
    { id: "general-terms", label: "9. General Terms" },
    { id: "website-terms", label: "10. Website Terms" },
    { id: "timelines", label: "11. Estimated Timelines" },
    { id: "governing-law", label: "12. Governing Law" },
    { id: "dispute-resolution", label: "13. Dispute Resolution" },
    { id: "contact-us", label: "Contact Us" },
  ];

  return (
    <div className="bg-alabaster min-h-screen">
      {/* Hero Header */}
      <PageHero
        title="Terms & Conditions"
        description="Transparent guidelines and legal conditions governing our consultancy services and website."
        breadcrumbs={[{ name: "Terms & Conditions" }]}
      />

      {/* Main Content Area */}
      <section className="py-12 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Sticky Table of Contents Sidebar */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 bg-white rounded-xl border border-[#C5A880]/20 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-champagne-gold">
                  <FileText className="w-4 h-4" />
                  <span>On This Page</span>
                </div>
                <nav className="space-y-1 text-xs sm:text-sm font-sans font-medium text-slate-grey">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 flex items-center justify-between ${activeSection === item.id
                          ? "bg-champagne-gold/10 text-champagne-gold font-semibold border-l-2 border-champagne-gold"
                          : "hover:bg-alabaster hover:text-charcoal"
                        }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Terms Content Column */}
            <div className="lg:col-span-8 space-y-10">
              <motion.div
                className="bg-white rounded-2xl border border-[#C5A880]/20 shadow-xl shadow-[#C5A880]/5 p-6 sm:p-10 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Top luxury line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-champagne-gold/40 via-champagne-gold to-champagne-gold/40" />

                {/* Subtitle / Effective notice */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-200/60">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-champagne-gold bg-champagne-gold/10 px-3 py-1.5 rounded-full">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Buildwise UAE LLC Agreement</span>
                  </div>
                  <span className="text-xs text-slate-grey/80 font-mono">
                    Last Updated: 23 June 2026
                  </span>
                </div>

                <p className="font-sans text-slate-grey text-base sm:text-lg leading-relaxed italic mb-8">
                  Please read these Terms and Conditions carefully before using our services or website.
                </p>

                {/* Section: Interpretation and Definitions */}
                <section id="definitions" className="scroll-mt-32 mb-12">
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4 flex items-center gap-3">
                    <Scale className="w-6 h-6 text-champagne-gold" />
                    Interpretation and Definitions
                  </h2>

                  <h3 className="font-serif text-lg text-charcoal font-medium mb-2">Interpretation</h3>
                  <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed mb-6">
                    Words with capitalised initial letters have specific meanings as defined below. These definitions apply equally whether they appear in singular or plural form.
                  </p>

                  <h3 className="font-serif text-lg text-charcoal font-medium mb-3">Definitions</h3>
                  <div className="grid grid-cols-1 gap-3 font-sans text-sm sm:text-base mb-6">
                    {[
                      { term: "Affiliate", def: "means any entity that controls, is controlled by, or is under common control with a party." },
                      { term: "Country", def: "refers to the United Arab Emirates." },
                      { term: "Company", def: "(referred to as “the Company”, “we”, “us”, or “our”) refers to Buildwise UAE LLC and its affiliates, associates, and related parties, operating in the United Arab Emirates." },
                      { term: "Device", def: "means any device used to access the service, including computers, mobile phones, and digital tablets." },
                      { term: "Service", def: "refers to the website and all business setup and consultancy services provided by Buildwise UAE LLC." },
                      { term: "Terms and Conditions", def: "(also referred to as “Terms”) means this document, which constitutes the entire agreement between you and the Company regarding use of the Service." },
                      { term: "Third-Party Social Media Service", def: "means any services or content provided by a third party that may be displayed or made available through the Service." },
                      { term: "Website", def: "refers to Buildwise UAE LLC, accessible at https://buildwiseuae.com/." },
                      { term: "You", def: "means the individual or legal entity accessing or using the Service." },
                    ].map((item, index) => (
                      <div key={index} className="p-3.5 rounded-lg bg-alabaster/70 border border-neutral-200/50">
                        <strong className="text-charcoal font-semibold">{item.term}: </strong>
                        <span className="text-slate-grey">{item.def}</span>
                      </div>
                    ))}
                  </div>

                  <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                    These Terms govern your relationship with Buildwise UAE LLC (“Company”, “we”, or “us”), a UAE-based consultancy. By engaging with us, you (“Client”) agree to comply with and be bound by the following terms, as applicable to any services availed.
                  </p>
                </section>

                <hr className="my-10 border-neutral-200/60" />

                {/* Section 1: Scope of Services */}
                <section id="scope" className="scroll-mt-32 mb-12">
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                      1
                    </span>
                    Scope of Services and Engagement
                  </h2>

                  <div className="space-y-6 font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                    <div>
                      <h3 className="font-serif text-lg text-charcoal font-semibold mb-2">1.1 General Services</h3>
                      <p className="mb-3">
                        Buildwise UAE LLC offers facilitation and consultancy services tailored to your business needs. The nature, scope, and timeline of services will be confirmed through formal proposals, pro forma invoices, or written agreements. Where applicable, these services may involve dealings with third-party providers or government entities.
                      </p>
                      <p>
                        Our services also extend to estate planning facilitation. We are not a law firm and do not provide legal advice. Estate planning services are offered in a consultancy capacity only and may involve referral to, or coordination with, licensed legal professionals where required.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-charcoal font-semibold mb-2">1.2 Third-Party Payment Handling</h3>
                      <p>
                        We may process payments to government bodies, legal authorities, banks, or other third parties on your behalf as part of the service process. All such payments are made in accordance with the requirements of the subscribed service and do not imply our control over final decisions made by those third parties.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 2: Our Rights and Responsibilities */}
                <section id="company-rights" className="scroll-mt-32 mb-12">
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                      2
                    </span>
                    Our Rights and Responsibilities
                  </h2>

                  <div className="space-y-6 font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                    <div>
                      <h3 className="font-serif text-lg text-charcoal font-semibold mb-1">2.1 Professional Conduct</h3>
                      <p>We are committed to delivering services with reasonable care, diligence, and professionalism, in accordance with prevailing industry standards and applicable UAE laws.</p>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-charcoal font-semibold mb-1">2.2 Limitation of Liability</h3>
                      <p>We shall not be held liable for any indirect, incidental, or consequential loss arising during service delivery, including but not limited to loss of business, profit, revenue, or reputation. Our liability is limited to the fees paid directly to us for the specific service in question and excludes matters beyond our control, such as third-party decisions or government delays.</p>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-charcoal font-semibold mb-1">2.3 Information Accuracy</h3>
                      <p>We ensure that clients receive clear and current information at the time of signing, including procedural requirements and anticipated timelines. However, we do not control external regulatory changes that may subsequently impact these.</p>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-charcoal font-semibold mb-1">2.4 Third-Party Changes</h3>
                      <p>Any changes in fees, policies, or timelines imposed by third-party providers or government authorities after the agreement is signed will be communicated to the client promptly.</p>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-charcoal font-semibold mb-1">2.5 Exemption from Liability for Third-Party Changes</h3>
                      <p>We are not liable for changes imposed by third-party providers or government authorities following the signing of any agreement with the client. Such changes may include alterations to costs, timelines, or specific service requirements that are beyond our reasonable control.</p>
                    </div>

                    <div className="p-6 rounded-xl bg-alabaster border border-[#C5A880]/30">
                      <h3 className="font-serif text-lg text-charcoal font-semibold mb-3 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-champagne-gold" />
                        2.6 KYC Documents and Client Onboarding
                      </h3>
                      <p className="mb-4">
                        As part of the onboarding process, we require you to provide information, documents, and materials (“KYC Documents”) necessary for Buildwise UAE LLC to fulfil its AML/CFT obligations. These may include, but are not limited to:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 font-sans text-sm">
                        {[
                          "Proof of identity (e.g., passport, national ID)",
                          "Proof of address (utility bill, bank statement)",
                          "Corporate registration documents",
                          "Beneficial ownership information",
                          "Source of funds or wealth declarations",
                          "Any other required due diligence info",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded border border-neutral-200/60 text-charcoal font-medium">
                            <CheckCircle2 className="w-4 h-4 text-champagne-gold flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mb-3 text-xs sm:text-sm">
                        Buildwise UAE LLC reserves the absolute right, at its sole discretion, to reject any client application, terminate existing relationships, or refuse to proceed with any transaction at any stage if KYC requirements are unfulfilled, false, or present AML/CFT risk.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 3: Client's Rights and Responsibilities */}
                <section id="client-rights" className="scroll-mt-32 mb-12">
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                      3
                    </span>
                    Client's Rights and Responsibilities
                  </h2>

                  <div className="grid grid-cols-1 gap-4 font-sans text-sm sm:text-base">
                    {[
                      { title: "3.1 Compliance", text: "Clients are expected to act in compliance with UAE laws and regulations and must not engage in any unlawful, unethical, or unauthorised activity while using our services." },
                      { title: "3.2 Use of Services", text: "Services provided by Buildwise UAE LLC are for the client’s use only and are non-transferable unless explicitly authorised by us in writing." },
                      { title: "3.3 Payment and Documentation", text: "Clients are responsible for providing accurate documents and making timely payments as outlined in agreed invoices or payment schedules. Delays in submitting documentation or payments may result in service delays." },
                      { title: "3.4 Third-Party Terms", text: "Where third-party service providers are involved, clients must adhere to their specific terms and policies. Buildwise UAE LLC shall not be responsible for any failure or refusal by a third party to deliver services." },
                      { title: "3.5 Right to Information & Indemnification", text: "The Client has the right to receive current and accurate information about subscribed services. The client undertakes to indemnify Buildwise UAE LLC against any losses or damages arising from changes in terms, conditions, or other aspects of services after the agreement is signed or payment is made." },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-alabaster/60 border border-neutral-200/60">
                        <h3 className="font-serif text-base text-charcoal font-semibold mb-1">{item.title}</h3>
                        <p className="text-slate-grey leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 4: Payment Terms */}
                <section id="payment-terms" className="scroll-mt-32 mb-12">
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-6 flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-champagne-gold" />
                    4. Payment Terms
                  </h2>

                  <div className="space-y-4 font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                    <p><strong>4.1 Advance Payment:</strong> All services provided by Buildwise UAE LLC require advance payment unless otherwise agreed in writing. This ensures the timely allocation of resources and commencement of service delivery.</p>
                    <p><strong>4.2 Fee Structure:</strong> Fees for services shall be as outlined in the signed service agreement, proposal, or pro forma invoice. All fees are expressed in UAE Dirhams unless stated otherwise.</p>
                    <p><strong>4.3 Invoicing and Disputes:</strong> Invoices must be settled within the stated payment terms. Any disputes must be raised in writing immediately. During any dispute process, all undisputed amounts remain payable.</p>
                    <p><strong>4.4 Adjustments:</strong> Fee adjustments may occur where there are changes in the scope of work, client delays, or unforeseen government or authority-related modifications. Any such adjustments will be communicated in advance.</p>
                    <p><strong>4.5 Third-Party Fees:</strong> The client is responsible for all third-party charges, including government fees, attestation costs, and bank charges. Buildwise UAE LLC may pay these on the client’s behalf, but they will be invoiced separately.</p>
                  </div>
                </section>

                {/* Section 5: Deferred Payment Policy */}
                <section id="deferred-payments" className="scroll-mt-32 mb-12">
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-6 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-champagne-gold" />
                    5. Deferred Payment Policy
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-alabaster border border-[#C5A880]/30">
                      <h3 className="font-serif font-semibold text-charcoal mb-2">5.1 Eligibility & Requests</h3>
                      <p className="text-xs sm:text-sm text-slate-grey leading-relaxed">
                        Deferred payments may be granted under specific conditions and at our discretion in accordance with licensing authority rules. A deferral request may be submitted for up to 15 days from due date without penalty. Beyond 15 days, a 10% monthly deferral fee applies.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-alabaster border border-[#C5A880]/30">
                      <h3 className="font-serif font-semibold text-charcoal mb-2">5.3 Limitations & Process</h3>
                      <p className="text-xs sm:text-sm text-slate-grey leading-relaxed">
                        Maximum 2 payment deferrals per 12-month cycle. Dishonoured cheques incur AED 300 to AED 500 penalty. Submit written requests 7 business days prior to due date to{" "}
                        <a href="mailto:naaz@buildwiseuae.com" className="text-champagne-gold font-semibold hover:underline">
                          naaz@buildwiseuae.com
                        </a>.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 6: Refund Eligibility */}
                <section id="refund-policy" className="scroll-mt-32 mb-12">
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4 flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-champagne-gold" />
                    6. Refund Eligibility
                  </h2>

                  <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed mb-6">
                    Refund requests may be considered within a 5-day window following payment, provided the requested service has not commenced and no government submissions, third-party engagements, or substantial work have been undertaken. Each refund request will be reviewed on a case-by-case basis.
                  </p>

                  {/* Visual Fee Refund Status Table */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                    {[
                      { name: "Government Authority Fees", status: "Non-Refundable", isRefundable: false },
                      { name: "Third-Party & Vendor Fees", status: "Non-Refundable", isRefundable: false },
                      { name: "External Operational Costs", status: "Non-Refundable", isRefundable: false },
                      { name: "Completed Professional Fees", status: "Non-Refundable", isRefundable: false },
                      { name: "Unused Service Fees", status: "Case by Case", isRefundable: true },
                    ].map((fee, idx) => (
                      <div key={idx} className="p-3.5 rounded-lg border border-neutral-200 bg-alabaster/60 flex items-center justify-between">
                        <span className="font-sans text-xs sm:text-sm font-medium text-charcoal">{fee.name}</span>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded ${fee.isRefundable ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-700"
                          }`}>
                          {fee.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-serif text-lg text-charcoal font-semibold mb-3">6.1 Non-Refundable Circumstances</h3>
                  <ul className="space-y-2 font-sans text-sm sm:text-base text-slate-grey mb-6">
                    {[
                      "You change your mind after purchasing a service or no longer require it.",
                      "The service no longer suits your business or personal objectives.",
                      "Delays occur because the client failed to provide necessary information or approvals.",
                      "An application, visa, license, or bank account is rejected or delayed by government authorities or financial institutions.",
                      "External laws, regulations, policies, or authority requirements change after engagement.",
                      "Services have already commenced or have been substantially performed.",
                    ].map((reason, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed mb-4">
                    <strong>6.2 Refund Processing:</strong> Approved refunds will be processed using the original payment method where possible. Processing times vary by bank and authority.
                  </p>
                  <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                    <strong>6.3 Forfeiture:</strong> Failing to fulfill obligations within two (2) months from payment date results in non-refundable forfeiture of funds without further service obligations, except in cases of force majeure.
                  </p>
                </section>

                {/* Section 7: Exit Policy */}
                <section id="exit-policy" className="scroll-mt-32 mb-12">
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                      7
                    </span>
                    Exit Policy
                  </h2>

                  <div className="space-y-4 font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                    <p><strong>7.1 Licence Cancellation or Transfer:</strong> If a client wishes to obtain a No Objection Certificate (NOC) to deal directly with licensing authorities or another service provider, an NOC fee of AED 8,400 applies.</p>
                    <p><strong>7.2 Termination of Obligations:</strong> File transfers to authorities will end all further obligations of Buildwise UAE LLC.</p>
                    <p><strong>7.3 Document Return:</strong> Clients must return all original documents issued as part of setup. Lost/damaged documents require a police report.</p>
                    <p><strong>7.4 Pending Instalments:</strong> All pending instalments must be fully paid prior to license cancellation.</p>
                  </div>
                </section>

                {/* Section 8: Force Majeure */}
                <section id="force-majeure" className="scroll-mt-32 mb-12">
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                      8
                    </span>
                    Force Majeure
                  </h2>
                  <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                    Neither party shall be liable for any delay or failure in performance of its obligations under this Agreement where such delay or failure results from events beyond its reasonable control, including acts of God, natural disasters, war, terrorism, government orders, labour strikes, or internet service interruptions (“Force Majeure Event”).
                  </p>
                </section>

                {/* Section 9: General Terms */}
                <section id="general-terms" className="scroll-mt-32 mb-12">
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-champagne-gold/10 text-champagne-gold flex items-center justify-center text-sm font-bold font-sans">
                      9
                    </span>
                    General Terms
                  </h2>
                  <div className="space-y-3 font-sans text-slate-grey text-sm sm:text-base">
                    <p><strong>9.1 Notice and Communication:</strong> Delivered in writing to official emails or physical addresses.</p>
                    <p><strong>9.2 Entire Agreement:</strong> Constitutes the complete agreement between Client and Buildwise UAE LLC.</p>
                    <p><strong>9.3 Assignment:</strong> Rights or obligations cannot be assigned without prior written consent.</p>
                  </div>
                </section>

                {/* Section 10: Website Terms of Use */}
                <section id="website-terms" className="scroll-mt-32 mb-12">
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-6 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-champagne-gold" />
                    10. Website Terms of Use
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs sm:text-sm">
                    {[
                      { title: "10.1 Acceptance", text: "By using the Site, you accept these Terms and agree to comply with them." },
                      { title: "10.2 Access & Use", text: "Provided for general info only. Content does not constitute legal advice." },
                      { title: "10.3 Privacy & Data", text: "Handled securely under UAE Federal Decree Law No. 45 of 2021." },
                      { title: "10.4 Intellectual Property", text: "All graphics, text, and code are owned by Buildwise UAE LLC or licensors." },
                      { title: "10.5 Site Modifications", text: "We reserve the right to suspend or modify the Site at any time." },
                      { title: "10.6 Accuracy", text: "We strive for accuracy but do not guarantee completeness of Site content." },
                      { title: "10.7 Third-Party Links", text: "Not under our control; we are not liable for third-party site contents." },
                      { title: "10.8 Cookies", text: "Tracking technologies used to optimize experience; controllable via browser." },
                      { title: "10.9 Viruses & Misuse", text: "Misuse or introducing malicious software is strictly prohibited." },
                      { title: "10.10 Access Suspension", text: "We reserve the right to suspend access upon breach of Terms." },
                      { title: "10.11 Changes to Terms", text: "Continued use after posted changes constitutes acceptance." },
                      { title: "10.12 Translation", text: "English version prevails in all interpretation matters." },
                      { title: "10.13 Sanctions", text: "Users confirm they are not subject to applicable regulatory sanctions." },
                      { title: "10.14 Severability", text: "Unenforceable provisions will be modified to reflect original intent." },
                      { title: "10.15 Effective Date", text: "Effective 1 January 2025; updated 23 June 2026." },
                      { title: "10.16 Service Modifications", text: "Right reserved to modify or discontinue services at any time." },
                    ].map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-lg bg-alabaster/60 border border-neutral-200/50">
                        <h4 className="font-semibold text-charcoal mb-1">{item.title}</h4>
                        <p className="text-slate-grey">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 11: Estimated Timelines */}
                <section id="timelines" className="scroll-mt-32 mb-12 p-6 rounded-2xl bg-alabaster border border-[#C5A880]/30">
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-6 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-champagne-gold" />
                    11. Estimated Timelines
                  </h2>

                  <p className="font-sans text-xs sm:text-sm text-slate-grey mb-6">
                    The following timelines are provided as general guidance and are subject to requirements of relevant authorities:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company Formation Timelines */}
                    <div className="bg-white p-5 rounded-xl border border-neutral-200/60">
                      <h3 className="font-serif font-semibold text-charcoal text-base mb-3 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-champagne-gold" />
                        Company Formation
                      </h3>
                      <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-slate-grey">
                        <li className="flex justify-between items-center pb-2 border-b border-neutral-100">
                          <span>Obtaining Trade License</span>
                          <span className="font-bold text-charcoal">5 – 7 working days</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Establishment Card & E-Channel</span>
                          <span className="font-bold text-charcoal">4 working days</span>
                        </li>
                      </ul>
                    </div>

                    {/* Visa Processing Timelines */}
                    <div className="bg-white p-5 rounded-xl border border-neutral-200/60">
                      <h3 className="font-serif font-semibold text-charcoal text-base mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-champagne-gold" />
                        New Residency Visa
                      </h3>
                      <ul className="space-y-2 font-sans text-xs sm:text-sm text-slate-grey">
                        <li className="flex justify-between items-center pb-1.5 border-b border-neutral-100">
                          <span>Entry Permit Issuance</span>
                          <span className="font-bold text-charcoal">3 – 4 working days</span>
                        </li>
                        <li className="flex justify-between items-center pb-1.5 border-b border-neutral-100">
                          <span>Change of Status</span>
                          <span className="font-bold text-charcoal">1 – 2 working days</span>
                        </li>
                        <li className="flex justify-between items-center pb-1.5 border-b border-neutral-100">
                          <span>Medical Fitness Test</span>
                          <span className="font-bold text-charcoal">3 – 4 working days</span>
                        </li>
                        <li className="flex justify-between items-center pb-1.5 border-b border-neutral-100">
                          <span>Biometrics Appointment</span>
                          <span className="font-bold text-charcoal">3 – 4 working days</span>
                        </li>
                        <li className="flex justify-between items-center pb-1.5 border-b border-neutral-100">
                          <span>Visa Stamping</span>
                          <span className="font-bold text-charcoal">2 – 3 working days</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Emirates ID Delivery</span>
                          <span className="font-bold text-charcoal">3 – 4 working days</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 12 & 13: Governing Law & Dispute Resolution */}
                <section id="governing-law" className="scroll-mt-32 mb-12">
                  <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4">
                    12. Governing Law and Jurisdiction
                  </h2>
                  <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed mb-8">
                    These Terms are governed by the laws of the United Arab Emirates. Any disputes arising in relation to the Site or our services shall fall under the exclusive jurisdiction of the courts in the UAE.
                  </p>

                  <div id="dispute-resolution" className="scroll-mt-32">
                    <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-semibold mb-4">
                      13. Dispute Resolution
                    </h2>
                    <p className="font-sans text-slate-grey text-sm sm:text-base leading-relaxed">
                      In the event of any dispute, controversy, or claim arising out of or relating to these Terms, the use of the website, or the provision of services by Buildwise UAE LLC, you agree to first contact us to attempt to resolve the matter informally.
                    </p>
                  </div>
                </section>

                {/* Contact Box */}
                <section id="contact-us" className="scroll-mt-32 p-6 sm:p-8 rounded-xl bg-charcoal text-white relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-champagne-gold/10 rounded-full blur-2xl pointer-events-none" />
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold mb-3 text-champagne-gold flex items-center gap-2.5">
                    <Mail className="w-5 h-5" />
                    Contact Us
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                    If you have any questions or require clarification regarding these Terms and Conditions, please reach out to us:
                  </p>

                  <div className="space-y-3 font-sans text-sm">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-4 h-4 text-champagne-gold" />
                      <strong className="text-white">Buildwise UAE LLC</strong>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-champagne-gold" />
                      <a href="https://buildwiseuae.com/" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors">
                        https://buildwiseuae.com/
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-champagne-gold" />
                      <a href="mailto:naaz@buildwiseuae.com" className="hover:text-champagne-gold transition-colors">
                        naaz@buildwiseuae.com
                      </a>
                    </div>
                  </div>
                </section>

              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
