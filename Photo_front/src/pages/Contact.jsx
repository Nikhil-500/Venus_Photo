import { useState } from "react";
import Pagex from "../components/Pagex";
import { sendContactEmail } from "../api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true });
    const res = await sendContactEmail(form);
    if (res?.success) {
      setStatus({ success: true, msg: "Message sent — we will contact you soon." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus({ error: true, msg: res?.error?.message || "Send failed. Try again later." });
    }
  }

  return (
    <Pagex title="Contact" subtitle="Get in touch for bookings & queries">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input required placeholder="Your name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}
            className="p-3 rounded-lg bg-bgPrimary/70 border border-zinc-700" />
          <input required type="email" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}
            className="p-3 rounded-lg bg-bgPrimary/70 border border-zinc-700" />
          <input placeholder="Phone (optional)" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})}
            className="p-3 rounded-lg bg-bgPrimary/70 border border-zinc-700" />
          <textarea required rows="6" placeholder="Message" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})}
            className="p-3 rounded-lg bg-bgPrimary/70 border border-zinc-700" />
          <button type="submit" className="py-3 px-6 bg-accent text-bgPrimary rounded-lg font-semibold">
            {status?.loading ? "Sending..." : "Send Message"}
          </button>

          {status?.success && <p className="text-green-400 mt-2">{status.msg}</p>}
          {status?.error && <p className="text-rose-400 mt-2">{status.msg}</p>}
        </form>
      </div>
    </Pagex>
  );
}
