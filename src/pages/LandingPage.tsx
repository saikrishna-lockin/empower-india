import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Search, CheckCircle, TrendingUp, Building2, Users, FileText, Zap, Rocket, MapPin } from 'lucide-react';
import { mockChallenges } from '../mockData';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-24">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3 sm:mb-4">
            EMPOWER INDIA
          </p>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-3 sm:mb-4">
            <span className="block sm:inline">Empowering </span>
            <span className="block sm:inline">Government. </span>
            <br className="hidden sm:block" />
            <span className="text-blue-400 block sm:inline">Accelerating </span>
            <span className="text-blue-400 block sm:inline">Innovation.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-navy-200 max-w-2xl mx-auto mb-6 sm:mb-7 leading-relaxed">
            Connecting government challenges with innovative startup solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/challenges"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-md font-semibold text-base sm:text-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Explore Challenges</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              to="/startups"
              className="w-full sm:w-auto bg-transparent border border-navy-400 hover:border-white text-white px-6 sm:px-8 py-3 rounded-md font-semibold text-base sm:text-lg transition-colors flex items-center justify-center"
            >
              I'm a Startup
            </Link>
          </div>
        </div>
      </section>

      {/* Platform at a Glance */}
      <section className="py-7 sm:py-9 bg-white border border-gray-200/80 relative -mt-12 sm:-mt-16 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-xl shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-7">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">Platform at a Glance</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-xl mx-auto">
              One streamlined platform connecting government challenges with startup innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Card 1 */}
            <div className="bg-gray-50/70 border border-gray-100 rounded-lg p-5 flex flex-col items-center text-center hover:border-blue-100 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1">Government Challenges</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Publish and manage real-world problems.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50/70 border border-gray-100 rounded-lg p-5 flex flex-col items-center text-center hover:border-blue-100 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Rocket className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1">Startup Solutions</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Discover relevant and innovative solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50/70 border border-gray-100 rounded-lg p-5 flex flex-col items-center text-center hover:border-blue-100 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1">Evaluation</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Compare, evaluate, and shortlist proposals.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50/70 border border-gray-100 rounded-lg p-5 flex flex-col items-center text-center hover:border-blue-100 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 stroke-[1.75]" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1">Pilot & Scale</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Move selected solutions toward implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 sm:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mb-2">How It Works</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              A streamlined process connecting government problems with startup innovations.
            </p>
          </div>

          {/* Desktop Flow: 01 Identify → 02 Discover → 03 Evaluate → 04 Pilot & Scale */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-5 relative">
            {/* Step 1 */}
            <div className="relative bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">01</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-1">Identify</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Government departments define real-world problems.
                </p>
              </div>
              <ArrowRight className="hidden md:block absolute -right-2.5 lg:-right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300 z-10" />
            </div>

            {/* Step 2 */}
            <div className="relative bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">02</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Search className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-1">Discover</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Eligible startups submit innovative solutions.
                </p>
              </div>
              <ArrowRight className="hidden md:block absolute -right-2.5 lg:-right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300 z-10" />
            </div>

            {/* Step 3 */}
            <div className="relative bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">03</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-1">Evaluate</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Solutions are reviewed, compared, and shortlisted.
                </p>
              </div>
              <ArrowRight className="hidden md:block absolute -right-2.5 lg:-right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300 z-10" />
            </div>

            {/* Step 4 */}
            <div className="relative bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">04</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Rocket className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-1">Pilot & Scale</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Selected solutions move toward implementation.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: Compact Vertical Flow with Connecting Line */}
          <div className="md:hidden relative max-w-md mx-auto">
            {/* Connecting Vertical Line */}
            <div className="absolute top-5 bottom-5 left-5 w-0.5 bg-blue-200 z-0"></div>

            <div className="space-y-3">
              {/* Step 1 */}
              <div className="relative z-10 flex items-center gap-3.5 bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 font-bold text-xs flex flex-col items-center justify-center shrink-0">
                  <Lightbulb className="w-3.5 h-3.5 mb-0.5" />
                  <span>01</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-900">Identify</h3>
                  <p className="text-xs text-gray-600 leading-snug">
                    Government departments define real-world problems.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex items-center gap-3.5 bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 font-bold text-xs flex flex-col items-center justify-center shrink-0">
                  <Search className="w-3.5 h-3.5 mb-0.5" />
                  <span>02</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-900">Discover</h3>
                  <p className="text-xs text-gray-600 leading-snug">
                    Eligible startups submit innovative solutions.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex items-center gap-3.5 bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 font-bold text-xs flex flex-col items-center justify-center shrink-0">
                  <FileText className="w-3.5 h-3.5 mb-0.5" />
                  <span>03</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-900">Evaluate</h3>
                  <p className="text-xs text-gray-600 leading-snug">
                    Solutions are reviewed, compared, and shortlisted.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 flex items-center gap-3.5 bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 font-bold text-xs flex flex-col items-center justify-center shrink-0">
                  <Rocket className="w-3.5 h-3.5 mb-0.5" />
                  <span>04</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-900">Pilot & Scale</h3>
                  <p className="text-xs text-gray-600 leading-snug">
                    Selected solutions move toward implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Challenges */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mb-2">Featured Challenges</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Explore real-world problems where innovative startup solutions can make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Challenge Card 1 */}
            <div className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                    Water Management
                  </span>
                  <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    Open for Solutions
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Smart Water Leakage Detection
                </h3>
                <div className="flex flex-col gap-1.5 text-xs text-gray-500 mb-3.5">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Chennai Metropolitan Water Supply</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Tamil Nadu</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Develop an affordable solution to detect and reduce water loss in municipal pipelines.
                </p>
              </div>
              <div className="pt-3.5 border-t border-gray-100">
                <Link to="/challenges" className="text-blue-600 hover:text-blue-800 text-sm font-semibold inline-flex items-center gap-1 transition-colors">
                  <span>View Challenge</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Challenge Card 2 */}
            <div className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                    Waste Management
                  </span>
                  <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    Open for Solutions
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Intelligent Waste Segregation
                </h3>
                <div className="flex flex-col gap-1.5 text-xs text-gray-500 mb-3.5">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Urban Local Body</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Tamil Nadu</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Improve source-level waste segregation using an efficient and scalable technology solution.
                </p>
              </div>
              <div className="pt-3.5 border-t border-gray-100">
                <Link to="/challenges" className="text-blue-600 hover:text-blue-800 text-sm font-semibold inline-flex items-center gap-1 transition-colors">
                  <span>View Challenge</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Challenge Card 3 */}
            <div className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                    Healthcare
                  </span>
                  <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    Open for Solutions
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Remote Public Health Monitoring
                </h3>
                <div className="flex flex-col gap-1.5 text-xs text-gray-500 mb-3.5">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Public Health Department</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>India</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Enable efficient monitoring of selected public-health indicators through an accessible digital solution.
                </p>
              </div>
              <div className="pt-3.5 border-t border-gray-100">
                <Link to="/challenges" className="text-blue-600 hover:text-blue-800 text-sm font-semibold inline-flex items-center gap-1 transition-colors">
                  <span>View Challenge</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section-level Button */}
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/challenges"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-navy-900/15 bg-white text-navy-900 font-semibold text-sm hover:bg-gray-50 hover:border-navy-900/30 transition-all shadow-xs"
            >
              <span>View All Challenges</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a problem worth solving?</h2>
          <p className="text-xl text-navy-200 mb-10">
            Government departments can publish innovation challenges and discover solutions from eligible startups.
          </p>
          <Link to="/login" className="inline-block bg-white text-navy-900 hover:bg-gray-100 px-8 py-3 rounded-md font-bold text-lg transition-colors">
            Publish a Challenge
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
