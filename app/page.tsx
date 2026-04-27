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

      {/* Navigation Header - Locked height, untouched! */}
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

      {/* Hero Section */}
      <section id="home" className="pt-28 min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div>
              
              {/* CENTERED LOGO - Aggressively pulled UP to the header (-mt-20) and pulling the badge UP into the transparent space (-mb-10) */}
              <div className="flex justify-center -mt-20 -mb-10 relative z-20">
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

              {/* CENTERED Badge - Tightened spacing */}
              <div className="flex justify-center mb-3 relative z-30">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                  ✨ Servicio de Despacho Profesional
                </div>
              </div>
             
              {/* Tightened spacing on all text elements below */}
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 leading-tight text-center relative z-30">
                DESPACHO DE CAMIONES
              </h1>
              <p className="text-2xl font-semibold text-green-600 mb-4 text-center relative z-30">
                Para Dueños Operadores
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center md:text-left relative z-30">
                Nuestros despachadores de camiones trabajan para conseguirte cargas, manejar todo el papeleo, mientras tú conduces y ganas dinero. Nos enfocamos en hacer crecer tu negocio y maximizar tus ganancias.
              </p>

              <div className="flex justify-center mb-6 relative z-30">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgOhTmjb63orHU3rv7ZyCh2thozSiOLDRzBFm5X62AQyEcQw/viewform?usp=dialog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-4 rounded-md font-bold shadow-lg transition-all transform hover:scale-105"
                >
                  ¡Comienza Ahora!
                </a>
              </div>

              <div className="flex justify-center items-center space-x-3 text-gray-700 relative z-30">
                <Phone className="w-5 h-5 text-green-600" />
                <a href="tel:4692465756" className="text-xl font-bold hover:text-green-600 transition-colors">
                  (469) 246-5756
                </a>
              </div>
            </div>

            {/* Right Column - Family Business Card */}
            <div>
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
                        <p className="text-sm text-gray-600">Soporte real en la carretera, no mensajes automáticos</p>
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

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarifas Competitivas */}
            <div className="bg-white border-2 border-yellow-100 hover:border-yellow-500 hover:shadow-xl transition-all rounded-2xl overflow-hidden">
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6 shadow-lg">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tarifas Competitivas
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Precios flexibles del 5% al 9% según el nivel de servicio. Trabajamos duro para maximizar tus ganancias y mantener más dinero en tu bolsillo.
                </p>
              </div>
            </div>

            {/* Soporte 24/7 */}
            <div className="bg-white border-2 border-blue-100 hover:border-blue-500 hover:shadow-xl transition-all rounded-2xl overflow-hidden">
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-6 shadow-lg">
                  <Headphones className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Soporte 24/7
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Soporte de despacho las 24 horas para mantenerte en movimiento. Siempre estamos disponibles cuando nos necesites en el camino.
                </p>
              </div>
            </div>

            {/* Servicio Confiable */}
            <div className="bg-white border-2 border-purple-100 hover:border-purple-500 hover:shadow-xl transition-all rounded-2xl overflow-hidden">
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mb-6 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Servicio Confiable
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Despachadores profesionales dedicados a encontrarte las mejores cargas y manejar todo el papeleo eficientemente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Planes de Asociación
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              En Silveyra Dispatch, creemos en una verdadera asociación. Cobramos un porcentaje por carga porque alinea nuestros objetivos con los tuyos: solo ganamos más dinero cuando negociamos tarifas más altas para tu camión.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 1: Basic Dispatch (5%) */}
            <div className="bg-white shadow-lg hover:shadow-2xl transition-all rounded-2xl overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Dispatch</h3>
                  <div className="text-5xl font-bold text-green-600 mb-2">5%</div>
                  <p className="text-gray-600 font-medium">Por Carga</p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Reserva Premium de Cargas</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Negociación de Tarifas</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Confirmaciones de Carga</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Verificación de Crédito de Brokers</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Gestión de Paquetes de Configuración</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Sin Despacho Forzado</p>
                  </div>
                </div>

                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgOhTmjb63orHU3rv7ZyCh2thozSiOLDRzBFm5X62AQyEcQw/viewform?usp=dialog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 rounded-md font-bold shadow-md transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#f59e0b', color: '#ffffff' }}
                >
                  Comenzar
                </a>
              </div>
            </div>

            {/* Plan 2: Dispatch Plus (7%) - POPULAR */}
            <div className="bg-white shadow-2xl border-4 border-green-600 relative transform md:scale-105 rounded-2xl overflow-hidden">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  MÁS POPULAR
                </span>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Dispatch Plus</h3>
                  <div className="text-5xl font-bold text-green-600 mb-2">7%</div>
                  <p className="text-gray-600 font-medium">Por Carga</p>
                </div>

                <p className="font-bold text-green-600 mb-4 text-sm">Todo en Basic Dispatch, MÁS:</p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Soporte 24/7</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Seguimiento de Carga Completo</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Comunicación con Brokers/Shippers</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Facturación y Cobranza</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Seguimiento de Millaje</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Reportes Semanales de Rendimiento</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Gestión de PODs</p>
                  </div>
                </div>

                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgOhTmjb63orHU3rv7ZyCh2thozSiOLDRzBFm5X62AQyEcQw/viewform?usp=dialog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 rounded-md font-bold shadow-md transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#f59e0b', color: '#ffffff' }}
                >
                  Comenzar
                </a>
              </div>
            </div>

            {/* Plan 3: Dispatch VIP (9%) */}
            <div className="bg-white shadow-lg hover:shadow-2xl transition-all rounded-2xl overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Dispatch VIP</h3>
                  <div className="text-5xl font-bold text-green-600 mb-2">9%</div>
                  <p className="text-gray-600 font-medium">Por Carga</p>
                </div>

                <p className="font-bold text-green-600 mb-4 text-sm">Todo en Dispatch Plus, MÁS:</p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Seguimiento Completo de Gastos</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Estados de Pérdidas y Ganancias (P&L)</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Reportes IFTA Trimestrales</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Gestión y Organización de Recibos</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Preparación para Temporada de Impuestos</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm">Análisis Financiero Mensual</p>
                  </div>
                </div>

                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgOhTmjb63orHU3rv7ZyCh2thozSiOLDRzBFm5X62AQyEcQw/viewform?usp=dialog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 rounded-md font-bold shadow-md transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#f59e0b', color: '#ffffff' }}
                >
                  Comenzar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Acerca de Silveyra Dispatch Services
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>
           
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                En Silveyra Dispatch Services, entendemos los desafíos que enfrentan los dueños-operadores en la industria del transporte. Nuestra misión es ayudarte a enfocarte en lo que mejor haces - conducir - mientras nosotros manejamos el resto.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Con años de experiencia en despacho de camiones y contabilidad profesional, brindamos servicio personalizado a cada cliente, asegurando que obtengas las mejores cargas a tarifas competitivas. Nuestro equipo trabaja incansablemente para hacer crecer tu negocio y maximizar tu rentabilidad.
              </p>
            </div>

            <div className="text-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdgOhTmjb63orHU3rv7ZyCh2thozSiOLDRzBFm5X62AQyEcQw/viewform?usp=dialog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-xl px-12 py-6 rounded-md font-bold shadow-2xl transition-all transform hover:scale-105"
                style={{ backgroundColor: '#f59e0b', color: '#ffffff' }}
              >
                Regístrate Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white border-2 border-green-100 hover:border-green-500 transition-all rounded-2xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Cuáles son sus tarifas de comisión?
                </h3>
                <p className="text-gray-700">
                  Ofrecemos tres planes flexibles: 5% para despacho básico, 7% para despacho más soporte administrativo, y 9% para nuestro paquete VIP completo con contabilidad profesional.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-green-100 hover:border-green-500 transition-all rounded-2xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Qué equipos despachan?
                </h3>
                <p className="text-gray-700">
                  Despachamos remolques Dry Van, Flatbed y Power-Only. Si tienes equipo especializado, contáctanos para discutir tus necesidades.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-green-100 hover:border-green-500 transition-all rounded-2xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Necesito mi propia autoridad?
                </h3>
                <p className="text-gray-700">
                  Sí, debes tener autoridad MC activa en buen estado para usar nuestros servicios de despacho.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-green-100 hover:border-green-500 transition-all rounded-2xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Cómo me pagan?
                </h3>
                <p className="text-gray-700">
                  Soportamos varios métodos de pago incluyendo transferencia bancaria directa, Zelle y PayPal para tu conveniencia.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-green-100 hover:border-green-500 transition-all rounded-2xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Qué significa Sin Despacho Forzado?
                </h3>
                <p className="text-gray-700">
                  Negociamos las mejores tarifas y te presentamos opciones de carga, pero tú siempre tienes la última palabra. Nunca te forzamos a tomar una carga que no quieres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 rounded-lg p-2">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <span className="text-xl font-bold">Silveyra Dispatch Services</span>
              </div>
              <p className="text-green-200">
                Despacho Profesional de Camiones para Dueños Operadores
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-green-200 hover:text-white">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('pricing')} className="block text-green-200 hover:text-white">
                  Precios
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-green-200 hover:text-white">
                  Nosotros
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <div className="space-y-2 text-green-200">
                <p>Teléfono: (469) 246-5756</p>
                <p>Email: Connect@SilveyraDispatch.com</p>
                <p>Disponible 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-green-800 pt-8 text-center text-green-200">
            <p>© 2024 Silveyra Dispatch Services. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}