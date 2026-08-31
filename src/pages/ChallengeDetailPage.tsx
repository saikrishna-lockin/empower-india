import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  Sparkles, 
  FileCheck2 
} from 'lucide-react';
import { mockChallenges } from '../mockData';

const ChallengeDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Find the challenge by ID or fallback to the first challenge
  const challenge = mockChallenges.find((c) => c.id === id) || mockChallenges[0];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Open for Solutions':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Open for Solutions
          </span>
        );
      case 'Under Evaluation':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            Under Evaluation
          </span>
        );
      case 'Pilot in Progress':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            Pilot in Progress
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white">
            {status}
          </span>
        );
    }
  };

  const evaluationCriteria = [
    { name: 'Public Impact', percentage: 25 },
    { name: 'Innovation', percentage: 20 },
    { name: 'Technical Feasibility', percentage: 20 },
    { name: 'Scalability', percentage: 20 },
    { name: 'Cost Effectiveness', percentage: 15 },
  ];

  const timelineSteps = [
    { number: '01', title: 'Challenge Submission', desc: 'Eligible startups submit proposals' },
    { number: '02', title: 'Expert Evaluation', desc: 'Department & technical review' },
    { number: '03', title: 'Pilot Selection', desc: 'Shortlisting & pilot agreement' },
    { number: '04', title: 'Controlled Pilot', desc: 'Real-world testing in field' },
    { number: '05', title: 'Outcome Validation', desc: 'Procurement & scaling decision' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      
      {/* Dark Navy Header & Breadcrumb Section */}
      <section className="bg-navy-900 text-white pt-8 pb-12 sm:pt-10 sm:pb-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 1. Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-navy-300 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-navy-500" />
            <Link to="/challenges" className="hover:text-white transition-colors">Challenges</Link>
            <ChevronRight className="w-3.5 h-3.5 text-navy-500" />
            <span className="text-blue-400 font-medium truncate max-w-xs sm:max-w-md">{challenge.title}</span>
          </nav>

          {/* 2. Challenge Header */}
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {getStatusBadge(challenge.status)}
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20">
                {challenge.category}
              </span>
              <span className="text-xs text-navy-400">·</span>
              <div className="flex items-center gap-1 text-xs text-navy-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{challenge.location}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 leading-tight">
              {challenge.title}
            </h1>

            <div className="flex items-center gap-2 text-sm sm:text-base text-blue-200 font-medium mb-4">
              <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{challenge.department}</span>
            </div>

            <p className="text-sm sm:text-base text-navy-200 leading-relaxed max-w-3xl">
              Develop an affordable and scalable solution to detect and reduce operational challenges in municipal networks.
            </p>
          </div>

        </div>
      </section>

      {/* Main Content Grid: 2 columns on desktop, 1 on mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {/* Main Column (2/3 width on desktop) */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            
            {/* 3. Problem Statement */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200/80 shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100">
                <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-blue-600" />
                  <span>Problem Statement</span>
                </h2>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                  Prototype Demo
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Municipal water and infrastructure networks can experience significant operational losses due to leakage, delayed anomaly detection, and lack of real-time monitoring. The department is seeking an innovative technology solution that can identify potential leakage points early and support efficient predictive maintenance.
              </p>
              
              <p className="text-xs sm:text-sm text-gray-500 bg-gray-50 p-3.5 rounded-lg border border-gray-100 leading-relaxed">
                <strong>Specific context:</strong> {challenge.description}
              </p>
            </div>

            {/* 4. Expected Outcomes */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200/80 shadow-xs">
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Expected Outcomes</span>
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  'Early detection of pipeline leakage & anomalies',
                  'Faster identification of critical problem areas',
                  'Substantial reduction in water & resource loss',
                  'Scalable monitoring approach for municipal scale',
                  'Actionable data dashboards for field engineering teams',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 bg-gray-50/70 p-3 rounded-lg border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Requirements */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200/80 shadow-xs">
              <h2 className="text-xl font-bold text-navy-900 mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                <span>Requirements</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { title: 'Scalable Architecture', desc: 'Must adapt easily to expanding municipal networks.' },
                  { title: 'Cost-Conscious Implementation', desc: 'Capital and operational expenditure must fit public budgets.' },
                  { title: 'Reliable Monitoring', desc: 'High accuracy with low false-positive alert rates.' },
                  { title: 'Easy Deployment', desc: 'Minimal disruption to existing pipeline infrastructure.' },
                  { title: 'Measurable Outcomes', desc: 'Quantifiable efficiency metrics for pilot validation.' },
                ].map((req, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg border border-gray-100 bg-gray-50/70">
                    <h4 className="text-xs font-bold text-navy-900 mb-1">{req.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{req.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Evaluation Criteria */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200/80 shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-100">
                <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span>Evaluation Criteria</span>
                </h2>
                <span className="text-xs text-gray-400">Total: 100%</span>
              </div>

              <div className="space-y-4">
                {evaluationCriteria.map((crit, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs sm:text-sm font-semibold text-navy-900 mb-1.5">
                      <span>{crit.name}</span>
                      <span className="text-blue-600">{crit.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all"
                        style={{ width: `${crit.percentage * 4}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 italic mt-6 pt-3 border-t border-gray-100">
                * Evaluation criteria shown for prototype demonstration.
              </p>
            </div>

            {/* 7. Pilot Timeline */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200/80 shadow-xs">
              <h2 className="text-xl font-bold text-navy-900 mb-2">Pilot Timeline</h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-6">
                Milestone progression for solution evaluation and controlled field pilots.
              </p>

              {/* Desktop Horizontal Flow */}
              <div className="hidden md:grid md:grid-cols-5 gap-3 relative">
                {timelineSteps.map((step, idx) => (
                  <div key={idx} className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 text-center flex flex-col items-center">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 mb-2">
                      {step.number}
                    </span>
                    <h4 className="text-xs font-bold text-navy-900 mb-1">{step.title}</h4>
                    <p className="text-[11px] text-gray-500 leading-snug">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Mobile Vertical Timeline */}
              <div className="md:hidden relative pl-6 border-l-2 border-blue-200 space-y-4">
                {timelineSteps.map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                    <h4 className="text-sm font-bold text-navy-900">{step.title}</h4>
                    <p className="text-xs text-gray-500">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 8. Right Sidebar / Sticky CTA Card (1/3 width on desktop) */}
          <div className="space-y-6 sticky top-20">
            
            {/* Primary Action Card */}
            <div className="bg-navy-900 text-white p-6 sm:p-7 rounded-2xl shadow-lg border border-navy-800">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Procurement Track</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Have a solution?</h3>
              <p className="text-xs sm:text-sm text-navy-200 mb-6 leading-relaxed">
                Submit your startup's solution for this challenge to enter the expert evaluation & fast-track pilot pool.
              </p>

              <Link
                to="/submit-solution"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm sm:text-base shadow-sm"
              >
                <span>Submit Your Solution</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <p className="text-[11px] text-navy-400 text-center mt-3">
                Eligibility screening applies · DPIIT & Verified Startups
              </p>
            </div>

            {/* Quick Challenge Facts Card */}
            <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs text-xs sm:text-sm">
              <h4 className="font-bold text-navy-900 mb-3 pb-2 border-b border-gray-100">
                Challenge Summary
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-500">Target Sector</span>
                  <span className="font-semibold text-navy-900">{challenge.category}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-500">Department</span>
                  <span className="font-semibold text-navy-900 text-right line-clamp-1 max-w-[160px]">{challenge.department}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-500">Location</span>
                  <span className="font-semibold text-navy-900">{challenge.location}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-500">Current Phase</span>
                  <span className="font-semibold text-navy-900">{challenge.status}</span>
                </div>
              </div>
            </div>

            {/* Return Link */}
            <div className="text-center">
              <Link to="/challenges" className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1">
                ← Back to All Challenges
              </Link>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ChallengeDetailPage;
