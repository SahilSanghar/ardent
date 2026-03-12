import React from "react";
import Navbar from "../components/ui/Navbar";
// import Footer from "../components/ui/Footer";

export default function page() {
  return (
    <>
      <Navbar left={false} right={false} />

      <div className="text-white h-fit min-h-screen py-20 md:w-1/2 w-[70%] flex flex-col m-auto">
        <h1 className="text-5xl font-bold text-center my-10">Privacy Policy</h1>
        <p className="text-xl text-justify tracking-tight">
          Welcome to Ardent Co. (“Company,” “we,” “our,” or “us”). We respect
          your privacy and are committed to protecting any personal information
          you share with us. This Privacy Policy explains how we collect, use,
          and safeguard your information when you visit our website
          (https://www.ardentco.in).
        </p>
        <br />
        <p className="text-xl text-justify tracking-tight">
          By using our website, you agree to the terms of this Privacy Policy.
        </p>{" "}
        <br />
        <h2 className="text-3xl font-bold my-5">Information We Collect</h2>
        <p className="text-xl text-justify tracking-tight">
          We may collect the following types of information:
        </p>
        <ol type="A" className="list-[lower-alpha] pt-5 pl-5">
          <li>
            Personal Information (Provided by You)
            <ul className="list-disc pl-5 pt-2">
              <li>
                <strong>Contact Information - </strong> Name, email address, and
                phone number when submitted via forms.
              </li>
              <li>
                <strong>Job Application Data - </strong> Resume, work
                experience, and other details provided in job applications.
              </li>
              <li>
                <strong>Client Inquiry Data - </strong> Business details shared
                through our contact or inquiry forms.
              </li>
            </ul>
          </li>
          <li className="pt-5">
            Non-Personal Information (Collected Automatically)
            <ul className="list-disc pl-5 pt-2">
              <li>
                <strong>Website Analytics Data - </strong> IP address, browser
                type, device details, and pages visited.
              </li>
              <li>
                <strong>Cookies & Tracking Technologies - </strong> Standard
                cookies for website functionality and performance insights.
              </li>
            </ul>
          </li>
        </ol>
        <h2 className="text-3xl font-bold my-5">How We Use Your Information</h2>
        <p className="text-xl text-justify tracking-tight">
          We use the collected information to:
        </p>
        <ul className="pl-5 list-disc pt-2">
          <li>Respond to inquiries and provide services.</li>
          <li>Review job applications and process recruitment</li>
          <li>Improve our website experience and content</li>
          <li>Analyze website traffic and optimize performance</li>
        </ul>
        <h2 className="text-3xl font-bold my-5">
          Cookies & Tracking Technologies
        </h2>
        <p className="text-xl text-justify tracking-tight">
          We use cookies to enhance your browsing experience. You can manage or
          disable cookies via your browser settings.
        </p>
        <h2 className="text-3xl font-bold my-5">Sharing Your Information</h2>
        <p className="text-xl text-justify tracking-tight">
          We do not sell, trade, or rent your personal data. However, we may
          share it:
        </p>
        <ul className="pl-5 list-disc pt-2">
          <li>When required by law or regulatory authorities</li>
          <li>
            With service providers who assist in website operations (e.g.,
            hosting)
          </li>
        </ul>
        <h2 className="text-3xl font-bold my-5">Data Security</h2>
        <p className="text-xl text-justify tracking-tight">
          We take reasonable measures to protect your personal data from
          unauthorized access, alteration, or disclosure. However, no online
          system is entirely secure, so we encourage caution when sharing
          information.
        </p>
        <h2 className="text-3xl font-bold my-5">Third-Party Links</h2>
        <p className="text-xl text-justify tracking-tight">
          Our website may contain links to external sites. We are not
          responsible for their privacy practices, and we recommend reviewing
          their policies before sharing information.
        </p>
        <h2 className="text-3xl font-bold my-5">Your Rights & Choices</h2>
        <p className="text-xl text-justify tracking-tight">
          You have the right to:
        </p>
        <ul className="pl-5 list-disc pt-2">
          <li>Request access to your personal information</li>
          <li>Ask for corrections or deletion of your data</li>
          <li>Opt out of communications</li>
        </ul>
        <p className="text-xl text-justify tracking-tight pt-2">
          To exercise your rights, contact us at contactus@ardentco.in.
        </p>
        <h2 className="text-3xl font-bold my-5">Updates to This Policy</h2>
        <p className="text-xl text-justify tracking-tight">
          We may update this Privacy Policy from time to time. Changes will be
          reflected on this page with an updated effective date.
        </p>
        <h2 className="text-3xl font-bold my-5">Contact Us</h2>
        <p className="text-xl text-justify tracking-tight">
          For any questions regarding this Privacy Policy, reach out to us at:
        </p>
        <br />
        <p className="text-xl text-justify tracking-tight">
          Email: contactus@ardentco.in
        </p>
      </div>
      {/* <Footer/> */}
    </>
  );
}
