import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  FileCheck2, 
  FlaskConical, 
  User, 
  ArrowRight, 
  Building2, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  XCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

interface ApplicationItem {
  id: string;
  challengeTitle: string;
  department: string;
  submittedDate: string;
  status: 'Under Screening' | 'Under Evaluation' | 'Pilot Selected' | 'Not Selected';
  nextStep: string;
}

const myApplicationsData: ApplicationItem[] = [
  {
    id: 'app-1',
    challengeTitle: 'Smart Water Leakage Detection',
    department: 'Chennai Metropolitan Water Supply',
    submittedDate: 'Aug 28, 2026',
    status: 'Under Screening',
    nextStep: 'Eligibility Document Verification',
  },
  {
    id: 'app-2',
    challengeTitle: 'AI-Driven Urban Traffic Flow Optimization',
    department: 'Directorate of Urban Land Transport',
    submittedDate: 'Aug 20, 2026',
    status: 'Under Evaluation',
    nextStep: 'Expert Scoring & Technical Review',
  },
  {
    id: 'app-3',
    challengeTitle: 'Smart Municipal Drainage & Flood Detection',
    department: 'Municipal Corporation',
    submittedDate: 'Aug 10, 2026',
    status: 'Pilot Selected',
    nextStep: 'Field Deployment & Sensor Mounting Permit',
  },
  {
    id: 'app-4',
    challengeTitle: 'Intelligent Waste Segregation System',
    department: 'Urban Local Body',
    submittedDate: 'Jul 15, 2026',
    status: 'Not Selected',
    nextStep: 'Evaluation Feedback Available in Portal',
  },
];

const featuredOpportunities = [
  {
    id: 'c1',
    title: 'Smart Water Leakage Detection',
    department: 'Chennai Metropolitan Water Supply',
    category: 'Water Management',
    location: 'Tamil Nadu',
    status: 'Open for Solutions',
  },
  {
    id: 'c4',
    title: 'AI-Driven Urban Traffic Flow Optimization',
    department: 'Directorate of Urban Land Transport',
    category: 'Smart Cities',
    location: 'Karnataka',
    status: 'Open for Solutions',
  },
  {
    id: 'c6',
    title: 'Emergency Response & Incident Dispatch Platform',
    department: 'State Disaster Management Authority',
    category: 'Public Safety',
    location: 'Delhi',
    status: 'Open for Solutions',
  },
];

const sidebarItems = [
  { id: 'overview', name: 'Overview', icon: LayoutDashboard },
  { id: 'discover', name: 'Discover Challenges', icon: Search },
  { id: 'applications', name: 'My Applications', icon: FileCheck2 },
  { id: 'pilots', name: 'My Pilots', icon: FlaskConical },
  { id: 'profile', name: 'Profile & DPIIT', icon: User },
];

const StartupDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusBadge = (status: ApplicationItem['status']) => {
    switch (status) {
      case 'Under Screening':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
            <Clock className="w-3 h-3 text-amber-500" />
            Under Screening
          </span>
        );
      case 'Under Evaluation':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Under Evaluation
          </span>
        );
      case 'Pilot Selected':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Pilot Selected
          </span>
        );
      case 'Not Selected':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
            <XCircle className="w-3 h-3 text-gray-400" />
            Not Selected
          </span>
        );
    }
  };

  return (
    <DashboardLayout
      currentRole="startup"
      title="Startup Dashboard"
      subtitle="Discover opportunities and track your solutions."
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      
      {/* Top Banner Greeting */}
      <div className="bg-white rounded-xl border border-gray-200/80 p-5 sm:p-6 shadow-xs mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              DPIIT Verified: DIPP98234
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
            Welcome back, Startup
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            AquaSmart Systems Pvt Ltd · Water & Cleantech Innovator
          </p>
        </div>

        <div>
          <Link
            to="/challenges"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            <Search className="w-4 h-4" />
            <span>Explore Challenges →</span>
          </Link>
        </div>
      </div>

      {/* 4 Demo Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
        
        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Open Opportunities</span>
            <Search className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">24</p>
          <span className="text-[10px] text-emerald-600 font-medium">+3 new this week</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Applications Submitted</span>
            <FileCheck2 className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">6</p>
          <span className="text-[10px] text-gray-400 font-medium">All active tracks</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Under Evaluation</span>
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">3</p>
          <span className="text-[10px] text-amber-600 font-medium">Expert review phase</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Pilots</span>
            <FlaskConical className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">2</p>
          <span className="text-[10px] text-purple-600 font-medium">1 in field testing</span>
        </div>

      </div>

      {/* MY APPLICATIONS SECTION */}
      <div className="bg-white rounded-xl border border-gray-200/80 shadow-xs overflow-hidden mb-8">
        
        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-navy-900">
              My Submitted Solution Proposals
            </h3>
            <p className="text-xs text-gray-500">
              Track progress from eligibility screening to pilot selection and procurement.
            </p>
          </div>

          <Link
            to="/challenges"
            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
          >
            <span>Browse Active Calls</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-gray-50/80 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3">Challenge & Department</th>
                <th className="px-4 py-3">Submitted</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-5 py-3">Next Step</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {myApplicationsData.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="font-bold text-navy-900">{app.challengeTitle}</p>
                    <span className="text-xs text-gray-500">{app.department}</span>
                  </td>
                  <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">
                    {app.submittedDate}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {getStatusBadge(app.status)}
                  </td>
                  <td className="px-5 py-3.5 text-xs text-gray-600">
                    <span className="font-medium text-navy-900 block">{app.nextStep}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* FEATURED OPPORTUNITIES SECTION */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-navy-900">
              Featured Opportunities for You
            </h3>
            <p className="text-xs text-gray-500">
              Government challenges matching your startup's technical domain.
            </p>
          </div>
          <Link
            to="/challenges"
            className="text-xs font-bold text-blue-600 hover:text-blue-800"
          >
            View All 24 Calls →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredOpportunities.map((opp) => (
            <div
              key={opp.id}
              className="bg-white rounded-xl border border-gray-200/80 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {opp.category}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {opp.status}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-navy-900 mb-2 leading-snug line-clamp-2">
                  {opp.title}
                </h4>

                <div className="space-y-1 text-xs text-gray-500 mb-4">
                  <p className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="line-clamp-1">{opp.department}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{opp.location}</span>
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <Link
                  to={`/challenges/${opp.id}`}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-blue-600 hover:text-blue-800"
                >
                  <span>View Opportunity</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </DashboardLayout>
  );
};

export default StartupDashboard;
