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
    <div className="flex flex-col min-h-screen bg-white">

      {/* Navigation Header - Clean white bar, links on the right */}
      <header className="fixed top-0 w-full bg-white border-b border-gray-100 z-50 h-20">
        <div className="container mx-auto px-4 lg:px-8 h-full">
          <div className="flex items-center justify-end h-full">
           
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Precios
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                FAQ
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-[1000]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-8 w-8 text-gray-600" /> : <Menu className="h-8 w-8 text-gray-600" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-100 bg-white shadow-lg absolute w-full left-0 top-20 z-[900]">
              <div className="flex flex-col space-y-4 px-6">
                <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-green-600 font-medium text-left text-lg">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-green-600 font-medium text-left text-lg">
                  Precios
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-green-600 font-medium text-left text-lg">
                  Nosotros
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-green-600 font-medium text-left text-lg">
                  FAQ
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section - Clean white background, starts below header */}
      <section id="home" className="pt-32 pb-16 min-h-screen bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Main Content (Stacked naturally, centered) */}
            <div className="flex flex-col items-center text-center">
              
              {/* LOGO - Large, centered, NO BORDER */}
              <div className="mb-8 w-full flex justify-center">
                <img
                  src="/logo-v4.png"
                  alt="Silveyra Dispatch Services Logo"
                  style={{
                    width: '380px',
                    height: 'auto',
                    maxWidth: '100%'
                  }}
                />
              </div>

              {/* Badge */}
              <div className="mb-6">
                <div className="inline-block bg-green-50 text-green-600 px-5 py-2 rounded-full text-sm font-bold">
                  ✨ Servicio de Despacho Profesional
                </div>
              </div>
             
              {/* Headline */}
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#111827] mb-4 leading-tight tracking-tight">
                DESPACHO DE<br />CAMIONES
              </h1>
              
              {/* Subheadline */}
              <p className="text-2xl md:text-3xl font-bold text-green-500 mb-6">
                Para Dueños Operadores
              </p>
              
              {/* Paragraph */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Nuestros despachadores de camiones trabajan para conseguirte cargas, manejar todo el papeleo, mientras tú conduces y ganas dinero. Nos enfocamos en hacer crecer tu negocio y maximizar tus ganancias.
              </p>

              {/* Button */}
              <div className="mb-6">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgOhTmjb63orHU3rv7ZyCh2thozSiOLDRzBFm5X62AQyEcQw/viewform?usp=dialog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 rounded-md font-bold shadow-md transition-all transform hover:scale-105 text-white text-lg"
                  style={{ backgroundColor: '#f59e0b' }}
                >
                  ¡Comienza Ahora!
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center text-gray-800">
                <Phone className="w-6 h-6 text-green-500 mr-3" />
                <a href="tel:4692465756" className="text-2xl font-bold hover:text-green-600 transition-colors">
                  (469) 246-5756
                </a>
              </div>
            </div>

            {/* Right Column - Family Business Card */}
            <div className="w-full max-w-md mx-auto lg:max-w-full">
              <div className="bg-white border-[3px] border-green-500 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-8 md:p-10">
                  
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-green-600 mb-2">
                      NEGOCIO FAMILIAR
                    </h3>
                    <p className="text-green-600 font-bold text-sm tracking-wide">
                      ATENCIÓN PERSONALIZADA GARANTIZADA
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 mb-8">
                    <p className="text-gray-700 italic text-center text-base leading-relaxed">
                      "No eres solo un número para nosotros. Somos una familia que trabaja para hacer crecer TU negocio como si fuera el nuestro."
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900 text-base">Trato Personal y Directo</p>
                        <p className="text-sm text-gray-500 mt-1">Te acompañamos desde la salida y hasta tu destino!</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900 text-base">Disponibles 24/7 Cuando Nos Necesites</p>
                        <p className="text-sm text-gray-500 mt-1">Soporte real en la carretera, no mensajes automáticos</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900 text-base">Tu Éxito es Nuestro Éxito</p>
                        <p className="text-sm text-gray-500 mt-1">Crecemos juntos - tu ganancia es nuestra meta</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900 text-base">Respetamos Tu Tiempo y Descanso</p>
                        <p className="text-sm text-gray-500 mt-1">Texto primero - llamadas solo cuando tú quieras</p>
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
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Por Qué Elegirnos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beneficios que marcan la diferencia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarifas Competitivas */}
            <div className="bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all rounded-2xl overflow-hidden">
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500 rounded-full mb-6 shadow-md">
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
            <div className="bg-white border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all rounded-2xl overflow-hidden">
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-6 shadow-md">
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
            <div className="bg-white border border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all rounded-2xl overflow-hidden">
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full mb-6 shadow-md">
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
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Nuestros Planes de Asociación
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              En Silveyra Dispatch, creemos en una verdadera asociación. Cobramos un porcentaje por carga porque alinea nuestros objetivos con los tuyos: solo ganamos más dinero cuando negociamos tarifas más altas para tu camión.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan 1: Basic Dispatch (5%) */}
            <div className="bg-white shadow-lg hover:shadow-xl transition-all rounded-2xl overflow-hidden border border-gray-200">
              <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Dispatch</h3>
                  <div className="text-6xl font-extrabold text-green-500 mb-2">5%</div>
                  <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Por Carga</p>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Reserva Premium de Cargas</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Negociación de Tarifas</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Confirmaciones de Carga</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Verificación de Crédito de Brokers</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Gestión de Paquetes de Configuración</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Sin Despacho Forzado</p>
                  </div>
                </div>

                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgOhTmjb63orHU3rv7ZyCh2thozSiOLDRzBFm5X62AQyEcQw/viewform?usp=dialog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-4 rounded-md font-bold shadow-md transition-colors hover:opacity-90 text-lg"
                  style={{ backgroundColor: '#f59e0b', color: '#ffffff' }}
                >
                  Comenzar
                </a>
              </div>
            </div>

            {/* Plan 2: Dispatch Plus (7%) - POPULAR */}
            <div className="bg-white shadow-2xl border-[3px] border-green-500 relative transform md:-translate-y-4 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full bg-green-500 text-white text-center py-2 text-sm font-bold tracking-wider uppercase">
                MÁS POPULAR
              </div>
              <div className="p-8 md:p-10 pt-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Dispatch Plus</h3>
                  <div className="text-6xl font-extrabold text-green-500 mb-2">7%</div>
                  <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Por Carga</p>
                </div>

                <p className="font-bold text-green-600 mb-5 text-sm uppercase tracking-wide">Todo en Basic, MÁS:</p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Soporte 24/7</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Seguimiento de Carga Completo</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Comunicación con Brokers/Shippers</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Facturación y Cobranza</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Seguimiento de Millaje</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Reportes Semanales de Rendimiento</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Gestión de PODs</p>
                  </div>
                </div>

                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgOhTmjb63orHU3rv7ZyCh2thozSiOLDRzBFm5X62AQyEcQw/viewform?usp=dialog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-4 rounded-md font-bold shadow-md transition-colors hover:opacity-90 text-lg"
                  style={{ backgroundColor: '#f59e0b', color: '#ffffff' }}
                >
                  Comenzar
                </a>
              </div>
            </div>

            {/* Plan 3: Dispatch VIP (9%) */}
            <div className="bg-white shadow-lg hover:shadow-xl transition-all rounded-2xl overflow-hidden border border-gray-200">
              <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Dispatch VIP</h3>
                  <div className="text-6xl font-extrabold text-green-500 mb-2">9%</div>
                  <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Por Carga</p>
                </div>

                <p className="font-bold text-green-600 mb-5 text-sm uppercase tracking-wide">Todo en Plus, MÁS:</p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Seguimiento Completo de Gastos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Estados de Pérdidas y Ganancias (P&L)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Reportes IFTA Trimestrales</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Gestión y Organización de Recibos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Preparación para Temporada de Impuestos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Análisis Financiero Mensual</p>
                  </div>
                </div>

                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdgOhTmjb63orHU3rv7ZyCh2thozSiOLDRzBFm5X62AQyEcQw/viewform?usp=dialog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-4 rounded-md font-bold shadow-md transition-colors hover:opacity-90 text-lg"
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
      <section id="about" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                Acerca de Silveyra Dispatch Services
              </h2>
              <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full mb-10"></div>
            </div>
           
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 mb-12">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                En Silveyra Dispatch Services, entendemos los desafíos que enfrentan los dueños-operadores en la industria del transporte. Nuestra misión es ayudarte a enfocarte en lo que mejor haces - conducir - mientras nosotros manejamos el resto.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Con años de experiencia en despacho de camiones y contabilidad profesional, brindamos servicio personalizado a cada cliente, asegurando que obtengas las mejores cargas a tarifas competitivas. Nuestro equipo trabaja incansablemente para hacer crecer tu negocio y maximizar tu rentabilidad.
              </p>
            </div>

            <div className="text-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdgOhTmjb63orHU3rv7ZyCh2thozSiOLDRzBFm5X62AQyEcQw/viewform?usp=dialog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-5 rounded-md font-bold shadow-xl transition-all transform hover:scale-105 text-xl"
                style={{ backgroundColor: '#f59e0b', color: '#ffffff' }}
              >
                Regístrate Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Preguntas Frecuentes
            </h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 border border-gray-200 hover:border-green-400 transition-all rounded-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Cuáles son sus tarifas de comisión?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ofrecemos tres planes flexibles: 5% para despacho básico, 7% para despacho más soporte administrativo, y 9% para nuestro paquete VIP completo con contabilidad profesional.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 hover:border-green-400 transition-all rounded-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Qué equipos despachan?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Despachamos remolques Dry Van, Flatbed y Power-Only. Si tienes equipo especializado, contáctanos para discutir tus necesidades.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 hover:border-green-400 transition-all rounded-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Necesito mi propia autoridad?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sí, debes tener autoridad MC activa en buen estado para usar nuestros servicios de despacho.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 hover:border-green-400 transition-all rounded-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Cómo me pagan?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Soportamos varios métodos de pago incluyendo transferencia bancaria directa, Zelle y PayPal para tu conveniencia.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 hover:border-green-400 transition-all rounded-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Qué significa Sin Despacho Forzado?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Negociamos las mejores tarifas y te presentamos opciones de carga, pero tú siempre tienes la última palabra. Nunca te forzamos a tomar una carga que no quieres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-500 rounded-lg p-3">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold">Silveyra Dispatch</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Despacho Profesional de Camiones para Dueños Operadores. Tú conduces las millas, nosotros manejamos el resto.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Enlaces Rápidos</h4>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-green-400 transition-colors">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('pricing')} className="block text-gray-400 hover:text-green-400 transition-colors">
                  Precios
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-green-400 transition-colors">
                  Nosotros
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Contacto</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center"><Phone className="w-4 h-4 mr-2 text-green-500"/> (469) 246-5756</p>
                <p>Email: Connect@SilveyraDispatch.com</p>
                <p className="text-green-400 font-semibold mt-4">Disponible 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Silveyra Dispatch Services. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}