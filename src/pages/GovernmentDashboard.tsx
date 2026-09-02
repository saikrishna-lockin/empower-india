import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Target, 
  FileText, 
  FlaskConical, 
  ShoppingCart, 
  BarChart3, 
  Plus, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  X, 
  AlertCircle,
  Eye,
  Filter
} from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

interface GovChallenge {
  id: string;
  title: string;
  category: string;
  location: string;
  applicationsCount: number;
  status: 'Open' | 'Evaluation' | 'Pilot' | 'Procured';
  datePosted: string;
}

const initialChallenges: GovChallenge[] = [
  {
    id: 'gc-1',
    title: 'Smart Water Leakage Detection',
    category: 'Water Management',
    location: 'Tamil Nadu',
    applicationsCount: 14,
    status: 'Open',
    datePosted: 'Aug 18, 2026',
  },
  {
    id: 'gc-2',
    title: 'Intelligent Waste Segregation',
    category: 'Waste Management',
    location: 'Tamil Nadu',
    applicationsCount: 9,
    status: 'Evaluation',
    datePosted: 'Aug 12, 2026',
  },
  {
    id: 'gc-3',
    title: 'Remote Public Health Monitoring',
    category: 'Healthcare',
    location: 'All India',
    applicationsCount: 6,
    status: 'Pilot',
    datePosted: 'Jul 29, 2026',
  },
  {
    id: 'gc-4',
    title: 'AI Urban Traffic Flow Optimization',
    category: 'Smart Cities',
    location: 'Karnataka',
    applicationsCount: 19,
    status: 'Open',
    datePosted: 'Aug 24, 2026',
  },
];

const sidebarItems = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'challenges', name: 'My Challenges', icon: Target },
  { id: 'applications', name: 'Applications', icon: FileText },
  { id: 'pilots', name: 'Pilots', icon: FlaskConical },
  { id: 'procurement', name: 'Procurement', icon: ShoppingCart },
  { id: 'reports', name: 'Reports', icon: BarChart3 },
];

const GovernmentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [challenges, setChallenges] = useState<GovChallenge[]>(initialChallenges);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Water Management');
  const [newLocation, setNewLocation] = useState('Tamil Nadu');
  const [newDescription, setNewDescription] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const handleCreateChallenge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newChallenge: GovChallenge = {
      id: `gc-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      location: newLocation,
      applicationsCount: 0,
      status: 'Open',
      datePosted: 'Just now',
    };

    setChallenges([newChallenge, ...challenges]);
    setNewTitle('');
    setNewDescription('');
    setIsModalOpen(false);
  };

  const filteredChallenges = challenges.filter(c => {
    if (statusFilter === 'All') return true;
    return c.status === statusFilter;
  });

  const getStatusBadge = (status: GovChallenge['status']) => {
    switch (status) {
      case 'Open':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Open
          </span>
        );
      case 'Evaluation':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
            <Clock className="w-3 h-3 text-amber-500" />
            Evaluation
          </span>
        );
      case 'Pilot':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            Pilot
          </span>
        );
      case 'Procured':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            <CheckCircle2 className="w-3 h-3 text-blue-500" />
            Procured
          </span>
        );
    }
  };

  return (
    <DashboardLayout
      currentRole="government"
      title="Government Dashboard"
      subtitle="Manage innovation challenges, evaluate solutions and track pilots."
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      
      {/* Top Banner Greeting */}
      <div className="bg-white rounded-xl border border-gray-200/80 p-5 sm:p-6 shadow-xs mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              Ministry of Jal Shakti / ULB Track
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
            Good morning, Government Official
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            4 new startup proposals received today for your departmental challenges.
          </p>
        </div>

        <div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>+ Create Challenge</span>
          </button>
        </div>
      </div>

      {/* 4 Dashboard Metrics (DEMO DATA) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
        
        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Active Challenges</span>
            <Target className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">{challenges.length + 8}</p>
          <span className="text-[10px] text-gray-400 font-medium">DEMO DATA · Real-time</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Solutions Received</span>
            <FileText className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">48</p>
          <span className="text-[10px] text-emerald-600 font-medium">+12 this week</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Active Pilots</span>
            <FlaskConical className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">5</p>
          <span className="text-[10px] text-purple-600 font-medium">In field testing</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Pending Evaluations</span>
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">8</p>
          <span className="text-[10px] text-amber-600 font-medium">Awaiting expert score</span>
        </div>

      </div>

      {/* Quick Actions Grid */}
      <div className="mb-8">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
          Operational Quick Actions
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="p-3.5 bg-white rounded-xl border border-gray-200/80 hover:border-blue-300 hover:bg-blue-50/30 text-left transition-all shadow-xs flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Plus className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-navy-900">Create Challenge</p>
              <p className="text-[11px] text-gray-500">Post problem</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('applications')}
            className="p-3.5 bg-white rounded-xl border border-gray-200/80 hover:border-blue-300 hover:bg-blue-50/30 text-left transition-all shadow-xs flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-navy-900">Review Applications</p>
              <p className="text-[11px] text-gray-500">48 proposals</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('pilots')}
            className="p-3.5 bg-white rounded-xl border border-gray-200/80 hover:border-blue-300 hover:bg-blue-50/30 text-left transition-all shadow-xs flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <FlaskConical className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-navy-900">Manage Pilots</p>
              <p className="text-[11px] text-gray-500">5 active</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('reports')}
            className="p-3.5 bg-white rounded-xl border border-gray-200/80 hover:border-blue-300 hover:bg-blue-50/30 text-left transition-all shadow-xs flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-navy-900">View Reports</p>
              <p className="text-[11px] text-gray-500">KPI analytics</p>
            </div>
          </button>
        </div>
      </div>

      {/* RECENT CHALLENGES SECTION */}
      <div className="bg-white rounded-xl border border-gray-200/80 shadow-xs overflow-hidden mb-8">
        
        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-navy-900">
              Recent Challenges & Solution Activity
            </h3>
            <p className="text-xs text-gray-500">
              Active departmental innovation challenges under your administration.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {['All', 'Open', 'Evaluation', 'Pilot'].map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  statusFilter === st
                    ? 'bg-navy-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Table / List */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-gray-50/80 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3">Challenge</th>
                <th className="px-4 py-3">Category / Region</th>
                <th className="px-4 py-3 text-center">Applications</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredChallenges.map((ch) => (
                <tr key={ch.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="font-bold text-navy-900">{ch.title}</p>
                    <span className="text-[11px] text-gray-400">Posted {ch.datePosted}</span>
                  </td>
                  <td className="px-4 py-3.5 text-gray-600">
                    <span className="block font-medium">{ch.category}</span>
                    <span className="text-xs text-gray-400">{ch.location}</span>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs">
                      {ch.applicationsCount} Solutions
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    {getStatusBadge(ch.status)}
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <Link
                      to={`/challenges/c1`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>Manage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* CREATE CHALLENGE MODAL (INTERACTIVE DEMO) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-xs animate-fade-in-scale">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-5">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-navy-900">Publish New Innovation Challenge</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateChallenge} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Challenge Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Automated Pipeline Desiltation & Flow Monitoring"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Category / Sector
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  >
                    <option value="Water Management">Water Management</option>
                    <option value="Waste Management">Waste Management</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Smart Cities">Smart Cities</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Public Safety">Public Safety</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Location / State
                  </label>
                  <select
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  >
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="All India">All India</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Problem Description & Requirements
                </label>
                <textarea
                  rows={3}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Outline the operational problem, field constraints, and expected outcome..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                ></textarea>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-xs text-blue-800">
                <strong>Demo Action:</strong> Submitting will instantly add this challenge to your active departmental dashboard list.
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
                >
                  Publish Challenge
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </DashboardLayout>
  );
};

export default GovernmentDashboard;
