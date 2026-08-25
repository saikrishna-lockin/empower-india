import React from 'react';
import { Shield, ArrowDown, Building2, Lightbulb, Users, FlaskConical, ShoppingCart, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold text-navy-900 mb-4">About Empower India</h1>
          <p className="text-xl text-gray-600">
            A startup friendly public procurement mechanism that enables government departments to identify, pilot, procure, and scale innovative solutions from eligible startups.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">The Problem We Solve</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Government departments frequently face complex operational and societal challenges that require modern, innovative solutions. Meanwhile, India's thriving startup ecosystem is developing cutting-edge technologies that can solve these exact problems.
          </p>
          <p className="text-gray-600 leading-relaxed">
            However, traditional public procurement processes are often rigid, lengthy, and designed for established vendors, making it difficult for startups to participate. <strong>Empower India</strong> bridges this gap by creating a streamlined, transparent pathway from problem identification to solution procurement.
          </p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">The Innovation Journey</h2>
          <p className="text-gray-600">How solutions move from concept to nationwide impact.</p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-navy-900 text-white rounded-full flex items-center justify-center shadow-md mb-2">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-navy-900">Government Departments</h3>
            <p className="text-sm text-gray-500 text-center mt-1 mb-4">Identify and publish problem statements.</p>
            <ArrowDown className="w-6 h-6 text-blue-400 mb-4" />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center shadow-sm mb-2">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-navy-900">Innovation Challenges</h3>
            <p className="text-sm text-gray-500 text-center mt-1 mb-4">Problems broadcasted to the ecosystem.</p>
            <ArrowDown className="w-6 h-6 text-blue-400 mb-4" />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-navy-900 text-white rounded-full flex items-center justify-center shadow-md mb-2">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-navy-900">Startups</h3>
            <p className="text-sm text-gray-500 text-center mt-1 mb-4">Eligible startups submit proposals.</p>
            <ArrowDown className="w-6 h-6 text-blue-400 mb-4" />
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center shadow-sm mb-2">
              <FlaskConical className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-navy-900">Pilot</h3>
            <p className="text-sm text-gray-500 text-center mt-1 mb-4">Real-world testing and evaluation.</p>
            <ArrowDown className="w-6 h-6 text-blue-400 mb-4" />
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-navy-900 text-white rounded-full flex items-center justify-center shadow-md mb-2">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-navy-900">Procurement</h3>
            <p className="text-sm text-gray-500 text-center mt-1 mb-4">Streamlined purchasing of successful solutions.</p>
            <ArrowDown className="w-6 h-6 text-blue-400 mb-4" />
          </div>

          {/* Step 6 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg mb-2">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl text-navy-900">Scale</h3>
            <p className="text-sm text-gray-500 text-center mt-1">Nationwide deployment for maximum impact.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
