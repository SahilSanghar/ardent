"use client";

import PRForm from "@/app/components/PRForm";

export default function PRHeroWithForm() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen grid lg:grid-cols-2 bg-[#f5f5f5]">
        
        {/* LEFT SIDE - VIDEO + TEXT */}
        <div className="relative flex items-center justify-center p-10 overflow-hidden">
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
            <h1 className="font-serif text-5xl lg:text-6xl leading-tight text-black">
              Turning <br />
              <span className="text-cyan-500">Your Story</span> <br />
              Into News
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Ardent Co. is a PR agency in India that turns your story into credible media presence, securing meaningful coverage, company features, leadership narratives, interviews, and high-impact visibility when it matters most.
            </p>

            <button className="mt-6 px-6 py-3 bg-cyan-500 text-white rounded-md">
              Get Quote Now
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="flex items-center justify-center p-8 bg-[#f5f5f5]">
          <PRForm />
        </div>
      </section>

      {/* 🔥 STATS SECTION (CONTINUES BELOW) */}
      <section className="relative w-full py-20 text-white overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/number-bg.jpeg"
            alt="background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* Stat 1 */}
          <div>
            <h2 className="-mt-9 text-5xl lg:text-6xl font-bold text-cyan-400">
              15000+
            </h2>
            <p className="mt-2 text-2xl text-gray-300">
              media coverages
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold text-cyan-400">
              12M+
            </h2>
            <p className="mt-2 text-2xl text-gray-300 leading-snug">
              avg readership <br />
              potentially achieved
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="text-lg lg:text-2xl text-cyan-400 font-semibold leading-snug">
              across leading healthcare, national and regional news publications
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
<section className="py-20 bg-[#f5f5f5]">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-4xl lg:text-5xl font-serif text-black mb-12">
      Our Services
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Card 1 */}
      <div className="p-6 rounded-2xl bg-gray-200">
        <h3 className="text-xl font-semibold mb-3">
          Brand and Narrative Development
        </h3>
        <p className="text-lg text-gray-700">
          We define your voice, positioning, and messaging architecture from the ground up. Ensuring a clear, consistent, and credible brand across all touchpoints.
        </p>
      </div>

      {/* Card 2 (Highlighted) */}
      <div className="p-6 rounded-2xl bg-cyan-500 text-black">
        <h3 className="text-xl font-semibold mb-3">
          Corporate Communications
        </h3>
        <p className="text-lg">
          We deliver structured, multi stakeholder communication across business, product, and leadership messaging. Ensuring alignment, clarity, and consistency across internal and external narratives.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 rounded-2xl border border-black">
        <h3 className="text-xl font-semibold mb-3">
          Media Relations and Visibility
        </h3>
        <p className="text-lg text-gray-700">
          We secure meaningful media coverage through strong journalist relationships and strategic outreach. Driving visibility across platforms that shape audience perception and industry presence.
        </p>
      </div>

      {/* Card 4 */}
      <div className="p-6 rounded-2xl bg-cyan-100">
        <h3 className="text-xl font-semibold mb-3">
          Reputation and Trust Management
        </h3>
        <p className="text-lg text-gray-700">
          We shape and strengthen how your brand is perceived through proactive storytelling and engagement. Helping you build credibility, manage risks, and sustain long term trust.
        </p>
      </div>

      {/* Card 5 */}
      <div className="p-6 rounded-2xl border border-cyan-500">
        <h3 className="text-xl font-semibold mb-3">
          Crisis and Issues Communication
        </h3>
        <p className="text-lg text-gray-700">
          We prepare you for high stakes moments with crisis frameworks and rapid response strategies. Ensuring clear communication that protects reputation and maintains stakeholder confidence.
        </p>
      </div>

      {/* Card 6 (Dark Premium) */}
      <div className="p-6 rounded-2xl bg-black text-white">
        <h3 className="text-xl font-semibold mb-3">
          Leadership and Executive Communications
        </h3>
        <p className="text-lg text-gray-300">
          We position your leadership as credible, influential voices within your industry. Building authority through thought leadership, media presence, and strategic messaging.
        </p>
      </div>

    </div>
  </div>
</section>

{/* TESTIMONIAL + MEDIA SECTION */}
<section className="w-full">

  <div className="grid lg:grid-cols-2">

    {/* LEFT SIDE */}
    <div className="flex flex-col">

      {/* Top Cyan Block */}
      <div className="bg-cyan-500 p-10 lg:p-16">
        <h2 className="text-4xl lg:text-5xl font-serif text-black leading-tight">
          <span className="italic font-bold">Hear</span> <br />
          from our <br />
          <span className="font-bold ps-32">Clients</span>
        </h2>
      </div>

      {/* Bottom Content */}
      <div className="bg-cyan-100 p-10 lg:p-[90px]">
        <p className="text-gray-800 text-lg leading-relaxed">
          Their strategic communication planning and premium media placements have helped us build a strong narrative in a competitive market. Ardent Co. demonstrates a clear understanding of luxury positioning and ensures our projects receive the right attention.
        </p>

        <p className="mt-6 text-lg text-gray-700">
          Chief Marketing Officer,<br />
          <span className="font-bold">Luxury Real Estate Developer</span>
        </p>

        <p className="mt-4 text-[64px]">.....</p>
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="bg-[#f5f5f5]">

      {/* Logos Grid */}
      <div className="">
            <img
              src={`/review-logo.jpeg`}
              className="object-contain transition"
            />
          </div>

    </div>

  </div>

</section>

{/* FINAL CTA SECTION (REVERSED HERO) */}
<section className="min-h-screen grid lg:grid-cols-2">

  {/* LEFT SIDE - FORM */}
  <div className="flex items-center justify-center p-8 bg-[#f5f5f5]">
    <PRForm />
  </div>

  {/* RIGHT SIDE - TEXT */}
  <div className="relative flex items-center justify-center p-10 overflow-hidden">
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
    <div className="relative z-10 max-w-xl text-left">
      <h2 className="font-serif text-5xl lg:text-6xl leading-tight text-black">
        Let’s Get <br />
        <span className="text-cyan-500">Your Story</span> <br />
        Out!
      </h2>

      {/* Underline Accent */}
      <div className="w-16 h-1 mt-6"></div>
    </div>

  </div>

</section>
    </>
  );
}