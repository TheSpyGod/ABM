"use client";
import { useState } from "react";
import Image from "next/image";
import "./styles/globals.css";

export default function Home() {


  const [activeSection, setActiveSection] = useState<"services" | "about" | "contact">("about");

  const handleButtonClick = (section: "services" | "about" | "contact"): void => {
    setActiveSection(section);
  };

  return (
    <main className="relative min-h-auto min-w-auto">
      {/* Header */}
      <div className="header p-3 rounded-full top-0 fixed left-0 right-0 wx-auto container bg-white mx-auto flex flex-row justify-between border-box border-border place-items-center content-center items-center w-[100vw] z-10">
        {/* Services should be the main selling point, HIGHLIGHT IT! */}
        <div className="text-black px-2 font-bold">
          <Image
            src="/ABM_logo.png"
            alt="ABM Logo"
            width={60}
            height={0}
            layout="intrinsic"
          />
        </div>

        <div className="flex gap-6">
          <button onClick={() => handleButtonClick("services")} className="flex items-center justify-center bg-[var(--accent1)] h-auto w-auto text-center text-white font-bold p-2 rounded-full px-5 transition-transform duration-3000 hover:bg-[var(--accent-activatedlight)]">Services<b>.</b></button>
          <button onClick={() => handleButtonClick("about")} className="flex items-center justify-center bg-[var(--accent2)] h-auto w-auto text-white font-normal p-2 rounded-full px-5 transition-transform duration-3000 hover:bg-[var(--accent-activateddark)]">About<b>.</b></button>
          <button onClick={() => handleButtonClick("contact")} className="flex items-center justify-center bg-[var(--accent2)] h-auto w-auto text-white font-normal p-2 rounded-full px-5 transition-transform duration-3000 hover:bg-[var(--accent-activateddark)]">Contact<b>.</b></button>
        </div>

        <div className="text-black px-5">
          <Image
            src="/ABM_logo.png"
            alt="ABM Logo"
            width={60}
            height={0}
            layout="intrinsic"
          />
        </div>
      </div>

      {/* Titlescreen */}
      <div className="titlescreen transition-opacity duration-700 ease-in-out fixed top-0 left-0 w-full h-[100vh] bg-cover bg-center z-0 flex flex-col gap-4 items-center justify-center text-center will-change-opacity"
           style={{ opacity: activeSection === "about" ? 1 : 0 ,
                    pointerEvents: activeSection === "about" ? "auto" : "none"
           }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/angy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="font-bold text-5xl sm:text-6xl relative flex">
          <span className="text-white px-4">Tired of </span>
          <span className="relative inline-block h-[1.2em] min-w-[12ch] align-middle overflow-hidden">
            <span className="rotating-text block">hidden fees?</span>
            <span className="rotating-text block">delays?</span>
            <span className="rotating-text block">the mess?</span>
          </span>
        </div>

        <button onClick={() => handleButtonClick("contact")} className="rounded z-100 bg-[var(--accent1)] mx-auto px-5 p-2 text-2xl text-white font-bold transition-transform duration-3000 hover:bg-[var(--accent-activatedlight)]">
          Call Now!
        </button>
      </div>

      {/* Services */}
      <div>
            {/* In-House Prep */}
            <div className="transition-opacity duration-700 ease-in-out z-2 flex flex-col bg-[url('/plaster.jpg')] h-[100vh] bg-cover w-full bg-center items-center justify-center text-center will-change-opacity"
                style={{ opacity: activeSection === "services" ? 1 : 0 ,
                         display: activeSection === "services" ? "flex" : "none"
                }}>
              <p className="text-5xl text-[var(--accent2)]">
                In-House <span className="text-[var(--accent1)]">Preperation</span>
                <br />
                and <span className="text-[var(--accent1)]">Full Renovation</span>
              </p>
              <p className="font-bold text-black">With over 40 years of expertise, we handle every aspect of construction,<br/> from small repairs to complete builds. Our services include:</p>
              <br /><br />
              <ol className="text-black font-bold list-disc marker:text-[var(--accent1)]">
                <li>Plumbing & Electrical: Full installation and repair</li>
                <li>Drywall & Finishes: Plastering, drywall, and mesh</li>
                <li>Interior Painting: High-quality painting for a flawless finish</li>
                <li>Air Conditioning: Professional installation and setup</li>
                <li>Tiling: Floor and wall tiling installations</li>
                <li>Smooth Finishes: Smooth application for walls and ceilings</li>
              </ol>
            </div>

            {/* Outside Prep */}
            <div className="transition-opacity duration-700 ease-in-out z-3 flex flex-col bg-[url('/plato.jpg')] h-[100vh] bg-cover w-full bg-center items-center justify-center text-center will-change-opacity"
                style={{ opacity: activeSection === "services" ? 1 : 0 ,
                         display: activeSection === "services" ? "flex" : "none"
                }}>
              <p className="text-white text-5xl ">
                Exterior <span className="text-[var(--accent1)]">Preperation </span>
                <br />
                and <span className="text-[var(--accent1)]">Full Renovation</span>
              </p>
              <ol className="text-white font-bold list-disc marker:text-[var(--accent1)]">
                <li>Roofing: Full roof installation, repairs, and maintenance</li>
                <li>Exterior Renovation: Full preparation and restoration</li>
                <li>Exterior Painting & Finishes: Professional painting for a flawless look</li>
                <li>Cladding & Facades: Expert installation of exterior cladding and facades</li>
                <li>Landscaping & Outdoor Spaces: Design and construction of outdoor areas</li>
              </ol>
            </div>
      </div>
      {/* Contact */}
      <div>
        <div className="fixed gap-10 transition-opacity duration-700 ease-in-out z-5 flex flex-col h-[100vh] overflow-hidden w-full items-center justify-center text-center will-change-opacity"
             style={{ opacity: activeSection === "contact" ? 1 : 0 ,
                      pointerEvents: activeSection === "contact" ? "auto" : "none"
             }}>
          <div className="flex flex-row items-center justify-center gap-10">
          <Image
            src="/ABM_logo.png"
            alt="ABM"
            width={120}
            height={400}
            priority
          />
          <p className="font-bold text-[var(--accent1)]">YOUR PROPERTY. <br/>PERFECTED.</p>
          </div>
          <div className="flex flex-row items-center gap-2 text-black font-bold">
          <Image
            src="/whatsapp.png"
            alt="ABM"
            width={50}
            height={400}
            priority
          />
          <h1>+34 634 00 08 09</h1>
          </div>
          <div className="flex flex-row items-center gap-2 text-black font-bold">
          <Image
            src="/email.png"
            alt="ABM"
            width={50}
            height={400}
            priority
          />
          <h1>buildwithabm@gmail.com</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
