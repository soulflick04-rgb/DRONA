import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import Loader from "./components/Loader";
import Button from "./components/Button";
import logo from "./assets/logo.png";

export default function Home() {
  const userName = localStorage.getItem("name");
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [joining, setJoining] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const joinNewsletter = async () => {
    if (!subscriberEmail) return alert("Enter email");
    try {
      setJoining(true);
      await addDoc(collection(db, "subscribers"), {
        email: subscriberEmail,
        createdAt: serverTimestamp(),
      });
      alert("Joined successfully 🚀");
      setSubscriberEmail("");
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setJoining(false);
    }
  };

  const features = [
    {
      title: "AI Career Roadmaps",
      description: "Get personalized AI-generated career paths based on your goals and skills.",
      icon: "🗺️"
    },
    {
      title: "Skill Gap Analysis",
      description: "Identify missing skills and understand what to learn next.",
      icon: "📊"
    },
    {
      title: "Internship Guidance",
      description: "Find the right internships, projects, and preparation strategies.",
      icon: "💼"
    },
    {
      title: "Resume Optimization",
      description: "Build strong resumes and portfolios that improve job opportunities.",
      icon: "📄"
    },
    {
      title: "AI Mock Interviews",
      description: "Practice HR and Technical interviews with real-time AI feedback.",
      icon: "🎤"
    },
    {
      title: "Future Predictions",
      description: "Understand future industry trends, demand, and salary growth.",
      icon: "📈"
    },
  ];

  return (
    <>
      {loading && <Loader />}
      <div className="min-h-screen bg-background text-text-primary overflow-x-hidden selection:bg-primary selection:text-white font-sans scroll-smooth">
        
        {/* Dynamic Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
          <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-primary-dark/15 rounded-full blur-[130px] mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        </div>

        {/* Navbar */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-2xl z-50 glass-card shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between px-6 py-4">
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => {
                const newCount = logoClicks + 1;
                setLogoClicks(newCount);
                if (newCount >= 5) {
                  window.location.href = "/admin";
                  setLogoClicks(0);
                }
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
                D
              </div>
              <h1 className="text-2xl font-black tracking-tight text-white font-heading">
                Drona
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-8 text-text-secondary text-sm font-medium">
              <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              {userName ? (
                <Button to="/dashboard" variant="primary" size="sm">Dashboard</Button>
              ) : (
                <>
                  <Button to="/auth" variant="ghost" size="sm">Login</Button>
                  <Button to="/auth" variant="primary" size="sm">Get Started</Button>
                </>
              )}
            </div>

            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-2xl text-white">
              ☰
            </button>
          </div>
        </nav>

        {mobileMenu && (
          <div className="md:hidden fixed top-24 left-4 right-4 glass-card rounded-2xl p-6 z-50 shadow-2xl flex flex-col gap-4">
            <a href="#how-it-works" className="text-lg">How it works</a>
            <a href="#features" className="text-lg">Features</a>
            <a href="#pricing" className="text-lg">Pricing</a>
            <hr className="border-white/10 my-2" />
            {userName ? (
              <Button to="/dashboard" variant="primary">Dashboard</Button>
            ) : (
              <Button to="/auth" variant="primary">Get Started</Button>
            )}
          </div>
        )}

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6 text-center lg:pt-48 lg:pb-32 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary-light text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            Optimize Your Workflow with AI
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight max-w-5xl"
          >
            See what matters.<br/>
            Understand what it means.<br/>
            <span className="bg-gradient-to-r from-primary-light via-secondary to-primary bg-clip-text text-transparent">Move forward with clarity.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-text-secondary max-w-2xl font-light"
          >
            Drona is an intelligent career platform that clarifies your path, analyzes your skills, and builds the roadmap you need to grow seamlessly.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button to={userName ? "/dashboard" : "/auth"} size="lg" variant="primary">
              Start Free Trial &rarr;
            </Button>
            <Button to="#features" size="lg" variant="secondary">
              Explore Platform
            </Button>
          </motion.div>

          {/* Abstract App Preview Graphic */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 w-full max-w-5xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent blur-3xl -z-10 rounded-full"></div>
            <div className="glass-card rounded-[2rem] p-4 md:p-8 shadow-2xl border-t border-white/20">
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="px-4 py-1.5 bg-surface-soft rounded-lg text-xs text-text-secondary">drona-workspace</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div className="bg-surface-soft rounded-2xl p-6 border border-white/5">
                    <div className="h-4 w-32 bg-white/10 rounded-full mb-6"></div>
                    <div className="flex items-end gap-2 h-32">
                      {[40, 70, 45, 90, 65, 80, 55, 30].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary/20 rounded-t-sm transition-all hover:bg-primary/50 relative group" style={{ height: `${h}%` }}>
                          {i === 3 && <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs py-1 px-2 rounded">Optimal</div>}
                          {i === 3 && <div className="absolute inset-0 bg-gradient-to-t from-primary/0 to-primary/80 rounded-t-sm"></div>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-surface to-surface-soft rounded-2xl p-6 border border-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-2xl"></div>
                    <div className="text-sm text-text-secondary mb-2">Skill Match Score</div>
                    <div className="text-4xl font-black text-white">94%</div>
                    <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[94%] shadow-[0_0_10px_#8b5cf6]"></div>
                    </div>
                  </div>
                  <div className="bg-surface-soft rounded-2xl p-6 border border-white/5 h-32 flex flex-col justify-between">
                    <div className="h-2 w-full bg-white/10 rounded-full"></div>
                    <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                    <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Trust Logos */}
        <section className="py-10 border-y border-white/5 bg-surface/30">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm text-text-secondary mb-8">Trusted by ambitious students and professionals worldwide</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
              {/* Placeholder text for logos */}
              <div className="text-xl font-bold tracking-widest font-heading">TECHCORP</div>
              <div className="text-xl font-bold tracking-widest font-heading">INNOVATE</div>
              <div className="text-xl font-bold tracking-widest font-heading">GLOBALAI</div>
              <div className="text-xl font-bold tracking-widest font-heading">FUTUREWORKS</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary-light text-sm font-semibold tracking-wider uppercase mb-2 block">— Core Capabilities</span>
              <h2 className="text-3xl md:text-5xl font-black">Accelerate your growth using<br/>streamlined AI intelligence.</h2>
              <p className="mt-4 text-text-secondary max-w-2xl mx-auto">All the tools you need to optimize your career path, enhance skills, and grow confidently. Fueled by Drona's advanced modeling.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="glass-card p-8 rounded-3xl hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button to="/auth" variant="secondary">Explore All Features &rarr;</Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-background pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  D
                </div>
                <h2 className="text-xl font-black text-white font-heading">Drona</h2>
              </div>
              <p className="text-text-secondary max-w-xs mb-8 text-sm">
                The premier AI platform for career mapping, skill analysis, and interview preparation.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-surface border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary w-64"
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                />
                <Button variant="primary" size="sm" onClick={joinNewsletter} isLoading={joining}>Subscribe</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><Link to="/ai-roadmap" className="hover:text-primary transition-colors">Roadmaps</Link></li>
                <li><Link to="/resume-analyzer" className="hover:text-primary transition-colors">Resume AI</Link></li>
                <li><Link to="/mock-interview" className="hover:text-primary transition-colors">Interviews</Link></li>
                <li><Link to="/ai-chat" className="hover:text-primary transition-colors">AI Mentor</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center md:text-left text-text-secondary text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Drona. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <span>Twitter</span>
              <span>LinkedIn</span>
              <span>GitHub</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
