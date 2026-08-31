import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, CheckCircle2, ArrowLeft, Send } from 'lucide-react';

const SubmitSolutionPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 flex-wrap">
          <Link to="/" className="hover:text-navy-900 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to="/challenges" className="hover:text-navy-900 transition-colors">Challenges</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-blue-600 font-medium">Submit Solution</span>
        </nav>

        {/* Page Container */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 sm:p-10">
          
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              Startup Procurement Track
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-2">
            Submit Your Startup's Solution
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mb-8 leading-relaxed">
            Propose your technology solution for government evaluation and controlled pilot consideration.
          </p>

          {submitted ? (
            <div className="text-center py-10 px-4 bg-blue-50/50 rounded-xl border border-blue-100 animate-fade-in-scale">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">Proposal Registered (Demo Prototype)</h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-6">
                In the complete system, your technical proposal will be screened for eligibility and routed to department evaluators.
              </p>
              <Link
                to="/challenges"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Challenges</span>
              </Link>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                    Startup Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AquaSmart Systems Pvt Ltd"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                    DPIIT / Entity Registration No. *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DIPP123456"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  Solution Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. IoT Acoustic Pipeline Leakage Sensor Grid"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  Proposed Solution & Pilot Approach *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Summarize your technology, implementation plan, expected results, and estimated pilot deployment timeline..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                ></textarea>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-500 leading-relaxed">
                <strong>Prototype Notice:</strong> This submission form is part of the Empower India frontend demonstration. No live backend or database storage is active yet.
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-gray-100">
                <Link
                  to="/challenges"
                  className="text-xs sm:text-sm font-semibold text-gray-500 hover:text-navy-900 transition-colors"
                >
                  ← Cancel & Back
                </Link>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <span>Submit Solution Proposal</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};

export default SubmitSolutionPage;
