import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Search, CheckCircle, TrendingUp, Building2, Users, FileText, Zap } from 'lucide-react';
import { mockChallenges } from '../mockData';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Empowering Government. <br className="hidden md:block" />
            <span className="text-blue-400">Accelerating Innovation.</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-navy-200 max-w-3xl mx-auto mb-10">
            Empower India helps government departments discover, evaluate, pilot, and scale innovative solutions from eligible startups.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/challenges" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors flex items-center justify-center gap-2">
              Explore Challenges <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/startups" className="bg-transparent border border-navy-400 hover:border-white text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors flex items-center justify-center">
              I'm a Startup
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Statistics */}
      <section className="py-12 bg-white border-b border-gray-200 relative -mt-16 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-xl shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Demo Platform Statistics</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2"><Building2 className="h-6 w-6 text-blue-600" /></div>
              <p className="text-3xl font-bold text-navy-900">42</p>
              <p className="text-sm font-medium text-gray-500">Government Challenges</p>
            </div>
            <div>
              <div className="flex justify-center mb-2"><Users className="h-6 w-6 text-blue-600" /></div>
              <p className="text-3xl font-bold text-navy-900">1,204</p>
              <p className="text-sm font-medium text-gray-500">Startups Registered</p>
            </div>
            <div>
              <div className="flex justify-center mb-2"><FileText className="h-6 w-6 text-blue-600" /></div>
              <p className="text-3xl font-bold text-navy-900">315</p>
              <p className="text-sm font-medium text-gray-500">Solutions Evaluated</p>
            </div>
            <div>
              <div className="flex justify-center mb-2"><Zap className="h-6 w-6 text-blue-600" /></div>
              <p className="text-3xl font-bold text-navy-900">18</p>
              <p className="text-sm font-medium text-gray-500">Pilots Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A streamlined process connecting government problems with startup innovations.</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative z-10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2">Identify</h3>
              <p className="text-sm text-gray-600">Government departments define real-world problems.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative z-10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2">Discover</h3>
              <p className="text-sm text-gray-600">Eligible startups submit innovative solutions.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative z-10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2">Evaluate</h3>
              <p className="text-sm text-gray-600">Experts evaluate solutions using transparent criteria.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative z-10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2">Pilot</h3>
              <p className="text-sm text-gray-600">Selected solutions are tested through controlled pilots.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative z-10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-navy-900 mb-2">Scale</h3>
              <p className="text-sm text-gray-600">Successful solutions move toward procurement and scale.</p>
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
