"use client";

import { useState } from "react";

export default function PRForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    designation: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/pr-client-submit", {
        method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Success! We’ll get back to you.");
        setForm({
          firstName: "",
          lastName: "",
          companyName: "",
          designation: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong.");
      }
    } catch (err) {
      setStatus("Network error.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-5"
    >
      {/* Name */}
      <div className="grid grid-cols-2 gap-4">
        <Input label="First name" name="firstName" value={form.firstName} onChange={handleChange} />
        <Input label="Last name" name="lastName" value={form.lastName} onChange={handleChange} />
      </div>

      {/* Company */}
      <div className="grid grid-cols-2 gap-4">
        <Input label="Company Name" name="companyName" value={form.companyName} onChange={handleChange} />
        <Input label="Designation" name="designation" value={form.designation} onChange={handleChange} />
      </div>

      {/* Email */}
      <Input label="Company Email" name="email" value={form.email} onChange={handleChange} />

      {/* Phone */}
      <div>
        <label className="text-sm font-semibold text-black mb-1 block">
          Phone number
        </label>
        <div className="flex gap-2">
          <select className="px-3 py-2 border border-black rounded bg-black text-white font-bold">
            <option>IND</option>
          </select>
          <input
            name="phone"
            placeholder="+91xxxxxxxxxx"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-black rounded outline-none"
            required
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="text-sm font-semibold text-black mb-1 block">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Leave us Message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-black rounded h-24 resize-none outline-none"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-md font-semibold"
      >
        {loading ? "Sending..." : "Book a call with us"}
      </button>

      {/* Status */}
      {status && (
        <p className="text-sm text-center font-medium">{status}</p>
      )}
    </form>
  );
}

/* Reusable Input */
function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="text-sm font-semibold text-black mb-1 block">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-2 border border-black rounded outline-none"
        required
      />
    </div>
  );
}