import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Send,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Clock,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { getWhatsAppUrl } from '../utils/whatsapp';

const AGENCY_EMAIL = 'velclickagency@gmail.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${
  import.meta.env.VITE_FORMSUBMIT_ID || AGENCY_EMAIL
}`;
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

function buildEmailPayload(data) {
  const emailSubject = `New Project Enquiry: ${data.serviceRequired} - ${data.businessName}`;
  const emailBody =
    `New Enquiry - VelClick Agency\n\n` +
    `Name: ${data.name}\n` +
    `Business: ${data.businessName}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone}\n` +
    `Service Required: ${data.serviceRequired}\n` +
    `Project Details:\n${data.projectDetails}\n`;

  const mailtoUrl = `mailto:${AGENCY_EMAIL}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  return { emailSubject, mailtoUrl };
}

export default function Contact({ initialService = '', initialPlan = null }) {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [preparedEnquiry, setPreparedEnquiry] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      businessName: '',
      email: '',
      phone: '',
      serviceRequired: initialService || 'Meta & Instagram Ads',
      projectDetails: initialPlan ? `I am interested in the ${initialPlan.name} package.` : '',
    },
  });

  React.useEffect(() => {
    if (initialService) {
      const serviceMapping = {
        'ai-video-creation': 'AI Video Creation',
        'meta-instagram-ads': 'Meta & Instagram Ads',
        'portfolio-websites': 'Portfolio Websites',
        'google-business-profile': 'Google Business Profile',
      };
      setValue('serviceRequired', serviceMapping[initialService] || initialService);
    }
  }, [initialService, setValue]);

  React.useEffect(() => {
    if (initialPlan) {
      setValue(
        'projectDetails',
        `Interested in the ${initialPlan.name} package. Key requirement: `
      );
    }
  }, [initialPlan, setValue]);

  const onSubmit = async (data) => {
    setSubmissionStatus(null);
    setErrorMessage('');

    const { emailSubject, mailtoUrl } = buildEmailPayload(data);

    setPreparedEnquiry({
      ...data,
      mailtoUrl,
    });

    try {
      let response;
      if (WEB3FORMS_ACCESS_KEY) {
        response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: emailSubject,
            from_name: data.name,
            replyto: data.email,
            name: data.name,
            business: data.businessName,
            email: data.email,
            phone: data.phone,
            service: data.serviceRequired,
            message: data.projectDetails,
          }),
        });
      } else {
        response = await fetch(FORMSUBMIT_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            business: data.businessName,
            email: data.email,
            phone: data.phone,
            service: data.serviceRequired,
            message: data.projectDetails,
            _replyto: data.email,
            _subject: emailSubject,
            _template: 'table',
            _captcha: 'false',
          }),
        });
      }

      const result = await response.json().catch(() => ({}));
      const isSuccess =
        response.ok && (result.success === true || result.success === 'true');

      if (!isSuccess) {
        const msg = result.message || 'Unable to send email automatically.';
        if (/activat/i.test(msg)) {
          setErrorMessage(msg);
          setSubmissionStatus('needs_activation');
          return;
        }
        throw new Error(msg);
      }

      setSubmissionStatus('success');
      reset();
    } catch (err) {
      setErrorMessage(
        err?.message || 'Unable to send automatically. Please use your email app below.'
      );
      setSubmissionStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="bg-brand-white dark:bg-brand-dark py-20 sm:py-28 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Decorative Gold Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/5 dark:bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-light-gold/15 dark:bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Click, Grow & Succeed Together!"
          highlightWord="Grow & Succeed"
          description="Have a business idea or need help growing online? Let's discuss how VelClick Agency can help."
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Working Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-ivory dark:bg-neutral-900 rounded-3xl p-7 sm:p-9 border border-brand-gold/30 dark:border-neutral-800 shadow-card-soft dark:shadow-dark-card-soft space-y-7">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  Direct Inquiries
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-black dark:text-white mt-1">
                  We are ready to assist your growth.
                </h3>
                <p className="text-xs sm:text-sm text-brand-charcoal dark:text-neutral-300 mt-2 leading-relaxed">
                  Connect with our strategy team directly for prompt responses, tailored proposals, and free marketing consultations.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-brand-white dark:bg-neutral-800 border border-brand-border/80 dark:border-neutral-700 hover:border-brand-gold dark:hover:border-brand-gold transition-all shadow-xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-400 uppercase tracking-wider block">
                      WhatsApp / Phone
                    </span>
                    <span className="text-sm sm:text-base font-bold text-brand-black dark:text-white group-hover:text-brand-gold transition-colors">
                      +91 63795 53564
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:velclickagency@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-brand-white dark:bg-neutral-800 border border-brand-border/80 dark:border-neutral-700 hover:border-brand-gold dark:hover:border-brand-gold transition-all shadow-xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-ivory dark:bg-neutral-800 border border-brand-gold/40 dark:border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <span className="text-sm sm:text-base font-bold text-brand-black dark:text-white group-hover:text-brand-gold transition-colors break-all">
                      velclickagency@gmail.com
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-white dark:bg-neutral-800 border border-brand-border/80 dark:border-neutral-700 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-neutral-800 border border-amber-200 dark:border-neutral-700 flex items-center justify-center text-brand-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-400 uppercase tracking-wider block">
                      Agency Headquarters
                    </span>
                    <span className="text-sm font-bold text-brand-black dark:text-white">
                      Chennai, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Hours & SLA */}
              <div className="p-4 rounded-2xl bg-brand-white/80 dark:bg-neutral-800/80 border border-brand-gold/20 dark:border-neutral-700 flex items-center gap-3 text-xs text-brand-charcoal dark:text-neutral-300">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Rapid response within 2 hours during business hours (Mon – Sat).</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-white dark:bg-neutral-900 rounded-3xl p-7 sm:p-9 border border-brand-border dark:border-neutral-800 shadow-card-soft dark:shadow-dark-card-soft">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-black dark:text-white">
                  Send Your Project Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-brand-charcoal dark:text-neutral-300 mt-1">
                  Fill in your details below and our team will get back to you with a tailored roadmap.
                </p>
              </div>

              {/* Status Banner when enquiry sent to Gmail */}
              {submissionStatus === 'success' && preparedEnquiry && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/60 text-xs text-emerald-900 dark:text-emerald-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-800 dark:text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Enquiry Sent Successfully!</span>
                  </div>
                  <p>
                    Thank you, <strong>{preparedEnquiry.name}</strong>. Your project details have been sent to{' '}
                    <span className="font-semibold">{AGENCY_EMAIL}</span>. Our team will respond within 2 business hours.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmissionStatus(null);
                        setPreparedEnquiry(null);
                      }}
                      className="px-3 py-2 rounded-full bg-white dark:bg-neutral-800 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-neutral-700 font-medium"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}

              {/* Banner when FormSubmit needs one-time inbox activation */}
              {submissionStatus === 'needs_activation' && preparedEnquiry && (
                <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 text-xs text-amber-950 dark:text-amber-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-amber-900 dark:text-amber-300">
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>One-Time Email Activation Needed</span>
                  </div>
                  <p>
                    To enable automatic background email delivery, please open{' '}
                    <span className="font-semibold">{AGENCY_EMAIL}</span> and click the <strong>&ldquo;Activate Form&rdquo;</strong> link from FormSubmit (check Spam/Promotions if not in Inbox). You can also send via your email app below:
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href={preparedEnquiry.mailtoUrl}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-black dark:bg-brand-gold text-white dark:text-brand-black font-semibold shadow-xs hover:opacity-90"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email App</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Fallback Banner if automatic email dispatch fails */}
              {submissionStatus === 'error' && preparedEnquiry && (
                <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 text-xs text-amber-950 dark:text-amber-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-amber-900 dark:text-amber-300">
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Could Not Send Automatically</span>
                  </div>
                  <p>
                    Automatic email dispatch could not complete ({errorMessage}). You can send your pre-filled details directly via your email app below:
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href={preparedEnquiry.mailtoUrl}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-black dark:bg-brand-gold text-white dark:text-brand-black font-semibold shadow-xs hover:opacity-90"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email App</span>
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Row 1: Name and Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-black dark:text-neutral-100 mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all ${
                        errors.name
                          ? 'border-red-400 bg-red-50/30 dark:bg-red-950/20'
                          : 'border-neutral-200 dark:border-neutral-700 bg-brand-white dark:bg-neutral-800'
                      }`}
                      {...register('name', { required: 'Please enter your full name.' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-black dark:text-neutral-100 mb-1.5">
                      Business / Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Health Clinic"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all ${
                        errors.businessName
                          ? 'border-red-400 bg-red-50/30 dark:bg-red-950/20'
                          : 'border-neutral-200 dark:border-neutral-700 bg-brand-white dark:bg-neutral-800'
                      }`}
                      {...register('businessName', { required: 'Please enter your business name.' })}
                    />
                    {errors.businessName && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.businessName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-black dark:text-neutral-100 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="rahul@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all ${
                        errors.email
                          ? 'border-red-400 bg-red-50/30 dark:bg-red-950/20'
                          : 'border-neutral-200 dark:border-neutral-700 bg-brand-white dark:bg-neutral-800'
                      }`}
                      {...register('email', {
                        required: 'Please enter your email address.',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address.',
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-black dark:text-neutral-100 mb-1.5">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all ${
                        errors.phone
                          ? 'border-red-400 bg-red-50/30 dark:bg-red-950/20'
                          : 'border-neutral-200 dark:border-neutral-700 bg-brand-white dark:bg-neutral-800'
                      }`}
                      {...register('phone', {
                        required: 'Please enter your phone number.',
                        minLength: {
                          value: 8,
                          message: 'Please enter a valid phone number (min 8 digits).',
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Required */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-black dark:text-neutral-100 mb-1.5">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-brand-white dark:bg-neutral-800 text-sm text-brand-black dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"
                    {...register('serviceRequired', { required: 'Please select a service.' })}
                  >
                    <option value="AI Video Creation">AI Video Creation</option>
                    <option value="Meta & Instagram Ads">Meta & Instagram Ads</option>
                    <option value="Portfolio Websites">Portfolio & Landing Page Websites</option>
                    <option value="Google Business Profile">Google Business Profile Optimization</option>
                    <option value="Full Growth Package">Full Digital Growth Package (Combined)</option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-black dark:text-neutral-100 mb-1.5">
                    Project Details & Goals <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your target audience, current advertising, budget scale, or website requirements..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all resize-y ${
                      errors.projectDetails
                        ? 'border-red-400 bg-red-50/30 dark:bg-red-950/20'
                        : 'border-neutral-200 dark:border-neutral-700 bg-brand-white dark:bg-neutral-800'
                    }`}
                    {...register('projectDetails', {
                      required: 'Please provide a short description of your project.',
                      minLength: {
                        value: 10,
                        message: 'Please provide at least 10 characters describing your project.',
                      },
                    })}
                  />
                  {errors.projectDetails && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.projectDetails.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    disabled={isSubmitting}
                    className="w-full justify-center shadow-gold-sm"
                  >
                    {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
                  </Button>
                </div>

                {/* Direct Email Note */}
                <div className="pt-3 text-center text-xs text-neutral-400 dark:text-neutral-400">
                  Enquiries are delivered directly to{' '}
                  <a
                    href={`mailto:${AGENCY_EMAIL}`}
                    className="text-brand-gold font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <Mail className="w-3.5 h-3.5 inline" />
                    <span>{AGENCY_EMAIL}</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
