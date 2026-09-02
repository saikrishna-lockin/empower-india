import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Rocket, 
  Target, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Activity, 
  Search, 
  Filter, 
  Eye, 
  AlertTriangle,
  Building2
} from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

interface VerificationStartup {
  id: string;
  name: string;
  category: string;
  dpiitNo: string;
  submittedDate: string;
  status: 'Pending Verification' | 'Verified' | 'Rejected';
}

const initialQueue: VerificationStartup[] = [
  {
    id: 'vq-1',
    name: 'AquaSmart Systems Pvt Ltd',
    category: 'Water Management & IoT',
    dpiitNo: 'DIPP98234',
    submittedDate: 'Aug 28, 2026',
    status: 'Pending Verification',
  },
  {
    id: 'vq-2',
    name: 'UrbanFlow AI Labs',
    category: 'Smart Mobility',
    dpiitNo: 'DIPP76129',
    submittedDate: 'Aug 27, 2026',
    status: 'Pending Verification',
  },
  {
    id: 'vq-3',
    name: 'AgriSense Drone Tech',
    category: 'Agriculture & AI',
    dpiitNo: 'DIPP88102',
    submittedDate: 'Aug 25, 2026',
    status: 'Verified',
  },
  {
    id: 'vq-4',
    name: 'EcoSort Robotics',
    category: 'Waste Management',
    dpiitNo: 'DIPP65431',
    submittedDate: 'Aug 22, 2026',
    status: 'Pending Verification',
  },
  {
    id: 'vq-5',
    name: 'BioHeal Diagnostics',
    category: 'Public Healthcare',
    dpiitNo: 'DIPP54210',
    submittedDate: 'Aug 19, 2026',
    status: 'Rejected',
  },
];

const platformActivities = [
  {
    id: 'act-1',
    title: 'Startup solution submitted',
    desc: 'AquaSmart Systems submitted a proposal for Smart Water Leakage Detection (Chennai Water Board).',
    time: '12 mins ago',
    type: 'submission',
  },
  {
    id: 'act-2',
    title: 'New government challenge published',
    desc: 'Ministry of Road Transport published "AI-Driven Urban Traffic Flow Optimization".',
    time: '2 hours ago',
    type: 'challenge',
  },
  {
    id: 'act-3',
    title: 'Expert evaluation completed',
    desc: 'Dr. A. Verma submitted technical score for Rural Telemedicine Connectivity Suite.',
    time: '4 hours ago',
    type: 'evaluation',
  },
  {
    id: 'act-4',
    title: 'Pilot milestone verified',
    desc: 'Pune Municipal Corporation approved Phase-1 field milestone for EcoSort Robotics.',
    time: 'Yesterday',
    type: 'pilot',
  },
];

