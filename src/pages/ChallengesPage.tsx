import React, { useState, useMemo } from 'react';
import { Search, MapPin, Building2, ArrowRight, RotateCcw, X, CheckCircle2, Clock } from 'lucide-react';
import { mockChallenges, type Challenge } from '../mockData';

const ChallengesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);

  // Extract unique filter options dynamically from mockChallenges
  const categories = useMemo(() => Array.from(new Set(mockChallenges.map(c => c.category))).sort(), []);
  const locations = useMemo(() => Array.from(new Set(mockChallenges.map(c => c.location))).sort(), []);
  const statuses = useMemo(() => Array.from(new Set(mockChallenges.map(c => c.status))).sort(), []);

  // Check if any filter is active
  const hasActiveFilters = Boolean(searchTerm || selectedCategory || selectedLocation || selectedStatus);

  // Filter challenges based on search input and dropdown filters
  const filteredChallenges = useMemo(() => {
    return mockChallenges.filter(challenge => {
      const searchLower = searchTerm.toLowerCase().trim();
      const matchesSearch = !searchLower || (
        challenge.title.toLowerCase().includes(searchLower) ||
        challenge.department.toLowerCase().includes(searchLower) ||
        challenge.category.toLowerCase().includes(searchLower) ||
        challenge.description.toLowerCase().includes(searchLower)
      );

      const matchesCategory = !selectedCategory || challenge.category === selectedCategory;
      const matchesLocation = !selectedLocation || challenge.location === selectedLocation;
      const matchesStatus = !selectedStatus || challenge.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesLocation && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedLocation, selectedStatus]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLocation('');
    setSelectedStatus('');
  };

  const getStatusBadge = (status: Challenge['status']) => {
    switch (status) {
      case 'Open for Solutions':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Open for Solutions
          </span>
        );
      case 'Under Evaluation':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
            <Clock className="w-3 h-3 text-amber-500" />
            Under Evaluation
          </span>
        );
      case 'Pilot in Progress':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            Pilot in Progress
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase mb-2">
            EMPOWER INDIA
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            Government Challenges
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
            Discover real-world problems where innovative startup solutions can create measurable impact.
          </p>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 shadow-xs mb-8">
          
          {/* Prominent Search Bar */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search challenges by problem, department or solution area..."
              className="block w-full pl-10 pr-10 py-2.5 text-sm sm:text-base border border-gray-200 rounded-lg leading-5 bg-gray-50/50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filters Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-3 border-t border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-grow">
              
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full pl-3 pr-8 py-2 text-xs sm:text-sm border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="block w-full pl-3 pr-8 py-2 text-xs sm:text-sm border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  <option value="">All Locations</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div className="relative">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="block w-full pl-3 pr-8 py-2 text-xs sm:text-sm border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  <option value="">All Statuses</option>
                  {statuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters Option */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Count Indicator */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm font-medium text-gray-500">
            Showing <span className="font-bold text-navy-900">{filteredChallenges.length}</span> {filteredChallenges.length === 1 ? 'challenge' : 'challenges'}
          </p>
          <span className="text-xs text-gray-400 italic">
            Prototype Demo Data
          </span>
        </div>

        {/* Challenges Grid: 3-col desktop, 2-col tablet, 1-col mobile */}
        {filteredChallenges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                      {challenge.category}
                    </span>
                    {getStatusBadge(challenge.status)}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-blue-600 transition-colors mb-2.5 leading-snug">
                    {challenge.title}
                  </h3>

                  {/* Department & Location */}
                  <div className="flex flex-col gap-1.5 text-xs text-gray-500 mb-3.5">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="line-clamp-1">{challenge.department}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{challenge.location}</span>
                    </div>
                  </div>

                  {/* Problem Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {challenge.description}
                  </p>
                </div>

                {/* View Challenge Button */}
                <div className="pt-3.5 border-t border-gray-100 mt-auto">
                  <button
                    type="button"
                    onClick={() => setActiveChallenge(challenge)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold inline-flex items-center gap-1 transition-colors w-full justify-between"
                  >
                    <span>View Challenge</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 bg-white rounded-xl border border-gray-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-900 mb-1">No challenges found</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto mb-6">
              We couldn't find any challenges matching your search or active filters.
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

      </div>

      {/* Challenge Detail Modal */}
      {activeChallenge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-xs animate-fade-in-scale">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                  {activeChallenge.category}
                </span>
                {getStatusBadge(activeChallenge.status)}
              </div>
              <button
                type="button"
                onClick={() => setActiveChallenge(null)}
                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-2xl font-bold text-navy-900 mb-3 leading-snug">
              {activeChallenge.title}
            </h2>

            {/* Department & Location Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Department</p>
                  <p className="font-semibold text-navy-900">{activeChallenge.department}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Location</p>
                  <p className="font-semibold text-navy-900">{activeChallenge.location}</p>
                </div>
              </div>
            </div>

            {/* Challenge Scope / Description */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Problem Statement</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {activeChallenge.description}
              </p>
            </div>

            {/* Evaluation & Pilot Details (Prototype Info) */}
            <div className="space-y-3 p-4 bg-blue-50/60 rounded-xl border border-blue-100 text-xs sm:text-sm text-navy-900 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Eligibility:</strong> Open to DPIIT-recognized startups & verified innovators.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Pilot Funding:</strong> Fast-track pilot procurement mechanism available upon evaluation.</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setActiveChallenge(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <a
                href="/login"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors text-center shadow-xs"
              >
                Apply as Startup →
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ChallengesPage;
