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
                <img src="/logo-v4.png" alt="Silveyra Dispatch Services Logo" style={{ width: '350px', height: 'auto', maxWidth: '100%' }} />
              </div>
              <div className="flex justify-center w-full mb-[24px] relative z-30">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">✨ Servicio de Despacho Profesional</div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-1 leading-tight text-center w-full relative z-30">DESPACHO DE CAMIONES</h1>
              <p className="text-2xl font-semibold text-green-600 mb-[16px] text-center w-full relative z-30">Para Dueños Operadores</p>
              <p className="text-lg text-gray-700 mb-[24px] leading-relaxed text-center lg:text-left w-full relative z-30">Nuestros despachadores de camiones trabajan para conseguirte cargas, manejar todo el papeleo, mientras tú conduces y ganas dinero.</p>
              <div className="flex justify-center items-center space-x-3 text-gray-700 w-full relative z-30 pt-4">
                <Phone className="w-5 h-5 text-green-600" />
                <a href="tel:4692465756" className="text-xl font-bold hover:text-green-600 transition-colors">(469) 246-5756</a>
              </div>
            </div>

            {/* Right Column - Family Business Card */}
            <div className="mt-[32px]">
              <div className="bg-white border-4 border-green-500 shadow-2xl rounded-2xl overflow-hidden">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-green-700 mb-2">NEGOCIO FAMILIAR</h3>
                    <p className="text-green-600 font-semibold">ATENCIÓN PERSONALIZADA GARANTIZADA</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 italic text-center text-lg leading-relaxed">"No eres solo un número para nosotros. Somos una familia que trabaja para hacer crecer TU negocio como si fuera el nuestro."</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por Qué Elegirnos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Beneficios que marcan la diferencia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-yellow-100 hover:border-yellow-500 rounded-2xl p-8 text-center shadow-sm">
                <DollarSign className="w-10 h-10 text-yellow-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Tarifas Competitivas</h3>
                <p className="text-gray-600">Precios flexibles del 5% al 9% según el nivel de servicio.</p>
            </div>
            <div className="bg-white border-2 border-blue-100 hover:border-blue-500 rounded-2xl p-8 text-center shadow-sm">
                <Headphones className="w-10 h-10 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Soporte 24/7</h3>
                <p className="text-gray-600">Soporte de despacho las 24 horas para mantenerte en movimiento.</p>
            </div>
            <div className="bg-white border-2 border-purple-100 hover:border-purple-500 rounded-2xl p-8 text-center shadow-sm">
                <Shield className="w-10 h-10 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Servicio Confiable</h3>
                <p className="text-gray-600">Despachadores profesionales dedicados a manejar todo el papeleo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Planes de Asociación</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">En Silveyra Dispatch, creemos en una verdadera asociación.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden border-t-8 border-gray-900 p-8 flex flex-col">
                <h3 className="text-xl font-extrabold mb-4 uppercase text-center">Basic Dispatch</h3>
                <div className="text-7xl font-extrabold text-green-500 mb-4 text-center">5%</div>
                <ul className="space-y-4 text-sm text-gray-700">
                    <li>✓ Reserva Premium de Cargas</li>
                    <li>✓ Negociación de Tarifas</li>
                    <li>✓ Sin Despacho Forzado</li>
                </ul>
            </div>
            <div className="bg-white shadow-2xl rounded-xl overflow-hidden border-t-8 border-green-500 p-8 flex flex-col transform md:-translate-y-2">
                <h3 className="text-xl font-extrabold mb-4 uppercase text-center">Dispatch Plus</h3>
                <div className="text-7xl font-extrabold text-green-500 mb-4 text-center">7%</div>
                <ul className="space-y-4 text-sm text-gray-700">
                    <li>✓ Soporte 24/7</li>
                    <li>✓ Facturación y Cobranza</li>
                    <li>✓ Seguimiento de Carga</li>
                </ul>
            </div>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden border-t-8 border-gray-900 p-8 flex flex-col">
                <h3 className="text-xl font-extrabold mb-4 uppercase text-center">Dispatch VIP</h3>
                <div className="text-7xl font-extrabold text-green-500 mb-4 text-center">9%</div>
                <ul className="space-y-4 text-sm text-gray-700">
                    <li>✓ Reportes IFTA Trimestrales</li>
                    <li>✓ Análisis Financiero Mensual</li>
                    <li>✓ Gestión de Recibos</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-8">Acerca de Silveyra Dispatch Services</h2>
            <div className="bg-green-50 rounded-2xl p-8 shadow-lg text-lg text-gray-700 leading-relaxed">
                <p className="mb-4">Entendemos los desafíos que enfrentan los dueños-operadores. Nuestra misión es ayudarte a enfocarte en conducir mientras nosotros manejamos el resto.</p>
                <p>Con años de experiencia en despacho y contabilidad, aseguramos que obtengas las mejores cargas a tarifas competitivas.</p>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
                <h3 className="font-bold text-lg mb-2">¿Necesito mi propia autoridad?</h3>
                <p className="text-gray-700">Sí, debes tener autoridad MC activa en buen estado.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
                <h3 className="font-bold text-lg mb-2">¿Qué equipos despachan?</h3>
                <p className="text-gray-700">Despachamos Dry Van, Flatbed y Power-Only.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-10 w-10 mx-auto mb-4" />
          <p>© 2024 Silveyra Dispatch Services. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
