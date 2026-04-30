"use client";

import React, { useState } from 'react';
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
      <section id="home" className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4 lg:px-6">
         
          <div className="grid lg:grid-cols-2 gap-12 items-start">
           
            {/* Left Column - Main Content */}
            <div className="flex flex-col items-center lg:items-start">
             
              {/* LOGO - EXACTLY 32px from header (-55px) and 24px from badge (-64px) */}
              <div className="flex justify-center w-full relative z-20" style={{ marginTop: '-55px', marginBottom: '-64px' }}>
                <img
                  src="/logo-v4.png"
                  alt="Silveyra Dispatch Services Logo"
                  style={{
                    width: '350px',
                    height: 'auto',
                    maxWidth: '100%'
                  }}
                />
              </div>

              {/* CENTERED Badge - EXACTLY 24px below the badge (mb-[24px]) */}
              <div className="flex justify-center w-full mb-[24px] relative z-30">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                  ✨ Servicio de Despacho Profesional
                </div>
              </div>
             
              {/* Text Elements */}
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-1 leading-tight text-center w-full relative z-30">
                DESPACHO DE CAMIONES
              </h1>
             
              {/* EXACTLY 16px of space below this line (mb-[16px]) */}
              <p className="text-2xl font-semibold text-green-600 mb-[16px] text-center w-full relative z-30">
                Para Dueños Operadores
              </p>
             
              {/* EXACTLY 24px of space below this paragraph (mb-[24px]) */}
              <p className="text-lg text-gray-700 mb-[24px] leading-relaxed text-center lg:text-left w-full relative z-30">
                Nuestros despachadores de camiones trabajan para conseguirte cargas, manejar todo el papeleo, mientras tú conduces y ganas dinero. Nos enfocamos en hacer crecer tu negocio y maximizar tus ganancias.
              </p>

              <div className="flex justify-center items-center space-x-3 text-gray-700 w-full relative z-30 pt-4">
                <Phone className="w-5 h-5 text-green-600" />
                <a href="tel:4692465756" className="text-xl font-bold hover:text-green-600 transition-colors">
                  (469) 246-5756
                </a>
              </div>
            </div>

            {/* Right Column - Family Business Card - EXACTLY 32px from header (mt-[32px]) */}
            <div className="mt-[32px]">
              <div className="bg-white border-4 border-green-500 shadow-2xl rounded-2xl overflow-hidden">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-green-700 mb-2">
                      NEGOCIO FAMILIAR
                    </h3>
                    <p className="text-green-600 font-semibold">
                      ATENCIÓN PERSONALIZADA GARANTIZADA
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 italic text-center text-lg leading-relaxed">
                      "No eres solo un número para nosotros. Somos una familia que trabaja para hacer crecer TU negocio como si fuera el nuestro."
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-900">Trato Personal y Directo</p>
                        <p className="text-sm text-gray-600">Te acompañamos desde la salida y hasta tu destino!</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-900">Disponibles 24/7 Cuando Nos Necesites</p>
                        <p className="text-sm text-gray-600">Soporte real en la carretera, buscamos recursos para asistirte en el camino.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-900">Tu Éxito es Nuestro Éxito</p>
                        <p className="text-sm text-gray-600">Crecemos juntos - tu ganancia es nuestra meta</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-900">Respetamos Tu Tiempo y Descanso</p>
                        <p className="text-sm text-gray-600">Texto primero - llamadas solo cuando tú quieras</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por Qué Elegirnos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beneficios que marcan la diferencia
            </p>
          </div>

          <div className="grid md
