import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:esyuec@gmail.com?subject=${encodeURIComponent(
      subject || "Contact from Website"
    )}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const isValid = formData.name && formData.email && formData.message;

  return (
    <div className="pt-24 px-24 text-slate-500 mx-20">
      <h1 className="px-24 text-3xl font-bold mt-8 mb-8">let's connect</h1>
      <p className="px-24 text-xl font-bold">i'd love to hear from you!</p>
      <p className="px-24 text-xl font-bold text-justify">
        whether you have a question about my projects, want to collaborate, or
        just want to say hi, feel free to reach out. you can find me on:
      </p>

      <ul className="gap-12 px-0 md:px-24 mt-12 flex flex-wrap gap-6 text-xl font-bold justify-center">
        <li>
          <a
            href="https://www.linkedin.com/in/estychen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-300 transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/yuyucodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-300 transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
            GitHub
          </a>
        </li>
        <li>
          <a
            href="mailto:esyuec@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-300 transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
          </svg>
            Email
          </a>
        </li>
      </ul>

      {/* Email Contact Form */}
      <div className="px-6 md:px-24 mt-12 mb-16 w-full">
        <h2 className="text-2xl font-bold mb-6 text-slate-500">
          send me a message:
        </h2>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="your name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="your email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="subject (optional)"
            value={formData.subject}
            onChange={handleChange}
            className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
          />

          <textarea
            name="message"
            placeholder="your message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors resize-none"
          />

          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              isValid
                ? "bg-slate-600 text-slate-200 hover:bg-slate-500 cursor-pointer"
                : "bg-slate-800 text-slate-600 cursor-not-allowed"
            }`}
          >
            {submitted ? "opening mail client ✓" : "send message"}
          </button>
        </div>
      </div>
    </div>
  );
}