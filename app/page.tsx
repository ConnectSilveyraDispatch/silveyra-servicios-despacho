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

      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50 h-24">
        <div className="container mx-auto px-4 lg:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="w-[100px] h-full"></div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Inicio</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Precios</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Nosotros</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">FAQ</button>
            </nav>
            <button className="md:hidden relative z-[1000]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-8 w-8 text-black" /> : <Menu className="h-8 w-8 text-black" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t bg-white shadow-lg absolute w-full left-0 top-24 z-[900]">
              <div className="flex flex-col space-y-4 px-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 font-medium text-left text-lg">Inicio</button>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-700 font-medium text-left text-lg">Precios</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 font-medium text-left text-lg">Nosotros</button>
                <button onClick={() => scrollToSection('faq')} className="text-gray-700 font-medium text-left text-lg">FAQ</button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex justify-center w-full relative z-20" style={{ marginTop: '-55px', marginBottom: '-64px' }}>
                <img src="/logo-v4.png" alt="Logo" style={{ width: '350px', height: 'auto' }} />
              </div>
              <div className="flex justify-center w-full mb-[24px] relative z-30">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold">✨ Servicio de Despacho Profesional</div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-1 text-center w-full">DESPACHO DE CAMIONES</h1>
              <p className="text-2xl font-semibold text-green-600 mb-[16px] text-center w-full">Para Dueños Operadores</p>
              <p className="text-lg text-gray-700 mb-[24px] text-center lg:text-left">Nuestros despachadores trabajan para conseguirte cargas mientras tú conduces.</p>
              <div className="flex justify-center items-center space-x-3 text-gray-700 w-full pt-4">
                <Phone className="w-5 h-5 text-green-600" />
                <a href="tel:4692465756" className="text-xl font-bold hover:text-green-600">(469) 246-5756</a>
              </div>
            </div>

            {/* Business Card */}
            <div className="mt-[32px]">
              <div className="bg-white border-4 border-green-500 shadow-2xl rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-700">NEGOCIO FAMILIAR</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-bold">Trato Personal</p>
                      <p className="text-sm">Te acompañamos hasta tu destino!</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-bold">Soporte 24/7</p>
                      <p className="text-sm">Soporte real en la carretera, buscamos recursos para asistirte en el camino.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Planes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-8 border-t-8 border-gray-900 text-center">
              <h3 className="font-bold mb-4">Basic Dispatch</h3>
              <div className="text-6xl font-extrabold text-green-500 mb-4">5%</div>
              <p className="text-sm text-gray-600">Reserva de Cargas</p>
            </div>
            <div className="bg-white shadow-2xl rounded-xl p-8 border-t-8 border-green-500 text-center transform md:-translate-y-2">
              <h3 className="font-bold mb-4">Dispatch Plus</h3>
              <div className="text-6xl font-extrabold text-green-500 mb-4">7%</div>
              <p className="text-sm text-gray-600">Soporte 24/7</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-8 border-t-8 border-gray-900 text-center">
              <h3 className="font-bold mb-4">Dispatch VIP</h3>
              <div className="text-6xl font-extrabold text-green-500 mb-4">9%</div>
              <p className="text-sm text-gray-600">Contabilidad Completa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Silveyra Dispatch Services. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
