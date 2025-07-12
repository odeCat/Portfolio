"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus("Message sent successfully!")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("Failed to send message.")
      }
    } catch (error) {
      console.error(error)
      setStatus("Failed to send message.")
    }
  }

  return (
    <div className="bg-simple-gradient min-h-screen">
      <header className="sticky top-0 z-50 animate-fade-in py-4">
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/50 backdrop-blur-lg shadow-lg rounded-2xl p-2 border border-white/20">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-theme-primary px-4" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              <img src="/C logo.png" alt="Catherine Logo" className="h-10 w-10 object-cover rounded-2xl mr-2" loading="lazy" />
            </Link>
            <nav className="flex space-x-1">
              <Link
                href="/#projects"
                className="text-sm sm:text-base text-theme-primary/80 hover:text-theme-primary px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition-colors duration-300 hover:bg-theme-primary/10"
              >
                Projects
              </Link>
              <Link
                href="/#skills"
                className="text-sm sm:text-base text-theme-primary/80 hover:text-theme-primary px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition-colors duration-300 hover:bg-theme-primary/10"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="text-sm sm:text-base text-theme-primary font-bold px-3 py-1 sm:px-4 sm:py-2 rounded-lg bg-theme-primary/10"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex items-center justify-center py-12 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col justify-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-header mb-4 text-theme-primary">Contact Me</h1>
            <p className="font-alt text-sm uppercase tracking-widest text-theme-primary mb-4">Let's Connect</p>
            <p className="text-theme-primary mb-8 max-w-md">
              Have a project in mind, want to collaborate, or just want to say hello? Fill out the form and I'll get
              back to you soon!
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://www.facebook.com/catherine.olleres"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-primary hover:text-theme-accent transition-colors"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/catherine-olleres/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-primary hover:text-theme-accent transition-colors"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/catherineolleres"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-primary hover:text-theme-accent transition-colors"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-white/60">
              <CardHeader>
                <CardTitle className="font-header text-2xl text-theme-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-theme-text-primary mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-white/10 border-theme-text-secondary focus:ring-theme-accent focus:border-theme-accent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-theme-text-primary mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/10 border-theme-text-secondary focus:ring-theme-accent focus:border-theme-accent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-theme-text-primary mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="bg-white/10 border-theme-text-secondary focus:ring-theme-accent focus:border-theme-accent"
                      rows={6}
                      placeholder="Your message"
                    />
                  </div>
                  <div>
                    <Button type="submit" className="w-full bg-theme-accent hover:bg-theme-accent/90 text-white">
                      Send Message
                    </Button>
                  </div>
                </form>
                {status && (
                  <p className="mt-4 text-center text-theme-text-secondary">{status}</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-theme-text-primary text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center relative">
          <div className="absolute left-4 sm:left-6 lg:left-8">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-black">
              <span className="font-bold text-xl font-bebas text-white">N</span>
            </div>
          </div>
          <p className="text-sm text-gray-300">&copy; 2025 Catherine A. Olleres. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 