const sidebarItems = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'users', name: 'Users & Roles', icon: Users },
  { id: 'startups', name: 'Registered Startups', icon: Rocket },
  { id: 'challenges', name: 'All Challenges', icon: Target },
  { id: 'verification', name: 'Verification Queue', icon: ShieldCheck },
  { id: 'audit', name: 'Audit Log', icon: Activity },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [queue, setQueue] = useState<VerificationStartup[]>(initialQueue);
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedReview, setSelectedReview] = useState<VerificationStartup | null>(null);

  const handleVerify = (id: string) => {
    setQueue(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status: 'Verified' } : item
      )
    );
  };

  const handleReject = (id: string) => {
    setQueue(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status: 'Rejected' } : item
      )
    );
  };

  const pendingCount = queue.filter(q => q.status === 'Pending Verification').length;

  const filteredQueue = queue.filter(item => {
    if (filterStatus === 'All') return true;
    return item.status === filterStatus;
  });

  const getStatusBadge = (status: VerificationStartup['status']) => {
    switch (status) {
      case 'Pending Verification':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
            <Clock className="w-3 h-3 text-amber-500" />
            Pending Verification
          </span>
        );
      case 'Verified':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Verified
          </span>
        );
      case 'Rejected':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
            <XCircle className="w-3 h-3 text-red-500" />
            Rejected
          </span>
        );
    }
  };

  return (
    <DashboardLayout
      currentRole="admin"
      title="Platform Administration"
      subtitle="Platform oversight, verification, and audit controls."
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      
      {/* Top Banner Greeting */}
      <div className="bg-white rounded-xl border border-gray-200/80 p-5 sm:p-6 shadow-xs mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              National Governance Portal · System Root
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
            Platform Master Console
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Empower India Public Procurement Mechanism · All modules operational
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All Services Online</span>
          </span>
        </div>
      </div>

      {/* 4 Demo Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
        
        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Registered Startups</span>
            <Rocket className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">1,204</p>
          <span className="text-[10px] text-emerald-600 font-medium">+18 this month</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Pending Verification</span>
            <ShieldCheck className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">{pendingCount + 11}</p>
          <span className="text-[10px] text-amber-600 font-medium">In verification queue</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Active Challenges</span>
            <Target className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">42</p>
          <span className="text-[10px] text-gray-400 font-medium">Across 14 ministries</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">System Activity</span>
            <Activity className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">99.8%</p>
          <span className="text-[10px] text-purple-600 font-medium">Platform availability</span>
        </div>

      </div>

      {/* STARTUP VERIFICATION QUEUE SECTION */}
      <div className="bg-white rounded-xl border border-gray-200/80 shadow-xs overflow-hidden mb-8">
        
        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-navy-900">
              Startup Verification Queue
            </h3>
            <p className="text-xs text-gray-500">
              Verify startup DPIIT entity credentials before they submit bids for government pilots.
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            {['All', 'Pending Verification', 'Verified', 'Rejected'].map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilterStatus(status)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  filterStatus === status
                    ? 'bg-navy-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status === 'Pending Verification' ? 'Pending' : status}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-gray-50/80 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3">Startup Name</th>
                <th className="px-4 py-3">Category & DPIIT</th>
                <th className="px-4 py-3">Submitted</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredQueue.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="font-bold text-navy-900">{item.name}</p>
                    <span className="text-[11px] text-gray-400">Entity ID: {item.id}</span>
                  </td>
                  <td className="px-4 py-3.5 text-gray-600">
                    <span className="font-medium text-navy-900 block">{item.category}</span>
                    <span className="text-xs text-blue-600 font-semibold">{item.dpiitNo}</span>
                  </td>
                  <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">
                    {item.submittedDate}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {getStatusBadge(item.status)}
                  </td>
                  <td className="px-5 py-3.5 text-right whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setSelectedReview(item)}
                        className="px-2.5 py-1 text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 rounded transition-colors"
                      >
                        Review
                      </button>
                      
                      {item.status !== 'Verified' && (
                        <button
                          type="button"
                          onClick={() => handleVerify(item.id)}
                          className="px-2.5 py-1 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded transition-colors shadow-2xs"
                        >
                          Verify
                        </button>
                      )}

                      {item.status !== 'Rejected' && (
                        <button
                          type="button"
                          onClick={() => handleReject(item.id)}
                          className="px-2.5 py-1 text-xs font-semibold bg-red-50 hover:bg-red-100 text-red-700 rounded transition-colors"
                        >
                          Reject
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* RECENT PLATFORM ACTIVITY FEED */}
      <div className="bg-white rounded-xl border border-gray-200/80 p-5 sm:p-6 shadow-xs">
        <h3 className="text-base font-bold text-navy-900 mb-1">
          Recent Platform Audit & System Activity
        </h3>
        <p className="text-xs text-gray-500 mb-5">
          Real-time event stream across procurement, verification, and evaluation milestones.
        </p>

        <div className="space-y-4">
          {platformActivities.map((act) => (
            <div
              key={act.id}
              className="flex items-start gap-3.5 p-3.5 rounded-lg bg-gray-50/70 border border-gray-100"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <Activity className="w-4 h-4" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-navy-900">{act.title}</h4>
                  <span className="text-[11px] text-gray-400 whitespace-nowrap">{act.time}</span>
                </div>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                  {act.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEW STARTUP DETAILS MODAL */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-xs animate-fade-in-scale">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-gray-200 relative">
            <h3 className="text-lg font-bold text-navy-900 mb-1">
              Startup Verification Profile
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Government Innovation Procurement Compliance Check
            </p>

            <div className="space-y-3 p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs sm:text-sm mb-5">
              <div className="flex justify-between">
                <span className="text-gray-500">Legal Name</span>
                <span className="font-bold text-navy-900">{selectedReview.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Domain</span>
                <span className="font-semibold text-navy-900">{selectedReview.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">DPIIT Number</span>
                <span className="font-bold text-blue-600">{selectedReview.dpiitNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Current Status</span>
                <span>{getStatusBadge(selectedReview.status)}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setSelectedReview(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleVerify(selectedReview.id);
                  setSelectedReview(null);
                }}
                className="px-4 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-xs"
              >
                Verify Entity
              </button>
            </div>
          </div>
        </div>
      )}

    </DashboardLayout>
  );
};

export default AdminDashboard;
