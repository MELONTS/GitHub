"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, User, Check } from "lucide-react";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "";
  const formRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (service) {
      const subj = `${service} - Inquiry`;
      const msg = `I'm interested in: ${service}\n\nPlease provide more information, pricing and timelines.`;
      setFormData((p) => ({ ...p, subject: subj, message: msg }));

      setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
    }
    setTimeout(() => setShowCard(true), 60);
  }, [service]);

  function validate() {
    const e: Record<string, string> = {};
    if (!formData.fullName.trim()) e.fullName = "Please enter your full name";
    if (!formData.email.trim()) e.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = "Please enter a valid email";
    if (!formData.subject.trim()) e.subject = "Please enter a subject";
    if (!formData.message.trim()) e.message = "Please enter a message";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          website: formData.website,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          subject: "",
          message: "",
        });
        setErrors({});
        setTimeout(() => setSuccess(false), 5000);
      } else {
        const json = await res.json().catch(() => ({}));
        alert(json?.error || "Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(180deg,#f7f9fb,white)]">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">Get in touch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project or the service you're interested in — we'll reply within 24 hours.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={showCard ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35 }}
            className="relative rounded-2xl border border-white/30 bg-white/60 backdrop-blur-md shadow-xl overflow-hidden"
          >
            <div className="absolute -top-10 right-6 blur-3xl w-72 h-40 bg-gradient-to-br from-primary/30 via-transparent to-accent/20 opacity-70 rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
              {/* Left Info */}
              <div className="flex flex-col gap-6">
                <div className="rounded-xl p-6 bg-white/30 border border-white/10">
                  <h2 className="text-2xl font-semibold">Start a project</h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    Share a few details and we’ll get back to you with a proposal and next steps.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-lg bg-white/20 border border-white/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">info@rankboost.africa</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-lg bg-white/20 border border-white/10">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Phone</div>
                      <div className="text-sm text-muted-foreground">+27 (0) 63 740 9880</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-lg bg-white/20 border border-white/10">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Address</div>
                      <div className="text-sm text-muted-foreground">South Africa</div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto text-xs text-muted-foreground">
                  <strong>Note:</strong> We usually respond within 1 business day. Please check your spam folder if you don't see a reply.
                </div>
              </div>

              {/* Right Form */}
              <div className="p-1">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 p-6 bg-white/70 rounded-xl border border-white/10 shadow-sm"
                >
                  {/* Form fields ... same as before */}
                  {/* Name */}
<div>
  <label className="block text-sm font-medium mb-1">Name & Surname</label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <User className="w-4 h-4 text-muted-foreground" />
    </div>
    <input
      name="fullName"
      value={formData.fullName}
      onChange={onChange}
      className={`pl-10 pr-3 py-2 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-primary ${
        errors.fullName ? "border-red-400" : "border-transparent"
      }`}
      placeholder="Name & Surname"
      required
    />
  </div>
  {errors.fullName && (
    <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
  )}
</div>

{/* Email */}
<div>
  <label className="block text-sm font-medium mb-1">Email</label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Mail className="w-4 h-4 text-muted-foreground" />
    </div>
    <input
      name="email"
      type="email"
      value={formData.email}
      onChange={onChange}
      className={`pl-10 pr-3 py-2 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-primary ${
        errors.email ? "border-red-400" : "border-transparent"
      }`}
      placeholder="you@company.com"
      required
    />
  </div>
  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
</div>

{/* Subject */}
<div>
  <label className="block text-sm font-medium mb-1">Subject</label>
  <div className="relative">
    <input
      name="subject"
      value={formData.subject}
      onChange={onChange}
      className={`pl-3 pr-3 py-2 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-primary ${
        errors.subject ? "border-red-400" : "border-transparent"
      }`}
      placeholder="Project / enquiry subject"
      required
    />
  </div>
  {errors.subject && (
    <p className="text-xs text-red-500 mt-1">{errors.subject}</p>
  )}
</div>

{/* Message */}
<div>
  <label className="block text-sm font-medium mb-1">Message</label>
  <div className="relative">
    <textarea
      name="message"
      value={formData.message}
      onChange={onChange}
      className={`pl-3 pr-3 py-3 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-primary h-28 resize-none ${
        errors.message ? "border-red-400" : "border-transparent"
      }`}
      placeholder="Tell us about your project, goals and timeline..."
      required
    />
  </div>
  {errors.message && (
    <p className="text-xs text-red-500 mt-1">{errors.message}</p>
  )}
</div>
                  {/* ...rest of form fields here... */}

                  {/* Submit */}
                  <div className="flex items-center gap-3">
                    <motion.button
                      type="submit"
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                      className="flex-1 inline-flex items-center justify-center gap-3 px-5 py-3 rounded-md bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md hover:brightness-105 disabled:opacity-60"
                    >
                      {loading ? (
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                        </svg>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </motion.button>

                    <div className="w-12 h-12">
                      {success && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white shadow">
                            <Check className="w-5 h-5" />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. We'll only use this data to contact you regarding your enquiry.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}