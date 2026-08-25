import React, { useState } from 'react';
import { Search, Filter, MapPin, Building } from 'lucide-react';
import { mockChallenges } from '../mockData';
import { Link } from 'react-router-dom';

const ChallengesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const categories = Array.from(new Set(mockChallenges.map(c => c.category)));

  const filteredChallenges = mockChallenges.filter(challenge => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          challenge.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? challenge.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy-900 mb-2">Government Innovation Challenges</h1>
          <p className="text-gray-600">Discover and solve problems faced by various government departments.</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search challenges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Challenge List */}
        <div className="space-y-6">
          {filteredChallenges.length > 0 ? (
            filteredChallenges.map(challenge => (
              <div key={challenge.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                        {challenge.category}
                      </span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-md ${challenge.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {challenge.status}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900 mb-3">{challenge.title}</h2>
                    <p className="text-gray-600 mb-4">{challenge.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span>{challenge.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{challenge.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-48 flex-shrink-0 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                    <Link to="/login" className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                      View Challenge
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-500 text-lg">No challenges found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;
