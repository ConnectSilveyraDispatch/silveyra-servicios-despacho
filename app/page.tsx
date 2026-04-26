"use client"

import React from 'react'
import { Phone, Mail, Menu, Truck, DollarSign, Clock, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SilveyraDispatchServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white border-b-4 border-blue-600 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Truck className="w-10 h-10 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-blue-600">SILVEYRA</h1>
                <p className="text-sm text-gray-600">Dispatch Services</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors uppercase">Home</a>
              <a href="#register" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors uppercase">Register</a>
              <a href="#faq" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors uppercase">FAQ</a>
              <a href="#about" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors uppercase">About Us</a>
              <a href="#contact" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors uppercase">Contact</a>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:block text-right">
              <p className="text-sm font-bold text-blue-600">Silveyra Dispatch</p>
              <p className="text-xs text-gray-600">Truck Dispatch Service</p>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                Truck Dispatching Services
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our truck dispatchers work to get you loads, handle all the paperwork, while you drive and get paid. We focus on growing your business and maximizing your profits.
              </p>
              <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-center">
                  WE HELP GROW YOUR BUSINESS FOR ONLY <span className="text-3xl">5%</span> OF THE LOAD
                </p>
              </div>
            </div>

            {/* Right Column - Contact & CTA */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-blue-100">
              <Button className="w-full bg-black hover:bg-gray-800 text-white text-lg py-6 mb-6 rounded-lg">
                Start Now! →
              </Button>

              <div className="flex items-center justify-center space-x-3 mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <a href="tel:4075051159" className="text-2xl font-bold text-gray-900 hover:text-blue-600">
                  (407) 505-1159
                </a>
              </div>
              <p className="text-center text-gray-600 italic mb-6">
                Any questions? Call us!
              </p>

              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <p>Dispatch Service for Owner Operators</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <p>Must Have a Dry Van, Reefer, Flatbed or Power-Only Trailer</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <p>Must Have an Active Authority in Good Standing</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <p>Must Have a Bank Account, Zelle or PayPal for Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <DollarSign className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Competitive Rates
                </h3>
                <p className="text-gray-600">
                  Only 5% commission on loads. We work hard to maximize your earnings and keep more money in your pocket.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Clock className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  Round-the-clock dispatch support to keep you moving. We're always available when you need us on the road.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Reliable Service
                </h3>
                <p className="text-gray-600">
                  Professional dispatchers dedicated to finding you the best loads and handling all paperwork efficiently.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">About Silveyra Dispatch Services</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Silveyra Dispatch Services, we understand the challenges owner-operators face in the trucking industry. Our mission is to help you focus on what you do best - driving - while we handle the rest.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With years of experience in truck dispatching, we provide personalized service to each client, ensuring you get the best loads at competitive rates. Our team works tirelessly to grow your business and maximize your profitability.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What is your commission rate?</h3>
                <p className="text-gray-700">We charge only 5% of the gross load amount. This competitive rate ensures you keep more of your hard-earned money.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What equipment do you dispatch?</h3>
                <p className="text-gray-700">We dispatch Dry Van, Reefer, Flatbed, and Power-Only trailers. If you have specialized equipment, contact us to discuss your needs.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need my own authority?</h3>
                <p className="text-gray-700">Yes, you must have an active MC authority in good standing to use our dispatch services.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How do I get paid?</h3>
                <p className="text-gray-700">We support various payment methods including direct bank transfer, Zelle, and PayPal for your convenience.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today and let's grow your trucking business together!</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <a href="tel:4075051159" className="flex items-center space-x-3 text-2xl font-bold hover:text-blue-200 transition-colors">
                <Phone className="w-8 h-8" />
                <span>(407) 505-1159</span>
              </a>
              <a href="mailto:info@silveyradispatch.com" className="flex items-center space-x-3 text-xl hover:text-blue-200 transition-colors">
                <Mail className="w-6 h-6" />
                <span>info@silveyradispatch.com</span>
              </a>
            </div>

            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg font-bold">
              Register Now →
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Silveyra Dispatch Services. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Professional Truck Dispatching for Owner Operators</p>
        </div>
      </footer>
    </div>
  )
}