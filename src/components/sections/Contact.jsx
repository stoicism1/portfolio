import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="min-h-screen py-16 bg-background text-white">
  <RevealOnScroll>
    {/* Top Header Centered */}
    <div className="max-w-4xl mx-auto px-6 text-center mb-12">
      <h2 className="text-3xl font-bold text-amber-400">Get In Touch</h2>
      <p className="text-gray-400 mt-4">
        Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
      </p>
    </div>

    {/* Two-column Flex Layout with Equal Height */}
    <div className="max-w-7xl mx-auto px-6 md:flex md:gap-12 items-stretch">
      
      {/* Left - Contact Info */}
      <div className="w-full md:w-1/2 bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col justify-between">
        <ul className="space-y-6 text-sm">
        <li className="text-2xl font-bold">
            <span>Contact Information</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-amber-400" />
            <span>srilakshmireddysanikommu@gmail.com</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-amber-400" />
            <span>+1 (502) 509-6866</span>
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>United States</span>
          </li>
          <li className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-amber-400" />
            <a
              href="https://calendly.com/srilakshmireddysanikommu/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition"
            >
              Schedule a 30-min Meeting
            </a>
          </li>
        </ul>
      </div>

      {/* Right - Form */}
      <form
        className="w-full md:w-1/2 mt-10 md:mt-0 bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col justify-between space-y-6"
        onSubmit={handleSubmit}
      >
        <p className="text-2xl font-bold">Send Me a Message</p>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition"
        />

        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition"
        />

        <button
          type="submit"
          className="bg-amber-400 text-black font-medium py-3 px-6 rounded-lg hover:bg-amber-500 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </RevealOnScroll>
</section>

  );
};
