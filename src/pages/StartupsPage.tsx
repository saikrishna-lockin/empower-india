import React, { useState } from 'react';
import { Search, MapPin, CheckCircle, Target } from 'lucide-react';
import { mockStartups } from '../mockData';

const StartupsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStartups = mockStartups.filter(startup => {
    return startup.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           startup.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy-900 mb-2">Startup Discovery</h1>
          <p className="text-gray-600">Discover innovative startups ready to solve public sector challenges.</p>
        </div>

        {/* Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search by startup name or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Startup Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.length > 0 ? (
            filteredStartups.map(startup => (
              <div key={startup.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                      {startup.name}
                      {startup.isVerified && <span title="Verified Eligible"><CheckCircle className="h-4 w-4 text-blue-500" /></span>}
                    </h3>
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                      {startup.industry}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{startup.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{startup.description}</p>
                  
                  <div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      <Target className="h-3 w-3" /> Solution Areas
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {startup.solutionAreas.map(area => (
                        <span key={area} className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-100">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-500 text-lg">No startups found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartupsPage;
