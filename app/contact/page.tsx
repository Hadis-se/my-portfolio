"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_qf3xe8k",
        "template_iswncsq",
        emailParams,
        "8zB0UY6YHFFcKX04r"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section className="contact-page flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="bg-white/80 dark:bg-gray-900/80 p-8 md:p-10 rounded-xl shadow-lg backdrop-blur-lg border border-gray-300 dark:border-gray-700 max-w-lg w-full">
        {!submitted && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              Contact Me
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              I&apos;d love to hear from you! Fill out the form below to get in touch.
            </p>
          </>
        )}

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-100 dark:bg-gray-800 transition-all duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-100 dark:bg-gray-800 transition-all duration-200"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-100 dark:bg-gray-800 transition-all duration-200"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        ) : (
          <p className="text-xl md:text-2xl font-semibold text-green-500 bg-white/60 dark:bg-gray-800/60 p-6 rounded-lg shadow-md text-center">
            ✅ Thank you for your message! I&apos;ll get back to you soon.
          </p>
        )}
      </div>
    </section>
  );
}
