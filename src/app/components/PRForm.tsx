"use client";

import { useRouter } from "next/navigation";
import { useState, type ChangeEvent, type FormEvent, type InputHTMLAttributes } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const initialForm = {
  firstName: "",
  lastName: "",
  companyName: "",
  designation: "",
  email: "",
  phone: "",
  message: "",
};

export default function PRForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "lead_form_submit",
          form: "ardentco-pr-agency",
        });

        router.replace("/ardentco-pr-agency/success");
        return;
      }

      setStatus("Something went wrong.");
    } catch (err) {
      setStatus("Network error.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
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
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-md font-semibold disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Sending..." : "Book a call with us"}
      </button>

      {/* Status */}
      {status && <p className="text-sm text-center font-medium">{status}</p>}
    </form>
  );
}

/* Reusable Input */
function Input({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
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
