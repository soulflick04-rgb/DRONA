import { useState } from "react";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

export default function Contact() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await addDoc(
        collection(db, "contacts"),
        {

          name,

          email,

          message,

          createdAt:
            serverTimestamp(),
        }
      );

      alert(
        "Message sent successfully 🚀"
      );

      setName("");

      setEmail("");

      setMessage("");

    } catch (error) {

      console.log(error);

      alert(
        "Something went wrong"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-background text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-semibold mb-6">

            🚀 Contact Drona

          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            Let’s Build Your

            <span className="block text-primary-light">

              Future Together

            </span>

          </h1>

          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">

            Have questions, suggestions, feedback,
            or collaboration ideas?
            We’d love to hear from you.

          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="space-y-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-4">

                📧 Email

              </h2>

              <p className="text-gray-400 text-lg">

                drona.ai@gmail.com

              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-4">

                🌍 Location

              </h2>

              <p className="text-gray-400 text-lg">

                India

              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-4">

                🤝 Collaboration

              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">

                Partnerships,
                internships,
                startup opportunities,
                and AI collaborations.

              </p>

            </div>

          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl"
          >

            <h2 className="text-4xl font-black mb-10">

              Send Message

            </h2>

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 outline-none px-6 py-5 rounded-2xl"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 outline-none px-6 py-5 rounded-2xl"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                required
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 outline-none px-6 py-5 rounded-2xl resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary-light to-secondary hover:scale-[1.02] text-black py-5 rounded-2xl font-black text-lg transition duration-300"
              >

                {
                  loading

                    ? "Sending..."

                    : "Send Message 🚀"
                }

              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}