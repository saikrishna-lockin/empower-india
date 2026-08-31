import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Search, CheckCircle, TrendingUp, Building2, Users, FileText, Zap, Rocket } from 'lucide-react';
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
      <section id="how-it-works" className="py-14 sm:py-16 md:py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mb-2">How It Works</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              A streamlined process connecting government challenges with startup innovation.
            </p>
          </div>

          {/* Desktop: Horizontal 4-Step Flow */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
            {/* Connecting Horizontal Line */}
            <div className="absolute top-[42px] left-16 right-16 h-0.5 bg-blue-200 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 bg-white p-5 lg:p-6 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-full bg-blue-50 border-2 border-blue-200 text-blue-600 font-bold text-sm flex items-center justify-center mb-3.5 shadow-xs">
                01
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1.5">Identify</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Government departments post real-world challenges.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 bg-white p-5 lg:p-6 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-full bg-blue-50 border-2 border-blue-200 text-blue-600 font-bold text-sm flex items-center justify-center mb-3.5 shadow-xs">
                02
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1.5">Discover</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Eligible startups submit innovative solutions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 bg-white p-5 lg:p-6 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-full bg-blue-50 border-2 border-blue-200 text-blue-600 font-bold text-sm flex items-center justify-center mb-3.5 shadow-xs">
                03
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1.5">Evaluate</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Solutions are reviewed, compared, and shortlisted.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 bg-white p-5 lg:p-6 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-full bg-blue-50 border-2 border-blue-200 text-blue-600 font-bold text-sm flex items-center justify-center mb-3.5 shadow-xs">
                04
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1.5">Pilot</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Selected solutions move toward implementation.
              </p>
            </div>
          </div>

          {/* Mobile / Tablet: Clean Vertical Timeline */}
          <div className="md:hidden relative max-w-md mx-auto">
            {/* Connecting Vertical Line */}
            <div className="absolute top-6 bottom-6 left-[36px] w-0.5 bg-blue-200 z-0"></div>

            <div className="space-y-3.5">
              {/* Step 1 */}
              <div className="relative z-10 flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 border-2 border-blue-200 text-blue-600 font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  01
                </div>
                <div className="pt-0.5">
                  <h3 className="text-base font-bold text-navy-900">Identify</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-relaxed">
                    Government departments post real-world challenges.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 border-2 border-blue-200 text-blue-600 font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  02
                </div>
                <div className="pt-0.5">
                  <h3 className="text-base font-bold text-navy-900">Discover</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-relaxed">
                    Eligible startups submit innovative solutions.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 border-2 border-blue-200 text-blue-600 font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  03
                </div>
                <div className="pt-0.5">
                  <h3 className="text-base font-bold text-navy-900">Evaluate</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-relaxed">
                    Solutions are reviewed, compared, and shortlisted.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 border-2 border-blue-200 text-blue-600 font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  04
                </div>
                <div className="pt-0.5">
                  <h3 className="text-base font-bold text-navy-900">Pilot</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-relaxed">
                    Selected solutions move toward implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-2">Featured Challenges</h2>
              <p className="text-gray-600">Discover active problems seeking innovative solutions.</p>
            </div>
            <Link to="/challenges" className="hidden sm:flex text-blue-600 hover:text-blue-700 font-medium items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockChallenges.slice(0, 3).map(challenge => (
              <div key={challenge.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                      {challenge.category}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${challenge.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {challenge.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{challenge.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{challenge.department} • {challenge.location}</p>
                  <p className="text-gray-600 text-sm line-clamp-3">{challenge.description}</p>
                </div>
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                  <Link to={`/login`} className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                    View Challenge Details <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/challenges" className="inline-flex text-blue-600 hover:text-blue-700 font-medium items-center gap-1">
              View All Challenges <ArrowRight className="w-4 h-4" />
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
