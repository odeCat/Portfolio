"use client"

import Link from "next/link"
import React, { JSX, useState } from "react"

export const projectLink = {
  eyecheck: "/projects#eyecheck",
}

export interface ProjectDescription {
  eyecheck?: string;
}

export default function ArticlePage({eyecheck}:ProjectDescription) {
    const [modalOpen, setModalOpen] = useState(false)

    
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
                className="text-sm sm:text-base text-theme-primary font-bold px-3 py-1 sm:px-4 sm:py-2 rounded-lg bg-theme-primary/10"
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
                className="text-sm sm:text-base text-theme-primary/80 hover:text-theme-primary px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition-colors duration-300 hover:bg-theme-primary/10"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex items-center justify-center py-12 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl w-full grid gap-8 md:gap-16">
          <div className="flex flex-col justify-center animate-slide-up">

            <h2 className="md:text-6xl font-header mb-4 text-theme-primary">EyeCheck Appication</h2>
            <p className="text-theme-primary p-4">This application is developed for our thesis project titled EYECHECK: A MACHINE LEARNING-BASED APPLICATION FOR VISION ACUITY ASSESSMENT. This study focuses on the development of EyeCheck App, a mobile application designed to improve access to visual acuity testing by leveraging machine learning and mobile technology. Traditional vision assessment methods often require a second person for administration and are limited in accurately evaluating astigmatism. EyeCheck App aims to address these challenges by integrating advanced features such as distance detection, eyecovering verification, and machine learning algorithms like Random Forest, Support Vector Machine (SVM), and YOLOv8 for real-time analysis. By providing personalized feedback and adaptive testing based on user performance, the app offers a reliable, user-friendly, and cost-effective alternative to conventional visual acuity tests. This project aims to democratize vision care, enhance accessibility, and contribute to improved healthcare outcomes, especially in underserved communities. </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <img src="/Eyecheck App (1).jpg" className= "max-w-48 md:w-48 lg:w-64"/>
              <img src="/Eyecheck App (2).png" className= "max-w-48 md:w-48 lg:w-64"/>
            </div>
            <p className="text-sm text-gray-400 flex justify-center">Application Home screen and a user doing the Eye Test with Eyecheck App</p>
            <p className="text-theme-primary p-4">The integration of the Support Vector Machine (SVM) and YOLOv8 with the system ensures accurate and effective vision acuity assessments. YOLOv8 facilitates real-time eye detection and distance verification, which is critical for conducting precise eye tests, while SVM processes user inputs and test results to deliver reliable evaluations. This synergy allows the app to provide meaningful and accurate results, making it a valuable tool for vision assessment.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <img src="/Eyecheck Results (1).png" className= "max-w-48 md:w-48 lg:w-64"/>
              <img src="/Eyecheck Results (2).png" className= "max-w-48 md:w-48 lg:w-64"/>
            </div>
            <p className="text-sm text-gray-400 flex justify-center">Application result screen of users Visual acuity and Astigmatism</p>
            <p className="text-theme-primary p-4">The app empowers users to independently conduct vision acuity tests by providing clear instructions on test setup, such as appropriate lighting and device handling. Real-time feedback and the ability to evaluate vision without external assistance make the app highly accessible and user-friendly. This independence is particularly valuable for users in remote or underserved regions.</p>
            <h4 className="md:text-3xl mb-4 text-theme-primary p-2">Research Awards</h4>
            <p className="text-theme-primary p-4">After participating in various research festivals, our research, EyeCheck, gained 2nd place for the Software Exposition 2025 at the University of Cabuyao—Pamantasan ng Cabuyao. And a Certificate of Participation for the event SHINE Research Conference at Lyceum of Alabang.</p>
            <div className="max-w-2xl mx-auto px-4">
              <img src="/SHINE.jpeg" className= "w-full h-auto max-w-screen-lg object-contain"/>
              <p className="text-sm text-gray-400 flex justify-center">SHINE Research Conference</p>
              <img src="/Awarding Software Expo.jpeg" className= "w-full h-auto max-w-screen-lg"/>
            <p className="text-sm text-gray-400 flex justify-center">Software Exposition UC-PNC</p>
            </div>

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