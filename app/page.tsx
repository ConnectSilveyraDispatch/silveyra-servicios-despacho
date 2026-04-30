
"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  CheckCircle,
  Users,
  Truck,
  DollarSign,
  Headphones,
  Shield
} from "lucide-react";

export default function SilveyraDispatchServices() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white relative">

      {/* Navigation Header - Locked height (h-24) */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50 h-24">
        <div className="container mx-auto px-4 lg:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Invisible Placeholder so the menu stays perfectly on the right side */}
            <div className="w-[100px] h-full"></div>
           
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Precios
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                FAQ
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-[1000]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-8 w-8 text-black" /> : <Menu className="h-8 w-8 text-black" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t bg-white shadow-lg absolute w-full left-0 top-24 z-[900]">
              <div className="flex flex-col space-y-4 px-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 font-medium text-left text-lg">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-green-600 font-medium text-left text-lg">
                  Precios
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 font-medium text-left text-lg">
                  Nosotros
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-green-600 font-medium text-left text-lg">
                  FAQ
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section - pt-24 starts EXACTLY at the bottom line of the header */}
      <section id="home">
        {/* Hero Section content goes here */}
      </section>
    </div>
  
