import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { PROFILE } from "../data/content";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess("Your message has been sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Oops! Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-slate-400">
              I'm currently available for freelance work and full-time positions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-white transition-colors">
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <a href={`tel:${PROFILE.phone}`} className="text-slate-400 hover:text-white transition-colors">
                    {PROFILE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-slate-400">{PROFILE.location}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-700">
                <h4 className="text-white font-medium mb-4">Connect</h4>
                <div className="flex gap-4">
                  <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 hover:bg-indigo-600 rounded-lg text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 hover:bg-indigo-600 rounded-lg text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all"
                  placeholder="project@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {success && <p className="text-green-400 font-medium">{success}</p>}
              {error && <p className="text-red-500 font-medium">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition-colors shadow-lg shadow-indigo-500/25 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
