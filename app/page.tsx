import { Github, Linkedin, Mail, Phone, MapPin, Calendar, Award, Users, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { SectionHeader } from "@/components/section-header"
import { FaJava, FaHtml5, FaCss3Alt, FaPython, FaReact, FaFigma, FaUnity, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiMysql, SiSupabase, SiFirebase, SiVsco, SiExpo, SiTypescript } from 'react-icons/si'

export default function Portfolio() {
  const projects = [
    {
      title: "Eye Check Android Application",
      description:
        "Front-end development using React Native and Expo Go with Supabase backend and machine learning integration for visual acuity testing.",
      technologies: ["JavaScript", "Expo", "React Native", "Supabase", "Machine Learning"],
      github: "https://github.com/odeCat/EyeCheckApp",
      article: "/projects", 
      live: "https://drive.google.com/file/d/1PQxTYhRryw4rWcXMXWEBJcelCD-tsygM/view?usp=sharing",
      image: "/Eyecheck Logo (1).png", 
    },
    {
      title: "CompuParts E-commerce",
      description: "Developed an E-commerce website for computer parts during my internship at Armada Logics Inc.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/odeCat/E-Commerce",
      image: "/CompuParts (2).png",
    },
    {
      title: "SM Appliance Website Recreation",
      description: "Recreated the SM Appliance Center Website within 4 hours for individual examination during my internship at Armada Logics Inc.",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/odeCat/Armada_Logics/tree/master/catherine_olleres_exam",
      image: "/sm-appliance-center.jpg",
    },
    {
      title: "Venom in a Jar",
      description: "3D modeling and rendering project created in Blender, featuring a detailed venom specimen contained in a glass jar.",
      technologies: ["Blender", "3D Modeling", "Texturing", "Rendering", "Material Design"],
      live: "https://drive.google.com/file/d/1WqOeekVRZO3C88Jso5KWyjipnpxogy5N/view?usp=sharing",
      image: "/blender.jpg",
    },
  ]

  const skills = {
    "Programming Languages": [
      { name: "Java", Icon: FaJava },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "HTML5", Icon: FaHtml5 },
      { name: "CSS3", Icon: FaCss3Alt },
      { name: "Python", Icon: FaPython },
      { name: "Typescript", Icon: SiTypescript },
    ],
    "Database Management": [
      { name: "MySQL", Icon: SiMysql },
      { name: "Supabase", Icon: SiSupabase },
      { name: "Firebase", Icon: SiFirebase },
    ],
    "Development Tools": [
      { name: "VS Code", Icon: SiVsco },
      { name: "React Native", Icon: FaReact },
      { name: "Unity", Icon: FaUnity },
      { name: "Figma", Icon: FaFigma },
      { name: "Expo Go", Icon: SiExpo },
      { name: "GitHub", Icon: FaGithub },
    ],
  }

  const certifications = [
    { name: "Basic Python Certificate", org: "Mnet IT Solutions", date: "March 2024", url: "https://courses.mnet-it.com/learn/certificate/9554817-90003" },
    {
      name: "Introduction to Machine Learning with TensorFlow",
      org: "Cebu Technological University",
      date: "March 2024",
      url: "https://drive.google.com/file/d/1QS820yL2wQpJ2SS8nibfwjxqHkqzeBd5/view"
    },
    { name: "AWS Cloud Session Tutor", org: "AWS Siklab Philippines", date: "March 2024", url: "https://drive.google.com/file/d/1FxYUHBGdenC1GLroV9L0SUl_F7odSU-8/view" },
    { name: "JavaScript Essentials 1", org: "Cisco", date: "March 2025", url: "https://www.credly.com/badges/92294e9d-01a8-4a9c-90bd-2727f0ee3468/linked_in_profile" },
    { name: "Google Analytics Certification", org: "Skillshop", date: "April 2025", url: "https://skillshop.credential.net/9400bf7c-cc05-454a-b2da-75432689b0af#acc.7VIGdT8x" },
    { name: "EF SET English Certificate", org: "EF SET", date: "May 2025", url: "https://cert.efset.org/JtVbrq" },
    { name: "2nd place 2025 Students' Research Festival", org: "UC-PNC Software Exposition", date: "May 2025", url: "https://drive.google.com/file/d/1asFxCGFar-xEt5MzqI4iiJc17QnoLEvt/view?usp=sharing"},
    { name: "SHINE Research Poster Presenter", org: "SHINE Research Conference", date: "June 2025", url: "https://drive.google.com/file/d/1axmBR6pRYNDSz21HIIStD-gSLdUQKmAh/view?usp=sharing"},
  ]

  return (
    <div className="min-h-screen bg-simple-gradient">
      {/* Header */}
      <header className="sticky top-0 z-50 animate-fade-in py-4">
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/50 backdrop-blur-lg shadow-lg rounded-2xl p-2 border border-white/20">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-theme-primary px-4" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              <img src="/C logo.png" alt="Catherine Logo" className="h-10 w-10 object-cover rounded-2xl mr-2" loading="lazy" />
            </Link>
            <nav className="flex space-x-1">
              <Link
                href="#projects"
                className="text-sm sm:text-base text-theme-primary/80 hover:text-theme-primary px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition-colors duration-300 hover:bg-theme-primary/10"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-sm sm:text-base text-theme-primary/80 hover:text-theme-primary px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition-colors duration-300 hover:bg-theme-primary/10"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="text-sm sm:text-base text-theme-primary/80 hover:text-theme-primary px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition-colors duration-300 hover:bg-theme-primary/10"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 animate-slide-up">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-2">
          <div className="flex-1 flex flex-col justify-center items-start text-left gap-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-header text-gradient mt-8 mb-2">
              Hi, I am <span className="text-theme-primary">Catherine Olleres</span>
            </h1>
            <div className="text-lg md:text-xl text-theme-primary font-semibold mb-4">
              Software Developer | Computer Science Graduate
            </div>
            <p className="text-lg md:text-xl text-theme-primary max-w-2xl leading-relaxed mb-8 font-body animate-fade-in">
              Computer Science graduate passionate about building modern, accessible web and mobile applications. Experienced in JavaScript, React, and emerging technologies. Collaborative, innovative, and committed to continuous learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full md:w-auto">
              <Button
                className="bg-primary hover:bg-[#c88a9a] text-white px-8 py-3 text-lg transition-transform duration-300 hover:scale-105 shadow-lg w-full sm:w-auto flex items-center gap-2"
                asChild
              >
                <a href="mailto:ollerescthrn@gmail.com">
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg transition-transform duration-300 hover:scale-105 shadow-lg w-full sm:w-auto flex items-center gap-2"
                asChild
              >
                <a href="https://www.linkedin.com/in/catherine-olleres/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg transition-transform duration-300 hover:scale-105 shadow-lg w-full sm:w-auto flex items-center gap-2"
                asChild
              >
                <a href="https://github.com/odeCat" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full h-72 md:w-96 md:h-[32rem] flex-shrink-0 shadow-2xl mt-12 md:mt-0">
            <img
              src="/Profile (1).jpg"
              alt="Catherine Olleres profile"
              className="w-full h-full object-cover rounded-2xl mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-gradient-to-r from-[#dd9faf] via-[#c88a9a] to-[#a18cd1] text-white py-4 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Cabuyao City, Laguna</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>ollerescthrn@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>0918-457-3492</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 animate-slide-up">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Featured Projects" subtitle="A showcase of my recent work and technical expertise" />
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white animate-slide-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-header text-center text-theme-primary mb-12 animate-slide-up">
            Education
          </h2>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-theme-primary flex items-center gap-2 font-header">
                <Calendar className="w-6 h-6 text-theme-primary" />
                University of Cabuyao – PnC
              </CardTitle>
              <CardDescription className="text-lg text-theme-primary">2021 - 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold text-theme-primary mb-4">
                Bachelor of Science in Computer Science
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-theme-primary mb-2">Coursework:</h4>
                  <p className="text-theme-primary">
                    Data Structures and Algorithms, Information Management, Algorithms and Complexity, Information
                    Assurance Security, Software Engineering
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div>
                    <span className="font-semibold text-theme-primary">GWA:</span>
                    <span className="text-theme-primary font-bold ml-2">1.52</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 animate-slide-up">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Technical Skills" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillsList]) => (
              <Card
                key={category}
                className="bg-white/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-theme-primary font-header flex items-center gap-2">
                    <Code className="w-5 h-5 text-theme-primary" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillsList.map((skill, skillIndex) => {
                      const { Icon, name } = skill
                      return (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-2 bg-theme-primary/10 text-theme-primary font-body px-3 py-1 rounded-md"
                        >
                          {Icon && <Icon />}
                          <span>{name}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white animate-slide-up">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Certifications & Achievements" subtitle="A showcase of my commitment to continuous learning" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <a href={cert.url} key={index} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-lg text-theme-primary font-header">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-theme-primary font-body">{cert.org}</p>
                    <p className="text-sm text-theme-primary font-body">{cert.date}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white animate-slide-up">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-theme-primary mb-12"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Organizations
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle
                  className="text-xl text-theme-primary flex items-center gap-2"
                  style={{ fontFamily: "Work Sans, sans-serif" }}
                >
                  <Users className="w-5 h-5 text-theme-primary" />
                  Executive Secretary
                </CardTitle>
                <CardDescription className="text-theme-primary">
                  AWS Cloud Club University of Cabuyao • 2023 – Present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-theme-primary">
                  Prepared confidential and sensitive documents. Provided webinars for an introduction to Cloud
                  Computing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle
                  className="text-xl text-theme-primary flex items-center gap-2"
                  style={{ fontFamily: "Work Sans, sans-serif" }}
                >
                  <Award className="w-5 h-5 text-theme-primary" />
                  Marketing Associate
                </CardTitle>
                <CardDescription className="text-theme-primary">
                  Junior Blockchain Education Consortium – Dangals • 2024 – Present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-theme-primary">
                  Contributed to marketing organization events and managed social media presence to boost engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
