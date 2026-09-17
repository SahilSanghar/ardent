"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const testimonials = [
  {
    text: `Ardent Co. understood that luxury is about more than visibility. They helped us identify creators who could communicate our brand's world authentically, while ensuring every collaboration felt premium, relevant and on-brand.`,
    role: "Head of Marketing",
    company: "Luxury Real Estate Developer",
  },
  {
    text: `Ardent Co. helped us take our creator strategy from scattered collaborations to a focused campaign. The creators felt genuinely relevant to our audience, and the content brought our products to life in a way traditional advertising couldn't.`,
    role: "Brand Head",
    company: "D2C Toy Brand",
  },
  {
    text: `Ardent Co. brought a strategic approach to influencer marketing for a category that can often be difficult to make engaging. They helped us find the right voices and translate a complex industry into content that people could actually understand and connect with.`,
    role: "Head of Communications",
    company: "Power & Energy Company",
  },
  {
    text: `Ardent Co. helped us approach creator marketing with the right balance of credibility and accessibility. The campaign gave our experts a stronger voice while making important healthcare conversations easier for audiences to engage with.`,
    role: "Chief Marketing Officer",
    company: "Leading Hospital",
  },
];

export default function InfluencerHeroWithForm() {
  const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, 4000); // change timing here

  return () => clearInterval(interval);
}, []);

  const router = useRouter();
  const [formMode, setFormMode] = useState<"client" | "job">("client");
  const [showContactSection, setShowContactSection] = useState(false);
  const contactSectionRef = useRef<HTMLElement>(null);

  const openContactSection = (mode: "client" | "job") => {
    setFormMode(mode);
    setShowContactSection(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      });
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    firstName: "",
    lastName: "",
    companyName: "",
    designation: "",
    email: "",
    phone: "",
    message: "",
    department: "",
    cv: null as File | null,
  });

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleClientSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      await axios.post("/api/ardentco-influencer-submit", {
        name: formData.fullName,
        companyName: formData.companyName,
        designation: formData.designation,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      });
      router.replace("/ardentco-influencer/success");
    } catch (err) {
      setStatus("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleJobSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");

    if (formData.cv && formData.cv.size > 4 * 1024 * 1024) {
      setStatus("File size exceeds 4MB limit.");
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("department", formData.department);
    if (formData.cv) {
      formDataToSend.append("cv", formData.cv);
    }

    try {
      await axios.post("/api/JobSubmit", formDataToSend);
      setStatus("Application sent successfully!");
      setFormData((prev) => ({
        ...prev,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        department: "",
        cv: null,
      }));
    } catch (err) {
      setStatus("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row bg-[#f5f5f5]">

        {/* LEFT: VIDEO + TEXT */}
        <div className="relative flex items-center p-14 md:p-16 overflow-hidden w-full md:w-1/2 min-h-[60vh] md:min-h-screen">
          {/* LOGO */}
          <a href="/" className="absolute z-20 top-5 left-5 md:top-6 md:left-6">
            <img src="/logo.png" alt="Ardent Co." className="w-[70px] h-[70px] md:w-[90px] md:h-[90px]" />
          </a>

          {/* 🎥 Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/vid-bg.mp4" type="video/mp4" />
          </video>

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <h1 className={`${playfair.className} text-5xl lg:text-6xl leading-tight text-black`}>
              Where Brands Meet <br />
              The <span className="text-blue-800 font-black">Right Creators</span>
            </h1>

            <p className="mt-6 mb-8 text-gray-700 text-lg leading-relaxed">
              Ardent Co. is an influencer and creator marketing agency that helps brands find the right voices, create authentic collaborations, and turn creator content into meaningful brand visibility.
            </p>

            <button
              type="button"
              onClick={() => openContactSection("client")}
              className="inline-block px-6 py-3 bg-blue-800 text-white rounded-md font-semibold hover:bg-blue-900 transition"
            >
              Get Quote Now
            </button>
          </div>
        </div>

        {/* RIGHT: STATS ON BLUE */}
        <div className="relative flex items-center w-full md:w-1/2 min-h-[40vh] md:min-h-screen bg-blue-800 px-10 md:px-16 py-16">
          <div className="flex flex-col gap-10">

            {/* Stat 1 */}
            <div>
              <h2 className="text-6xl lg:text-7xl font-black text-blue-200">
                100+
              </h2>
              <p className="mt-2 text-2xl text-white">
                creator <br/> collaborations
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <h2 className="text-6xl lg:text-7xl font-black text-blue-200">
                100M+
              </h2>
              <p className="mt-2 text-2xl text-white leading-snug">
                audience reached
              </p>
            </div>

            {/* Stat 3 */}
            <p className={`${playfair.className} text-xl lg:text-2xl text-white font-bold leading-snug`}>
              across leading creators, <br/>influencers &amp; digital <br/>communities
            </p>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
<section className="py-20 bg-[#f5f5f5]">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <h2 className={`${playfair.className} text-4xl lg:text-5xl text-blue-800 mb-12`}>
      Our Services
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Card 1 */}
      <div className="p-8 rounded-2xl bg-blue-100">
        <h3 className={`${playfair.className} text-xl font-bold mb-3`}>
          Creator Strategy &amp; <br />Planning
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          We build creator strategies around your brand goals, audience, platform and campaign objectives.
        </p>
      </div>

      {/* Card 2 (Highlighted) */}
      <div className="p-8 rounded-2xl bg-blue-800 text-white">
        <h3 className={`${playfair.className} text-xl font-bold mb-3`}>
          Influencer Discovery <br />&amp; Selection
        </h3>
        <p className="text-base leading-relaxed">
          We identify creators who fit your brand, audience, content style and campaign requirements.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-8 rounded-2xl border-2 border-black">
        <h3 className={`${playfair.className} text-xl font-bold mb-3`}>
          Creator Campaign <br />Management
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          We manage campaigns end-to-end, from creator outreach and negotiations to execution and delivery.
        </p>
      </div>

      {/* Card 4 */}
      <div className="p-8 rounded-2xl border-2 border-blue-200">
        <h3 className={`${playfair.className} text-xl font-bold mb-3`}>
          Content Creation
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          We work with creators to develop content that feels natural to their audience while staying true to your brand.
        </p>
      </div>

      {/* Card 5 */}
      <div className="p-8 rounded-2xl border-2 border-blue-800">
        <h3 className={`${playfair.className} text-xl font-bold mb-3`}>
          Creator Seeding &amp; Gifting
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          We help brands put products in the hands of relevant creators and build organic conversations around them.
        </p>
      </div>

      {/* Card 6 */}
      <div className="p-8 rounded-2xl bg-blue-100">
        <h3 className={`${playfair.className} text-xl font-bold mb-3`}>
          Campaign Insights
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          We track campaign performance and turn creator activity into clear, actionable insights.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-12 text-center">
      <button
        type="button"
        onClick={() => openContactSection("client")}
        className="inline-block px-8 py-3 bg-blue-800 text-white rounded-md font-semibold hover:bg-blue-900 transition"
      >
        Get Quote Now
      </button>
    </div>
  </div>
</section>

{/* TESTIMONIAL + MEDIA SECTION */}
<section className="w-full">

  <div className="grid lg:grid-cols-2">

    {/* LEFT SIDE */}
    <div className="flex flex-col">

      {/* Top Light Blue Block */}
      <div className="bg-blue-100 p-10 lg:p-16">
        <h2 className={`${playfair.className} text-4xl lg:text-5xl text-black leading-tight`}>
          <span className="italic font-bold">Hear</span> <br />
          from our <br />
          <span className="font-bold ps-32">Clients</span>
        </h2>
      </div>

      {/* Bottom Content */}
      <div className="bg-blue-800 p-10 lg:p-[90px] h-full lg:min-h-[650px] relative overflow-hidden">

  {/* Slides */}
  <div className="transition-all duration-700 ease-in-out">
    <p className="text-blue-100 text-lg leading-relaxed">
      {testimonials[current].text}
    </p>

    <p className="mt-6 text-lg text-blue-100">
      {testimonials[current].role},<br />
      <span className="font-bold text-white">
        {testimonials[current].company}
      </span>
    </p>
  </div>

  {/* Dots */}
  <div className="flex gap-3 mt-8">
    {testimonials.map((_, index) => (
      <div
        key={index}
        onClick={() => setCurrent(index)}
        className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
          current === index ? "bg-white scale-125" : "bg-blue-400/50"
        }`}
      />
    ))}
  </div>

</div>

    </div>

    {/* RIGHT SIDE */}
    <div className="bg-white h-full overflow-hidden">

      {/* Logos Grid */}
      <div className="h-full">
            <img
              src={`/review-logo.jpeg`}
              className="w-full h-full object-cover transition block"
            />
          </div>

    </div>

  </div>

</section>

{/* CTA BANNER SECTION */}
<section className={`w-full bg-white ${showContactSection ? "lg:hidden" : ""}`}>
  <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

    {/* TEXT */}
    <div>
      <h2 className={`${playfair.className} text-5xl lg:text-6xl leading-tight text-black max-w-xl`}>
        Let&rsquo;s Get <span className="text-blue-800 font-black">Brand Seen</span>!
      </h2>

      {/* Underline Accent */}
      <div className="w-20 h-[5px] bg-black mt-6"></div>
    </div>

    {/* BUTTONS */}
    <div className="flex flex-wrap gap-4">
      <button
        type="button"
        onClick={() => openContactSection("client")}
        className={`flex items-center justify-between gap-6 px-6 py-3 rounded-md font-bold hover:opacity-90 transition ${
          formMode === "client"
            ? "bg-blue-800 text-white"
            : "bg-white text-black border-2 border-blue-800"
        }`}
      >
        I am a client
        <img src={formMode === "client" ? "/arrow-blue.png" : "/arrow-white.png"} alt="" className="size-8" />
      </button>
      <button
        type="button"
        onClick={() => openContactSection("job")}
        className={`flex items-center justify-between gap-6 px-6 py-3 rounded-md font-bold hover:opacity-90 transition ${
          formMode === "job"
            ? "bg-blue-800 text-white"
            : "bg-white text-black border-2 border-blue-800"
        }`}
      >
        Work with us?
        <img src={formMode === "job" ? "/arrow-blue.png" : "/arrow-white.png"} alt="" className="size-8" />
      </button>
    </div>

  </div>

</section>

{/* FINAL CTA + CONTACT FORM SECTION */}
{showContactSection && (
<section id="contact" ref={contactSectionRef} className="relative w-full bg-white overflow-hidden">

  {/* Blue background shape */}
  <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[55%] bg-blue-800 rounded-tl-[140px] rounded-bl-[140px]"></div>

  <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">

    {/* TEXT + TOGGLE BUTTONS (desktop only, mobile relies on the banner above) */}
    <div className="hidden lg:block">
      <h2 className={`${playfair.className} text-5xl lg:text-6xl leading-tight text-black max-w-xl`}>
        Let&rsquo;s Get <br /><span className="text-blue-800 font-black">Brand Seen</span>!
      </h2>

      {/* Underline Accent */}
      <div className="w-20 h-[5px] bg-black mt-6"></div>

      {/* Toggle Buttons */}
      <div className="flex flex-col gap-4 mt-10 max-w-xs">
        <button
          type="button"
          onClick={() => setFormMode("client")}
          className={`flex items-center justify-between gap-6 px-6 py-3 rounded-md font-bold transition ${
            formMode === "client"
              ? "bg-blue-800 text-white"
              : "bg-white text-black border-2 border-blue-800"
          }`}
        >
          I am a client
          <img
            src={formMode === "client" ? "/arrow-blue.png" : "/arrow-white.png"}
            alt=""
            className="size-8"
          />
        </button>

        <button
          type="button"
          onClick={() => setFormMode("job")}
          className={`flex items-center justify-between gap-6 px-6 py-3 rounded-md font-bold transition ${
            formMode === "job"
              ? "bg-blue-800 text-white"
              : "bg-white text-black border-2 border-blue-800"
          }`}
        >
          Work with us?
          <img
            src={formMode === "job" ? "/arrow-blue.png" : "/arrow-white.png"}
            alt=""
            className="size-8"
          />
        </button>
      </div>
    </div>

    {/* FORM CARD */}
    <div className="relative bg-white p-8 md:p-10 w-full min-w-0 max-w-md lg:ml-auto">
      {formMode === "client" ? (
        <form onSubmit={handleClientSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-black font-bold mb-1 text-sm">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div className="flex flex-col w-full sm:w-1/2">
              <label htmlFor="companyName" className="text-black font-bold mb-1 text-sm">Company Name</label>
              <input
                type="text"
                id="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label htmlFor="designation" className="text-black font-bold mb-1 text-sm">Designation</label>
              <input
                type="text"
                id="designation"
                placeholder="Designation"
                value={formData.designation}
                onChange={(e) => handleInputChange("designation", e.target.value)}
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-black font-bold mb-1 text-sm">Company Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-black font-bold mb-1 text-sm">Phone number</label>
            <div className="flex gap-2">
              <select className="px-3 py-2 border border-black rounded-md bg-black text-white font-bold">
                <option>IND</option>
              </select>
              <input
                type="tel"
                id="phone"
                placeholder="+91xxxxxxxxxx"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="flex-grow min-w-0 px-4 py-2 border border-black rounded-md focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-black font-bold mb-1 text-sm">Message</label>
            <textarea
              id="message"
              placeholder="Leave us Message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="w-full px-4 py-2 border border-black rounded-md resize-none focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex mx-auto bg-black text-white font-bold py-2.5 px-6 rounded-md justify-center disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Book a call with us"}
          </button>

          {status && <p className="text-sm text-center font-bold text-black">{status}</p>}
        </form>
      ) : (
        <form onSubmit={handleJobSubmit} className="space-y-5">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div className="flex flex-col w-full sm:w-1/2">
              <label htmlFor="jobFirstName" className="text-black font-bold mb-1 text-sm">First name</label>
              <input
                type="text"
                id="jobFirstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label htmlFor="jobLastName" className="text-black font-bold mb-1 text-sm">Last name</label>
              <input
                type="text"
                id="jobLastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="jobEmail" className="text-black font-bold mb-1 text-sm">Email</label>
            <input
              type="email"
              id="jobEmail"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="jobPhone" className="text-black font-bold mb-1 text-sm">Phone number</label>
            <div className="flex gap-2">
              <select className="px-3 py-2 border border-black rounded-md bg-black text-white font-bold">
                <option>IND</option>
              </select>
              <input
                type="tel"
                id="jobPhone"
                placeholder="+91xxxxxxxxxx"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="flex-grow min-w-0 px-4 py-2 border border-black rounded-md focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="department" className="text-black font-bold mb-1 text-sm">Choose Department</label>
            <select
              required
              id="department"
              value={formData.department}
              onChange={(e) => handleInputChange("department", e.target.value)}
              className="w-full px-4 py-2 border border-black rounded-md focus:outline-none cursor-pointer"
            >
              <option value="">Select Department</option>
              <option value="Public Relations">Public Relations</option>
              <option value="Public Policy">Public Policy</option>
              <option value="Digital Communications">Digital Communications</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="upload" className="text-black font-bold mb-1 text-sm">Select your CV</label>
            <input
              required
              accept=".pdf, .doc, .docx"
              type="file"
              id="upload"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  cv: e.target.files ? e.target.files[0] : null,
                }))
              }
              className="w-full max-w-full text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex mx-auto bg-black text-white font-bold py-2.5 px-6 rounded-md justify-center disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Submit Application"}
          </button>

          {status && <p className="text-sm text-center font-bold text-black">{status}</p>}
        </form>
      )}
    </div>

  </div>

</section>
)}
    </>
  );
}
